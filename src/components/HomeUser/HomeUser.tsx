import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import { useApi } from 'hooks';
import requestPickupIcon from '../../assets/request-pickup.svg';
import myAccountIcon from '../../assets/my-account.svg';
import upcomingOrdersIcon from '../../assets/upcoming-orders.svg';

export const HomeUser = () => {
  const { getProfile } = useApi();
  useQuery('profile', getProfile);

  return (
    <div className="home_pannel">
      <ul className="home_icon_ul">
        <li>
          <Link to="/pickup">
            <img src={requestPickupIcon} alt="Pickup Icon" />
            Request Pickup
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <img src={myAccountIcon} alt="Pickup Icon" />
            My Account
          </Link>
        </li>
        <li>
          <Link to="/upcoming">
            <img src={upcomingOrdersIcon} alt="Pickup Icon" />
            Upcoming Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};
