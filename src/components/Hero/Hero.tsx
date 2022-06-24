import React from 'react';

import styles from './Hero.module.scss';
import { Button } from 'ui';
import { ArrowRight } from 'icons';
import { useAuth } from 'hooks';

type Props = {
  img: string;
  imgAlt: string;
  title: string;
  subtitle: string;
};

export const Hero = ({ img, imgAlt, title, subtitle }: Props) => {
  const { user } = useAuth();
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <img className={styles.hero_image} src={img} alt={imgAlt} />
        <div className={styles.hero_block}>
          <div className={styles.hero_subtitle}>{subtitle}</div>
          <h1 className={styles.hero_title}>{title}</h1>
          <Button className={styles.hero_button} variant="accent" to={user?.token ? '/pickup' : '/registration'}>
            Request pickup
            <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
