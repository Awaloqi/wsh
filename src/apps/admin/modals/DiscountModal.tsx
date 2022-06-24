import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { Field, Form } from 'react-final-form';

import { Body, Body2, Input, Modal } from 'ui';
import { Exit } from 'icons';
import { Button } from '../ui/Button';
import styles from './NoteModal.module.scss';
import { getCoupons } from '../apiPos';
import { POS_DISCOUNT_PASSWORDS } from '../../../constants';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  afterClose?: () => void;
  onChoose?: (code: string) => void;
};

type DiscountPasswordForm = {
  password: string;
};

export const DiscountModal = ({ isOpen, closeModal, afterClose, onChoose }: Props) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const handlePasswordSubmit = useCallback(
    (values: DiscountPasswordForm) => {
      if (POS_DISCOUNT_PASSWORDS.split(',').includes(values.password)) {
        setIsAuthorized(true);
      } else {
        return { password: 'Wrong password' };
      }
    },
    [setIsAuthorized],
  );
  const { data: coupons } = useQuery('coupons', getCoupons);
  return (
    <Modal className={styles.modal} isOpen={isOpen} close={closeModal} afterClose={afterClose}>
      <Exit className={styles.modal__close} onClick={closeModal} />
      <div className={styles.modal__body}>
        <Body className={styles.modal__title} weight="semi-bold">
          Discount
        </Body>
        <Body2 className={styles.modal__title}>Choose a coupon</Body2>
        {isAuthorized ? (
          <div className={styles.modal__services}>
            {coupons?.map((coupon) => (
              <Button key={coupon.id} kind="secondary" onClick={() => onChoose?.(coupon.code)}>
                {coupon.code}
              </Button>
            ))}

            <Button kind="secondary" onClick={() => onChoose?.('NONE')}>
              NONE
            </Button>
          </div>
        ) : (
          <Form<DiscountPasswordForm> onSubmit={handlePasswordSubmit}>
            {(props) => (
              // eslint-disable-next-line react/prop-types
              <form onSubmit={props.handleSubmit}>
                <Field name="password" type="password" label="Password" component={Input} />
                <Button kind="secondary">Submit</Button>
              </form>
            )}
          </Form>
        )}
      </div>
    </Modal>
  );
};
