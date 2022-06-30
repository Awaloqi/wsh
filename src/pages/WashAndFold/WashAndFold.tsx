import { BadgeContainer } from 'components/BadgeContainer';
import { ContactsNew } from 'components/ContactsNew';
import { AddressValues, GooglePlaces } from 'components/GooglePlaces';
import { SingleFAQ } from 'components/SingleFAQ';
import { useAuth } from 'hooks';
import { useModal } from 'modals';
import React, { useCallback } from 'react';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { getZipCodes } from 'services/apiClient';

import image1 from '../../assets/wash-and-fold/image_1.svg';
import image2 from '../../assets/wash-and-fold/image_2.svg';
import image3 from '../../assets/wash-and-fold/image_3.png';
import image4 from '../../assets/wash-and-fold/image_4.png';
import image5 from '../../assets/wash-and-fold/image_5.png';
import image6 from '../../assets/wash-and-fold/part-one.png';
import image7 from '../../assets/wash-and-fold/washmix-illustration-one.png';
import image8 from '../../assets/wash-and-fold/washmix-illustration-two.png';
import image9 from '../../assets/wash-and-fold/washmix-illustration-three.png';

import './_wash_and_fold.scss';
import { WashAndFoldCalculator } from './WashAndFold.calculator';
import { AdvantagesComparison } from 'components/AdvantagesComparison';
import { Header } from '../../components/Header';

