import React from 'react';

import Voted1 from './icons/Voted1.png';
import FastDelivery from './icons/FastDelivery.png';
import ReliableService from './icons/ReliableService.png';
import WashmixProcessingPlant from './icons/WashmixProcessingPlant.png';

export const BadgeContainerHome = () => {
  return (
    <footer>
      <div className="badge-container">
        <div className="badge">
          <img className="badgeimage" src={Voted1} alt="Voted1" />
          <p className="tagline">Voted #1</p>
          <p className="subtag">Popular for a Reason</p>
        </div>
        <div className="badge">
          <img className="badgeimage" src={FastDelivery} alt="FastDelivery" />
          <p className="tagline">Fast Delivery</p>
          <p className="subtag">
            Fast turn around time
            <br />
            Rush Service Available
          </p>
        </div>{' '}
        <div className="badge">
          <img className="badgeimage" src={ReliableService} alt="ReliableService" />
          <p className="tagline">Reliable Service</p>
          <p className="subtag">Over 25 Years of Experience</p>
        </div>{' '}
        <div className="badge">
          <img className="badgeimage" src={WashmixProcessingPlant} alt="WashmixProcessingPlant" />
          <p className="tagline">Washmix Processing Plant</p>
          <p className="subtag">Washmix operates its own plant, we don&apos;t oursource our work</p>
        </div>
      </div>
    </footer>
  );
};

export default BadgeContainerHome;
