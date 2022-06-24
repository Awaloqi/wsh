import React, { ReactNode, useCallback } from 'react';
import Responsive from 'react-responsive';
import { useHistory, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';

import { AddressValues, GooglePlaces } from '../GooglePlaces';
import { ArrowRight } from 'icons';
import { Button } from 'ui';
import pickupTruckIcon from 'assets/pickup-truck.svg';
import { useModal } from 'modals';
import { useAuth } from 'hooks';
import { getZipCodes } from 'services/apiClient';
import { contacts } from '../../constants';
// import { BadgeContainer } from 'components/BadgeContainer';
// import { BadgeContainerHome } from 'components/BadgeContainerHome';
import { BadgeContainer } from 'components/BadgeContainer';

type ResponsiveProps = { children: ReactNode };

const XL = (props: ResponsiveProps) => <Responsive {...props} minWidth={1200} />;
const STXL = (props: ResponsiveProps) => <Responsive {...props} maxWidth={1199} />;

const services = [
  {
    title: 'Dry Clean',
    image: 'iron.svg',
  },
  {
    title: 'Laundry',
    image: 'washer.svg',
  },
  {
    title: 'Wash N Fold',
    image: 'towel.svg',
  },
  {
    title: 'Leather Care',
    image: 'leather.png',
  },
  {
    title: 'Alteration & Repair',
    image: 'alteration.svg',
  },
  {
    title: 'Rug Cleaning',
    image: 'rug-cleaning.svg',
  },
  {
    title: 'Preservation',
    image: 'preservation.svg',
  },
];

export const Home = () => {
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
    <section className="home-content">
      <Helmet>
        <title>WashMix — Laundry & Dry Cleaning with Delivery</title>
        <meta name="description" content="Laundry & Dry Cleaning with Delivery" />
      </Helmet>
      <div className="container">
        <div className="main row">
          <div className="info col-xs-12 col-sm-7 col-md-8 col-lg-7">
            <span className="info-1">- What do we do</span>
            <h1 className="title">Laundry & Dry Cleaning with Delivery</h1>
            <p>WashMix gives its customers twice the service and acceptance as other service providers.</p>
            <XL>
              <GooglePlaces onSubmit={handleSubmit} />
            </XL>
          </div>
          <div className="animation-container col-xs-12 col-sm-5 col-md-4 col-lg-5">
            <img src="/images/home/laundromat.gif" alt="Washmix Laundary" />
          </div>
        </div>
        <STXL>
          <div className="location row">
            <div className="input__field col-xs-12 col-sm-9 col-md-8 col-lg-7 col-xl-6">
              <GooglePlaces onSubmit={handleSubmit} />
            </div>
          </div>
        </STXL>
        <div className="actions-heading row">
          <h2>How it works?</h2>
        </div>
      </div>
      <div className="actions_outer">
        <div className="container">
          <div className="actions">
            <div className="action-box">
              <img src="/images/home/schedule.svg" alt="" />
              <h4>Schedule</h4>
              <p>
                We are available 24/7. Simply schedule a Pickup via SMS or online. Text{' '}
                <a href={contacts.phoneLink}>{contacts.phoneNumber}</a>
              </p>
            </div>
            <div className="action-box">
              <img src="/images/home/pickup-bag.svg" alt="" />
              <h4>Pickup</h4>
              <p>
                You will receive a confirmation via text in your mobile phone with the pickup date. Simply leave your
                bag out. <b>NO need to be present.</b>
              </p>
            </div>
            <div className="action-box">
              <img src={pickupTruckIcon} alt="" />
              <h4>Delivery</h4>
              <p>
                We deliver high quality experience on a predictable, route-based schedule.{' '}
                <b>Rush service available too.</b>
              </p>
            </div>
          </div>

          <div className="text-center more">
            <Button variant="outline-primary" onClick={() => history.push('/hiw')}>
              More Info
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="services-heading text-center">
          <h2>Our Services</h2>
        </div>
        <div className="services-content text-center">
          {services.map((service) => (
            <Link to="/services" key={service.title} className="item">
              <img src={`/images/home/${service.image}`} alt="" />
              <h5>{service.title}</h5>
            </Link>
          ))}
        </div>
        <BadgeContainer />
      </div>
    </section>
  );
};
