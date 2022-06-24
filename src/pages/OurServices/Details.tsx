import React, { useCallback } from 'react';
import { FormApi } from 'final-form';
import { Form } from 'react-final-form';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { CustomerKindEnum } from 'api';
import { useApi } from 'hooks';
import { normalizeAsyncError } from 'utils/object';
import { DetailsForm, DetailsFormValues } from './DetailsForm';

export const Details = () => {
  const { postCustomer } = useApi();
  const [createCustomer] = useMutation(postCustomer, { throwOnError: true });

  const handleSubmit = useCallback(
    async (values: DetailsFormValues, formApi: FormApi<DetailsFormValues>) => {
      const errors = await createCustomer({
        ...values,
        phone: values.phone && `+1 ${values.phone}`,
        kind: CustomerKindEnum.Storage,
      })
        .then(() => undefined)
        .catch(normalizeAsyncError);
      if (errors) return errors;
      toast.success('Thanks for interesting! We will contact you within 24hrs');
      // @ts-ignore
      setTimeout(() => formApi.restart());
    },
    [createCustomer],
  );

  return <Form<DetailsFormValues> onSubmit={handleSubmit} component={DetailsForm} />;
};
