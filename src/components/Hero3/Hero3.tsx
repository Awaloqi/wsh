import React from 'react';

import styles from './Hero3.module.scss';
import { useAuth } from 'hooks';
import { Button } from 'ui';
import { ArrowRight } from 'icons';
import Image1 from '../../assets/services-icons/1.png';
import Image2 from '../../assets/services-icons/2.png';
import Image3 from '../../assets/services-icons/3.png';
import Image4 from '../../assets/services-icons/4.png';
import Image5 from '../../assets/services-icons/5.png';
import Image6 from '../../assets/services-icons/6.png';
import Image7 from '../../assets/services-icons/7.png';

type Props = {
  title: string;
  subtitle: string;
  info: string;
};

export const Hero3 = ({ title, subtitle, info }: Props) => {
  const { user } = useAuth();

  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <div className={styles.hero_block}>
          <div className={styles.hero_subtitle}>{subtitle}</div>

          <h1 className={styles.hero_title}>{title}</h1>
          <div className={styles.hero_info}>{info}</div>
          <Button className={styles.hero_button} variant="accent" to={user?.token ? '/pickup' : '/registration'}>
            Request pickup
            <ArrowRight />
          </Button>
        </div>
        <div className={styles.grid_container}>
          <div className={styles.image_grid}>
            <div className={styles.single_image_container}>
              <img className={styles.hero_image} src={Image1} alt={'serviceIcon'} />
              <h4 className={styles.image_tagline}>Dry Clean</h4>
            </div>

            <div className={styles.single_image_container}>
              <img className={styles.hero_image} src={Image2} alt={'serviceIcon'} />
              <h4 className={styles.image_tagline}>Laundry</h4>
            </div>
            <div className={styles.single_image_container}>
              <img className={styles.hero_image} src={Image3} alt={'serviceIcon'} />
              <h4 className={styles.image_tagline}>Wash N Fold</h4>
            </div>
            <div className={styles.single_image_container}>
              <img className={styles.hero_image} src={Image4} alt={'serviceIcon'} />
              <h4 className={styles.image_tagline}>Leather Care</h4>
            </div>
            <div className={styles.single_image_container}>
              <img className={styles.hero_image} src={Image5} alt={'serviceIcon'} />
              <h4 className={styles.image_tagline}>Alteration & Repair</h4>
            </div>
            <div className={styles.single_image_container}>
              <img className={styles.hero_image} src={Image6} alt={'serviceIcon'} />
              <h4 className={styles.image_tagline}>Preservation</h4>
            </div>
            <div className={styles.single_image_container}>
              <img className={styles.hero_image} src={Image7} alt={'serviceIcon'} />
              <h4 className={styles.image_tagline}>Rug Cleaning</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
