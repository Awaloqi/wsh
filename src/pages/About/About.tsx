import React from 'react';
import { Helmet } from 'react-helmet';

import { Body, Button, H2, H4, Title } from 'ui';

import styles from './About.module.scss';

import { Hero2 } from 'components/Hero2';
import aboutUs from 'assets/new-ui/about-us/hero-image.png';
import green from 'assets/new-ui/about-us/green.png';
import cover from 'assets/new-ui/about-us/cover.png';
import core from 'assets/new-ui/about-us/core.png';
import affordable from './assets/about_767.jpg';
import p1 from 'assets/new-ui/about-us/p1.png';
import p2 from 'assets/new-ui/about-us/p2.png';
import p3 from 'assets/new-ui/about-us/p3.png';
import as1 from 'assets/new-ui/services/as1.png';
import as2 from 'assets/new-ui/services/as2.png';
import as3 from 'assets/new-ui/services/as3.png';
import as4 from 'assets/new-ui/services/as4.png';
import as5 from 'assets/new-ui/services/as5.png';
import as6 from 'assets/new-ui/services/as6.png';
import as7 from 'assets/new-ui/services/as7.png';
import as8 from 'assets/new-ui/services/as8alt.png';
import greenTop from 'assets/new-ui/about-us/greenTop.png';
import { ContactsNew } from 'components/ContactsNew';
// import CountUp from 'react-countup';
import { BadgeContainer } from 'components/BadgeContainer';
import classNames from 'classnames';
import { useState } from '@storybook/addons';

export const About = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>WashMix — About us</title>
        <meta name="description" content="About washmix team" />
      </Helmet>
      <Hero2
        title={`Our Story`}
        subtitle=""
        img={aboutUs}
        imgAlt="Truck"
        info="With over 20 years providing our clients the highest quality service, with door-to-door delivery; our story started from a simple & small store front, operated with French Laundry method, which requires a more hands-on care with each garment. The same family operation, grew with its team of dedicated personnel to what it's become today. With key initiatives in prompt door-to-door delivery and all while keeping our environmentally friendly practices at the forefront of our operation.
