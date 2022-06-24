import React from 'react';

import styles from './Hero2.module.scss';

type Props = {
  img: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  info: string;
};

export const Hero2 = ({ img, imgAlt, title, subtitle, info }: Props) => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <img className={styles.hero_image} src={img} alt={imgAlt} />
        <div className={styles.hero_block}>
          <h1 className={styles.hero_title}>{title}</h1>
          <div className={styles.hero_subtitle}>{subtitle}</div>
          <div className={styles.hero_info}>{info}</div>
        </div>
      </div>
    </div>
  );
};
