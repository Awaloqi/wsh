/* eslint-disable prettier/prettier */
import React, { ReactNode, useCallback } from 'react';
import Responsive from 'react-responsive';
import { useHistory, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';

import { AddressValues, GooglePlaces } from '../GooglePlaces';
import { ArrowRight } from 'icons';
import { Button } from 'ui';
import pickupTruckIcon from 'assets/pickup-truck.svg';
import { useModal } from 'modals';
import { useAuth } from 'hooks';
import { getZipCodes } from 'services/apiClient';
import { contacts } from '../../constants';
// import { BadgeContainer } from 'components/BadgeContainer';
// import { BadgeContainerHome } from 'components/BadgeContainerHome';
import { BadgeContainer } from 'components/BadgeContainer';
import { Prew } from './HomeComponents/Prew';
import { AfterPrev } from './HomeComponents/AfterPrev';
import { ProccesHome } from './HomeComponents/ProccesHome';
import { ProcessHomeSec } from './HomeComponents/ProcessHomeSec';
import { ProccesHomeTh } from './HomeComponents/ProcessHomeTh';
import { Process } from './HomeComponents/Process';
import { ProccesFooter } from './HomeComponents/ProcessFooter';
import { Img } from './HomeComponents/Img';
import { FAQHome } from './HomeComponents/FAQHome';

type ResponsiveProps = { children: ReactNode };


export const HomeNew = () => {
  const history = useHistory();
  const { setZipCode, setAddressLine1 } = useAuth();
  const { data: zipCodes } = useQuery('locations', getZipCodes);
  const { openModal } = useModal();

  const handleSubmit = useCallback(
    (values: AddressValues) => {
      setZipCode(values.zipCode);
      setAddressLine1(values.addressLine1);
      if (zipCodes && zipCodes.includes(values.zipCode)) {
        history.push('/registration');
      } else {
        openModal('NOTIFY', values);
      }
    },
    [history, openModal, setAddressLine1, setZipCode, zipCodes],
  );
  return (
    <>
        <Prew/>
        <AfterPrev/>
        <ProccesHome/>
        <ProcessHomeSec/>
        <ProccesHomeTh/>
        <Process/>
        <ProccesFooter/>
        <Img/>
        <FAQHome />
    </>
  );
};
