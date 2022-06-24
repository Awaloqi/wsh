import React, { useCallback } from 'react';
import Collapse from '@kunukn/react-collapse';

import { Price } from 'api';
import { WashFold } from './WashFold';
import { Expand, Minimize } from 'icons';

type Props = {
  title: string;
  isOpen: boolean;
  id?: number;
  items?: Price[];
  image?: string;
  onOpen: (id?: number) => void;
};

export const PriceDetails = ({ id, isOpen, onOpen, title, image, items = [] }: Props) => {
  const toggle = useCallback(() => {
    onOpen(id);
  }, [onOpen, id]);

  return (
    <div className="price-details">
      <div className="header" onClick={toggle}>
        <div className="left">
          <img className="box" alt="icon" src={image} />
          <p className="title">{title}</p>
        </div>
        <span className="right">{isOpen ? <Minimize /> : <Expand />}</span>
      </div>
      <Collapse isOpen={isOpen}>
        <div className="details">
          {title === 'Wash & Folds' ? (
            <WashFold items={items} />
          ) : (
            items.map((item) => (
              <div className="flex" key={item.id}>
                <span>{item.title}</span>
                <span>
                  ${item.dollarAmount}
                  {item.prettyUnit === 'pcs' ? '' : `/${item.prettyUnit}`}
                </span>
              </div>
            ))
          )}
        </div>
      </Collapse>
    </div>
  );
};
