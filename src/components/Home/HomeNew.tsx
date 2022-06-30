/* eslint-disable prettier/prettier */
import React, {PropsWithChildren, ReactNode, useEffect, useState} from 'react';
import { useAuth } from 'hooks';
import { Prew } from './HomeComponents/Prew';
import { AfterPrev } from './HomeComponents/AfterPrev';
import { ProccesHome } from './HomeComponents/ProccesHome';
import { ProcessHomeSec } from './HomeComponents/ProcessHomeSec';
import { ProccesHomeTh } from './HomeComponents/ProcessHomeTh';
import { Process } from './HomeComponents/Process';
import { ProccesFooter } from './HomeComponents/ProcessFooter';
import { Img } from './HomeComponents/Img';
import { FAQHome } from './HomeComponents/FAQHome';
import { ContactsNew } from 'components/ContactsNew/ContactsNew';
import { BadgeContainerNew } from 'components/BadgeContainer/BageContainerNew';
import { LightHeader } from "../Header/LightHeader";
import { Header } from "../Header";
type ResponsiveProps = { children: ReactNode };

export const HomeNew = ({flag}: React.PropsWithChildren<{flag:boolean}>) => {
  // const test = () => {
  //    console.log(window.scrollY);
  // }
  // window.addEventListener('scroll', test);
  const { user, logout } = useAuth();
  // const history = useHistory();
  // const { setZipCode, setAddressLine1 } = useAuth();
  // const { data: zipCodes } = useQuery('locations', getZipCodes);
  // const { openModal } = useModal();
  //
  // const handleSubmit = useCallback(
  //   (values: AddressValues) => {
  //     setZipCode(values.zipCode);
  //     setAddressLine1(values.addressLine1);
  //     if (zipCodes && zipCodes.includes(values.zipCode)) {
  //       history.push('/registration');
  //     } else {
  //       openModal('NOTIFY', values);
  //     }
  //   },
  //   [history, openModal, setAddressLine1, setZipCode, zipCodes],
  // );


    // useEffect(() => {
    //     if(flag) {
    //         setHeder(<LightHeader logout={logout} user={user} />);
    //     }
    //     setHeder(<Header logout={logout} user={user} />);
    // }, [flag])
    // useEffect(() => {
    //     const onScroll = () => setScroll(window.scrollY);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     if (scroll > 100) {
    //         setHeder(<Header logout={logout} user={user} />)
    //     } else{
    //         setHeder(<LightHeader logout={logout} user={user} />)
    //     }
    //
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);
    // console.log(scroll);

    return (
    <>
        <div>
            { flag ? <Header logout={logout} user={user} /> : <LightHeader logout={logout} user={user} />}
            <Prew/>
            <AfterPrev/>
            <ProccesHome/>
            <ProcessHomeSec/>
            <ProccesHomeTh/>
            <Process/>
            <ProccesFooter/>
            <Img/>
            <FAQHome />
            <ContactsNew />
            <BadgeContainerNew />
        </div>
    </>
  );
};
