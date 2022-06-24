import React from 'react';
import cn from 'classnames';

import { Check, Cross } from 'icons';
import styles from './PricingTable.module.scss';

type Props = {
  data: Array<{
    header: { title: string; subTitle: string; description: string; badge?: string };
    values: Array<{ title: string; description?: string; value: string | boolean }>;
  }>;
};

const CheckCross = ({ status }: { status: boolean }) => {
  return status ? (
    <Check className={cn(styles.table__icon, styles.table__icon___active)} />
  ) : (
    <Cross className={styles.table__icon} />
  );
};

export const PricingTable = ({ data }: Props) => {
  return (
    <div className={styles.table}>
      {data.map(({ header, values }) => (
        <div key={header.title} className={styles.table__section}>
          <div className={cn(styles.table__header, { [styles.table__header___featured]: header.badge })}>
            <div className={cn(styles.table__title, { [styles.table__title___featured]: header.badge })}>
              {header.title}
            </div>
            <div className={styles.table__subTitle}>{header.subTitle}</div>
            <div className={styles.table__description}>{header.description}</div>
            {header.badge && <div className={styles.table__badge}>{header.badge}</div>}
          </div>
          <div className={styles.table__descriptions}>
            {values.map(({ title, description }) => (
              <div key={title} className={styles.table__row}>
                <div className={styles.table__dataDescription}>
                  <div className={styles.table__dataTitle}>{title}</div>
                  <div className={styles.table__dataDescr}>{description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.table__values}>
            {values.map(({ title, value }) => (
              <div key={title} className={cn(styles.table__row, styles.table__row___values)}>
                {typeof value === 'string' && (
                  <div
                    className={cn(styles.table__dataValue, {
                      [styles.table__dataValue___featured]: header.badge,
                    })}
                  >
                    {value}
                  </div>
                )}
                {typeof value === 'boolean' && <CheckCross status={value} />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
