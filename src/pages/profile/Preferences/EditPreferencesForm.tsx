import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { Body, Button, Checkbox, Radio, Switch, WeekDayPicker } from 'ui';
import { ProfileNoCreaseEnum, ProfileStarchEnum } from 'api';
import styles from './Preferences.module.scss';

export type EditProfileFormValues = {
  starch: ProfileStarchEnum;
  noCrease: ProfileNoCreaseEnum;
  fixTears: boolean;
  recurringPickup: number[];
  deleteRecurringSchedule: boolean;
};

export const EditPreferencesForm = ({ handleSubmit, submitting }: FormRenderProps<EditProfileFormValues>) => {
  const [isChanged, setIsChanged] = React.useState(false);
  return (
    <form onSubmit={handleSubmit} onChange={() => setIsChanged(true)}>
      <div className={styles.preferences__section}>
        <Body weight="medium" color="grey" className={styles.preferences__section_label}>
          Starch
        </Body>
        <div className={styles.preferences__checkboxes}>
          <Field name="starch" type="radio" component={Radio} label="None" variant="primary" value="none" />
          <Field name="starch" type="radio" component={Radio} label="Light" variant="primary" value="light" />
          <Field name="starch" type="radio" component={Radio} label="Medium" variant="primary" value="medium" />
          <Field name="starch" type="radio" component={Radio} label="Heavy" variant="primary" value="heavy" />
        </div>
      </div>
      <div className={styles.preferences__section}>
        <Body weight="medium" color="grey" className={styles.preferences__section_label}>
          No Crease (Pants)
        </Body>
        <div className={styles.preferences__checkboxes}>
          <Field name="noCrease" type="radio" component={Radio} label="All Pants" variant="primary" value="all_pants" />
          <Field
            name="noCrease"
            type="radio"
            component={Radio}
            label="Jeans Only"
            variant="primary"
            value="jeans_only"
          />
        </div>
      </div>
      <div className={styles.preferences__section}>
        <Field
          name="fixTears"
          type="checkbox"
          component={Switch}
          label="Fix Tears, Rips and undone hem if noticed to be charged to my account."
          variant="primary"
        />
      </div>
      <div className={styles.half}>
        <Field
          name="recurringPickup"
          component={WeekDayPicker}
          label="Weekly Recurring Pickup Day/Schedule"
          setChanged={(value: any) => setIsChanged(value)}
        />
      </div>

      <div className={styles.half}>
        <Field name="deleteRecurringSchedule" component={Checkbox} label="Delete schedule?" />
      </div>
      {isChanged ? (
        <div className={styles.popup}>
          <span className={styles.popuptext} id="myPopup">
            Please click the update button to save your changes
          </span>
        </div>
      ) : null}
      <Button variant="primary" size="sm" className={styles.preferences__button} isLoading={submitting}>
        Update
      </Button>
    </form>
  );
};
