import React, { ReactNode, useCallback, useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';

import './Pricing.scss';
import { getPriceItems, getZipCodes } from 'services/apiClient';
import heroimage from '../../assets/new-ui/pricing/pricingHero.png';
import { HeroPricing } from 'components/HeroPricing';
import { PackagesFormNew } from './PackagesFormNew';
import { HowCreditWorks } from './HowCreditWorks';
import downArrowBlue from 'assets/new-ui/pricing/downArrowBlueBack.png';
import downArrow from 'assets/new-ui/pricing/downarrow.png';

import { ContactsNew } from 'components/ContactsNew';
import { AddressValues, GooglePlaces } from 'components/GooglePlaces';
import { useModal } from 'modals';
import { useHistory } from 'react-router';
import { useAuth } from 'hooks';
import benefit1 from 'assets/new-ui/pricing/benefit1.png';
import benefit2 from 'assets/new-ui/pricing/benefit2.png';
import benefit3 from 'assets/new-ui/pricing/benefit3.png';
import benefit4 from 'assets/new-ui/pricing/benefit4.png';
import { BadgeContainer } from 'components/BadgeContainer';

type HowItemProps = {
  img: string;
  value?: ReactNode;
  isRight: boolean;
};

const titleToLinkMapping: any = {
  Laundry: '',
  'Dry Cleaning': '',
  'Wash & Folds': '/services/wash-and-fold',
  Households: '',
  'Alterations & Repair': '',
  'Wedding Gowns': '',
  'Area Rug': '',
};

const HowItem = ({ img, value, isRight }: HowItemProps) => {
  return (
    <div className="howItemBlock" style={{ flexDirection: isRight ? 'row-reverse' : 'row' }}>
      <img className="howImage" src={img} alt="howImage" />
      <div>{value}</div>
    </div>
  );
};

export const Pricing = () => {
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
  const { data: priceItems } = useQuery('priceItems', getPriceItems);
  const [currentList, setCurrentList] = useState<any>([]);
  const [currentSelectedSection, setCurrentSelectedSection] = useState<string>('');

  useEffect(() => {
    if (priceItems) {
      setCurrentList(priceItems[0].itemList);
      setCurrentSelectedSection(priceItems[0].title);
    }
  }, [priceItems]);

  if (!priceItems) return null;

  return (
    <>
      <Helmet>
        <title>WashMix — Pricing</title>
        <meta name="description" content="Pricing" />
      </Helmet>
      <div className="main-in">
        <div className="contain-in">
          <div className="pricing">
            {/* <div>
          <h2 className="heading">
            Simple <b>Pricing</b>
          </h2>
        </div>
        <div>
          <p className="sub-heading">Sign up for WashMix Advantage™ to save more.</p>
        </div> */}
            <HeroPricing
              title="Get up to 20% Discount"
              subtitle="With WashMix Credits"
              img={heroimage}
              imgAlt="How It Works"
              info="Purchase the desired credit, put toward any desired service and get the exclusive disounts and ton of perks"
            />
            <div className="paddedPricing">
              <HowCreditWorks />
              <div className="hori_block">
                <h2 className="hori_title">
                  Pick the <b>BEST</b> Option that suits you
                </h2>
              </div>
              <div className="seq_block">
                <div className="downContainter">
                  <img src={downArrowBlue} width="50px" alt="downArrow" />
                </div>
              </div>
              <PackagesFormNew />
            </div>
            <div className="hori_block">
              <h2 className="hori_title">Washmix Advantage Benefits</h2>
            </div>
            <div className="seq_block">
              <h2 className="seq_desc">
                Join the WashMix Advantage Program, <br />& Unlock Exclusive Discount and Benefits
              </h2>
              <div className="downContainter">
                <img src={downArrow} width="30px" alt="downArrow" />
              </div>
            </div>
            <div style={{ gap: '2rem', display: 'flex', flexDirection: 'column' }}>
              <HowItem
                isRight={false}
                img={benefit1}
                value={
                  <>
                    <h4 className="howTitle">Credits never expies</h4>
                    <p className="howDesc">
                      Your prepurchased credit <b>Never</b> expires until you go through it all.
                    </p>
                  </>
                }
              />
              <HowItem
                isRight={false}
                img={benefit2}
                value={
                  <>
                    <h4 className="howTitle">Get Incredible Discounts</h4>
                    <p className="howDesc">
                      With the Advantage Membership, you&apos;ll get exclusive <br />
                      discounts on our already competetive prices.
                    </p>
                  </>
                }
              />
              <HowItem
                isRight={false}
                img={benefit3}
                value={
                  <>
                    <h4 className="howTitle">
                      <b>NO</b> Monthly Subscriptions
                    </h4>
                    <p className="howDesc">
                      There are <b>NO</b> monthly subscriptions and <b>NO</b> annual fees.
                    </p>
                  </>
                }
              />
              <HowItem
                isRight={false}
                img={benefit4}
                value={
                  <>
                    <h4 className="howTitle">Help the Planet</h4>
                    <p className="howDesc">
                      Platinum Members will recieve the <b>Welcome Box Kit,</b>
                      <br />
                      which includes everything you need to get started. <b>PLUS,</b> 2 garment bags. This will help cut
                      the use of plastic by 70%.
                    </p>
                  </>
                }
              />
            </div>
            <div className="item-prices">
              <div className="hori_block">
                <h2 className="hori_title">
                  Price List{' '}
                  <span style={{ color: '#2ec35f' }}>
                    <b>WITH</b>
                  </span>{' '}
                  Advantage Discounts
                </h2>
              </div>
              <div className="seq_block">
                <h2 className="seq_desc">Purchase credit in advance and unlock Exclusive Discounts</h2>

                <div className="downContainter">
                  <img src={downArrow} width="30px" alt="downArrow" />
                </div>
              </div>
              <div className="pricelistbar">
                {priceItems &&
                  priceItems.map(({ id, title, itemList, image }) => {
                    return (
                      <>
                        <div
                          key={id}
                          onClick={() => {
                            if (currentList !== itemList) {
                              setCurrentList(itemList);
                              setCurrentSelectedSection(title);
                            } else {
                              setCurrentList([]);
                              setCurrentSelectedSection('');
                            }
                          }}
                          className="baritem"
                        >
                          <img src={image} alt="img" className="barImage" />
                          <p
                            style={{
                              color: itemList === currentList ? '#38b6ed' : 'gray',
                              textDecoration: itemList === currentList ? 'underline' : 'none',
                              fontWeight: 'bold',
                              fontSize: 'larger',
                            }}
                          >
                            {title}
                          </p>
                        </div>
                        {itemList === currentList && (
                          <div className="pricesContainer">
                            <div className="paycPricing">
                              <p className="listTitle">PAYC</p>

                              <p>
                                Pay as you clean<br></br>
                              </p>
                              <p style={{ fontSize: '12px' }}>
                                <i>&nbsp;</i>
                              </p>
                              {currentList.map((item: any) => (
                                <div key={item.id} className="item-price">
                                  <p>{item.title}</p>
                                  <p className="amount">{item.dollarAmount}</p>
                                </div>
                              ))}
                              {currentSelectedSection === 'Wash & Folds' && (
                                <div className="more-info-section">
                                  For more info, see {currentSelectedSection}{' '}
                                  <a href={titleToLinkMapping[currentSelectedSection]}>Section</a>
                                </div>
                              )}
                            </div>
                            <div className="dividerHori" />
                            <div className="paidPricing">
                              <div className="paidPricingSplit">
                                <div className="paid_internal gold">
                                  <p className="listTitle" style={{ color: '#39B6ED' }}>
                                    GOLD
                                  </p>

                                  <p>Pre-pay Plan</p>
                                  <p style={{ fontSize: '12px' }}>
                                    <i>&nbsp;</i>
                                  </p>
                                  {currentList.map((item: any) => (
                                    <div key={item.id} className="item-price-paid">
                                      <p className="amount" style={{ color: '#39B6ED' }}>
                                        {(item.dollarAmount - item.dollarAmount * 0.1).toFixed(2)}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                <div className="dividerHori" />

                                <div className="paid_internal plat">
                                  <p className="listTitle" style={{ color: '#2ec35f' }}>
                                    PLATINUM
                                  </p>

                                  <p>Pre-pay Plan</p>
                                  <p style={{ fontSize: '12px', color: '#f05614', fontWeight: 'bold' }}>
                                    <i>BEST PRICE</i>
                                  </p>
                                  {currentList.map((item: any) => (
                                    <div key={item.id} className="item-price-paid">
                                      <p className="amount" style={{ color: '#2ec35f' }}>
                                        {(item.dollarAmount - item.dollarAmount * 0.25).toFixed(2)}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="dividerVert"></div>
                              <div className="paidPricingSplit">
                                <div className="paid_internal gold">
                                  <p className="listNote">
                                    DISCOUNTS <span style={{ color: '#39B6ED' }}>10% </span>
                                    <br />+ PERKS
                                  </p>
                                </div>
                                <div className="paid_internal plat">
                                  <p className="listNote">
                                    DISCOUNTS <span style={{ color: '#2ec35f' }}>20% </span>
                                    <br />+<span style={{ color: '#2ec35f' }}>5</span>% CREDIT BACK*
                                    <br />+ MOST PERKS
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}
              </div>
              {currentList.length > 0 ? (
                <div className="pricesContainer_desk_title">
                  <div className="paycPricingTitle">
                    {' '}
                    <h3>Option 1</h3>
                    <h4> Pay as you clean</h4>
                  </div>
                  <div className="paidPricingTitle">
                    {' '}
                    <h3>Option 2</h3>
                    <h4 style={{ color: '#39B6ED' }}>WashMix Advantage</h4>
                  </div>
                </div>
              ) : null}
              {currentList.length > 0 ? (
                <div className="pricesContainer_desk">
                  <div className="paycPricing">
                    <p className="listTitle">PAYC</p>

                    <p>Pay as you clean </p>
                    <p style={{ fontSize: '12px' }}>
                      <i>&nbsp;</i>
                    </p>
                    {currentList.map((item: any) => (
                      <div key={item.id} className="item-price">
                        <p>{item.title}</p>
                        <p className="amount">{item.dollarAmount}</p>
                      </div>
                    ))}
                    {/* {console.log(currentList, 'list')} */}
                    {currentSelectedSection === 'Wash & Folds' && (
                      <div className="more-info-section">
                        For more info, see {currentSelectedSection}{' '}
                        <a href={titleToLinkMapping[currentSelectedSection]}>Section</a>
                      </div>
                    )}
                  </div>
                  <div className="dividerHori" />
                  <div className="paidPricing">
                    <div className="paidPricingSplit">
                      <div className="paid_internal gold">
                        <p className="listTitle" style={{ color: '#39B6ED' }}>
                          GOLD
                        </p>

                        <p>Pre-pay plan</p>
                        <p style={{ fontSize: '12px' }}>
                          <i>&nbsp;</i>
                        </p>
                        {currentList.map((item: any) => (
                          <div key={item.id} className="item-price-paid">
                            <p className="amount" style={{ color: '#39B6ED' }}>
                              {(item.dollarAmount - item.dollarAmount * 0.1).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="dividerHori" />

                      <div className="paid_internal plat">
                        <p className="listTitle" style={{ color: '#2ec35f' }}>
                          PLATINUM
                        </p>

                        <p>Pre-pay plan</p>
                        <p style={{ fontSize: '12px', color: '#f05614', fontWeight: 'bold' }}>
                          <i>BEST PRICE</i>
                        </p>
                        {currentList.map((item: any) => (
                          <div key={item.id} className="item-price-paid">
                            <p className="amount" style={{ color: '#2ec35f' }}>
                              {(item.dollarAmount - item.dollarAmount * 0.25).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="dividerVert"></div>
                    <div className="paidPricingSplit">
                      <div className="paid_internal gold">
                        <p className="listNote">
                          DISCOUNTS <span style={{ color: '#39B6ED' }}>10% </span>
                          <br />
                          <br />+ PERKS
                        </p>
                      </div>
                      <div className="paid_internal plat">
                        <p className="listNote">
                          DISCOUNTS <span style={{ color: '#2ec35f' }}>20% </span>
                          <br />
                          <br />+<span style={{ color: '#2ec35f' }}> 5</span>% CREDIT BACK*
                          <br />
                          <br />+ MOST PERKS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <ContactsNew />
          <div className="checkService">
            <p style={{ fontSize: 'larger' }}>See if we service your area</p>
            <GooglePlaces onSubmit={handleSubmit} />
          </div>
          <BadgeContainer />
        </div>
      </div>
    </>
  );
};
