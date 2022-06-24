import React, { ReactNode } from 'react';
import './PriceTable.scss';

type Props = {
  children: ReactNode;
};

export const PriceTable = ({ children }: Props) => {
  return (
    <div className="price-table">
      <div className="price-table__header">Item</div>
      <div className="price-table__header">Price ($)</div>
      <div className="price-table__header">Item</div>
      <div className="price-table__header">Price ($)</div>
      <div className="price-table__header">Item</div>
      <div className="price-table__header">Price ($)</div>
      {children}
    </div>
  );
};

type ItemProps = {
  children: ReactNode;
};

// eslint-disable-next-line react/display-name
PriceTable.Item = ({ children }: ItemProps) => <div className="price-table__cell">{children}</div>;
