import React, { useCallback } from 'react';
import cn from 'classnames';
import { Form } from 'react-final-form';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { H4 } from 'ui';
import { useApi } from 'hooks';
import { EditPhoneForm, EditPhoneFormValues } from './EditPhoneForm';
import styles from './Phones.module.scss';
import { normalizeAsyncError } from 'utils/object';
// import { addPhones, deletePhones } from 'services/apiClient';
// import { AddPhoneForm, AddPhoneFormValues } from './AddPhoneForm';

export const Phones = () => {
  const { getPhones, patchPhone } = useApi();
  const { data: phones, isLoading } = useQuery('phones', getPhones);
  const [updatePhone] = useMutation(patchPhone, { throwOnError: true });
  // const [addPhone] = useMutation(addPhones, { throwOnError: true });
  // const [deletePhone] = useMutation(deletePhones, { throwOnError: true });
  // const [show, setShow] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (values: EditPhoneFormValues) =>
      updatePhone({ ...values, number: `+1${values.number}` })
        .then(() => {
          toast.success('Phone updated successfully!');
        })
        .catch(normalizeAsyncError),
    [updatePhone],
  );

  // const handleAdd = useCallback(
  //   (values: EditPhoneFormValues) =>
  //     addPhone({ ...values, number: `+1${values.number}` })
  //       .then(() => {
  //         toast.success('Phone added successfully!');
  //         window.location.reload();
  //       })
  //       .catch(normalizeAsyncError),
  //   [addPhone],
  // );

  // const handleDelete = useCallback(
  //   (id: any) =>
  //     deletePhone(id)
  //       .then(() => {
  //         toast.success('Phone deleted successfully!');
  //         window.location.reload();
  //       })
  //       .catch((e) => {
  //         normalizeAsyncError(e);
  //         if (e.status === 400) toast.error('Can not delete main phone');
  //       }),
  //   [deletePhone],
  // );

  if (isLoading) {
    return (
      <div className={styles.phones}>
        <div className={cn(styles.phone, styles.phone___isLoading)}>
          <H4>Loading...</H4>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div className={styles.phones}>
        <H4>Phones</H4>

        <div className={styles.phone}>
          {phones?.map((phone) => (
            <div key={phone.id}>
              <Form<EditPhoneFormValues>
                onSubmit={handleSubmit}
                component={EditPhoneForm}
                initialValues={{ ...phone, number: phone.number.slice(2) }}
              />
              {/* <div className={styles.delete_button} onClick={() => handleDelete(phone.id)}>
                Delete
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="disclaimercard">
        <b style={{ color: '#2ec35f' }}>Disclaimer:</b>
        <br />
        Be sure that a valid Cell Phone Number is used as your MAIN Number. All pickup requests and Drop off
        notifications and reminders are sent via SMS/Text.
        <br />
        <br />
        <span style={{ fontSize: 'smaller' }}>
          <i>Text & Data charges may be applied by your service provider</i>
        </span>
      </div>
      {/* <div onClick={() => setShow(!show)} style={{ cursor: 'pointer' }}>
        <H4>Add another phone?</H4>
      </div> */}
      {/* {show ? (
        <div className={styles.phones}>
          <H4>Add Another Phone</H4>

          <div className={styles.phone}>
            <Form<AddPhoneFormValues> onSubmit={handleAdd} component={AddPhoneForm} initialValues={{}} />
          </div>
        </div>
      ) : null} */}
    </div>
  );
};
