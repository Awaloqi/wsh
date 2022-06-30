import React, { useCallback } from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet';

import howItWorks from 'assets/new-ui/how-it-works/hero-image.svg';
import signupAndSchedule from 'assets/new-ui/how-it-works/signupandschedule.svg';
import haveYourOrder from 'assets/new-ui/how-it-works/bagready.svg';
import nowSitBack from 'assets/new-ui/how-it-works/sitback.svg';
import welcomeBoxImage from 'assets/new-ui/how-it-works/welcomeGif.gif';
import step1 from 'assets/new-ui/how-it-works/step1.svg';
import step2 from 'assets/new-ui/how-it-works/step2.svg';
import step3 from 'assets/new-ui/how-it-works/step3.svg';
import step4 from 'assets/new-ui/how-it-works/step4.svg';
import step5 from 'assets/new-ui/how-it-works/step5.svg';
import step6 from 'assets/new-ui/how-it-works/step6.svg';
import downArrow from 'assets/new-ui/how-it-works/downarrow.png';
import styles from './HowItWorks.module.scss';
import { Hero2 } from 'components/Hero2';
import { SingleFAQ } from 'components/SingleFAQ';
import { AddressValues, GooglePlaces } from 'components/GooglePlaces';
import { useModal } from 'modals';
import { useHistory } from 'react-router';
import { useQuery } from 'react-query';
import { getZipCodes } from 'services/apiClient';
import { useAuth } from 'hooks';
import { ContactsNew } from 'components/ContactsNew';
import { Button } from 'ui';
import { Header } from '../../components/Header';

