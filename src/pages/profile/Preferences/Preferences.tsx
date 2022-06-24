import React, { useCallback, useMemo } from 'react';
import { Form } from 'react-final-form';
import { toast } from 'react-toastify';
import { queryCache, useMutation, useQuery } from 'react-query';
import { ScheduleStatusEnum } from 'api';
import { H4 } from 'ui';
import { useApi } from 'hooks';
import { EditPreferencesForm, EditProfileFormValues } from './EditPreferencesForm';
import styles from './Preferences.module.scss';
import { deleteSchedule, getSchedules, patchSchedule, postSchedule } from 'services/apiClient';

export const Preferences = () => {
  const { getProfile, patchProfile } = useApi();
  const { data: profile } = useQuery('profile', getProfile);
  const { data: delivery } = useQuery('delivery', getSchedules);
  const [updateProfile] = useMutation(patchProfile, {
    onSuccess: (data) => queryCache.setQueryData('profile', data),
  });
  const [updateSchedule] = useMutation(patchSchedule);
  const [createSchedule] = useMutation(postSchedule);
  const [deleteCall] = useMutation(deleteSchedule);

  const initialValues = useMemo(
    () => ({
      starch: profile?.starch,
      noCrease: profile?.noCrease,
      fixTears: profile?.fixTears,
      recurringPickup: delivery && delivery[0] ? delivery[0].days : undefined,
      deleteRecurringSchedule: false,
    }),
    [profile, delivery],
  );

  const handleSubmit = useCallback(
    async (values: EditProfileFormValues) => {
      await updateProfile(values);
      toast.success('Preferences updated successfully!');
      if (values.deleteRecurringSchedule === false) {
        delivery && delivery[0] && delivery[0].id
          ? await updateSchedule({
              id: delivery[0].id.toString(),
              data: {
                days: values.recurringPickup,
                status: ScheduleStatusEnum.Active,
                address: profile?.mainAddress || 6,
              },
            })
          : await createSchedule({
              days: values.recurringPickup,
              status: ScheduleStatusEnum.Active,
              address: profile?.mainAddress || 6,
            });
        window.location.reload();
      }
      if (values.deleteRecurringSchedule === true && delivery && delivery[0] && delivery[0].id) {
        deleteCall(delivery[0].id.toString()).then(() => {
          window.location.reload();
        });
      }
    },
    [updateProfile, createSchedule, updateSchedule, profile, delivery, deleteCall],
  );

  return (
    <div>
      <div className={styles.preferences}>
        <H4>Preferences</H4>
        <Form<EditProfileFormValues>
          onSubmit={handleSubmit}
          component={EditPreferencesForm}
          initialValues={initialValues}
        />
      </div>
      <br />
      <div className="disclaimercard">
        <b style={{ color: '#2ec35f' }}>Disclaimer:</b>
        <br />
        When auto recurring pickup day is selected, a pickup request will be initiated for you automatically. You will
        receive automated SMS reminder on the day of the pickup.
      </div>
    </div>
  );
};
