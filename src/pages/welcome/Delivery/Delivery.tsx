/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { Field, Form } from 'react-final-form';
import { createPersistDecorator } from 'final-form-persist';

import { ChevronLeft, ChevronRight } from 'icons';
import { Checkbox, ButtonIcon, Datepicker, WeekDayPicker } from 'ui';
import { checkRequest } from 'services/apiClient';
import { normalizeAsyncError } from 'utils/object';

export type DeliveryFormValues = {
  pickupDate: string;
  recurringPickup: number[];
  rushDelivery: boolean;
};

const { persistDecorator, clear } = createPersistDecorator<DeliveryFormValues>({
  name: 'washmix-welcome-delivery',
  debounceTime: 500,
});

const validate = (values: DeliveryFormValues) =>
  checkRequest({ pickupDate: values.pickupDate, pickupStart: '9:00' })
    .catch(normalizeAsyncError)
    .then((e) => {
      if ('nonFieldErrors' in e) {
        return { ...e, pickupDate: e.nonFieldErrors };
      }
    });

export const Delivery = () => {
  const history = useHistory();

  const goToNextPage = useCallback(() => {
    history.push('/order/checkout');
  }, [history]);

  const handleSkip = useCallback(() => {
    clear();
    goToNextPage();
  }, [goToNextPage]);

  const goToPreviousPage = useCallback(() => {
    history.push('/order/packages');
  }, [history]);

  return (
    <div>
      <Form<DeliveryFormValues> onSubmit={goToNextPage} decorators={[persistDecorator]} validate={validate}>
        {(props) => (
          <form onSubmit={props.handleSubmit} className="packages-delivery">
            <div className="packages-delivery-pannel">
              <h1>Delivery Date & Time</h1>
              <p>
                Please note same day pickup orders must be placed before 8am of that day.
                <br />
                <em>
                  *<strong>You are not required to be present.</strong> Simply use the bag we provide to send us your
                  laundry and the door hook for us to deliver back your garment.
                </em>
              </p>
              <div className="form-group half">
                <Field
                  name="pickupDate"
                  component={Datepicker}
                  isRush={props.values.rushDelivery ? true : false}
                  label="Pickup Day"
                />
              </div>
              <Field name="rushDelivery" type="checkbox" component={Checkbox} label="Rush delivery" />
              <p style={{ margin: '4% 0%', fontSize: '12px' }} className="hideOnMobile">
                {props.values.rushDelivery ? (
                  <>
                    Rush service is available for regular dry cleaning and laundry service. If you&apos;re including
                    alterations and repair or complex items (ie: beaded garments or garments with excessive or complex
                    stains present) rush service may not be ideal as more time may be necessary to process the order. If
                    any questions contact us at <a href="mailto:cs@washmix.com">cs@washmix.com</a>
                  </>
                ) : (
                  <>
                    Most orders will be processed under 2-Business Days. However, at times some garments will require
                    more care and cleaning to complete. Although rare, they do however occur on fancy items, beaded
                    garments, and items with more than usual or complex stains. Also, if you&apos;re including
                    Alterations please allow time to process. If any questions email{' '}
                    <a href="mailto:cs@washmix.com">cs@washmix.com</a>
                  </>
                )}
              </p>
              <h2>Recurring Pickup (optional)</h2>
              <p>Please be sure to have your order inside your bag and leave out for us to pickup.</p>
              <div className="half">
                <Field name="recurringPickup" component={WeekDayPicker} label="Weekly Pickup Day" />
              </div>
              <div />
            </div>
            <div className="top_bodr">
              <ButtonIcon variant="primary" label="Back" Icon={ChevronLeft} onClick={goToPreviousPage} />
              <ButtonIcon variant="outline-primary" label="Skip" Icon={ChevronRight} onClick={handleSkip} />
              <ButtonIcon variant="primary" label="Next" Icon={ChevronRight} onClick={props.handleSubmit} />
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default Delivery;
