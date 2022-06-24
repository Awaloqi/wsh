import React from 'react';

import styles from './HeroPricing.module.scss';
import downArrow from 'assets/new-ui/pricing/downarrow.png';
type Props = {
  img: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  info: string;
};

export const HeroPricing = ({ img, imgAlt, title, subtitle, info }: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <img className={styles.hero_image} src={img} alt={imgAlt} />
        <div className={styles.hero_block}>
          <h1 className={styles.hero_title}>{title}</h1>
          <div className={styles.hero_subtitle}>{subtitle}</div>
          <div className={styles.hero_bangs}>
            <div className={styles.hero_onebang}>No Monthly Plans</div>
            <div className={styles.hero_onebang}>No Expiration Date</div>
            <div className={styles.hero_onebang}>No Fees</div>
          </div>
          <div className={styles.hero_info}>{info}</div>{' '}
        </div>
      </div>
      <div className={styles.downContainer}>
        <img src={downArrow} width="30px" alt="downArrow" />
      </div>
    </div>
  );
};
