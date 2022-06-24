import React, { ReactNode } from 'react';

import './HowCreditWorks.scss';
import how1 from 'assets/new-ui/pricing/credit.png';
import how2 from 'assets/new-ui/pricing/expire.png';

import how3 from 'assets/new-ui/pricing/nono.png';
import downArrowBlue from 'assets/new-ui/pricing/downArrowBlueBack.png';
type HowItemProps = {
  img: string;
  value?: ReactNode;
  isRight: boolean;
};

const HowItem = ({ img, value, isRight }: HowItemProps) => {
  return (
    <div className="howItemBlock" style={{ flexDirection: isRight ? 'row-reverse' : 'row' }}>
      <img className="howImage" src={img} alt="howImage" />
      <div>{value}</div>
    </div>
  );
};

export const HowCreditWorks = () => {
  return (
    <div className="mainBody">
      <div className="hori_block">
        <h2 className="hori_title">How WashMix Advantage Program Works?</h2>
      </div>
      <div className="seq_block">
        <h2 className="seq_desc">Let me show you</h2>
        <div className="downContainter">
          <img src={downArrowBlue} width="50px" alt="downArrow" />
        </div>
      </div>
      <HowItem
        isRight={false}
        img={how1}
        value={
          <>
            <h4 className="howTitle"> GIVE YOURSELF THE CREDIT YOU DESERVE</h4>
            <p className="howDesc">
              <b>
                WashMix Advantage Program<sup>TM</sup>
              </b>
              , simply purchase credits in advance and spend them whenever you need your order(s) processed. Plus get{' '}
              <b>exclusive discounts & perks.</b>
            </p>
          </>
        }
      />
      <HowItem
        isRight={false}
        img={how2}
        value={
          <>
            <h4 className="howTitle">HASSLE-FREE with NO EXPIRATION</h4>
            <p className="howDesc">
              Your available credits <b>NEVER</b> expire. In short, you are <b>NOT</b> required to spend the credit by a
              set time.
            </p>
          </>
        }
      />
      <HowItem
        isRight={false}
        img={how3}
        value={
          <>
            <h4 className="howTitle">NO MONTHLY SUBSCRIPTION, NO ANNUAL FEE</h4>
            <p className="howDesc">
              There are <b>NO</b> monthly subscriptions or annual fees. Every penny goes toward the desired service.
            </p>
          </>
        }
      />
    </div>
  );
};
