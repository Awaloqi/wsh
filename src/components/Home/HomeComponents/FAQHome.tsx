/* eslint-disable prettier/prettier */
import React, { JSXElementConstructor, useCallback } from 'react';
import styles from '../../../pages/HowItWorks/HowItWorks.module.scss';
import downArrow from '../../../assets/new-ui/how-it-works/downarrow.png';
import { SingleFAQ } from '../../../components/SingleFAQ';
import { ContactsNew } from 'components/ContactsNew';
import { BadgeContainerNew } from '../../../components/BadgeContainer/BageContainerNew';
import { AddressValues, GooglePlaces } from 'components/GooglePlaces';
import { useModal } from 'modals';
import { useAuth } from 'hooks';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { getZipCodes } from 'services/apiClient';

export const FAQHome = () => {
    const { setZipCode, setAddressLine1 } = useAuth();
    const { data: zipCodes } = useQuery('locations', getZipCodes);
    const history = useHistory();
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
    <section className="FAQ-section">
        <div className="container">
            
            <div className={styles.FAQ}>
                <h2 className='faq-title'>Wash & Fold FAQ</h2>
                <div className={styles.hideondesktop}>
                    <div style={{ height: '2px', width: '100%', backgroundColor: '#80808050' }}></div>
                    <div className={styles.downContainer}>
                        <img src={downArrow} alt="downArrow" />
                    </div>
                </div>
                <SingleFAQ
                question="How do I sending in my order [the first time]?"
                answer={
                    <p>
                    For your <b>first order</b>: use any bag you have. Be sure to attach a note [inside] with your account
                    detail [i.e. Name + Address + Phone #]. We will provide you with your own unique laundry bag and
                    essentials for your <b>next order</b>.
                    </p>
                }
                />
                <SingleFAQ
                question="What if I lose the bags provided by WashMix? OR if I have more clothes
                that can fit in one bag?"
                answer={
                    <p>
                    If you run out of the counter laundry bags provided by WashMix, you can use any bag to send in your
                    order. It&apos;s always a good practice to make sure the bag used can be tightened and shut to avoid
                    items falling out. <b>IF</b> you’re using any other bags than what we provide, be sure to attach a
                    note with your account detail [i.e. Name + Address + Phone #].
                    </p>
                }
                />
                <SingleFAQ
                question="Is it important to use my Cell Phone number when signing up?"
                answer={
                    <p>
                    <b>YES!</b> WashMix communicates with its customers via SMS/Text. It&apos;s important that you use a
                    cell phone number, which allows you to send and receive text messages.
                    <br />
                    <i>[Msg & data rates may apply by your cell phone carrier.]</i>
                    </p>
                }
                />
                <SingleFAQ
                question=" I live in a secure building, how do I give access to the WashMix team to access 
                my unit?"
                answer={
                    <p>
                    Many buildings have a system in place to allow vendors easy access to the building or your unit.{' '}
                    <b>For example, entry Code [i.e: #1234 + Enter]. IF</b> there are special instructions, be sure to
                    include them when registering for your account. Remember, you are <b>NOT</b> required to be present
                    for pickup or drop off.
                    </p>
                }
                />
            </div>
            <div className={styles.checkService}>
                <p style={{ fontSize: 'larger' }}>See if we service your area</p>
                <GooglePlaces onSubmit={handleSubmit} />
            </div>
            <ContactsNew />
            <BadgeContainerNew />
        </div>
    </section>
  );
};



