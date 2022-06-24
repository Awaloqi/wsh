import React from 'react';
import { Price } from 'api';

type Props = {
  items?: Price[];
};

export const WashFold = ({ items }: Props) => {
  if (!items) return null;
  return (
    <>
      <div className="flex">
        <span>
          Pay per Bag
          <p style={{ fontSize: '10px' }}>
            The more bag you send in at the same time the cheaper it gets. Until the 5th-8th bag at $49/bag
          </p>
        </span>
        <span>
          1 Bag = ${items[1].dollarAmount}
          <br />2 Bags = ${items[2].dollarAmount}
          <br />3 Bags = ${items[3].dollarAmount}
          <br />4 Bags = ${items[4].dollarAmount}
          <br />
        </span>
      </div>

      <div className="flex">
        <span>Each Bag after 4th through 8th</span>
        <span>
          ${items[5].dollarAmount}/{items[5].prettyUnit}
        </span>
      </div>
    </>
  );
};
