import React from 'react';
import './_washmix_process.scss';
import washmixProcessImgOne from '../../assets/washmix-process/Image-two.png';
import washmixProcessImgThree from '../../assets/washmix-process/img_three.png';
import washmixProcessImgGroupNine from '../../assets/washmix-process/Group9.png';
import washmixProcessImgGroupTen from '../../assets/washmix-process/Group10.png';
import washmixProcessImgGroupTwelve from '../../assets/washmix-process/Group12.png';
// import washmixProcessImgGroupEleven from '../../assets/washmix-process/Group11.png';
import weekly_recuring from '../../assets/washmix-process/weekly_recuring.png';
import washmixProcessImgFour from '../../assets/washmix-process/image_four.png';
import washmixProcessImgFive from '../../assets/washmix-process/image_five.png';
import washmixProcessImgSix from '../../assets/washmix-process/mblPic.png';
import washmixOurProcess from '../../assets/washmix-process/washmixOurProcess.png';
import washmixAndWan from '../../assets/washmix-process/washmixAndWan.png';
import cleanAndGreenOne from '../../assets/washmix-process/cleanAndGreenOne.png';
import cleanAndGreenTwo from '../../assets/washmix-process/cleanAndGreenTwo.png';
import ImgGrpOne from '../../assets/washmix-process/ImgGrpOne.png';
import ImgGrpTwo from '../../assets/washmix-process/ImgGrpTwo.png';
import ImgGrpThree from '../../assets/washmix-process/ImgGrpThree.png';
import ImgGrpFour from '../../assets/washmix-process/ImgGrpFour.png';
import ImgGrpFive from '../../assets/washmix-process/ImgGrpFive.png';
import Road from '../../assets/washmix-process/Road.png';
import Vector from '../../assets/washmix-process/Vector.png';
import VectorLeft from '../../assets/washmix-process/VectorLeft.png';
import WashmixWan from '../../assets/washmix-process/Washmix-wan.png';
import washmixProcessImgGroupThirteen from '../../assets/washmix-process/Group13.png';
import { SingleFAQ } from 'components/SingleFAQ';
import { ContactsNew } from 'components/ContactsNew';
import { AddressValues, GooglePlaces } from 'components/GooglePlaces';
import { BadgeContainer } from 'components/BadgeContainer';
import { useAuth } from 'hooks';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router';
import { getZipCodes } from 'services/apiClient';
import { useModal } from 'modals';
import { useCallback } from 'react';
import { Header } from '../../components/Header';

