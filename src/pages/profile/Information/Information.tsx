import React, { useCallback, useMemo } from 'react';
import { Form } from 'react-final-form';
import { queryCache, useMutation, useQuery } from 'react-query';
// import { toast } from 'react-toastify';

import { H4 } from 'ui';
import { EditProfileForm, EditProfileFormValues } from './EditProfileForm';
import styles from './Information.module.scss';
import { useApi } from 'hooks';

export const Information = () => {
  const { getProfile, patchProfile } = useApi();
  const { data: profile } = useQuery('profile', getProfile);
  const [updateProfile] = useMutation(patchProfile, {
    onSuccess: (data) => queryCache.setQueryData('profile', data),
  });

  const initialValues = useMemo(
    () => ({
      firstName: profile?.firstName,
      lastName: profile?.lastName,
    }),
    [profile],
  );

  const handleSubmit = useCallback(
    async (values: EditProfileFormValues) => {
      await updateProfile(values);
      window.location.reload();
      // toast.success('Profile information updated successfully!');
    },
    [updateProfile],
  );

  return (
    <div className={styles.information}>
      <H4>Profile Information</H4>
      <Form<EditProfileFormValues> onSubmit={handleSubmit} component={EditProfileForm} initialValues={initialValues} />
    </div>
  );
};
