import React from 'react';

import callIcon from './assets/call.svg';
import emailIcon from './assets/email.svg';
import smsIcon from './assets/sms.svg';
import styles from './Contacts.module.scss';
import { contacts } from '../../constants';
import { Button } from 'ui';
import { ArrowRight } from '../../icons';

export const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        <h2 className={styles.contacts_header}>Have more questions?</h2>
        <div className={styles.contacts_list}>
          <div className={styles.contacts_item}>
            <img className={styles.contacts_icon} src={callIcon} alt="phone icon" />
            <h3 className={styles.contacts_itemTitle}>Call us</h3>
            <a className={styles.contacts_link} href={contacts.phoneLink}>
              {contacts.phoneLiteral}
            </a>
            <br />
            <a className={styles.contacts_link} href={contacts.phoneLink}>
              {contacts.phoneNumber}
            </a>
          </div>
          <div className={styles.contacts_item}>
            <img className={styles.contacts_icon} src={emailIcon} alt="email icon" />
            <h3 className={styles.contacts_itemTitle}>Email us</h3>
            <a className={styles.contacts_link} href={contacts.emailInfoLink}>
              {contacts.emailInfo}
            </a>
          </div>
          <div className={styles.contacts_item}>
            <img className={styles.contacts_icon} src={smsIcon} alt="sms icon" />
            <h3 className={styles.contacts_itemTitle}>SMS</h3>
            <a className={styles.contacts_link} href={contacts.phoneLink}>
              {contacts.phoneNumber}
            </a>
            <div className={styles.contacts_info}>Text the word “Pickup”</div>
          </div>
        </div>
      </div>
      <div className={styles.ready}>
        <h2 className={styles.ready_title}>So, You Ready?</h2>
        <Button variant="accent" to="/registration">
          Request Pickup
          <ArrowRight />
        </Button>
      </div>
    </>
  );
};
