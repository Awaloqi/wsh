import React from 'react';
import './_advantages_comparison.scss';

export const AdvantagesComparison = () => {
  return (
    <div>
      <div className="full-width-container google_places_area py-5 d-flex justify-content-center">
        <div className="col-12 col-lg-8 col-md-10 col-sm-12">
          <h1 className="heading_big_large text-center pb-3 pb-md-4">
            What are the <b className="green-color-custom">benefits</b> of WashMix Advantage Program:
          </h1>
          <div className="d-flex flex-column-reverse flex-md-row">
            <div className="col-12 col-lg-6 col-md-12 col-sm-12 left_section p-0 p-md-3">
              <div className="text-left text-md-center d-none d-md-block pt-5 pb-3 pt-md-3">OPTION-1</div>
              <h4 className="text-left text-md-center py-2 pt-md-0 pb-md-3 advantage_heading fw-bold">Regular PAYC</h4>

              <div className="col-12 col-lg-12 col-md-12 col-sm-12  p-0 p-md-3">
                <ul>
                  <li>
                    <h4 className="li_heading">Pay as you clean</h4>
                    <p className="li_para">no prepaid credit option</p>
                  </li>
                  <li>
                    <h4 className="li_heading">
                      <span className="green-color-custom">NO</span> <span className="fw-normal">Discounts</span>
                    </h4>
                    <p className="li_para">
                      There are <span className="fw-bold green-color-custom">No</span> additional discounts applied
                    </p>
                  </li>
                  <li>
                    <h4 className="li_heading">
                      <span className="green-color-custom">NO</span> <span className="fw-normal">Extra Perks</span>
                    </h4>
                    <p className="li_para">
                      Does <span className="fw-bold">NOT</span> come with other perks{' '}
                    </p>
                  </li>
                  <li>
                    <h4 className="li_heading">Delivery</h4>
                    <p className="li_para">
                      Will require a higher volume for <span className="green-color-custom">Free</span> Delivery
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-12 col-sm-12 mb-4 mb-md-0 p-0 p-md-3 right_section">
              <div className="text-left text-md-center d-none d-md-block pt-5 pb-3 pt-md-3">OPTION-2</div>
              <h4 className="text-left text-md-center py-2 pt-md-0 pb-md-3 advantage_heading fw-bold">
                <span style={{ color: '#2ec35f' }}>WITH</span> WashMix Advantage™
              </h4>

              <div className="col-12 col-lg-12 col-md-12 col-sm-12  p-0 p-md-3">
                <ul>
                  <li>
                    <h4 className="li_heading">Purchase Credit Packs</h4>
                    <p className="li_para">& use toward any desired service</p>
                  </li>
                  <li>
                    <h4 className="li_heading">
                      <span className="green-color-custom">NO</span> <span className="fw-normal">Expiration</span>{' '}
                    </h4>
                    <p className="li_para">
                      Your available credit <span className="fw-bold">NEVER</span> expires
                    </p>
                  </li>
                  <li>
                    <h4 className="li_heading">Exclusive Discounts</h4>
                    <p className="li_para">
                      Additional & Up to <span className="fw-bold">20% Discount</span> on all services
                    </p>
                  </li>
                  <li>
                    <h4 className="li_heading">
                      <span className="green-color-custom">NO</span> <span className="fw-normal">Fees</span>
                    </h4>
                    <p className="li_para">
                      There are <span className="fw-bold green-color-custom">NO</span> monthly or annual subscription
                      fees.
                    </p>
                  </li>
                  <li>
                    <h4 className="li_heading">
                      <span className="green-color-custom">Free</span>{' '}
                      <span className="fw-normal">Pickup & Delivery</span>
                    </h4>
                    <p className="li_para">Lower volume will be required</p>
                  </li>
                  <li>
                    <h4 className="li_heading">
                      <span className="green-color-custom">Free</span>{' '}
                      <span className="fw-normal">Garment Storage Services</span>
                    </h4>
                    <p className="li_para">
                      As a <span className="fw-bold">WashMix Advantage™</span>
                      <span style={{ color: '#2ec35f' }}> Platinum Tier</span> client, you can take advantage of our
                      <span className="fw-bold"> Seasonal Garment Storage Services</span>. See Services for more details
                      *up to 5 items, and 1 season
                    </p>
                  </li>
                  <li>
                    <h4 className="li_heading">GREEN & Environmentally Minded</h4>

                    <p className="li_para">
                      <span className="fw-bold">HELP the Planet -</span>With{' '}
                      <span className="fw-bold">WashMix Advantage™</span>, receive your Welcome Box Kit, which will also
                      include Garment Bags. This is to help cut the use of plastic by more than 70%.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
