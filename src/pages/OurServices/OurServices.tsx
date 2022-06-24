import React, { useCallback } from 'react';
import cn from 'classnames';
import { Helmet } from 'react-helmet';
import diagramVert from '../../assets/new-ui/services/processingDia.png';
import { Details } from './Details';

import styles from './OurServices.module.scss';
import diagram from '../../assets/new-ui/services/horiDia.png';

import leatherCareIcon from '../../assets/new-ui/services/leatherCare.png';
import preservationIcon from '../../assets/new-ui/services/gownP.png';
import rugCleaningIcon from '../../assets/new-ui/services/areaRug.png';

import downArrow from '../../assets/new-ui/services/downarrow.png';
import downArrowBlue from '../../assets/new-ui/services/downArrowBlueBack.png';
import closetImage from '../../assets/new-ui/services/closetGif.gif';
import servicesHero from '../../assets/new-ui/services/hero-image.png';
import { Hero2 } from 'components/Hero2';
import { AddressValues, GooglePlaces } from 'components/GooglePlaces';
import { useAuth } from 'hooks';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { useModal } from 'modals';
import { getZipCodes } from 'services/apiClient';
import { ContactsNew } from 'components/ContactsNew';
import as1 from 'assets/new-ui/services/as1.png';
import as2 from 'assets/new-ui/services/as2.png';
import as3 from 'assets/new-ui/services/as3.png';
import as4 from 'assets/new-ui/services/as4.png';
import as5 from 'assets/new-ui/services/as5.png';
import as6 from 'assets/new-ui/services/as6.png';
import as7 from 'assets/new-ui/services/as7.png';
import as8 from 'assets/new-ui/services/as8.png';
import { BadgeContainer } from 'components/BadgeContainer';

