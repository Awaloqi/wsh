import React, { ReactNode, useCallback } from 'react';
import { useQuery } from 'react-query';

import './PackagesForm.scss';
import { XS, NotMobile } from '../Responsive';
import packagesIcon from '../../assets/packages.svg';
import { getPackages } from '../../services/apiClient';
import { Package } from 'api';
import { prices } from '../../constants';
import { RadioStateless } from 'ui';
import { Check, Cross } from 'icons';

const CheckCross = ({ status }: { status: boolean }) => {
  return status ? <Check className="check active" /> : <Cross className="check" />;
};

type PriceItemProps = {
  desc: string;
  subDesc?: string;
  value?: ReactNode;
};

const PriceItem = ({ desc, subDesc, value }: PriceItemProps) => {
  return (
    <div className="item">
      <div className="left">
        <p>{desc}</p>
        {subDesc && <p className="sub">{subDesc}</p>}
      </div>
      <div className="right">
        <p>{value}</p>
      </div>
    </div>
  );
};

type PlanProps = {
  plan: Package;
  isInteractive: boolean;
  active: boolean;
  setActive?: (name: string) => void;
};

const Plan = ({ plan, isInteractive, active, setActive }: PlanProps) => {
  const { name, dollarPrice, description, dryClean, laundry, washFold, hasWelcomeBox, alterations } = plan;

  const handleSetActive = useCallback(() => {
    setActive?.(name);
  }, [setActive, name]);

  const getThresholdByName = (name: any) => {
    if (name === 'payc') return '69';

    if (name === 'gold') return '59';

    if (name === 'platinum') return '59';

    return '59';
  };

  return (
    <div className={`col stats ${plan.isMostPopular ? 'wider' : ''}`}>
      {plan.isMostPopular && <p className="badge"> Most Polular </p>}
      <div className="header">
        <div className="title">{name.toUpperCase()}</div>
        <div className="price">${dollarPrice}</div>
        <div className="desc">{description}</div>
      </div>
      <NotMobile>
        {(matches: boolean) =>
          matches && isInteractive ? (
            <div className="radio-btn-container">
              <RadioStateless
                name="package"
                checked={active}
                onChange={handleSetActive}
                variant="accent"
                value={name}
              />
            </div>
          ) : null
        }
      </NotMobile>
      <PriceItem desc="Dry Clean + Press Discounts" value={`${dryClean}%`} />
      <PriceItem desc="Laundry + Press Discounts" value={`${laundry}%`} />
      <PriceItem desc="Wash & Fold Discounts" value={`${washFold}%`} />
      <PriceItem desc="Alterations Discount" value={`${alterations}%`} />
      <PriceItem
        desc="FREE Pickup & Delivery"
        subDesc={`($${getThresholdByName(name)} & Up)`}
        value={<CheckCross status={true} />}
      />
      <PriceItem
        desc="FREE Welcome Box"
        subDesc={`($${prices.welcomeBoxValue} Value)`}
        value={<CheckCross status={hasWelcomeBox} />}
      />
      <PriceItem
        desc="FREE Seasonal Garment Storage"
        subDesc={`Up to 5 items & 1 Season ($${prices.seasonStorageValue}/ Value)`}
        value={<CheckCross status={plan.hasSeasonalGarment} />}
      />
      <PriceItem desc="5% Credit Back" subDesc="Applies quarterly" value={<CheckCross status={plan.hasCreditBack} />} />
    </div>
  );
};

type Props = {
  activeId?: string | null;
  onChange?: (name: string) => void;
};

export const PackagesForm = ({ activeId, onChange }: Props) => {
  const isInteractive = onChange != null;
  const { data: packages } = useQuery('packages', getPackages);
  if (!packages) return null;

  const getThresholdByName = (id: any) => {
    return '59';
  };

  packages.sort((a, b) => {
    if (a.id && b.id) {
      return a.id - b.id;
    } else {
      return 1;
    }
  });

  return (
    <div className={`packages-selection ${isInteractive && 'form'}`}>
      {isInteractive && (
        <div className="radio-btns">
          <div className="btn-group" role="group" aria-label="Package Selection">
            {packages.map((pk) => (
              <button
                key={pk.name}
                type="button"
                className={`btn ${pk.name.toUpperCase()} ${pk.name === activeId ? 'active' : ''}`}
                onClick={() => onChange?.(pk.name)}
              >
                {pk.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
      {!isInteractive && (
        <div className="header-image">
          <img src={packagesIcon} className="packages-img" alt="Packages" />
        </div>
      )}
      <div className="table">
        <div className="col description">
          <div className="header">
            <img style={{ marginBottom: 8 }} src={packagesIcon} className="packages-img" alt="Packages" />
          </div>
          <NotMobile>
            {(matches: boolean) => (matches && isInteractive ? <div className="radio-btn-container" /> : null)}
          </NotMobile>
          <PriceItem desc="Dry Clean + Press Discounts" />
          <PriceItem desc="Laundry + Press Discounts" />
          <PriceItem desc="Wash & Fold Discounts" />
          <PriceItem desc="Alterations Discount" />
          <PriceItem desc="FREE Pickup & Delivery " subDesc={`($${getThresholdByName(activeId)} & Up)`} />
          <PriceItem desc="FREE Welcome Box" subDesc={`($${prices.welcomeBoxValue} Value)`} />
          <PriceItem
            desc="FREE Seasonal Garment Storage"
            subDesc={`Up to 5 items & 1 Season ($${prices.seasonStorageValue}/ Value)`}
          />
          <PriceItem desc="5% Credit Back" subDesc="Applies quarterly" />
        </div>
        <XS>
          {(matches: boolean) => {
            if (matches && isInteractive) {
              const plan = packages.find(({ name }) => name === activeId);
              if (!plan) return null;
              return (
                <Plan plan={plan} isInteractive={isInteractive} active={plan.name === activeId} setActive={onChange} />
              );
            } else {
              return packages.map((plan) => (
                <Plan
                  key={plan.name}
                  plan={plan}
                  active={plan.name === activeId}
                  setActive={onChange}
                  isInteractive={isInteractive}
                />
              ));
            }
          }}
        </XS>
      </div>
    </div>
  );
};
