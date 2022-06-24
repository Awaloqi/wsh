import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './GarmentStorage.module.scss';

export const GarmentStorage = () => {
  return (
    <>
      <h3>Seasonal Garment Storage</h3>
      <h4>Seasons & Times</h4>
      <div className={styles.container}>
        <table className={cn(styles.table, styles.table___seasons)}>
          <tbody>
            <tr>
              <td>One Season</td>
              <td>Spring</td>
              <td>March, April, May</td>
            </tr>
            <tr>
              <td>One Season</td>
              <td>Summer</td>
              <td>June, July, August</td>
            </tr>
            <tr>
              <td>One Season</td>
              <td>Fall/Autumn</td>
              <td>September, October, November</td>
            </tr>
            <tr>
              <td>One Season</td>
              <td>Winter</td>
              <td>December, January, February</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h4>Costs & Breakdowns</h4>
      <div className={styles.container}>
        <table className={cn(styles.table, styles.table___costs)}>
          <thead>
            <tr>
              <td colSpan={4}>Seasonal Garment Storage Services (Prices are based on 1 Full Season OR 3 Month)*</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plans &amp; Services</td>
              <td>PAYC</td>
              <td>GOLD</td>
              <td>PLATINUM</td>
            </tr>
            <tr>
              <td>1-5 Garments</td>
              <td>$69.95</td>
              <td>$49.95</td>
              <td>FREE</td>
            </tr>
            <tr>
              <td>6-10 Garments</td>
              <td>$79.95</td>
              <td>$59.95</td>
              <td>$49.95</td>
            </tr>
            <tr>
              <td>11-20 Garments</td>
              <td>$89.95</td>
              <td>$69.95</td>
              <td>$59.95</td>
            </tr>
            <tr>
              <td>21-40 Garments</td>
              <td>$99.95</td>
              <td>$79.95</td>
              <td>$69.95</td>
            </tr>
            <tr>
              <td>
                Each Additional
                <br /> Garment
              </td>
              <td>$10</td>
              <td>$7</td>
              <td>$5</td>
            </tr>
            <tr>
              <td>
                <p>Processing fee</p>
                <p>
                  <small>
                    (One time for each
                    <br /> load per season. If
                    <br /> more than one
                    <br /> season is picked
                    <br /> from the beginning
                    <br /> there will only be
                    <br /> one processing fee).
                  </small>
                </p>
              </td>
              <td>$39.95</td>
              <td>$29.95</td>
              <td>
                <p>$19.95</p>
                <p>
                  <Link to="/pricing">
                    Want to update
                    <br /> your Account?
                  </Link>
                </p>
                <p>
                  <small>
                    TEXT
                    <br />
                    415-993-WASH
                    <br />
                    [Name] + [Address] +<br />
                    [“I want to upgrade
                    <br /> my account”]
                  </small>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            The free promotional Seasonal Garment Storage services [Upto 5 items &1 Season ($69/value) as indicated in{' '}
            <Link to="/pricing">www.washmix.com/pricing</Link> is for promotional purposes only, and this extended offer
            is only valid for thePlatinum Tier members, while still enrolled in the Advantage Program.
          </li>
          <li>
            Should customers wish to cancel their membership, this will also and in effect, cancel the free promotional
            Seasonal Garment Storage services.
          </li>
          <li>
            If WashMix is still offering this service, customers can extend the Seasonal Garment Storage services, and
            pay for this service separately.
          </li>
          <li>
            WashMix.com can at any time cancel this promotion, but will value the promotion for those customers who’ve
            signed up before the end of the promotion and until the end of the season that they’re in.
          </li>
          <li>
            The Seasonal Garment Storage services can end at any time, however customers will be informed should this
            happen, and their garments will be delivered back at the end of the season or sooner if needed.
          </li>
        </ul>
        <p>
          If any questions, contact us via <a href="mailto:CS@washmix.com">CS@washmix.com</a>
        </p>
      </div>
    </>
  );
};
