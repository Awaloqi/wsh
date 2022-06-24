import React, { useCallback, useEffect, useRef, useState } from 'react';
import Geosuggest, { Suggest } from 'react-geosuggest';
import parseGooglePlace from 'parse-google-place';
import cn from 'classnames';
import { FieldRenderProps } from 'react-final-form';

import { useMaps } from 'hooks/useMaps';
import stylesMD from './InputMD.module.scss';
import stylesDefault from './Input.module.scss';
import { contacts } from '../../constants';

type Props = {
  label: string;
  placeholder?: string;
  className?: string;
  variant?: 'md';
  autofocus?: boolean;
  fieldState: {
    zipCode: FieldRenderProps<string>;
    addressLine1: FieldRenderProps<string>;
  };
};

const NBSP = '\u00A0';

export const InputGeo = ({ label, className, variant, fieldState, autofocus, placeholder = '' }: Props) => {
  const maps = useMaps();
  const names = Object.keys(fieldState) as ('addressLine1' | 'zipCode')[];
  const zipCode = fieldState[names[0]];
  const addressLine1 = fieldState[names[1]];
  const [value, setValue] = useState(addressLine1.meta.initial || '');
  const geoSuggestEl = useRef<Geosuggest>(null);

  const styles = variant === 'md' ? stylesMD : stylesDefault;

  useEffect(() => {
    if (!geoSuggestEl || !geoSuggestEl.current) {
      return;
    }
    const that = geoSuggestEl.current as any;
    if (!that.state.userInput) return;
    that.autocompleteService.getPlacePredictions(
      { input: that.state.userInput, sessionToken: that.sessionToken },
      () => {
        that.selectSuggest();
      },
    );
  }, [geoSuggestEl]);

  const handleSelect = useCallback(
    (place?: Suggest) => {
      if (!place) return;
      const parsedPlace = parseGooglePlace(place.gmaps);
      zipCode.input.onChange(parsedPlace.zipCode);
      addressLine1.input.onChange(place.label);
    },
    [zipCode, addressLine1],
  );

  const handleChange = useCallback(
    (value: string) => {
      setValue(value);
      if (value == null || value === '') {
        zipCode.input.onChange('');
        addressLine1.input.onChange('');
      }
    },
    [zipCode, addressLine1, setValue],
  );

  const isActiveOrNotEmpty = addressLine1.meta.active || value !== '';
  const error =
    zipCode.meta.error || zipCode.meta.submitError || addressLine1.meta.error || addressLine1.meta.submitError;
  const isError = error && (addressLine1.meta.touched || zipCode.meta.touched);

  return (
    <div className={cn(className, styles.input, { [styles.active]: isActiveOrNotEmpty })}>
      <label className={styles.input__label}>{label}</label>
      {maps ? (
        <Geosuggest
          ref={geoSuggestEl}
          className={styles.input__dropdownBase}
          inputClassName={cn(styles.input__field, {
            [styles.input__field_error]: isError,
          })}
          onSuggestSelect={handleSelect}
          onFocus={addressLine1.input.onFocus}
          onBlur={addressLine1.input.onBlur}
          onChange={handleChange}
          country="us"
          autoActivateFirstSuggest
          types={['address']}
          placeholder={placeholder}
          /*@ts-ignore*/
          placeDetailFields={['address_components']}
          suggestsClassName={styles.input__dropdown}
          suggestsHiddenClassName={styles.input__dropdown_hidden}
          suggestItemClassName={styles.input__dropdown_item}
          suggestItemActiveClassName={styles.input__dropdown_item_active}
          initialValue={addressLine1.meta.initial}
          location={new maps.LatLng(contacts.coords)}
          radius={50000}
          autoFocus={autofocus}
          strictbounds
          googleMaps={maps}
        />
      ) : (
        <div className={styles.input__dropdownBase}>
          <input type="text" className={styles.input__field} placeholder={placeholder} />
        </div>
      )}
      <span className={styles.bar} />
      <div className={styles.input__errorMessage}>{isError ? error : NBSP}</div>
    </div>
  );
};
