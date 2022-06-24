import React, { useEffect, useState } from 'react';
// import '../WashmixAdvantages/_washmix_advantages.scss';
import image10 from '../../assets/wash-and-fold/waf-icon-one.png';
import image11 from '../../assets/wash-and-fold/waf-icon-two.png';
import image12 from '../../assets/wash-and-fold/waf-icon-three.png';
import image13 from '../../assets/wash-and-fold/waf-icon-four.png';
import { Slider } from 'antd';
import './_wash_and_fold.scss';
import { getPriceItems } from 'services/apiClient';
import { useQuery } from 'react-query';
import { Price } from 'api';

export const WashAndFoldCalculator = () => {
  const { data: priceItems, isLoading } = useQuery('priceItems', getPriceItems);
  const [bagPrices, setBagPrices] = useState<Price[]>([]);

  const [bags, setBags] = useState(1);
  const calculateTotalPrice = () => {
    const prices = priceItems?.find(({ title }) => title === 'Wash & Folds')?.itemList || [];
    setBagPrices([...prices]);
    if (bags === 0) {
      return 0;
    } else if (bags === 1) {
      return prices[0].dollarAmount || 0;
    } else if (bags === 2) {
      return prices[1].dollarAmount || 0;
    } else if (bags === 3) {
      return prices[2].dollarAmount || 0;
    } else if (bags === 4) {
      return prices[3].dollarAmount || 0;
    } else {
      return (bags - 4) * parseFloat(`${prices[3].dollarAmount || 0}`) + parseFloat(`${prices[4].dollarAmount || 0}`);
    }
  };

  const [totalPrice, setTotalPrice] = useState<string | number>(0);
  const [discount] = useState(20);

  useEffect(() => {
    if (!isLoading) {
      setTotalPrice(calculateTotalPrice() || 0);
    }
  }, [bags, isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <div className="content-container mt-5 calculator_container d-flex justify-content-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center fw-bold">Wash & Fold Prices</h1>
          <p className="text-center mt-3 mx-3 lets-take wash_fold_para">
            Wash & Fold are charged by volume <span style={{ color: '#003459' }}>[per bag]. </span>
            <span style={{ color: '#003459' }} className="">
              The more bag sent at the same time - the cheaper.
            </span>
          </p>

          <div className="col-12 col-sm-12 flex-wrap w-100 d-flex mt-5">
            <div className="col-12 col-sm-6 my-3 my-sm-0 pr-2 pr-md-5">
              <div className="price_container">
                <h3 className="text-uppercase mb-4">price for each bag:</h3>
                <div className="price_text d-flex align-items-center mb-3">
                  <div>
                    <img src={image10} alt="" />
                  </div>
                  Bag = ${bagPrices.length > 0 ? bagPrices[0].dollarAmount : null}
                </div>
                <div className="price_text d-flex align-items-center mb-3">
                  <div>
                    <img src={image11} alt="" />
                  </div>
                  Bags = ${bagPrices.length > 0 ? bagPrices[1].dollarAmount : null}
                </div>
                <div className="price_text d-flex align-items-center mb-3">
                  <div>
                    <img src={image12} alt="" />
                  </div>
                  Bags = ${bagPrices.length > 0 ? bagPrices[2].dollarAmount : null}
                </div>
                <div className="price_text d-flex align-items-center mb-3">
                  <div>
                    <img src={image13} alt="" />
                  </div>
                  Bags = ${bagPrices.length > 0 ? bagPrices[3].dollarAmount : null}
                </div>

                <div className="bag_txt_one mb-3">
                  Every additional bag after that is ${bagPrices.length > 0 ? bagPrices[4].dollarAmount : null} per bag,
                  when sent together.{' '}
                </div>
                <div className="bag_txt_two mt-auto">
                  These Prices are
                  <span style={{ color: '#2EC35F' }}> BEFORE</span> WashMix Advantage™ discounts.
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 ml-2">
              <div className="result_container">
                <div className="d-flex flex-column flex-md-row justify-content-between bag_container mb-2 align-items-center">
                  <div className="d-flex align-items-center my-2">
                    <img src={image10} alt="" />
                    <span style={{ margin: '0 8px' }} className="d-none d-md-inline-block">
                      bag(s)
                    </span>
                  </div>

                  <Slider value={bags} onChange={setBags} min={0} max={5} className="custom-slider" />
                </div>
                <div className="d-flex flex-column flex-md-row">
                  <div
                    style={{ marginRight: '8px' }}
                    className="payrange_container_ flex-column justify-content-between my-2 align-items-center w-100 w-md-50"
                  >
                    <div
                      style={{ borderBottom: '1px solid #C4C4C4' }}
                      className="h-50 d-flex align-items-center justify-content-center px-2"
                    >
                      <b className="calculator_heading">PAYC Price</b>
                    </div>
                    <div className="h-50 d-flex align-items-center justify-content-center">
                      <b className="calculator_value pt-2">${parseFloat(`${totalPrice}`).toFixed(2)}</b>
                    </div>
                  </div>
                  <div className="payrange_container_ w-100 flex-column justify-content-between my-2 align-items-center w-md-50">
                    <div
                      style={{ borderBottom: '1px solid #C4C4C4' }}
                      className="h-50 d-flex align-items-center justify-content-center pb-1 px-2"
                    >
                      <p style={{ textAlign: 'center' }}>
                        <b className="calculator_heading d-none d-lg-block">
                          WashMix Advantage™ <span style={{ color: '#2EC35F' }}>Platinum Tier</span>
                        </b>
                        <b className="d-block d-lg-none">
                          <span style={{ color: '#2EC35F' }}>Platinium</span>
                        </b>
                      </p>
                    </div>
                    <div className="h-50 d-flex align-items-center justify-content-center">
                      <b className="calculator_value pt-2">
                        ${(((100 - Number(discount)) / 100) * Number(totalPrice)).toFixed(2)}
                      </b>
                    </div>
                  </div>
                </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className="py-3 mt-2 text-center">
                  You will save{' '}
                  <b style={{ color: '#2EC35F' }} className="d-block d-md-inline-block">
                    ${parseFloat(`${(Number(discount) / 100) * Number(totalPrice)}`).toFixed(2)}
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
