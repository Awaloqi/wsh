import React, { ReactNode, useState } from 'react';
import { useQuery } from 'react-query';
import { Package } from 'api';

import './PackagesFormNew.scss';
import { getPackages } from '../../services/apiClient';
import WashmixAdvantageModal from 'modals/WashmixAdvantageModal';

type Props = {
  plan: Package;
  isGold: boolean;
  isPlatinum: boolean;
  borderColor: string;
  moreInfo?: ReactNode;
};
const Plan = ({ plan, isGold, isPlatinum, borderColor, moreInfo }: Props) => {
  return (
    <div className="one-package">
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="planName" style={{ color: borderColor }}>
            {plan.name}
          </div>
          <div className="planPrice" style={{ color: borderColor }}>
            {plan.dollarPrice === 0 ? '$0' : '$' + plan.dollarPrice}
          </div>
        </div>
        <div className="creditNote">
          {plan.dollarPrice === 0 ? <div>Pay as you clean</div> : <div>Pre-pay for future orders</div>}
        </div>
        <div className="divider" />
        <div></div>
        <div className="perkNote">
          {plan.dryClean === 0 ? (
            <span>DISCOUNTS 0%</span>
          ) : (
            <span>
              DISCOUNTS <span style={{ color: borderColor }}>{plan.dryClean}%</span>
            </span>
          )}
        </div>
        <div className="perkNote">{isGold ? <span>+ PERKS </span> : null}</div>
        <div className="perkNote">
          {isPlatinum ? (
            <span>
              + CREDIT BACK<sup>*</sup> <span style={{ color: borderColor }}>5%</span>{' '}
            </span>
          ) : null}
        </div>{' '}
        <div className="perkNote">{isPlatinum ? <span>+ MOST PERKS </span> : null}</div>
        <div className="perkNote">{moreInfo}</div>
      </div>
    </div>
  );
};

export const PackagesFormNew = () => {
  const [isAdvantageModalOpen, setIsAdvantageModalOpen] = useState(false);

  const { data: packages } = useQuery('packages', getPackages);
  if (!packages) return null;

  const payc = packages.find((x) => x.name === 'payc') || packages[0];
  const platinum = packages.find((x) => x.name === 'platinum') || packages[0];
  const gold = packages.find((x) => x.name === 'gold') || packages[0];

  return (
    <div className="packages-selection">
      <WashmixAdvantageModal visible={isAdvantageModalOpen} onHide={() => setIsAdvantageModalOpen(false)} />
      <div className="option1Wrapper">
        <h3>Option 1</h3>

        <div className="option1">
          <Plan
            plan={payc}
            isGold={false}
            isPlatinum={false}
            borderColor="gray"
            moreInfo={
              <div>
                <p>
                  <span style={{ color: '#39B6ED' }}>
                    <b>FREE</b>
                  </span>{' '}
                  Delivery <br /> <span style={{ fontSize: 'small' }}>($69 & up)</span>
                </p>
              </div>
            }
          />
        </div>
      </div>
      <div className="option2Wrapper">
        <h3>Option 2</h3>

        <div className="option2">
          <h1 className="option2_title">WashMix Advantage Program</h1>
          <div className="option2_internal">
            <Plan
              plan={gold}
              isGold={true}
              isPlatinum={false}
              borderColor="#39B6ED"
              moreInfo={
                <div>
                  <p>
                    <span style={{ color: '#39B6ED' }}>
                      <b>FREE</b>
                    </span>{' '}
                    Delivery <br /> <span style={{ fontSize: 'small' }}>($59 & up)</span>
                  </p>
                  <p>
                    <span style={{ color: '#39B6ED' }}>
                      <b>FREE</b>
                    </span>{' '}
                    Welcome Box <br /> <span style={{ fontSize: 'small' }}>($29 value)</span>
                  </p>
                </div>
              }
            />
            <div className="divider-vert" />
            <Plan
              plan={platinum}
              isGold={false}
              isPlatinum={true}
              borderColor="#61C06A"
              moreInfo={
                <div>
                  <p>
                    <span style={{ color: '#61C06A' }}>
                      <b>FREE</b>
                    </span>{' '}
                    Delivery <br /> <span style={{ fontSize: 'small' }}>($49 & up)</span>
                  </p>
                  <p>
                    <span style={{ color: '#61C06A' }}>
                      <b>FREE</b>
                    </span>{' '}
                    Welcome Box <br /> <span style={{ fontSize: 'small' }}>($59 value)</span>
                  </p>
                  <p>
                    <span style={{ color: '#61C06A' }}>
                      <b>FREE</b>
                    </span>{' '}
                    Seasonal Storage <br />
                    Up to 5 items & 1 Season <br /> <span style={{ fontSize: 'small' }}>($69 value)</span>
                  </p>
                  <br />
                  <sub>
                    * 5% Credit back is applied
                    <br /> every quarter [3 months]
                  </sub>
                </div>
              }
            />
          </div>
        </div>
        <p className="more-info-sect">
          For more info, see{' '}
          <span className="advantage-modal-text" onClick={() => setIsAdvantageModalOpen(true)}>
            Washmix Advantage
          </span>
        </p>
      </div>
    </div>
  );
};
