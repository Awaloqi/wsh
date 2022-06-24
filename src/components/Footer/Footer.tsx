import React from 'react';
import { Link } from 'react-router-dom';

import footerLogo from '../../assets/footer-logo.svg';
import SSL from '../../assets/SSL.png';

import { contacts } from '../../constants';
import { Facebook, Instagram, Twitter } from 'icons';

export const Footer = () => {
  const getCurrentDate = new Date();
  const currentYear = getCurrentDate.getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-2 col-md-1 footer-logo">
              <Link to="/">
                <img alt="Washmix Footer Logo" src={footerLogo} width="48" height="48" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-10 col-md-11 footer-widgets">
              <div className="row footer-sections">
                <div className="col-xs-12 col-sm-12 col-md-4 links col-1-">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/">WASHMIX</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      <Link to="/terms-of-use">Terms</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-2-">
                  <ul className="list-unstyled contact-info">
                    <li>CONTACT INFORMATION</li>
                    <li>
                      <a href={contacts.phoneLink}>{contacts.phoneLiteral}</a>
                    </li>
                    <li>
                      <a href={contacts.emailInfoLink}>{contacts.emailInfo}</a>
                    </li>
                    <li>
                      <a href={contacts.addressLink} target="_blank" rel="noopener noreferrer">
                        {contacts.address}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-3-">
                  <ul className="list-unstyled">
                    <li>FOLLOW US</li>
                    <li>
                      <a href="https://www.facebook.com/GetWashmix/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="icon" /> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/WashmixInfo/" target="_blank" rel="noopener noreferrer">
                        <Twitter className="icon" /> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/washmix/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="icon" /> Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-badges">
            <img src={SSL} alt="Powered by Stripe" width="200px" />

            <div id="yelp-biz-badge-rrc-rBoyJKLU665qJ7zE1dJvwQ">
              <a
                href="https://www.yelp.com/biz/washmix-mountain-view?utm_medium=badge_star_rating_reviews&utm_source=biz_review_badge%22"
                target="_blank"
                rel="noreferrer"
              >
                Check out WashMix on Yelp
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center">
        <p>© {currentYear} WashMix, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
