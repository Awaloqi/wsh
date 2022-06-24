/* eslint-disable prettier/prettier */
import React from 'react';
import { Helmet } from 'react-helmet';


export const Prew = () => {
  return (
    <section className="home-content new-home-content">
        <Helmet>
            <title>WashMix — Laundry & Dry Cleaning with Delivery</title>
            <meta name="description" content="Laundry & Dry Cleaning with Delivery" />
        </Helmet>
        <div className="container">
            <div className="main row">
            <div className="info col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center' }}>
                <h1 className="title">
                We belive in Green and Environmentally Friendly Practices and have kept it this way, since the start.
                </h1>
                <span className="info-1-new info-1">OUR PROCESS IS GREEN, EFFICIENT & RELIABLE</span>
                <p>
                All with door-to-door Pickup & Delivery
                <br />
                [Home & Office]
                </p>
            </div>
            </div>
        </div>
    </section>
  );
};