export const OurServices = () => {
  const { setZipCode, setAddressLine1 } = useAuth();
  const { data: zipCodes } = useQuery('locations', getZipCodes);
  const history = useHistory();
  const { openModal } = useModal();

  const handleSubmit = useCallback(
    (values: AddressValues) => {
      setZipCode(values.zipCode);
      setAddressLine1(values.addressLine1);
      if (zipCodes && zipCodes.includes(values.zipCode)) {
        history.push('/registration');
      } else {
        openModal('NOTIFY', values);
      }
    },
    [history, openModal, setAddressLine1, setZipCode, zipCodes],
  );
  return (
    <>
      <Helmet>
        <title>WashMix — Our Services</title>
        <meta name="description" content="Our Services" />
      </Helmet>
      {/* <Hero title="Services" subtitle="– About" img={nowSitBack} imgAlt="Services" /> */}
      <div className={styles.mainIn}>
        <div className={styles.containIn}>
          <Hero2
            title={'Care Service For Your Clothing.'}
            subtitle=""
            img={servicesHero}
            imgAlt="How It Works"
            info="We are the one-stop-shop for all your Laundry, Dry Clean, Wash & Folds, Alterations & Repair, as well as household items, Area Rug Cleaning, Leather Care & Gown Preservation"
          />
          <div className={styles.hori_block}>
            <h2 className={cn(styles.hori_title)}>All Services</h2>
            <div className={styles.downContainer}>
              <img src={downArrow} alt="downArrow" />
            </div>
          </div>
          <div className={styles.all_services_wrapper}>
            <div className={styles.all_services_block}>
              <img src={as3} className={styles.all_services_image} alt="service" />
              <p className={styles.all_services_tag}>Laundry</p>
            </div>
            <div className={styles.all_services_block}>
              <img src={as2} className={styles.all_services_image} alt="service" />
              <p className={styles.all_services_tag}>Dry Cleaning</p>
            </div>
            <div onClick={() => history.push('/services/wash-and-fold')} className={styles.all_services_block}>
              <img src={as1} className={styles.all_services_image} alt="service" />
              <p className={styles.all_services_tag}>Wash & Fold</p>
            </div>
            <div className={styles.all_services_block}>
              <img src={as4} className={styles.all_services_image} alt="service" />
              <p className={styles.all_services_tag}>Leather Care</p>
            </div>
            <div className={styles.all_services_block}>
              <img src={as5} className={styles.all_services_image} alt="service" />
              <p className={styles.all_services_tag}>Alteration & Repair</p>
            </div>
            <div className={styles.all_services_block}>
              <img src={as6} className={styles.all_services_image} alt="service" />
              <p className={styles.all_services_tag}>Preservation</p>
            </div>
            <div className={styles.all_services_block}>
              <img src={as7} className={styles.all_services_image} alt="service" />
              <p className={styles.all_services_tag}>Area Rug</p>
            </div>
            <div className={styles.all_services_block}>
              <img src={as8} className={styles.all_services_image} alt="service" />
              <p className={styles.all_services_tag}>Seasonal Storage</p>
            </div>
          </div>

          <div className={styles.sequence}>
            <div className={styles.hori_block}>
              <h2 className={cn(styles.hori_title)}>OUR PROCESS</h2>
            </div>
            <div className={styles.sequence_block}>
              <h2 className={styles.sequence_title}>
                From <b>YOU</b> to <b>OUR Processing Plant</b> and back to <b>YOU</b>
              </h2>
              <div className={styles.downContainer}>
                <img src={downArrowBlue} width="50px" alt="downArrow" />
              </div>
            </div>
            <div className={styles.sequence_block}>
              <img src={diagram} className={styles.dia_image} alt="process" />
              <img src={diagramVert} className={styles.dia_image_vert} alt="process" />
            </div>
          </div>

          <div className={styles.other_wrapper}>
            <div className={styles.hori_block}>
              <h2 className={cn(styles.hori_title)}>Other Services</h2>
              <div className={styles.downContainer}>
                <img src={downArrow} alt="downArrow" />
              </div>
            </div>{' '}
            <div className={styles.other_content}>
              <div className={styles.other_block}>
                <img className={styles.other_icon} src={leatherCareIcon} alt="leather icon" />
                <div>
                  <h3 className={styles.other_subTitle}>Leather Care &&nbsp;Restoration</h3>
                  <p className={styles.other_desc}>
                    We do ALL leather care, cleaning, conditioning and protection. From your personal apparel to
                    household items. This array of services includes hide, fur, suede and other similar items
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.other_content}>
              <div className={styles.other_block}>
                <img className={styles.other_icon} src={preservationIcon} alt="preservation icon" />
                <div>
                  <h3 className={styles.other_subTitle}>Preserving life’s most fleeting moments</h3>
                  <p className={styles.other_desc}>
                    With reputation for bridal apparel care and cleaning in the Bay Area, we are called upon to provide
                    specialized wedding gown preservation and restoration services to brides and bridal salons
                    throughout the Bay Area.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.other_content}>
              <div className={styles.other_block}>
                <img className={styles.other_icon} src={rugCleaningIcon} alt="rug icon" />
                <div>
                  <h3 className={styles.other_subTitle}>Area Rug Cleaning &&nbsp;Restoration</h3>
                  <p className={styles.other_desc}>
                    Professional Rug Cleaning is a crucial step to prolonging the life of your most loved, and in many
                    cases valuable piece of furniture at home
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.checkService}>
            <p style={{ fontSize: 'larger' }}>See if we service your area</p>
            <GooglePlaces onSubmit={handleSubmit} />
          </div>

          <div className={styles.closet}>
            <div className={styles.hori_block}>
              <h2 className={cn(styles.hori_title)}>Seasonal Garment Storage</h2>
            </div>
            <div className={styles.sequence_block}>
              <h2 className={styles.sequence_title}>
                <i> We help you store your clothes that are not in season and return back when in need</i>
              </h2>
              <div className={styles.downContainer}>
                <img src={downArrowBlue} width="50px" alt="downArrow" />
              </div>
            </div>
            <div className={styles.closet_content}>
              <img className={styles.closetImage} src={closetImage} alt="closet gif" />

              <div className={styles.closet_headlines}>
                <div className={styles.closet_block}>
                  <h3 className={styles.closet_subTitle}>The pain</h3>
                  <p className={styles.closet_description}>
                    Do you have a cluttered space and closet with clothes not yet in season?
                  </p>
                </div>
                <div className={styles.closet_block}>
                  <h3 className={styles.closet_subTitle}>the solution</h3>
                  <p className={styles.closet_description}>
                    Take advantage of WashMix Seasonal Garment Storage services & let us help you declutter.
                  </p>
                </div>

                <div className={styles.closet_block}>
                  <h3 className={styles.closet_subTitle}>the pleasure</h3>
                  <p className={styles.closet_description}>
                    We&apos;ll process & store your garments and return when needed*
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contacts}>
            <p className={styles.contacts_desc}>
              Fill out this form and submit.
              <br />A WashMix Team member will contact you within 24hrs.
            </p>

            <p className={styles.closet_note}>* One season is 3 months; You can store with us up to 2 seasons.</p>

            <Details />
            <p className={styles.closet_note_res}>
              * One season is 3 months;
              <br /> You can store with us up to 2 seasons.
            </p>
          </div>
          <ContactsNew />
          <BadgeContainer />
        </div>
      </div>
    </>
  );
};
