/* eslint-disable prettier/prettier */
import React from 'react';

import Voted1 from './icons/Voted1.png';
import EnvironmentallyMinded from './icons/EnvironmentallyMinded.png';
import FastDelivery from './icons/FastDelivery.png';
import ReliableService from './icons/ReliableService.png';
import UnmatchedPricesandServices from './icons/UnmatchedPricesandServices.png';
import WashmixProcessingPlant from './icons/WashmixProcessingPlant.png';

export const BadgeContainerNew = () => {
  return (
    <footer>
      <section className="badge-section">
        <div className="badge-container-new badge-container">
          <div className="badge-main">
            <img className="badgeimageMain" src={Voted1} alt="Voted1" />
            <p className="tagline">Voted #1</p>
            <p className="subtag">Popular for a Reason</p>
          </div>
          <div className="badge-main">
            <img className="badgeimageMain" style={{ marginLeft:'15px' }} src={FastDelivery} alt="FastDelivery" />
            <p className="tagline">Fast Delivery</p>
            <p className="subtag">
              Fast turn around time
              <br />
              Rush Service Available
            </p>
          </div>{' '}
          <div className="badge-main">
            <img className="badgeimageMain" src={ReliableService} alt="ReliableService" />
            <p className="tagline">Reliable Service</p>
            <p className="subtag">Over 25 Years of Experience</p>
          </div>{' '}
          <div className="badge-main">
            <img className="badgeimageMain" src={WashmixProcessingPlant} alt="WashmixProcessingPlant" />
            <p className="tagline">Washmix Processing Plant</p>
            <p className="subtag">Washmix operates its own plant, we don&apos;t oursource our work</p>
          </div>
          <div className="badge-main">
            <img className="badgeimageMain" style={{ marginLeft: '15px' }} src={UnmatchedPricesandServices} alt="UnmatchedPricesandServices" />
            <p className="tagline">Unmatched Prices and Services</p>
          </div>
          <div className="badge-main">
            <img className="badgeimageMain" src={EnvironmentallyMinded} alt="EnvironmentallyMinded" />
            <p className="tagline">Environmentally Minded</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default BadgeContainerNew;
