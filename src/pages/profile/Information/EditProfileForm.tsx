import React from 'react';
import { Field, FormRenderProps } from 'react-final-form';

import { required } from 'services/formValidator';
import { Button, Input } from 'ui';
import styles from './Information.module.scss';

export type EditProfileFormValues = {
  firstName: string;
  lastName: string;
};

export const EditProfileForm = ({ handleSubmit, submitting }: FormRenderProps<EditProfileFormValues>) => {
  const [isChanged, setIsChanged] = React.useState(false);

  return (
    <form onSubmit={handleSubmit} onChange={() => setIsChanged(true)}>
      <Field
        type="text"
        name="firstName"
        component={Input}
        validate={required}
        required
        placeholder="First Name"
        label="First Name"
      />

      <Field
        type="text"
        name="lastName"
        component={Input}
        validate={required}
        required
        placeholder="Last Name"
        label="Last Name"
      />
      {isChanged ? (
        <div className={styles.popup}>
          <span className={styles.popuptext} id="myPopup">
            Please click the update button to save your changes
          </span>
        </div>
      ) : null}
      <Button variant="primary" size="sm" className={styles.information__button} isLoading={submitting}>
        Update
      </Button>
    </form>
  );
};
