import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import { ButtonIcon } from 'ui';
import { ChevronRight } from 'icons';
import WashmixAdvantageModal from 'modals/WashmixAdvantageModal';

export const Advantage = () => {
  const history = useHistory();
  const [slide, setSlide] = useState(0);
  const [isAdvantageModalOpen, setIsAdvantageModalOpen] = useState(false);

  const goToNextPage = useCallback(async () => {
    if (slide === 0) {
      setSlide(1);
    }
    if (slide === 1) {
      history.push('/order/packages');
    }
  }, [history, slide]);

  return (
    <div>
      <WashmixAdvantageModal visible={isAdvantageModalOpen} onHide={() => setIsAdvantageModalOpen(false)} />
      <div className="pannel">
        {slide === 0 ? (
          <p>
            <b>How WashMix Works?</b>
            <br />
            <br />
            Option 1) <b>PAYC:</b> [Pay As You Clean]
            <br />
            Pay every time you send in an order to clean.
            <br />
            <br />
            Option 2) <b>WashMix Advantage™:</b>
            <br />
            Purchase tokens in advance and get exclusive <b>discounts & perks</b>
            <br />
            <p className="more-info-sect">
              For more info, see{' '}
              <span className="advantage-modal-text" onClick={() => setIsAdvantageModalOpen(true)}>
                Washmix Advantage
              </span>
            </p>
            {/* 3) AND get discounts on all services used throughout and until you go through the available credit{' '} */}
          </p>
        ) : (
          <>
            <p>
              <b>What is WashMix Advantage™ ?</b> <br /> <br />
              1) Buy tokens in advance
              <br />
              <br />
              2) Spend them whenver you need your clothes cleaned
              <br />
              <br />
              3) Get Exclusive <b>Discount & Perks</b>:
              <ul>
                <li>
                  {' '}
                  <b>20% </b>Discount on your orders <br />
                </li>
                <li>
                  {' '}
                  <b>5%</b> Credit Back <span style={{ fontSize: 'small' }}>[applied quarterly]</span> <br />
                </li>
                <li>
                  {' '}
                  <span style={{ color: '#36b3ea' }}>FREE</span> Pickup{' '}
                  <span style={{ fontSize: 'small' }}>[with Lower volume]</span> <br />
                </li>
                <li>
                  {' '}
                  <span style={{ color: '#36b3ea' }}>FREE</span> Delivery <br />
                </li>
                <li>
                  {' '}
                  <span style={{ color: '#36b3ea' }}>FREE</span> Welcome Box Kit{' '}
                  <span style={{ fontSize: 'small' }}>
                    [<b>$49 Worth</b>]
                  </span>{' '}
                </li>{' '}
                {/* <br /> */}
                <li>
                  {' '}
                  <span style={{ color: '#36b3ea' }}>FREE</span> Seasonal Garment Storage{' '}
                  <span style={{ fontSize: 'small' }}>[1 Season up to 5 items]</span>
                </li>
              </ul>
              <p className="more-info-sect">
                For more info, see{' '}
                <span className="advantage-modal-text" onClick={() => setIsAdvantageModalOpen(true)}>
                  Washmix Advantage
                </span>
              </p>
            </p>
            {/* <div className="top_bodr">
              <p>
                NEED MORE INFO? See the&nbsp;<Link to="/pricing">PRICE</Link>&nbsp;page
              </p>
            </div> */}
          </>
        )}
        <div className="slideButtonsContainer">
          <div
            className="slideButton"
            onClick={() => setSlide(0)}
            style={{ border: slide === 0 ? '3px solid gray' : 'none' }}
          ></div>
          <div
            className="slideButton"
            onClick={() => setSlide(1)}
            style={{ border: slide === 1 ? '3px solid gray' : 'none' }}
          ></div>
        </div>
      </div>

      <div className="top_bodr">
        <ButtonIcon variant="primary" label="Next" Icon={ChevronRight} onClick={goToNextPage} />
      </div>
    </div>
  );
};

export default Advantage;