export const WashAndFold = () => {
  const { user, logout } = useAuth();
  const { setZipCode, setAddressLine1 } = useAuth();
  const { data: zipCodes } = useQuery('locations', getZipCodes);
  const history = useHistory();
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
    <>
      <Header logout={logout} user={user} />
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="d-flex flex-column flex-lg-row wash-fold-container content-container">
          <div className="col-12 col-lg-6 d-flex flex-column align-items-lg-center justify-content-center">
            <div className="text-container">
              <h1>{'WASH & FOLD'}</h1>
              <p className="less-text mb-2 mb-1">
                1 <span style={{ fontWeight: 'bold' }}>LESS</span> errand to run today!
              </p>
              <p className="small-text">
                {`Get your laundry done without having to 'move a finger'. Use our Wash & Fold services with Home and/or
                Office pickup and drop off.`}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center image-container">
            <img src={image1} alt="mainImage" style={{ objectFit: 'fill', maxWidth: '90%' }} />
          </div>
        </div>
        <div className="how-it-works content-container d-flex flex-column align-items-center">
          <h1 className="fw-bold">HOW IT WORKS?</h1>
          <div className="d-flex flex-column flex-lg-row">
            <div className="d-flex flex-column align-items-center col-12 col-lg-4">
              <img src={image2} />
              <div className="d-flex align-items-center justify-content-center count">1</div>
              <p className="heading-main">{'SIGNUP & SCHEDULE A PICKUP'}</p>
              <p className="small-text">
                {'Sign up & Schedule a pickup from your'} <span style={{ fontWeight: 'bold' }}>HOME or OFFICE.</span>
                You are <span style={{ fontWeight: 'bold' }}>NOT</span> required to be present.{' '}
                <span style={{ fontWeight: 'bold' }}>TEXT 415-993-WASH.</span>
              </p>
            </div>
            <div className="d-flex flex-column align-items-center col-12 col-lg-4">
              <img src={image3} />
              <div className="d-flex align-items-center justify-content-center count">2</div>
              <p className="heading-main">{'HAVE YOUR ORDER READY FOR PICKUP'}</p>
              <p className="small-text">{`Place your items inside a bag & leave outside and ready for pickup.`}</p>
            </div>
            <div className="d-flex flex-column align-items-center col-12 col-lg-4">
              <img src={image4} />
              <div className="d-flex align-items-center justify-content-center count">3</div>
              <p className="heading-main">{'NOW SIT BACK & RELAX'}</p>
              <p className="small-text">
                {
                  'We will pick up & Deliver back your professionally cleaned & Pressed clothes to you in no time. You will receive a text confirmation to your mobile after your order is delivered back.'
                }{' '}
                <br /> <span style={{ fontWeight: 'bold' }}>Now you have one less errand to run.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="help-block d-flex flex-column flex-lg-row align-items-center need_help">
          <p className="first-part">Need help with your first order?</p>
          <p>
            See <a href="#faq">bottom of this page</a> for FAQ
          </p>
        </div>
        <div className="checkService content-container">
          <p style={{ fontSize: 'larger' }}>See if we service your area</p>
          <GooglePlaces onSubmit={handleSubmit} />
        </div>
        <div className="full-width-container d-flex align-items-center mt-5 justify-content-center">
          <div className="vs-block d-flex flex-column flex-lg-row mt-0 mt-md-5 content-container">
            <div className="col-12 col-lg-6 d-flex flex-column text-left align-items-center justify-content-center">
              <h1 className="heading_main">Wash & Fold VS. Laundry Service</h1>
              <p className="mt-4 description">
                Wash & Fold and Laundry are very similar with the main difference being that in <b>Laundry</b> items are
                individually processed, cleaned and <b>PRESSED</b> and are individually charged (i.e. 1 Laundry Shirt)
                vs. <b>Wash & Fold</b> are folded (<b>NOT</b> pressed).
              </p>
              <div className="w-100">
                <SingleFAQ
                  fullWidth={true}
                  question="How is Wash & Fold charged?"
                  answer={
                    <div>
                      <p className="px-2">
                        Wash & Fold orders are charged by volume [per bag]. The more bag sent at the same time - the
                        cheaper it gets.
                      </p>
                      <a href="#calculator">Please see below for more detail</a>
                    </div>
                  }
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
              <img src={image5} />
            </div>
          </div>
        </div>

        <div className="content-container big-bag-block d-flex justify-content-center">
          <div className="col-12 col-lg-8 d-flex flex-column align-items-center justify-content-center">
            <h2 className="w-100 pb-3 text-center">How big is the bag</h2>
            <img src={image6} className="mb-4 mt-5" style={{ objectFit: 'contain' }} />
            <p className="text-center disclaimer-text">
              <b>Disclaimer:</b> This is a visual representation for the size of the bag. The actual size may vary
              slightly.
            </p>
          </div>
        </div>

        <div className="full-width-container big-need-block d-flex justify-content-center">
          <div className="col-12 col-lg-8 col-md-10 d-flex flex-column align-items-center justify-content-center">
            <h2 className="w-100 pb-3 text-center">How many bags do I need?</h2>
            <p className="mt-4 mb-2">These are on weekly bases</p>
            <div className="col-12 d-flex flex-wrap">
              <div className="col-12 col-lg-3 p-2 d-flex flex-column align-items-center justify-content-center">
                <img src={image7} style={{ width: '76%', height: '200px', objectFit: 'contain' }} />
                <div className="color-text text-center py-5">Individual</div>
              </div>
              <div className="col-12 col-lg-4 p-2">
                <img src={image9} style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
                <div className="color-text text-center py-5">Couple</div>
              </div>
              <div className="col-12 col-lg-5 p-2">
                <img src={image8} style={{ width: '93%', height: '200px', objectFit: 'contain' }} />
                <div className="color-text text-center py-5">Small Family</div>
              </div>
            </div>
            <p className="text-center disclaimer-text" style={{ marginTop: -20 }}>
              <b>Disclaimer:</b> These illustrations represent the most common usage for the average people. <b>YOUR</b>{' '}
              specific needs may be more or less.
            </p>
          </div>
        </div>

        <div id="calculator">
          <WashAndFoldCalculator />
        </div>

        <AdvantagesComparison />

        <div id="faq" className="faq-block d-flex flex-column align-items-center content-container">
          <h1>{'Wash & Fold FAQ'}</h1>
          <SingleFAQ
            question="What is Wash & Fold Services? What is Laundry?"
            answer={
              <ul>
                <li>
                  Wash & Fold and Laundry are very similar, with the main difference being that “Laundry” items are
                  individually processed, cleaned, <b>PRESSED</b>, and charged individually (i.e. one laundry shirt =
                  $4.95)
                  <b> vs.</b> in <b>Wash & Fold,</b> items are <b>washed</b> and <b>folded</b> [<b>NOT</b> Pressed].
                  Additionally, the order is charged by volume <b>[Per Bag]</b>.
                </li>
              </ul>
            }
          />
          <SingleFAQ
            question="Are there RUSH Services available for Wash & Fold? What is the typical turnaround time?"
            answer={
              <ul>
                <li>
                  <b>Expedited</b> Services are available upon request. You can request an <b>Expedited</b> service when
                  you submit your pickup request through your <b>online portal.</b>
                </li>
                <li>
                  The typical turnaround time is <b>2 Business Days.</b>
                </li>
              </ul>
            }
          />
          <SingleFAQ
            question="Do we need a separate bag for Wash & Folds?"
            answer={
              <ul>
                <li>
                  For Wash & Fold services you will require a <b>designated Wash & Fold</b> bag.
                </li>
                <li>
                  For your <b>FIRST order</b>, please use <b>any bag</b> and be sure to{' '}
                  <b>include a note inside your bag </b>
                  with your account detail + request for WASH & FOLD., <b>we’ll drop off</b> your designated Wash & Fold
                  bags for <b>future use.</b>
                </li>
              </ul>
            }
          />
          <SingleFAQ
            question="Can I include delicate items with my Wash & Fold?"
            answer={
              <ul>
                <li>
                  Wash & Fold is the most basic method of cleaning used primarily for{' '}
                  <b>sweats, undergarments, sheets, and towels.</b>
                </li>
                <li>
                  We recommend sending your delicate items [i.e. Cashmere Sweaters, Silk, and other similar items]
                  through Laundry and Dry Cleaning, which will undergo different processes and are individually
                  processed and charged. <b>Rule of thumb:</b> Wash & Folds are for typical items that you’d clean with
                  Washer and dry with a dryer machine.
                </li>
              </ul>
            }
          />
          <SingleFAQ
            question="How do I send in my FIRST Wash & Fold order?"
            answer={
              <ul>
                <li>
                  For your <b>FIRST order,</b> please use any bag you have but be sure to{' '}
                  <b>include a note inside your bag </b>
                  with your account detail + request for WASH & FOLD.,
                </li>
                <li>
                  We’ll drop off your designated Wash & Fold bags after your first pickup and for <b>future use.</b>
                </li>
              </ul>
            }
          />
        </div>
        <div className="checkService content-container">
          <p style={{ fontSize: 'larger' }}>See if we service your area</p>
          <GooglePlaces onSubmit={handleSubmit} />
        </div>
        <ContactsNew />

        <BadgeContainer />
      </div>
    </>
  );
};