export const HowItWorks = () => {
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
  const { user, logout } = useAuth();
  return (
    <>
      <Header logout={logout} user={user} />
      <Helmet>
        <title>WashMix — Нow it works?</title>
        <meta name="description" content="Нow it works?" />
      </Helmet>
      <div className={styles.mainIn}>
        <div className={styles.containIn}>
          <Hero2
            title={`Нow it Works?`}
            subtitle="Laundry & Dry Cleaning
        with Delivery"
            img={howItWorks}
            imgAlt="How It Works"
            info="We are the one-stop-shop for all your Laundry, Dry Clean, Wash & Folds, Alterations & Repair, as well as household items, Area Rug Cleaning, Leather Care & Gown Preservation"
          />

          <div className={styles.steps}>
            <div className={styles.inbetween}>
              <h3 className={styles.blueHeader}>3 Easy Steps</h3>

              <p style={{ fontSize: 'larger' }}>Let&apos;s get started!</p>
            </div>
            <div className={styles.steps_content}>
              <div className={styles.steps_block}>
                <div className={styles.step_container}>
                  <p className={styles.step_number}>1</p>
                </div>
                <h2 className={styles.steps_title}>Signup & Schedule a&nbsp;Pickup</h2>
                <p className={styles.steps_desc}>
                  Sign up & Schedule a pickup from your <b>HOME or OFFICE</b>. You are <b>NOT</b> required to be
                  present. <b>TEXT 415-993-WASH.</b>
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <img className={styles.steps_image} src={signupAndSchedule} alt="Signup & Schedule" />
              </div>
            </div>
            <div className={cn(styles.steps_content, styles.steps_content___rtl)}>
              <div className={styles.steps_block}>
                <div className={styles.step_container}>
                  <p className={styles.step_number}>2</p>
                </div>
                <h2 className={styles.steps_title}>Have your order ready&nbsp;for&nbsp;pickup</h2>
                <p className={styles.steps_desc}>
                  Place your items inside a bag & leave outside and ready for pickup.{' '}
                  <b>Need help with your first order?</b>
                  <br></br>See bottom of this page for FAQ
                </p>
              </div>
              <div className={cn(styles.imageWrapper, styles.imageWrapper_alt)}>
                <img className={styles.steps_image} src={haveYourOrder} alt="Have your order ready for pickup" />
              </div>
            </div>
            <div className={styles.steps_content}>
              <div className={styles.steps_block}>
                <div className={styles.step_container}>
                  <p className={styles.step_number}>3</p>
                </div>
                <h2 className={styles.steps_title}>Now Sit back & Relax</h2>
                <p className={styles.steps_desc}>
                  We will pick up & Deliver back your professionally cleaned & Pressed clothes to you in no time. You
                  will receive a text confirmation to your mobile after your order is delivered back.
                  <br />
                  <b>Now you have one less errand to run.</b>
                </p>
              </div>
              <div className={styles.imageWrapper}>
                <img className={styles.steps_image} src={nowSitBack} alt="Now sit back and relax" />
              </div>
            </div>
          </div>
          <div className={styles.checkService}>
            <p style={{ fontSize: 'larger' }}>See if we service your area</p>
            <GooglePlaces onSubmit={handleSubmit} />
          </div>
          <div className={styles.welcomeBox}>
            <div className={styles.welcomeBox_wrapper}>
              <div className={styles.welcomeBox_block}>
                <h2 className={cn(styles.welcomeBox_title)}>
                  What’s Inside a&nbsp;
                  <br />
                  Welcome Box
                </h2>
                <p style={{ textAlign: 'center', marginTop: '5px' }}>Let me show you!</p>
                <div className={styles.downContainer}>
                  <img src={downArrow} alt="downArrow" />
                </div>
              </div>
              <img className={styles.welcomeBox_image} src={welcomeBoxImage} alt="What's inside a welcome box" />
              <p style={{ fontWeight: 'bold', color: '#39B6ED', fontSize: 'larger' }}>
                All Advantage Members will get the exclusive
                <br /> Welcome Box kit to make future orders a breeze
              </p>
              <br />
              <p>
                Discover it all with our unique WashMix Welcome Box, <br />
                products and services can be used with minimal effort.
              </p>
            </div>
          </div>
          <h2 className={cn(styles.welcomeBox_title)}>
            Why Choose
            <br />
            WashMix
          </h2>
          <div className={styles.downContainer}>
            <img src={downArrow} alt="downArrow" />
          </div>
          <div className={styles.why}>
            <div className={styles.why_wrapper}>
              <div className={styles.why_grid}>
                <div className={styles.why_content}>
                  <img alt="Step Icon" className={styles.why_icon} src={step1} />
                  <h3 className={styles.why_contentTitle}>Washmix processing Plant</h3>
                  <p className={styles.why_desc}>
                    We manage and operate our own processing plant, which means your clothes get processed by us.
                  </p>
                </div>
                <div className={styles.why_content}>
                  <img alt="Step Icon" className={styles.why_icon} src={step2} />

                  <h3 className={styles.why_contentTitle}>Owned and Operated By Washmix</h3>
                  <p className={styles.why_desc}>
                    We <b>DO NOT</b> pass your valuable garments to other establishments. We process every order in our
                    own facility.{' '}
                  </p>
                </div>
                <div className={styles.why_content}>
                  <img alt="Step Icon" className={styles.why_icon} src={step3} />

                  <h3 className={styles.why_contentTitle}>Consistent Service</h3>
                  <p className={styles.why_desc}>
                    Since we own and operate our own processing plant, the result is{' '}
                    <b>always consistent - each and every time.</b>
                  </p>
                </div>
                <div className={styles.why_content}>
                  <img alt="Step Icon" className={styles.why_icon} src={step4} />

                  <h3 className={styles.why_contentTitle}>Unmatched prices & Services</h3>
                  <p className={styles.why_desc}>
                    Not being the middleman, means you are going direct and thus, <b>NO</b> one can beat our prices &
                    Services.{' '}
                  </p>
                </div>
                <div className={styles.why_content}>
                  <img alt="Step Icon" className={styles.why_icon} src={step5} />

                  <h3 className={styles.why_contentTitle}>WashMix Advantage Program™</h3>
                  <p className={styles.why_desc}>
                    Additionally, with <b>WashMix Advantage Program™</b> you can now get extended discounts on{' '}
                    <b>ALL</b> services; simply by paying in advance.
                  </p>
                </div>
                <div className={styles.why_content}>
                  <img alt="Step Icon" className={styles.why_icon} src={step6} />

                  <h3 className={styles.why_contentTitle}>Environmentally Minded</h3>
                  <p className={styles.why_desc}>
                    At WashMix, being Green doesn’t only mean{' '}
                    <b>Green Cleaning! We are a pioneer with our environmentally friendly practices</b>, and through
                    innovative methods, we’ve mastered the process. We don’t rest on our laurels — we seek to improve
                    our Green initiative{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.FAQ}>
            <h2 className={styles.why_title}>Need help with your first order?</h2>
            <div className={styles.hideondesktop}>
              <div style={{ height: '2px', width: '100%', backgroundColor: '#80808050' }}></div>
              <div className={styles.downContainer}>
                <img src={downArrow} alt="downArrow" />
              </div>
            </div>
            <SingleFAQ
              question="How do I sending in my order [the first time]?"
              answer={
                <p>
                  For your <b>first order</b>: use any bag you have. Be sure to attach a note [inside] with your account
                  detail [i.e. Name + Address + Phone #]. We will provide you with your own unique laundry bag and
                  essentials for your <b>next order</b>.
                </p>
              }
            />
            <SingleFAQ
              question="What if I lose the bags provided by WashMix? OR if I have more clothes
that can fit in one bag?"
              answer={
                <p>
                  If you run out of the counter laundry bags provided by WashMix, you can use any bag to send in your
                  order. It&apos;s always a good practice to make sure the bag used can be tightened and shut to avoid
                  items falling out. <b>IF</b> you’re using any other bags than what we provide, be sure to attach a
                  note with your account detail [i.e. Name + Address + Phone #].
                </p>
              }
            />
            <SingleFAQ
              question="Is it important to use my Cell Phone number when signing up?"
              answer={
                <p>
                  <b>YES!</b> WashMix communicates with its customers via SMS/Text. It&apos;s important that you use a
                  cell phone number, which allows you to send and receive text messages.
                  <br />
                  <i>[Msg & data rates may apply by your cell phone carrier.]</i>
                </p>
              }
            />
            <SingleFAQ
              question=" I live in a secure building, how do I give access to the WashMix team to access 
my unit?"
              answer={
                <p>
                  Many buildings have a system in place to allow vendors easy access to the building or your unit.{' '}
                  <b>For example, entry Code [i.e: #1234 + Enter]. IF</b> there are special instructions, be sure to
                  include them when registering for your account. Remember, you are <b>NOT</b> required to be present
                  for pickup or drop off.
                </p>
              }
            />
          </div>
          <ContactsNew />
          <div className={styles.ready}>
            <h2 className={styles.ready_title}>So, You Ready?</h2>
            <Button variant="accent" to="/registration">
              Request Pickup
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
