import React, { useCallback } from 'react';
import washmixOne from '../../assets/washmix-one.png';
import washmixTwo from '../../assets/washmix-two.png';
import washmixThree from '../../assets/washmix-three.png';
import washmixFour from '../../assets/washmix-four.png';
import './_washmix_advantages.scss';
import { AddressValues, GooglePlaces } from 'components/GooglePlaces';
import { useAuth } from 'hooks';
import { useQuery } from 'react-query';
import { useModal } from 'modals';
import { getZipCodes } from 'services/apiClient';
import { useHistory } from 'react-router';
import { ContactsNew } from 'components/ContactsNew';
import { BadgeContainer } from 'components/BadgeContainer';
import { SingleFAQ } from 'components/SingleFAQ';
import { AdvantagesCalculator } from './Advantages.calculator';
import { AdvantagesComparison } from 'components/AdvantagesComparison';

export const WashmixAdvantages = ({ isModal = false }) => {
  const history = useHistory();
  const { setZipCode, setAddressLine1 } = useAuth();
  const { data: zipCodes } = useQuery('locations', getZipCodes);
  const { openModal } = useModal();
  const handleSubmit = useCallback(
    (values: AddressValues) => {
      setZipCode(values.zipCode);
      setAddressLine1(values.addressLine1);
      if (zipCodes && zipCodes.includes(values.zipCode)) {
        history.push('/registration');
      } else {
        openModal('NOTIFY', values);
      }
    },
    [history, openModal, setAddressLine1, setZipCode, zipCodes],
  );

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="content-container d-flex flex-wrap">
        <div className="col-12 col-sm-12 col-md-6 washmix-container d-flex flex-column justify-content-center">
          <h1 className="washmix_program_heading">Washmix Advantage</h1>
          <div style={{ paddingLeft: 10, marginTop: 20 }} className="span-container d-flex flex-column">
            <span className="text-capitalize span_tag">
              <b>no</b> monthly plan
            </span>
            <span className="text-capitalize span_tag">
              <b>no</b> expiration date
            </span>
            <span className="text-capitalize span_tag">
              <b>no</b> fees
            </span>
          </div>

          <p className="paragraph_main mt-2">
            Purchase the desired credit, put toward any desired service and get the exclusive disounts and ton of perks
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 text-center pt-5 text-md-end">
          <img src={washmixOne} alt="" style={{ width: '100%', maxWidth: '508px', objectFit: 'contain' }} />
        </div>
      </div>
      <div className="content-container mt-3 mt-md-0">
        <h1 className="mb-3 washmix_advantage_heading text-center fw-bold mb-3 mt-5">WHAT IS WASHMIX ADVANTAGE?</h1>
        <div className="col-12 col-md-12 col-sm-12 d-flex flex-wrap">
          <div className="col-12 col-sm-12 col-md-6 d-flex flex-column align-items-center align-items-lg-start justify-content-center mt-5 mt-md-0 mb-0 mb-md-3">
            <div className="heading_medium">
              Buy tokens <b>Now</b> & use to pay for any desired service
            </div>
            <div className="my-3 paragraph_main">
              Simply purchase credits in advance & spend them <span style={{ color: '#2ec35f' }}>Whenever</span> you
              need your clothes cleaned.
            </div>
            <SingleFAQ
              fullWidth={true}
              question="Do the Pre-Paid WashMix Credits ever Expire?"
              answer={
                <p>
                  <span className="fw-bold">NO!</span>the Pre-Paid WashMix Credits purchased in an advance act similar
                  to a Gift Card. You can use it to pay for services, and while getting everything at a discounted rate.
                </p>
              }
            />
          </div>
          <div className="col-12 col-sm-12 col-md-6 pt-5 pt-md-0 text-center d-flex align-items-center justify-content-center text-md-end">
            <img src={washmixTwo} alt="" style={{ width: '80%', objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      <div className="content-container d-flex flex-row-reverse mt-5">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-0 mb-md-3">
          <div className="heading_medium">
            Spend your WashMix Credits <b>Whenever</b> you need your clothes cleaned
          </div>

          <div className="my-4 paragraph_main">
            Your available balance <span style={{ color: '#2ec35f' }}>NEVER</span> expires
          </div>
          <SingleFAQ
            fullWidth={true}
            question="Is the WashMix Advantage Credits, a monthly subscription?"
            answer={
              <p>
                <b>NO! </b>there are <b>NOT</b> Monthly subscriptions fees. Every penny goes toward your desired
                service.
              </p>
            }
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 mt-4 mt-md-0 pr-0 pr-md-3 d-flex align-items-center justify-content-center">
          <img src={washmixThree} alt="" style={{ width: '80%', objectFit: 'contain' }} />
        </div>
      </div>

      <div className="content-container flex-wrap d-flex my-5">
        <div className="col-12 col-sm-12 col-md-6 d-flex flex-column align-items-center justify-content-center align-items-lg-start">
          <div className="heading_medium">
            Get Discounts on <b>ALL</b> services used, and until you go through your available balance
          </div>
          <div className="my-4">
            <div className=" paragraph_main_">
              With the{' '}
              <span className="fw-bold" style={{ color: '#2ec35f' }}>
                PLATINUM TIER:
              </span>{' '}
            </div>
            <div className="paragraph_main">
              <b>20% Discounts on all services</b>
            </div>
            <div className="paragraph_main">
              <b>5% Quarterly Credit Back</b>
            </div>
            <div className="paragraph_main">
              <b>
                & So much more perks <br className="d-block d-md-none" />
                {!isModal && (
                  <span>
                    [visit <a href="/pricing">Pricing page</a> for full details]
                  </span>
                )}
              </b>
            </div>
          </div>
          <SingleFAQ
            fullWidth={true}
            question="How can I track my balance and see the discounts?"
            answer={
              <p>
                After you sign up, select your Platinum tier plan, and complete your profile, you will see your
                available balance visible in your{' '}
                <q>
                  <span className="fw-bold">Customer Portal</span>
                </q>
                , plus after we process your order(s), under
                <q>
                  <span className="fw-bold"> Order History</span>
                </q>
                , you will see the full breakdown, balance, and discounts.
              </p>
            }
          />
        </div>
        <div className="col-12 col-sm-12 col-md-6 mt-5 mt-md-0 d-flex align-items-center justify-content-center pr-0 pr-md-3 text-center text-md-end">
          <img src={washmixFour} alt="" style={{ width: '80%', objectFit: 'contain' }} />
        </div>
      </div>

      <div className="checkService content-container">
        <p style={{ fontSize: 'larger' }}>See if we service your area</p>
        <GooglePlaces onSubmit={handleSubmit} />
      </div>

      <div className="my-5">
        <AdvantagesComparison />
      </div>

      <AdvantagesCalculator isModal={isModal} />

      <React.Fragment>
        {!isModal && (
          <div className="checkService content-container">
            <p style={{ fontSize: 'larger' }}>See if we service your area</p>
            <GooglePlaces onSubmit={handleSubmit} />
          </div>
        )}
        <ContactsNew />
        {!isModal && <BadgeContainer />}
      </React.Fragment>
    </div>
  );
};