const WashmixProcess = () => {
  const { user, logout } = useAuth();
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
      <Header logout={logout} user={user} />
      <div>
        <div className="top_container col-12 w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="top_heading text-center mb-4">Washmix Process</div>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="w-100 process_container col-12 d-flex justify-content-center align-items-center">
          <div className="col-12 col-sm-8">
            <img src={washmixProcessImgOne} alt="" className="h-100 w-100" />
          </div>
        </div>
        <div className="bg_color_container d-flex justify-content-center w-100">
          <div className="content-container">
            <div className="home_heading text-light text-center my-3 my-sm-5">Home</div>
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6">
                <p className="bg_color_para text-light mb-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="bg_color_para text-light">
                  Mauris vitae ex egestas, volutpat orci fermentum, mattis tortor. Donec libero dui, rhoncus nec iaculis
                  ut, consequat quis lectus. Morbi tincidunt ligula eget luctus sagittis. Suspendisse a mi vel ligula
                  vulputate egestas.
                </p>
              </div>
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={washmixProcessImgThree} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center my-5 align-items-center">
              <div className="col-12 col-sm-8">
                <img
                  src={washmixProcessImgGroupNine}
                  alt=""
                  className="w-100"
                  style={{ objectFit: 'contain', height: '200px' }}
                />
              </div>
            </div>
            {/* 3 */}
            <div className="col-12 d-flex flex-row-reverse flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6">
                <p className="bg_color_para text-light mb-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="bg_color_para text-light">
                  Mauris vitae ex egestas, volutpat orci fermentum, mattis tortor. Donec libero dui, rhoncus nec iaculis
                  ut, consequat quis lectus. Morbi tincidunt ligula eget luctus sagittis. Suspendisse a mi vel ligula
                  vulputate egestas.
                </p>
              </div>
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={washmixProcessImgFour} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
              </div>
            </div>
            {/* 4 */}
            <div className="col-12 d-flex flex-wrap justify-content-center my-5 align-items-center">
              <div className="col-12 col-sm-8">
                <img
                  src={washmixProcessImgGroupTen}
                  alt=""
                  className="w-100"
                  style={{ objectFit: 'contain', height: '200px' }}
                />
              </div>
            </div>
            {/* 5 */}
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6">
                <p className="bg_color_para text-light mb-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="bg_color_para text-light">
                  Mauris vitae ex egestas, volutpat orci fermentum, mattis tortor. Donec libero dui, rhoncus nec iaculis
                  ut, consequat quis lectus. Morbi tincidunt ligula eget luctus sagittis. Suspendisse a mi vel ligula
                  vulputate egestas.
                </p>
              </div>
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={washmixProcessImgFive} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
              </div>
            </div>
            {/* 6 */}
          </div>
        </div>
        <div style={{ margin: '0 auto', marginTop: '-100px' }} className="content-container">
          <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-12 col-sm-8">
              <img
                src={washmixProcessImgGroupNine}
                alt=""
                className="w-100"
                style={{ objectFit: 'contain', height: '200px' }}
              />
            </div>
          </div>
        </div>
        {/* 7 */}
        <div style={{ margin: '0 auto' }} className="content-container">
          <div className="w-100 p-3 p-md-5">
            <img src={weekly_recuring} alt="" style={{ borderRadius: '2rem' }} className="w-100" />
          </div>
          <div className="col-12">
            <div className="col-12 col-sm-12 col-md-4">
              <div className="card_heading fw-bold">Lorem ipsum dolor sit amet</div>
              <p className="card_para">
                Mauris vitae ex egestas, volutpat orci fermentu mattis tortor. Donec libero dui, rhoncus nec iac ut,
                consequat quis lectus. Morbi tincidunt ligul eget luctus sagittis. Suspendisse a mi vel ligula vulputate
                egestas.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <div className="card_heading fw-bold">Lorem ipsum dolor sit amet</div>
              <p className="card_para">
                Mauris vitae ex egestas, volutpat orci fermentu mattis tortor. Donec libero dui, rhoncus nec iac ut,
                consequat quis lectus. Morbi tincidunt ligul eget luctus sagittis. Suspendisse a mi vel ligula vulputate
                egestas.
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-4">
              <div className="card_heading fw-bold">Lorem ipsum dolor sit amet</div>
              <p className="card_para">
                Mauris vitae ex egestas, volutpat orci fermentu mattis tortor. Donec libero dui, rhoncus nec iac ut,
                consequat quis lectus. Morbi tincidunt ligul eget luctus sagittis. Suspendisse a mi vel ligula vulputate
                egestas.
              </p>
            </div>
          </div>
        </div>
        {/* 8 */}
        <div style={{ margin: '0 auto' }} className="content-container">
          <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-12 col-sm-8">
              <img
                src={washmixProcessImgGroupTwelve}
                alt=""
                className="w-100"
                style={{ objectFit: 'contain', height: '200px' }}
              />
            </div>
          </div>
        </div>
        {/* 9 */}
        <div style={{ margin: '0 auto' }} className="content-container">
          <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-12 col-sm-6">
              <p style={{ color: '#757575' }} className="bg_color_para mb-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              <p style={{ color: '#757575' }} className="bg_color_para">
                Mauris vitae ex egestas, volutpat orci fermentum, mattis tortor. Donec libero dui, rhoncus nec iaculis
                ut, consequat quis lectus. Morbi tincidunt ligula eget luctus sagittis. Suspendisse a mi vel ligula
                vulputate egestas.
              </p>
            </div>
            <div className="col-12 col-sm-6 p-3 p-md-5">
              <img src={washmixProcessImgSix} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
        <div style={{ margin: '0 auto' }} className="content-container">
          <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-12 col-sm-8">
              <img
                src={washmixProcessImgGroupThirteen}
                alt=""
                className="w-100"
                style={{ objectFit: 'contain', height: '200px' }}
              />
            </div>
          </div>
        </div>

        {/* 10 */}
        <div style={{ marginTop: '-20px' }} className="bg_color_container d-flex justify-content-center w-100">
          <div className="content-container">
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={washmixAndWan} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
              </div>{' '}
              <div className="col-12 col-sm-6">
                <p className="bg_color_para text-light mb-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="bg_color_para text-light">
                  Mauris vitae ex egestas, volutpat orci fermentum, mattis tortor. Donec libero dui, rhoncus nec iaculis
                  ut, consequat quis lectus. Morbi tincidunt ligula eget luctus sagittis. Suspendisse a mi vel ligula
                  vulputate egestas.
                </p>
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center my-5 align-items-center">
              <div className="col-12 col-sm-8">
                <img
                  src={washmixProcessImgGroupTen}
                  alt=""
                  className="w-100"
                  style={{ objectFit: 'contain', height: '200px' }}
                />
              </div>
            </div>
            {/* 3 */}
            <div className="col-12 d-flex flex-row-reverse mb-5 pb-3 flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={washmixOurProcess} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
              </div>
              <div className="col-12 col-sm-6">
                <p className="bg_color_para text-light mb-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="bg_color_para text-light">
                  Mauris vitae ex egestas, volutpat orci fermentum, mattis tortor. Donec libero dui, rhoncus nec iaculis
                  ut, consequat quis lectus. Morbi tincidunt ligula eget luctus sagittis. Suspendisse a mi vel ligula
                  vulputate egestas.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          style={{ marginTop: '-130px' }}
          className="col-12 d-flex flex-wrap justify-content-center align-items-center"
        >
          <div className="col-12 col-sm-8">
            <img src={Road} alt="" className="w-100" style={{ objectFit: 'contain', height: '200px' }} />
          </div>
        </div>
        <div className="full-width-container bg_container mb-0 d-flex flex-column align-items-center justify-content-center">
          <div className="content-container">
            <div className="col-12 mt-5 d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={ImgGrpOne} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
                <img src={Vector} alt="" className="vector_postion_right" />
              </div>
              <div className="col-12 col-sm-6">
                <div className="image_group_heading mb-4">Lorem Ipsum Dummy</div>
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={ImgGrpTwo} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
                <img src={VectorLeft} alt="" className="vector_postion_left" />
              </div>
              <div className="col-12 col-sm-6">
                <div className="image_group_heading mb-4">Lorem Ipsum Dummy</div>
                <p className="image_group_para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={ImgGrpThree} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
                <img src={Vector} alt="" className="vector_postion_right" />
              </div>
              <div className="col-12 col-sm-6">
                <div className="image_group_heading mb-4">Lorem Ipsum Dummy</div>
                <p className="image_group_para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="content-container">
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={ImgGrpFour} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
                <img src={VectorLeft} alt="" className="vector_postion_left" />
              </div>
              <div className="col-12 col-sm-6">
                <div className="image_group_heading mb-4">Lorem Ipsum Dummy</div>
                <p className="image_group_para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="content-container mb-5">
            <div className="col-12 mb-5 d-flex flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={ImgGrpFive} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
              </div>
              <div className="col-12 col-sm-6">
                <div className="image_group_heading mb-4">Lorem Ipsum Dummy</div>
                <p className="image_group_para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div
          style={{ marginTop: '-100px' }}
          className="col-12 d-flex flex-wrap justify-content-center align-items-center"
        >
          <div className="col-12 col-sm-8">
            <img
              src={washmixProcessImgGroupTwelve}
              alt=""
              className="w-100"
              style={{ objectFit: 'contain', height: '200px' }}
            />
          </div>
        </div>
        <div style={{ marginTop: '-100px' }} className="bg_color_container d-flex justify-content-center w-100">
          <div className="content-container mt-5">
            <div className="col-12 d-flex  mt-5 flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6">
                <p className="bg_color_para text-light mb-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="bg_color_para text-light">
                  Mauris vitae ex egestas, volutpat orci fermentum, mattis tortor. Donec libero dui, rhoncus nec iaculis
                  ut, consequat quis lectus. Morbi tincidunt ligula eget luctus sagittis. Suspendisse a mi vel ligula
                  vulputate egestas.
                </p>
              </div>
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={cleanAndGreenTwo} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center my-5 align-items-center">
              <div className="col-12 col-sm-8">
                <img
                  src={washmixProcessImgGroupNine}
                  alt=""
                  className="w-100"
                  style={{ objectFit: 'contain', height: '200px' }}
                />
              </div>
            </div>
            {/* 3 */}
            <div className="col-12 d-flex flex-row-reverse flex-wrap justify-content-center align-items-center">
              <div className="col-12 col-sm-6">
                <p className="bg_color_para text-light mb-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <p className="bg_color_para text-light">
                  Mauris vitae ex egestas, volutpat orci fermentum, mattis tortor. Donec libero dui, rhoncus nec iaculis
                  ut, consequat quis lectus. Morbi tincidunt ligula eget luctus sagittis. Suspendisse a mi vel ligula
                  vulputate egestas.
                </p>
              </div>
              <div className="col-12 col-sm-6 p-3 p-md-5">
                <img src={cleanAndGreenOne} alt="" className="h-100 w-100" style={{ objectFit: 'contain' }} />
              </div>
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-center my-5 align-items-center">
              <div className="col-12 col-sm-8">
                <img
                  src={washmixProcessImgGroupTen}
                  alt=""
                  className="w-100"
                  style={{ objectFit: 'contain', height: '200px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="full-width-container">
          <img src={WashmixWan} alt="" style={{ height: '100vh' }} className="w-100" />
        </div>
        <div
          id="faq"
          style={{ margin: '0 auto' }}
          className="faq-block d-flex flex-column align-items-center content-container"
        >
          <h1>{'Wash & Fold FAQ'}</h1>
          <SingleFAQ
            question="What is Wash & Fold Services? What is Laundry?"
            answer={
              <ul>
                <li>
                  Wash & Fold and Laundry are very similar, with the main difference being that “Laundry” items are
                  individually processed, cleaned, <b>PRESSED</b>, and charged individually (i.e. one laundry shirt =
                  $4.95)
                  <b> vs.</b> in <b>Wash & Fold,</b> items are <b>washed</b> and <b>folded</b> [<b>NOT</b> Pressed].
                  Additionally, the order is charged by volume <b>[Per Bag]</b>.
                </li>
              </ul>
            }
          />
          <SingleFAQ
            question="Are there RUSH Services available for Wash & Fold? What is the typical turnaround time?"
            answer={
              <ul>
                <li>
                  <b>Expedited</b> Services are available upon request. You can request an <b>Expedited</b> service when
                  you submit your pickup request through your <b>online portal.</b>
                </li>
                <li>
                  The typical turnaround time is <b>2 Business Days.</b>
                </li>
              </ul>
            }
          />
          <SingleFAQ
            question="Do we need a separate bag for Wash & Folds?"
            answer={
              <ul>
                <li>
                  For Wash & Fold services you will require a <b>designated Wash & Fold</b> bag.
                </li>
                <li>
                  For your <b>FIRST order</b>, please use <b>any bag</b> and be sure to{' '}
                  <b>include a note inside your bag </b>
                  with your account detail + request for WASH & FOLD., <b>we’ll drop off</b> your designated Wash & Fold
                  bags for <b>future use.</b>
                </li>
              </ul>
            }
          />
          <SingleFAQ
            question="Can I include delicate items with my Wash & Fold?"
            answer={
              <ul>
                <li>
                  Wash & Fold is the most basic method of cleaning used primarily for{' '}
                  <b>sweats, undergarments, sheets, and towels.</b>
                </li>
                <li>
                  We recommend sending your delicate items [i.e. Cashmere Sweaters, Silk, and other similar items]
                  through Laundry and Dry Cleaning, which will undergo different processes and are individually
                  processed and charged. <b>Rule of thumb:</b> Wash & Folds are for typical items that you’d clean with
                  Washer and dry with a dryer machine.
                </li>
              </ul>
            }
          />
          <SingleFAQ
            question="How do I send in my FIRST Wash & Fold order?"
            answer={
              <ul>
                <li>
                  For your <b>FIRST order,</b> please use any bag you have but be sure to{' '}
                  <b>include a note inside your bag </b>
                  with your account detail + request for WASH & FOLD.,
                </li>
                <li>
                  We’ll drop off your designated Wash & Fold bags after your first pickup and for <b>future use.</b>
                </li>
              </ul>
            }
          />
        </div>
        <ContactsNew />
        <div style={{ margin: '0 auto' }} className="checkService content-container">
          <p style={{ fontSize: 'larger' }}>See if we service your area</p>
          <GooglePlaces onSubmit={handleSubmit} />
        </div>
        <BadgeContainer />
      </div>
    </>
  );
};

export default WashmixProcess;
