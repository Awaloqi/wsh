import React from 'react';

import Voted1 from './icons/Voted1.png';
import FastDelivery from './icons/FastDelivery.png';
import ReliableService from './icons/ReliableService.png';
import WashmixProcessingPlant from './icons/WashmixProcessingPlant.png';

export const BadgeContainerCheckout = () => {
  return (
    <footer>
      <div className="badge-container">
        <div className="badge">
          <img className="badgeimage" src={Voted1} alt="Voted1" />
          <p className="tagline">Voted #1</p>
        </div>
        <div className="badge">
          <img className="badgeimage" src={FastDelivery} alt="FastDelivery" />
          <p className="tagline">Fast Delivery</p>
        </div>
        <div className="badge">
          <img className="badgeimage" src={ReliableService} alt="ReliableService" />
          <p className="tagline">Reliable Service</p>
        </div>
        <div className="badge">
          <img className="badgeimage" src={WashmixProcessingPlant} alt="WashmixProcessingPlant" />
          <p className="tagline">Washmix Processing Plant</p>
        </div>
      </div>
    </footer>
  );
};

export default BadgeContainerCheckout;
