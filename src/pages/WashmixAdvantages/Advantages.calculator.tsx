import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';

import iconA from '../../assets/Icon.png';
import iconB from '../../assets/icon-two.png';
import iconC from '../../assets/Icon-three.png';
import './_washmix_advantages.scss';
import { useQuery } from 'react-query';
import { getPriceItems } from 'services/apiClient';

export const AdvantagesCalculator = ({ isModal = false }) => {
  const [shirts, setShirts] = useState(1);
  const [pants, setPants] = useState(1);
  const [dresses, setDresses] = useState(1);

  const { data: priceItems, isLoading } = useQuery('priceItems', getPriceItems);

  const [shirtPrice, setShirtPrice] = useState<string | number>(0);
  const [pantPrice, setPantPrice] = useState<string | number>(0);
  const [dressPrice, setDressPrice] = useState<string | number>(0);

  const calculateTotalPrice = () => {
    return (
      shirts * parseFloat(`${shirtPrice}`) + dresses * parseFloat(`${dressPrice}`) + pants * parseFloat(`${pantPrice}`)
    );
  };

  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());
  const [discount] = useState(20);

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [dresses, shirts, pants, dressPrice, shirtPrice, pantPrice]);

  useEffect(() => {
    if (!isLoading) {
      setShirtPrice(
        priceItems?.find(({ title }) => title === 'Laundry')?.itemList?.find(({ title }) => title === 'Shirt')
          ?.dollarAmount || 0,
      );
      setPantPrice(
        priceItems?.find(({ title }) => title === 'Dry Cleaning')?.itemList?.find(({ title }) => title === 'Pants')
          ?.dollarAmount || 0,
      );
      setDressPrice(
        priceItems
          ?.find(({ title }) => title === 'Dry Cleaning')
          ?.itemList?.find(({ title }) => title === 'Dress [Reg]')?.dollarAmount || 0,
      );
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <div className="content-container calculator_container d-flex justify-content-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="see-how-big text-center">
          See how <b>BIG</b> is{' '}
          <b>
            THE SAVINGS <span style={{ color: '#2EC35F' }}>with</span>{' '}
          </b>{' '}
          WashMix Advantage™
        </h1>
        <p className="text-center lets-take">Here we are using Shirts, Pants, and Dress as an example:</p>
        <div className="w-100 d-flex mt-5">
          <div className="col-6 col-sm-6 pr-2 pr-md-5">
            <p className="lets-take">Let’s take</p>
            <div className="d-flex flex-row justify-content-between my-3 align-items-center">
              <div className="d-flex align-items-center">
                <img src={iconA} alt="" />
                <span style={{ margin: '0 8px' }} className="d-none d-md-inline-block">
                  Shirt (Laundry)
                </span>
              </div>
              <Slider value={shirts} onChange={setShirts} min={0} max={10} className="custom-slider" />
              {/* <input type="range" className="w-75 w-md-50" /> */}
            </div>
            <div className="d-flex flex-row justify-content-between my-3 align-items-center">
              <div className="d-flex align-items-center">
                <img src={iconB} alt="" />
                <span style={{ margin: '0 8px' }} className="d-none d-md-inline-block">
                  Pants
                </span>
              </div>
              <Slider value={pants} onChange={setPants} min={0} max={10} className="custom-slider" />
            </div>
            <div className="d-flex flex-row justify-content-between my-3 align-items-center">
              <div className="d-flex align-items-center">
                <img src={iconC} alt="" />
                <span style={{ margin: '0 8px' }} className="d-none d-md-inline-block">
                  Dress
                </span>
              </div>
              <Slider value={dresses} onChange={setDresses} min={0} max={10} className="custom-slider" />
            </div>
          </div>
          <div className="col-6 col-sm-6 ml-2">
            <div className="d-flex flex-column flex-md-row">
              <div
                style={{ marginRight: '8px' }}
                className="payrange_container flex-column d-none d-lg-block justify-content-between my-2 align-items-center w-100 w-md-50"
              >
                <div
                  style={{ borderBottom: '1px solid #C4C4C4' }}
                  className="h-50 d-flex align-items-center justify-content-center px-2"
                >
                  <b>PAYC Price</b>
                </div>
                <div className="h-50 d-flex align-items-center justify-content-center">
                  <b>${parseFloat(`${totalPrice}`).toFixed(2)}</b>
                </div>
              </div>{' '}
              <div className="payrange_container w-100 d-lg-block d-none flex-column justify-content-between my-2 align-items-center w-md-50 d-none d-md-inline-block">
                <div
                  style={{ borderBottom: '1px solid #C4C4C4' }}
                  className="h-50 d-flex align-items-center justify-content-center px-2"
                >
                  <p style={{ textAlign: 'center' }}>
                    <b>
                      WashMix Advantage™ <span style={{ color: '#2EC35F' }}>Platinum Tier</span>
                    </b>
                  </p>
                </div>
                <div className="h-50 d-flex align-items-center justify-content-center">
                  <b>${parseFloat(`${((100 - discount) / 100) * totalPrice}`).toFixed(2)}</b>
                </div>
              </div>
              <div className="payrange_container d-flex d-md-none w-100 justify-content-between my-2 align-items-center">
                <div className="h-100 w-50" style={{ borderRight: '1px solid #C4C4C4' }}>
                  <div className="h-50 d-flex align-items-center justify-content-center px-2">
                    <p style={{ textAlign: 'center', fontSize: 13 }}>
                      <b>PAYC</b>
                    </p>
                  </div>
                  <div style={{ fontSize: 13 }} className="h-50 d-flex align-items-center justify-content-center">
                    <b>${parseFloat(`${totalPrice}`).toFixed(2)}</b>
                  </div>
                </div>
                <div className="h-100 w-50">
                  <div className="h-50 d-flex align-items-center justify-content-center px-2">
                    <p style={{ textAlign: 'center', fontSize: 13 }}>
                      <b>
                        <span style={{ color: '#2EC35F', marginLeft: '6px' }}>Platinum</span>
                      </b>
                    </p>
                  </div>
                  <div style={{ fontSize: 13 }} className="h-50 d-flex align-items-center justify-content-center">
                    <b>${parseFloat(`${((100 - discount) / 100) * totalPrice}`).toFixed(2)}</b>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ color: 'black', fontWeight: 'bold' }} className="py-3 mt-3 text-center">
              You will save{' '}
              <b style={{ color: '#2EC35F' }} className="d-block d-md-inline-block">
                ${parseFloat(`${(discount / 100) * totalPrice}`).toFixed(2)}
              </b>
            </div>
          </div>
        </div>
        {!isModal && (
          <p className="disclaimer-text">
            <b>Disclaimer:</b> Please note, in the example above, we are using 3 sample items to showcase the SAVINGS in
            - with and without{' '}
            <b>
              WashMix Advantage™. For Full Price List - visit our Pricing <a href="/pricing">Section</a>
            </b>
          </p>
        )}
      </div>
    </div>
  );
};