Today, WashMix is on course to becoming THE premier Garment Care Provider and serving all our clients throughout with the best possible service at the most competitive pricing structure."
      />
      <div className={styles.paddedAboutUs}>
        <div className={styles.columnContainer}>
          <img src={greenTop} className={styles.hideOnMobile} alt="green" />
          <img src={green} className={styles.greenDesk} alt="green" />
        </div>
        <div>
          <h1 className={styles.centerOnMobile}>
            <span style={{ color: '#2ec35f' }}>Green</span> <br />
            <span style={{ color: '#39B6ED' }}>Initiatives</span>
          </h1>
          <p className={styles.paddedText}>
            <br />
            <br />
            We believe in Green and Environmentally Friendly Practices and have kept it this way, since the start.
            <br />
            <br />
            Here at WashMix, we operate our own processing plant equipped with state of the art machinery that is green
            and environmentally friendly. We do NOT operate any Perchlorethylene (PERC) which is a common chemical used
            in the industry and by some establishments.
            <br />
            <br />
            Our commitment being Green starts with out 100% Perc-FREE dry cleaning process. The State-of-the-art Union
            dry cleaning machines allow for not only more precision and quality, but also a greener clean in less time,
            saving energy each and every time.
          </p>
        </div>
      </div>
      <div className={styles.paddedAboutUs}>
        <div>
          <h1 className={styles.centerOnMobile}>
            <span style={{ color: '#39B6ED' }}>Garment</span> <br />
            <span style={{ color: '#39B6ED' }}>Cover</span>
          </h1>
          <p className={styles.paddedText}>
            <br />
            <br />
            Being Green doesn&apos;t just mean green cleaning. We not only meet the standard, but everyday, we come up
            with a new and innovative ways to make our process more efficient and effective.
            <br />
            <br />
            Together with the help of our customers, we help rid of the use of nearly 70% of the typical plastic bags
            used in covering the cleaned and pressed clothes.
            <br />
            <br />
            <i>All Advantage members receive their unique Garment Cover bags to help with this initiative.</i>
          </p>
        </div>
        <img src={cover} className={styles.blueDesk} alt="cover" />
      </div>
      <div className={styles.core_container}>
        <img className={styles.coreDesk} src={core} alt="core" />
        <div>
          <h1 style={{ color: '#39B6ED' }}>Our Core Values</h1>
        </div>
      </div>
      <div className={styles.paddedCore}>
        <div className={styles.values__value}>
          <H4 className={styles.values__title}>Environmentally Friendly</H4>
          <Body className={styles.values__description}>
            Our commitment to being green starts with our 100% perchloroethylene-free dry cleaning process. However,
            being Green doesn’t <b>just</b> mean green cleaning. But everyday, we come up with new and innovative ways
            to reduce environmental impact.
            <br />
            <br />
            <span style={{ color: 'gray' }}>
              [i.e. by eliminating the use of plastic bags by more than 50% andgrowing]
            </span>
          </Body>
        </div>
        <div className={styles.values}>
          <div className={styles.values__value}>
            <H4 className={styles.values__title}>Convenience & Reliability</H4>
            <Body className={styles.values__description}>
              While keeping Quality High and Reliability one of our top goals, Convenience is our forte, and it’s what
              we bring to all our customers.
            </Body>
          </div>
        </div>
      </div>
      <div className={classNames(styles.paddedCore, styles.affordable)}>
        <img
          src={affordable}
          className={styles.hideOnMobile}
          alt="affordabe"
          style={{ borderRadius: '0px 0px 130px 0px', width: '70%' }}
        />
        <div className={styles.values__value}>
          <H4 className={styles.values__title}>Affordable</H4>
          <Body className={styles.values__description}>
            High Quality, Reliable Service & Convenience could all match up to higher cost for services, but here at
            WashMix, our goal is to meet all those key values while being the most affordable and competitive
            establishment in the industry. NO “Middle-Man”, means we are passing the savings on to you.
          </Body>
        </div>
      </div>
      <div className={styles.achievements}>
        <div style={{ height: '1px', width: '70%', backgroundColor: 'gray' }} className={styles.hideOnMobile} />
        <div className={styles.achievementsPadded}>
          <h2 style={{ fontSize: '43px' }}>Our Achievements</h2>
          <h2>The Numbers</h2>
          <p>Our most notable achievements to date include:</p>
          <div className={styles.numberBox}>
            <div className={styles.singleBox}>
              <h3>Clients</h3>
              <br />
              <h3>45,000</h3>
              {/* <CountUp end={45000} duration={4} separator="," className={styles.stat} /> */}
              <p>WashMix Clients Served</p>
              <br />
              <h3>500</h3>

              {/* <CountUp end={500} duration={4} separator="," className={styles.stat} /> */}
              <p>Retail partners Served</p>
            </div>
            <div className={styles.dividerHori} />
            <div className={styles.singleBox}>
              <h3>WashMix Advantage Members</h3>
              <br />
              <h3>38,000</h3>

              {/* <CountUp end={38000} duration={4} separator="," className={styles.stat} /> */}
              <p>WashMix Advantage™ Members Served</p>
            </div>
            <div className={styles.dividerHori} />
            <div className={styles.singleBox}>
              <h3>Garments Processed</h3>
              <br />
              <h3>14,000,000</h3>
              {/* <CountUp end={14000000} suffix="+" separator="," duration={4} className={styles.stat} /> */}
            </div>
            <div className={styles.dividerHori} />
            <div className={styles.singleBox}>
              <h3>Green Initiatives</h3>
              <br />
              <h3>4,000,000</h3>
              {/* <CountUp end={4000000} suffix="+" separator="," duration={4} className={styles.stat} /> */}
              <p>Plastic Bags eliminated</p>
              <br />
              <h3>2,000,000</h3>
              {/* <CountUp end={2000000} suffix="+" separator="," duration={4} className={styles.stat} /> */}
              <p>Hangers Recycled</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.meetTheTeam}>
        <div className={styles.leftTitleContainer}>
          <H2 className={styles.meetTheTeam__title}>Meet the Team</H2>
          <div className={classNames(styles.leftTitleLine, styles.hideOnMobile)}></div>
        </div>
        <div className={styles.team}>
          <div className={styles.team__member}>
            <img className={styles.team__photo} src="/images/michael.jpg" alt="Michael Beheshtaein" />
            <H2 className={styles.team__title}>CEO</H2>
            <p className={styles.team__name}>
              Michael
              <br />
              Beheshtaein
            </p>
          </div>
          <div className={styles.team__member}>
            <img className={styles.team__photo} src="/images/amir.jpg" alt="Amir Beheshtaein" />
            <H2 className={styles.team__title}>CTO</H2>
            <Title className={styles.team__name}>
              Amir
              <br /> Beheshtaein
            </Title>
          </div>
          <div className={styles.team__member}>
            <img className={styles.team__photo} src="/images/franciska.jpg" alt="Franiciska, Szente" />
            <H2 className={styles.team__title}>COO</H2>
            <Title className={styles.team__name}>
              Franciska
              <br /> Szente
            </Title>
          </div>
        </div>
      </div>
      <div className={styles.message}>
        <H2 className={styles.message__title}>Personal Message</H2>
        <p className={styles.message__desc}>
          Convenient, Reliable, Affordable & Green.
          <br /> Experience Superior Service, Competitive Pricing & Unmatched convenience with WashMix.
        </p>
      </div>
      <div className={styles.paddedCore}>
        <h1 style={{ color: '#39B6ED', margin: '0 auto' }} className={styles.centerOnMobile}>
          Other Personnel
        </h1>
      </div>
      <div className={styles.paddedOther}>
        <div className={styles.onePCat}>
          <h2 style={{ color: '#39B6ED' }} className={styles.all_services_tag}>
            Press & Ironing Pro
          </h2>
          <div className={styles.onePCatInt}>
            <img src={p1} alt="p1" />
            <img src={p2} alt="p2" />
          </div>
        </div>
        <div className={styles.onePCat}>
          <h2 style={{ color: '#39B6ED' }} className={styles.all_services_tag}>
            Dry Cleaning Pro
          </h2>
          <div className={styles.onePCatInt}>
            <img src={p3} alt="p3" />
            <img src={p2} alt="p2" />
          </div>
        </div>
        <div className={styles.onePCat}>
          <h2 style={{ color: '#39B6ED' }} className={styles.all_services_tag}>
            Laundry Pro
          </h2>
          <div className={styles.onePCatInt}>
            <img src={p1} alt="p1" />
            <img src={p3} alt="p3" />
          </div>
        </div>
        <div className={styles.onePCat}>
          <h2 style={{ color: '#39B6ED' }} className={styles.all_services_tag}>
            Spot Cleaning Pro
          </h2>
          <div className={styles.onePCatInt}>
            <img src={p1} alt="p2" />
            <img src={p2} alt="p2" />
          </div>
        </div>
        <div className={styles.onePCat}>
          <h2 style={{ color: '#39B6ED' }} className={styles.all_services_tag}>
            Alterations & Repairs Pro
          </h2>
          <div className={styles.onePCatInt}>
            <img src={p1} alt="p1" />
            <img src={p2} alt="p2" />
          </div>
        </div>
        <div className={styles.onePCat}>
          <h2 style={{ color: '#39B6ED' }} className={styles.all_services_tag}>
            Leather Care Pro
          </h2>
          <div className={styles.onePCatInt}>
            <img src={p1} alt="p1" />
            <img src={p2} alt="p2" />
          </div>
        </div>
        <div className={styles.onePCat}>
          <h2 style={{ color: '#39B6ED' }} className={styles.all_services_tag}>
            Gown Preservation Pro
          </h2>
          <div className={styles.onePCatInt}>
            <img src={p1} alt="p1" />
            <img src={p2} alt="p2" />
          </div>
        </div>
      </div>
      <div className={styles.servicesWe}>
        <br />
        <div className={styles.leftTitleContainer}>
          <H2 className={styles.meetTheTeam__title}>About Services We Offer</H2>
          <div className={classNames(styles.leftTitleLine, styles.hideOnMobile)}></div>
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
          <div className={styles.all_services_block}>
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
      </div>
      <ContactsNew />
      <div className={styles.ready}>
        <h2 className={styles.ready_title}>So, You Ready?</h2>
        <Button variant="accent" to="/registration">
          Request Pickup
        </Button>
      </div>
      <BadgeContainer />
    </div>
  );
};
