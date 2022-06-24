import React from 'react';
import { Form } from 'react-final-form';

import { BillingInformation } from './BillingInformation';
import { Button } from 'ui';
import { setupIntent } from 'services/apiClient';
import { usePayment } from 'hooks';

export const BillingDemo = () => {
  const { confirmPayment } = usePayment();

  const handleSubmit = async () => {
    const { secret } = await setupIntent({ isSaveCard: true, order: '1' });

    await confirmPayment({
      secret,
      isSaveCard: true,
      name: { firstName: 'Name', lastName: 'Last' },
      address: { title: 'Work', zipCode: '95146', addressLine1: '1 Hacker Way' },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      {(props) => (
        // eslint-disable-next-line react/prop-types
        <form onSubmit={props.handleSubmit} className="checkout_pannel" style={{ width: '500px' }}>
          <div className="shadow_pannel">
            <BillingInformation />
          </div>
          <Button variant="primary">Submit</Button>
        </form>
      )}
    </Form>
  );
};
