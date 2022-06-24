import React from 'react';

import emailIcon from './assets/email.svg';
import smsIcon from './assets/sms.svg';
import styles from './ContactsNew.module.scss';
import { contacts } from '../../constants';
import downArrow from '../../assets/new-ui/how-it-works/downarrow.png';

export const ContactsNew = () => {
  return (
    <>
      <div className={styles.contacts}>
        <h2 className={styles.contacts_header}>Have more questions?</h2>
        <div className={styles.hideondesktop}>
          <div style={{ height: '2px', width: '100%', backgroundColor: '#80808050' }}></div>
          <div className={styles.downContainer}>
            <img src={downArrow} alt="downArrow" />
          </div>
        </div>
        <div className={styles.contacts_list}>
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
    </>
  );
};
