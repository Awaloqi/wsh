/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';

import './legal.scss';
import { Close } from 'icons';
import { Price } from './Price';
import { DeliveryFees } from './DeliveryFees';
import { PackagesForm } from 'components/Pricing';

export const TermsOfUse = () => {
  const history = useHistory();

  return (
    <div className="grid-container legal_container container">
      <Helmet>
        <title>WashMix — Terms & Conditions of Service</title>
        <meta name="description" content="Terms & Conditions of Service" />
      </Helmet>
      <div className="closeBtn">
        <button onClick={history.goBack}>
          <Close />
          <span>Close</span>
        </button>
      </div>
      <section className="page-container legal_content">
        <h1>Terms & Conditions of Service</h1>
        <p>
          <b>This Agreement was made effective on July 11, 2021, last updated on June 2, 2022.</b>
        </p>
        <h2>GENERAL DISCLAIMER</h2>
        <p>
          Welcome to WashMix.com (also known as WashMix Inc.) also referred to in this document as, (“WashMix”,
          “WashMix.com”, “WashMix Inc.”, “we” or “us”, “staff” or “employees”) , is a professional full-service, Dry
          Clean, laundry services provider, with home/residential and office delivery services provided by WashMix.com
          and/or WashMix Inc. (“WashMix”, “we” or “us”, “staff” or “employees”). All services are provided to Customers
          also referred to as “User, Users, you, your, his, hers”; is the person signing up to use services and products
          offered by WashMix, through registration on our website <Link to="/">www.washmix.com</Link>.
        </p>
        <p>
          This Terms of Service Agreement (“Agreement”) describes the terms and conditions that govern your use of and
          participation in Washmix services. WashMix services include all services offered in our website, web widgets,
          feeds, mobile device software applications, applications for third-party web sites and services, and any other
          mobile or online services and/or applications owned, controlled, or offered by Washmix (collectively the
          “service”). By accessing or using the Service, you signify that you have read, understood, and agree to be
          bound by this Agreement and to the collection and use of your information as set forth in the
          <Link to="/privacy-policy">Privacy Policy</Link>, whether or not you are a registered user of our Service.
          This Agreement applies to all visitors, users, and others who access the Service (“Users”).
        </p>
        <p>
          PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION. THIS AGREEMENT CONTAINS A
          MANDATORY ARBITRATION OF DISPUTES PROVISION THAT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO
          RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS, AND ALSO LIMITS THE REMEDIES AVAILABLE TO YOU IN
          THE EVENT OF DISPUTE.
        </p>
        <p>
          <b>
            THIS AGREEMENT CONTAINS A MANDATORY INDIVIDUAL ARBITRATION AND CLASS ACTION/JURY TRIAL WAIVER PROVISION THAT
            REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS
            ACTIONS.
          </b>
        </p>
        <p>
          We may, in our sole discretion, modify or update this Agreement from time to time, and so you should review
          this page periodically. When we change the Agreement, we will update the last modified date at the top of this
          page. If there are material changes to this Agreement, we will notify you either by prominently posting a
          notice of such changes prior to implementing the change or by directly sending you a notification. Your
          continued use of the Service after any such change constitutes your acceptance of the new Terms & Conditions
          of Service. If you do not agree to any of these terms or any future Terms & Conditions of Service, do not use
          or access (or continue to access) the Service.
        </p>
        <h2>Use of Our Service</h2>
        <p>
          <b>Please note the following information before placing your order with us:</b>
        </p>
        <h3>WashMix Inc. and/or WashMix.com Accounts:</h3>
        <p>
          Our Service, Services and Products requires that you open a user account (“Account”). In order to use services
          and products offered by WashMix Inc. ,WashMix.com, User also known as “Customer”, also referred to as “Users,
          you, your, his, hers”; is the person signing up to use services and products offered by WashMix, through
          WashMix.com. The User will need to submit personal information, including but not limited to address(es),
          phone number(s), email(s), and pick the desired service. User Accounts are categorized as “PAYC, Pay As You
          Clean” <b>OR</b> “Advantage Program” also known as “VIP Accounts, Advantage Member, or Advantage”. These are
          Account tiers or levels that the User or “Customer” can pick from prior to using WashMix services. A User will
          be categorized in one of the two categories. The user can then proceed to using any services WashMix offers
          through WashMix.com. These tiers and/or categories are there to distinguish Users into regular Customers who
          pay as they use the service, or a part of the Advantage Program, which qualifies the User for ongoing
          discounts and other perks and benefits as showcased in our website.
        </p>
        <p>
          When applying for and creating your Account, you must provide accurate and complete information and keep such
          information updated and accurate throughout the term of this Agreement. You are solely responsible for the
          activity that occurs on your Account, and you must keep your Account password secure. You must notify Washmix
          immediately of any breach of security or unauthorized use of your Account. WashMix will not be liable for any
          losses caused by any unauthorized use of your Account.
        </p>
        <p>
          You may control your individual profile (also known as “Customer Dashboard”, or “Profile”), and how you
          interact with the Service by changing the options in your profile preferences and profile settings. By
          providing Washmix your email address, and cell phone (used for call/text purposes) you consent to our using of
          the email address and phone number to send you Service- related email, calls/text messages [Text & Data
          charges may/will be applied by your service provider], including any notices required by law, in lieu of
          communication by postal mail. By providing Washmix your cell phone number, you consent to using the phone
          number to send you Service-related SMS (Short Message Service) messages. You may not opt out of
          Service-related emails or SMS messages, while also using Services offered through WashMix.com.
          <b>
            BY SIGNING FOR AN ACCOUNT AT WASHMIX.COM AND PROVIDING YOUR MOBILE PHONE NUMBER, YOU AGREE TO RECEIVE TEXT
            MESSAGES FROM US.{' '}
          </b>
          We may also use your email address and/or cell phone number to send you other messages, such as changes to
          features of the Service and special offers. If you do not want to receive such messages, you may opt out.
          Opting out may prevent you from receiving messages regarding, fulfilling of your pickup request, order status,
          updates, improvements, or offers, and other service related information.
        </p>
        <h3>Service Rules</h3>
        <p>
          You agree not to engage in any of the following prohibited activities: (i) copying, distributing, or
          disclosing any part of the Service in any medium, including without limitation by any automated or
          non-automated "scraping"; (ii) using any automated system, including without limitation "robots, "spiders,"
          "offline readers," etc., to access the Service in a manner that sends more request messages to the WashMix
          servers than a human can reasonably produce in the same period of time using a conventional online web
          browser, except that Washmix grants the operators of public search engines revocable permission to use spiders
          to copy materials from Washmix.com for the sole purpose of and solely to the extent necessary for creating
          publicly available searchable indices of the materials but not caches or archives of such materials; (iii)
          transmitting spam, chain letters, or other unsolicited email; (iv) attempting to interfere with, compromise
          the system integrity or security, or decipher any transmissions to or from the servers running the Service;
          (v) taking any action that imposes or may impose at our sole discretion an unreasonable or disproportionately
          large load on our infrastructure; (vi) uploading invalid data, viruses, worms, or other software agents
          through the Service; (vii) collecting or harvesting any personally identifiable information, including Account
          names, from the Service; (viii) using the Service for any commercial solicitation purposes; (ix) impersonating
          another person or otherwise misrepresenting your affiliation with a person or entity, conducting fraud, or
          hiding or attempting to hide your identity; (x) interfering with the proper working of the Service; (xi)
          accessing any content on the Service through any technology or means other than those provided or authorized
          by the Service; or (xii) bypassing the measures we may use to prevent or restrict access to the Service,
          including, without limitation, features that prevent or restrict the use or copying of any content, or enforce
          limitations on use of the Service or the content therein. WashMix, WashMix.com or WashMix Inc. may permanently
          or temporarily terminate, suspend, or otherwise refuse to permit your access to the Service without notice and
          liability for any reason, including if, in WashMix sole determination, you violate any provision of this
          Agreement, or for no reason. Upon termination for any reason or no reason, you continue to be bound by this
          Agreement. All aspects of the Service are subject to change or elimination at WashMix sole discretion. WashMix
          reserves the right to interrupt the Service with or without prior notice for any reason or no reason. You
          agree that WashMix will not be liable to you for any interruption of the Service, delay, or failure to
          perform.
        </p>
        <h4>Termination</h4>
        <p>
          You may terminate your participation in the Service at any time, for any reason, upon receipt by us of your
          written or email notice of termination. We may terminate your participation in the Service at any time, for
          any reason or no reason, without explanation. We maintain sole discretion to bar your use of the Service in
          the future, for any reason that we determine or for no reason. This Agreement will remain in effect after your
          participation in the Service terminates. IF you are participating in the WASHMIX ADVANTAGE PROGRAM and have
          remaining balance in your account, your remaining balance will be refunded to you minus the discounts that was
          provided to you during the time you used the service [i.e. If you started with $299 Platinum Plan and you used
          $100 worth of service, and your remaining balance is $199, per the Platinum Plan tier you have received at
          least 20% discount on the $100 used [i.e. $20]. The deduction in this case will therefore be $20. Discounts
          are provided with the mindset that the customer will use their pre-purchased credit, if however they decide to
          terminate the account early and BEFORE the complete use of their available balance, the only deduction is the
          discount portion that was provided to the customer; in this example = $20; and per this example the total
          refund will be “$199 - $20 = $179”.
        </p>
        <p>
          If any questions, contact us via <a href="mailto:CS@washmix.com">CS@washmix.com</a>
        </p>
        <h4>Arbitration</h4>
        <p>
          <b>
            READ THIS SECTION CAREFULLY BECAUSE IT REQUIRES THE PARTIES TO ARBITRATE THEIR DISPUTES AND LIMITS THE
            MANNER IN WHICH YOU CAN SEEK RELIEF FROM COMPANY.
          </b>
          . For any dispute with WashMix (or WashMix.com or WashMix Inc.), you agree to first contact us and attempt to
          resolve the dispute with us informally. In the unlikely event that Washmix has not been able to resolve a
          dispute it has with you after attempting to do so informally, we each agree to resolve any claim, dispute, or
          controversy (excluding any WashMix claims for injunctive or other equitable relief) arising out of or in
          connection with or relating to this Agreement, or the breach or alleged breach thereof (collectively,
          "Claims"), by binding arbitration. You may notify us via email{' '}
          <a href="mailto:CS@washmix.com">CS@washmix.com</a> or via CALL (415-993-WASH) [415-993-9274] OR
          [650-533-5127]. Be sure to always include your account detail (Name + Address + Inquiry).
        </p>
        <h2>Class Action/Jury Trial Waiver</h2>
        <p>
          WITH RESPECT TO ALL PERSONS AND ENTITIES, REGARDLESS OF WHETHER THEY HAVE OBTAINED OR USED THE SERVICE FOR
          PERSONAL, COMMERCIAL, OR OTHER PURPOSES, ALL CLAIMS MUST BE BROUGHT IN THE PARTIES’ INDIVIDUAL CAPACITY AND
          NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. THIS WAIVER APPLIES TO
          CLASS ARBITRATION, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE MORE THAN ONE PERSON’S
          CLAIMS. YOU AGREE THAT, BY ENTERING INTO THIS AGREEMENT, YOU AND WASHMIX ARE EACH WAIVING THE RIGHT TO A TRIAL
          BY JURY OR TO PARTICIPATE IN A CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL ACTION, OR OTHER
          REPRESENTATIVE PROCEEDING OF ANY KIND.
        </p>
        <h3>Entire Agreement/Severability</h3>
        <p>
          This Agreement, together with all amendments, all documents referenced in this Agreement, and any other legal
          notices and agreements published by WashMix via the Service, shall constitute the entire agreement between you
          and WashMix concerning the Service. If a court of competent jurisdiction deems any provision of this Agreement
          invalid, the invalidity of such provision shall not affect the validity of the remaining provisions of this
          Agreement, which shall remain in full force and effect.
        </p>
        <h2>Privacy</h2>
        <p>
          We care about the privacy of our Users. Our <Link to="/privacy-policy">Privacy Policy</Link> outlines how we
          use and safeguard your information. You understand that by using the Service, you are consenting to the
          collection, use, and disclosure of your personally identifiable information and aggregate data as set forth in
          our Privacy Policy, and to have your personally identifiable information collected, used, transferred to, and
          processed in the United States.
        </p>
        <h2>Security</h2>
        <p>
          We have implemented commercially reasonable technical and organizational measures designed to secure your
          personal information from accidental loss and from unauthorized access, use, alteration, or disclosure.
          However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or
          use your personal information for improper purposes. You acknowledge that you provide your personal
          information at your own risk.
        </p>
        <h2>Services & Products Summary, Disclaimers, Terms and Use</h2>
        <h3>WASHMIX ADVANTAGE PROGRAM™:</h3>
        <p>
          WashMix Advantage Program, discounts and benefits may change throughout the time and while WashMix.com is
          operating and while customers use the services provided by WashMix.com. However, upon signing up, the
          discounts,amount of purchase, and benefits will be valid until the end of the credit. At any time when
          customers’ account is replenished, or reloaded with their Advantage Program they are agreeing to the new terms
          and conditions [IF any changes have been made]. We recommend that all customers review the terms and
          conditions and privacy policy statement periodically, or at least before replenishing their account to review
          [IF] any changes have been made to the discounts, benefits or promotions.
        </p>
        <p>
          If any questions, contact us via <a href="mailto:CS@washmix.com">CS@washmix.com</a>
        </p>

        <p>
          User Accounts are categorized as “PAYC, Pay As You Clean” OR “Advantage Program” also known as “VIP Accounts,
          Advantage Member, Advantage, or VIP”. These are Account tiers or levels that the User or “Customer” can pick
          from prior to using WashMix services. A User will be categorized in one of the two categories. The user can
          then proceed to using any services WashMix offers through WashMix.com. These tiers and/or categories are there
          to distinguish Users into regular Customers who pay as they use the service, or a part of the Advantage
          Program, which qualifies the User for ongoing discounts and other perks and benefits as showcased in our
          website. Customers are able to upgrade or downgrade their membership status whenever they best see fit, but we{' '}
          <b>highly recommend</b> to do this when at a $0.00 balance or when low in funds [low in funds is funds equal
          or less than $19]. This is because when account tiers are changed from one to another category, the discounts
          and benefits go into effect immediately.
        </p>
        <ul>
          <li>
            For example, if a user has initially signed up for the Platinum Tier [$299 Credit was purchased in advance]
            to qualify for perks and discounts [For example 20% off their Dry Cleaning services], if the User has $100
            left and switches their account to Gold, their discount will adjust immediately and therefore for the
            remainder of the $100 they will only get what is applicable to them per their tier [in this example, Gold -
            10% Discount on Dry Cleaning].
          </li>
          <li>
            Customers may notify us via email <a href="mailto:CS@washmix.com">CS@washmix.com</a> or via CALL
            (415-993-WASH) [415-993-9274] OR [650-533-5127] if any questions pertaining to this. Be sure to always
            include your account detail (Name + Address + Inquiry).
          </li>
        </ul>
        <p>
          The prepaid Credits purchased through the Advantage Program(s) (also known as VIP Member, Advantage, and
          Advantage Member, Advantage Account) are <b>non-refundable and non-transferable</b>. Customers who purchase
          the credits (also known also as “Prepaid Credits”) over the phone and/or in our website{' '}
          <Link to="/">www.washmix.com</Link> are aware that they must use the entire credit before terminating their
          service. Should Advantage Member customers have any remaining Credit in their account, they’re advised to use
          the available credit(s) before terminating their Advantage account.{' '}
          <b>The prepaid credits through the Advantage Program do not expire until 12 months after purchase.</b>{' '}
          However, Customers reaching the 12-months mark can notify us via email{' '}
          <a href="mailto:CS@washmix.com">CS@washmix.com</a> prior to this date to roll over their credit. There are no
          guarantees that credits will automatically get rolled over to the next year if unused.{' '}
          <i>Be sure to always include your account detail (Name + Address + Inquiry)</i>. When upgrading your account
          (i.e. Gold Plan to Platinum Plan) you can do so via your online portal (also known as “Customer Dashboard” or
          “Profile”) <b>OR</b> by calling us directly (415-993-WASH) [415-993-9274] OR [650-533-5127] or by email{' '}
          <a href="mailto:CS@washmix.com">CS@washmix.com</a> - Be sure to always include your account details (Name +
          Address + Inquiry). When your account is upgraded the new discount will be reflected on the next order
          received. The available credit that you may have in your account prior to the upgrade will be added to the new
          credit amount. When upgrading your account, or changing the account status, your Credit Card (on file) will be
          charged per the new upgraded plan.
        </p>
        <ul>
          <li>
            - For example, if you have started with the Gold Plan ($199), and have $50 left in your account, but decide
            to upgrade your account to the Platinum Plan ($299), your card will be charged $299, and your account will
            be upgraded to the Platinum tier; meanwhile you will (in this example) have $349 remaining credit in your
            account, while receiving all the benefits of the Platinum tier account.
          </li>
        </ul>
        <p>
          The same procedure will occur when downgrading to GOLD or PAYC (Pay As You Clean), and WashMix will charge you
          for the new plan (Gold) and downgrade your account to reflect the new discount and perks for the specified
          plan.
        </p>
        <ul>
          <li>
            IF you are terminating your Advantage status and going to PAYC (Pay As You Clean) model, the available
            credit will be rolled over, however your account is now a PAYC (Pay As You Clean) account, which will lose
            the ongoing discounts and perks per Advantage Account and reflect on your next and upcoming orders.
          </li>
        </ul>
        <p>
          Users can downgrade or upgrade their account as they wish. Users are also aware that they must check their
          balance and keep track of their available credits; this can also be done through our website and customer’s
          online web portal (also known as “Customer Dashboard” or “Profile”). Users are aware that WashMix and its
          staff will recharge the Users’ (also known as “Customer”) Credit Card on file to replenish the account when at
          $0.00 balance, or if at negative standing or at times when there is not enough credit to cover the entire
          order or when available balance in account falls below $29. When re-charged and replenished, the customers’
          card will be charged according to the last plan they had
        </p>
        <ul>
          <li>
            For example, if a customer was previously on the Platinum tier account, the recharge in this case will be
            $299.
          </li>
          <li>
            IF WashMix Staff feel the available Credit will not be enough to cover the order, the Customer is aware that
            their account may be replenished (re-charged according per their last plan) with the Credit Card on file.
            This is to avoid the account falling into the negative balance & delay in delivery due to insufficient
            funds.
          </li>
        </ul>
        <h3>FREE PROMOTIONAL SEASONAL GARMENT STORAGE SERVICES [WashMix Advantage Members - PLATINUM TIER ONLY]:</h3>

        <p>
          The Free Promotional Seasonal Garment Storage service is only free for upto 5 items, for 1 season for
          customers who are enrolled in the Advantage Program Platinum tier, and while still enrolled AND active in the
          Aadvantage Program Platinum Tier, simultaneously. Seasonal Garment Storage services [Upto 5 items & 1 Season
          ($69/value) as indicated in <Link to="/pricing">www.washmix.com/pricing</Link> is for promotional purposes
          only, and this extended offer is only valid for the Platinum Tier members, while still enrolled in the
          Advantage Program. Should customers wish to cancel their membership, this will also and in effect, cancel the
          free promotional Seasonal Garment Storage services. If WashMix is still offering this service, customers can
          extend the Seasonal Garment Storage services, and pay for this service separately. WashMix.com can at any time
          cancel this promotion, but will value the promotion for customers who’ve signed up before the end of the
          promotion and until the end of the season. The Seasonal Garment Storage services can end at any time, however
          customers will be informed should this happen and their garments will be delivered back at the end of the
          season or sooner if needed.
        </p>
        <p>
          If any questions, contact us via <a href="mailto:CS@washmix.com">CS@washmix.com</a>
        </p>
        <h3>WELCOME BOX [WashMix Advantage Members]:</h3>
        <p>
          Welcome Box, will consist of all the necessary items Customers need for using services available through
          WashMix.com. Customers will receive information packets regarding services, and important notes.
        </p>
        <ul>
          <li>
            Platinum level clients will receive this box FREE of charge, and will receive two counter-laundry bags and a
            garment bag for their convenience. WashMix and WashMix.com may include the Welcome Box to all new clients
            free of charge for promotional purposes, however it is not intended to be free to all. Charges may apply to
            clients who are not part of the <Link to="/pricing">WashMix Advantage Program™</Link>.
          </li>
        </ul>
        <h3>TERMINATING YOUR WASHMIX ADVANTAGE™ PROGRAM ACCOUNT:</h3>
        <p>
          Customers at WashMix.com are able to terminate their service with the WashMix Advantage™ Program at any time
          they wish. However, if you are on any of the WashMix Advantage™ Programs and have available Credit in your
          account, <b>we will NOT be able to make any refunds.</b>
        </p>
        <ul>
          <li>All your available credit(s) must be used prior to terminating the account.</li>
          <li>
            IF however, your card has just been charged for a Refill ($199 or $299) and you did not wish to refill, you
            can request a full refund of the remaining credit (minus the discounts provided if ANY) within{' '}
            <b>14 business days</b> from the date the charge was processed and terminate your Advantage account and/or
            switch to PAYC (Pay As You Clean).
          </li>
        </ul>
        <p>
          (For more information, Email us at <a href="mailto:CS@washmix.com">CS@washmix.com</a> or call us at
          (415-993-WASH) [415-993-9274] OR [650-533-5127]. Be sure to always include your account detail (Name + Address
          + Inquiry). You may end your legal agreement with WashMix and/or WashMix.com at any time after using your
          available Credit in your account by notifying us via email at{' '}
          <a href="mailto:CS@washmix.com">CS@washmix.com</a> or call us at (415-993-WASH) [415-993-9274] OR
          [650-533-5127]. Be sure to always include your account detail (Name + Address + Inquiry). We may suspect or
          terminate your account or cease providing you with all or part of the Services at any time for any or no
          reason.
        </p>
        <ul>
          <li>
            Any personal belongings - such as garments you have at our processing plants that have been serviced and
            paid for, will be delivered back to you [to your address on file and within our delivery route/radius] prior
            or after termination.
          </li>
        </ul>
        <p>
          IF you are participating in the WASHMIX ADVANTAGE PROGRAM and have remaining balance in your account, your
          remaining balance will be refunded to you minus the discounts that was provided to you during the time you
          used the service [i.e. If you started with $299 Platinum Plan and you used $100 worth of service, and your
          remaining balance is $199, per the Platinum Plan tier you have received at least 20% discount on the $100 used
          [i.e. $20]. The deduction in this case will therefore be $20. Discounts are provided with the mindset that the
          customer will use their pre-purchased credit, if however they decide to terminate the account early and BEFORE
          the complete use of their available balance, the only deduction is the discount portion that was provided to
          the customer; in this example = $20; and per this example the total refund will be “$199 - $20 = $179”.
        </p>
        <p>
          Account termination includes, but not limited to, if we reasonably believe: (i) you have violated the Terms &
          Condition, (ii) you create risk or possible legal exposure for us; (iii) our provision of the Services to you
          is no longer commercially viable. We will make reasonable efforts to notify you by the email address
          associated with your account or the next time you attempt to use services through our organization, depending
          on the circumstances. In all such cases, the Terms shall terminate, including, without limitation, your
          license to use the Services. Moreover, should for any of the reasons stated, we decide to terminate our
          services, we will refund back the available Credit you have with us (purchased in advance) back to your card
          and/or to be put toward the services used (if unpaid).
        </p>
        <p>
          If any questions, contact us via <a href="mailto:CS@washmix.com">CS@washmix.com</a>
        </p>
        <h3>ALTERATIONS:</h3>
        <p>
          With some exceptions, we however do most alteration works, including household items. In order to make the
          process easy, simply fill up the provided card (ALTERATIONS & REPAIR) or attach notes to garments you need
          altered with specific information.
        </p>
        <p>
          <b>i.e. Hem Blue levis jean 2 inches Original Cut</b>
        </p>
        <p>
          Alterations in most cases are done within the timeframe of your Dry Cleanings and Laundry items, however in
          some instances, and depending on the work needed, it may require more time to process and complete. Thus for
          added convenience clients can request their Dry Cleanings and Laundry to be delivered sooner and separate from
          their alterations while they're waiting for their alterations to be completed. Surcharge/delivery fees may
          apply to small orders (below $49) if two separate deliveries are scheduled. Please notify us prior to sending
          your order(s) if such service is needed., You may notify us via email{' '}
          <a href="mailto:CS@washmix.com">CS@washmix.com</a> or via CALL (415-993-WASH) [415-993-9274] OR
          [650-533-5127]. Be sure to always include your account detail (Name + Address + Inquiry).
        </p>
        <p>
          If at the time of invoicing and processing your garment we notice tears or undone threads, we’ll proceed with
          fixing them before cleaning. <b>(Alteration charges will apply)</b> .<b>Note: Please Note, by default</b> the
          toggle for this option in your Customer Dashboard <Link to="/profile"> Profile</Link>, under PREFERENCES, is{' '}
          <b>ON!</b>.
        </p>
        <p>To Confirm this:</p>
        <ul>
          <li>
            <Link to="/login">LOGIN</Link> to your account [this is your dashboard]
          </li>
          <li>
            Proceed to <b>PREFERENCES</b>
          </li>
          <li>
            Check to make sure the toggle is switched to <b>ON</b>, in front of the following phrase:{' '}
            <i>“Fix Tears, Rips and undone hem if noticed, to be charged to my account.”</i>
          </li>
        </ul>
        <h3>RUG CLEANING</h3>
        <p>
          WashMix team can pick-up the pre-rolled rug(s) from your residence or help you roll your rug upon arrival{' '}
          <b>(Service Fee will apply for this service - $49.95/Rug)</b> .
        </p>
        <ul>
          <li>
            If our team assist you with the service, we will take accurate notes, including length and measurements, and
            take digital photographs of any damaged areas.{' '}
            <b> Please notify us in advance if the service is required.</b>
          </li>
        </ul>
        <p>
          <b>NOTE:</b> WashMix is NOT responsible for any damages or tears that may have occurred prior to cleaning.
          Some damages may be more visible after washing, or when the rug is hung at our plant or laid down at a certain
          angle.
        </p>
        <p>
          <u>Rush service is upon availability.</u> If in need of RUSH service, be sure to contact us prior to placing
          your order to make sure we are able to process your order [Rush Service Charge depending on the type of rug,
          stain and size, $49-$499].
        </p>
        <h3>DAMAGES [Wear & Tear]:</h3>
        <p>
          Any damage(s) that have occurred BEFORE washing MAY BE documented (photographed and a note taken) prior to
          washing by the Customer. However, WashMix and its staff will assume that the Customer is familiar and aware of
          the damage when it is sent to us to process [clean and/or fix].
        </p>
        <p>
          <b>
            <u>NOTE: It is important to analyze your garments before sending them in for cleaning.</u>
          </b>
        </p>
        <p>
          We are confident in the quality of our work, but at times washmix may miss tears and damages. Should we notice
          tears or damages, if minor tears, damages or worn out parts, we will fix them to the best of our ability
          before cleaning to avoid further damage. The cost of fixing and alteration will be applied to your account
          and/or bill. IF you prefer to have such item(s) rejected, you may also proceed to your{' '}
          <Link to="/profile">Profile</Link> and under Preferences, use the toggle [On/Off] next to the phrase{' '}
          <i>“Fix Tears, Rips and undone hem if noticed to be charged to my account.”</i>.
        </p>
        <p>
          If however, the item(s) is damaged AFTER wash and pressing, and IT'S PROVEN to be DUE TO MISHANDLING OF THE
          GARMENT, our liability shall NOT exceed UPTO 5 times the processing charges for the same garment, and the
          total amount of compensation shall not exceed $250 per item. (i.e. Item A was paid $100 to clean and process.
          If fully damaged and proven to be our fault, the maximum amount of compensation in this case is $250).
        </p>
        <p>
          <b>
            WashMix, WashMix Inc., WashMix.com and its affiliates are not responsible for loss or damage due to normal
            wear or tear, color loss or shrinkage or other claims from processing your dry cleaning and laundry.
          </b>
        </p>
        <p>
          <b>Washmix is NOT responsible for personal items left in or on your clothing or garment bags.</b>
        </p>
        <h3>STAIN REMOVAL:</h3>
        <p>
          Certain garments or specialty items (i.e. Nightgowns) may require more attention and care especially when
          stained — requiring additional cleaning and spot removal processes and time. With such considerations in some
          severe cases clients should expect delays, however upon request, we can inform you if any delay has occurred
          on such items/orders.
        </p>
        <p>
          Although we do our best in getting stains out of garments; however, there are no guarantees that any stain
          will come out in every case and 100% of the time. At times, after pre-spotting and post-spotting of your
          garment (before and after cleaning), stains may remain intact. Depending on the garment/fabric and the risk
          involved we will do more work to get the stain(s) out, however if the item is at risk for damage(s), we will
          not push any further. WashMix has had great success with removal of stains but it’s not always the same, as it
          depends on the type of stain and fabric and the duration the stain has been on the garment.{' '}
          <b>Any charges pertaining to cleaning of the garment will be applied regardless of the stain coming out</b>.
        </p>
        <h3>DAMAGES/Loss/Missing/Lost Items/Claims [Policy & Procedures]:</h3>
        <p>
          <b>Damaged Items:</b> : If you notice any serious damage to your article of clothing OR discoloration or
          anything related to this, please, send an image of the item and damaged area, as well as your information to{' '}
          <a href="mailto:CS@washmix.com">CS@washmix.com</a>.
        </p>
        <p>
          <b>Missing Items:</b> Typically, when an item is reported as “missing” it’s considered in that category from
          day 1 of reporting. We conduct the search right away.
        </p>
        <ul>
          <li>
            <b>Stage 1 (Day 1)</b>: Notify us with a full description of the item + your full info via email{' '}
            <a href="mailto:CS@washmix.com">CS@washmix.com</a>.
          </li>
          <li>
            <b>Stage 2 (Day 1-7)</b>: You will hear back from us. Although not common, IF no response, perhaps the
            information received may be invalid - get in touch with us again.
          </li>
          <li>
            <b>Stage 3 (Day 7-14)</b>: IF no resolution, your items will be reported as a possible lost item and a
            different approach will be taken to locate the item or perhaps move onto - compensation - IF applicable.
            Process includes, inventory check, contacting other possible leads and more in order to retrieve the
            “Missing” item
          </li>
          <li>
            <b>Q</b>: What IF Still No Solution?
          </li>
          <li>
            <b>A</b>: If we conduct our search in a timely manner and still no solution, we’ll move to compensation -{' '}
            <u>IF Applicable!</u>
          </li>
          <li>
            <b>A</b>: : Typically, when an item is reported as “missing” we start the search and at most 5 weeks before
            it’s reported as lost. This also depends on the type of item missing, the season and more. However, if an
            item can’t be located and it’s reported as lost after the 5th week, we’ll proceed with the compensation.
          </li>
          <li>
            <b>A:</b> : Compensation for any lost item (If proven that WashMix is at fault for the lost item) cannot
            exceed 5 times the amount it was charged to clean the item in the first place.
          </li>
          <li>
            <b>Please Note</b>: Throughout our 15 years of experience, we have yet to see any single article of clothing
            fully lost! In most cases, they are found by the Customer and in fewer incidents it's in our processing
            plant waiting to be claimed. In the second case, some attributes such as tag on the garment falling off, or
            other related issues may [due to errors] push the garment out of the bundle that it belongs to.
          </li>
          <li>
            Also, when orders are sent to WashMix by the Customer, it goes through 4 stages of count. Initial stage upon
            arrival to the processing plant, second stage when issuing invoice, third stage before and after cleaning
            and the final stage when clothes are being sorted out. IF 10 items are counted in an order, and in the final
            stage, we count 9 or 11, this will trigger a “Red Flag”, which pushes the entire order to research.
          </li>
        </ul>
        <h2>FAQ [General]</h2>
        <p>
          Here at WashMix, we understand that the process of cleaning and care for garments and fabrics may raise some
          questions for customers. We therefore are addressing these most Frequently Asked Questions in the{' '}
          <Link to="/faqs">FAQ</Link> section of our website. By using our services and products at WashMix.com, you are
          also agreeing that you have reviewed and understood the Terms & Conditions, Privacy Statement, Prices &
          Pricing structures [PAYC vs. Advantage Program]. If any of the following statements or FAQ requires further
          explanation, please don’t hesitate to reach us <a href="mailto:CS@washmix.com">CS@washmix.com</a>, prior to
          signing up and/or requesting a pickup.
        </p>
        <h3>DRY CLEAN VS LAUNDRY (Shirts):</h3>
        <p>
          Most items are in the Dry Clean category. Also, Dry Cleaning is a superior form of cleaning, and it's
          typically fabrics such as Silk, Linen or Shirts made with delicate fabric that require Dry Cleaning Process or
          Hand-Press (Cannot undergo machine press) or smaller sized shirts that can’t be machine pressed due to their
          size. All such items are in the Dry Cleaning and/or hand press category. Some prefer to have their shirts Dry
          Cleaned to preserve the color and texture and overall design, look and feel of the garment. Laundry is a
          typical button-down, and 100% Cotton Shirts that are washed (water + detergent), and machine pressed. Wash &
          Fold is also in this category (Laundry), however without press as the items get folded - not pressed.
          Moreover, some shirts with detail, such as snap-on buttons, wooden buttons, silk overall or around collar and
          sleeves etc, will require hand-press and as a result will be in the dry clean category.
        </p>
        <p>
          If a shirt can <b>NOT</b> undergo wash and <b>machine press [by the Press unit]</b>, we will proceed with Wash
          or Dry Clean AND hand-press [with flat/hot iron] to avoid any damages, and charges will reflect in your
          account as Dry Cleaned item(s).
        </p>
        <p>
          Dry Clean items can not and should not undergo the laundry process. Otherwise it will deteriorate the garment
          and its fabric and put it at risk for damage (i.e. color run, permanent damage to fabric, texture, color etc).
        </p>
        <p>
          IF any questions email us <a href="mailto:CS@washmix.com">CS@washmix.com</a>. Be sure to always include your
          account detail (Name + Address + Inquiry).
        </p>
        <h4>SEPARATING GARMENTS:</h4>
        <p>
          For your convenience any items that will require professional cleaning (Laundry or Dry Clean) <b>AND Press</b>{' '}
          can be mixed in the provided Laundry-Counter bags without the need for separation. Our professional team will
          sort them out according to the best method and practice of cleaning that is recommended for each garment.
        </p>
        <h3>WASH & FOLDS:</h3>
        <p>
          Wash & Fold and Laundry is very similar with the main difference being that in “Laundry”, items are
          individually processed, cleaned and PRESSED, and charged (i.e. 1 Laundry Shirt) vs. Wash & Fold are folded{' '}
          <b>(NOT PRESSED)</b>. Order is charged by weight (lbs) or by volume [per bag].
        </p>
        <p>
          <i>
            Please see <Link to="/pricing">Prices</Link> for Wash & Fold prices and details for per bag charge option.
          </i>
        </p>
        <p>
          You <b>are</b> required to separate Wash & Folds from your Laundry and Dry Cleaning order(s). If you are using
          Wash & Fold services, you must request a Wash & Fold bag to use for this service. This bag is different from
          your Laundry & Dry Cleaning bag. Any items placed inside your Wash & Fold bags will be washed and folded.{' '}
          <b>
            <i>
              WashMix is not responsible for damages to garments [i.e. Wool, Silk or delicate items] that require
              professional cleaning and care through Dry Cleaning.
            </i>
          </b>
        </p>
        <p>
          We do offer Rush Service (Surcharge will apply), however there are NO Next Day Services available for Wash &
          Folds.
        </p>
        <h3>CREDIT CARD & PAYMENT (Charges for Services):</h3>
        <p>
          In order to use our services, and take advantage of the discounts and benefits, WashMix.com will require all
          WashMix Advantage™ and PAYC Customers to leave a valid Credit Card and billing information on file and stored
          in our secured database. For <b>WashMix Advantage Program Members</b>, once a running balance has fallen below
          the threshold ($19), WashMix Advantage™ client’s credit card will be automatically charged at the set plan
          (Gold = $199 OR Platinum = $299).
        </p>
        <p>
          <b>NOTE:</b> If Customers have less Credit in their account than the amount of service they are using, WashMix
          will charge their Credit Card for the plan that they last signed up for. If their plan/package does not cover
          the entire order, then <b>the same plan will be charged more than once</b> to cover the entire order.
          Depending on how many items are sent to us for cleaning, the Credit Card may be charged more than once for the
          specific plans.
        </p>
        <p>
          When the available Credit in Customer’s account will not be enough to cover the order, the Customer is aware
          that their account may be replenished (re-charged according to their last plan) with the Credit Card on file.
          This is to avoid the account falling into the negative balance & delay in delivery due to insufficient funds.
          <ul>
            <li>
              <b>For example:</b> If a customer is on the Advantage Program - Gold Tier and has an available credit of
              $100, but the new order that is picked up is $350 [in total] the customer in this case, will be charged
              $51 <b>and also</b> $199 [per their last plan]. This will pay off the entire order [<b>in this example</b>{' '}
              → $100 + $51 + $199 = $350]. If however the refill alone [$199 in this case] is sufficient to bring the
              account into positive balance, then refill will be the only charge. Although such cases are not common,
              however it does happen on occasions for very large orders that exceed the Advantage Program Tier the
              customer is on. If any questions please contact us <a href="mailto:CS@washmix.com">CS@washmix.com</a>.
            </li>
          </ul>
        </p>
        <p>
          WashMix Advantage™ Program Credit is only for use with services available through WashMix, WashMix Inc. or
          WashMix.com. WashMix.com may charge for access to portions of the sites or to the sites as a whole, and we
          reserve the right at any time to change the amount we charge for such access or subscription that includes
          authorization to access the sites, including any services used through our organization.
        </p>
        <p>
          Users are responsible for the payment of all charges in any way incurred in connection with use of services
          associated with their account. If a payment card charge is declined by the users’ payment card issuer (either
          for advanced authorization or incurred charges), WashMix can hold onto order(s) that is due for delivery
          and/or return back to the customer until payment is received and completed.
        </p>
        <p>
          (For more information, Email us at <a href="mailto:CS@washmix.com">CS@washmix.com</a> or call us at
          (415-993-WASH) [415-993-9274] OR [650-533-5127].{' '}
          <i>Be sure to always include your account detail (Name + Address + Inquiry).</i>
        </p>
        <h3>FULL PRICE LIST:</h3>
        <p>
          Please note, there are many garment categories, fabric type and style. In this terms & conditions{' '}
          <Link to="/pricing">https://washmix.com/pricing</Link> we have listed the most common items and here we are
          listing a more broad selection, including details such as <b>Upcharges</b>. However, there may be other items
          that is not in the list bellow, such as but not limited to{' '}
          <b>Traditional clothes [i.e. Indian Sarees], All household items, Leather, Winter Clothes and such</b>. (For
          more information or if you have questions about pricing or if you’d like a quote <b>BEFORE</b> sending in your
          order please email us at <a href="mailto:CS@washmix.com">CS@washmix.com</a> or call us at (415-993-WASH)
          [415-993-9274] OR [650-533-5127].{' '}
          <i>Be sure to always include your account detail (Name + Address + Inquiry)</i>.
        </p>
        <Price />
        <h3>UP CHARGES:</h3>
        <p>
          It is industry standard to have upcharges applied to unique items and unique cases. For example, a Customer
          may send in a regular pair of pants [slack] which is $6.95 to clean, and also the same Customer may also
          include another pair of pants [slack] with leather trim going along the sides. This will require upcharges,
          which in this case, and depending on the leather could be between $5-$20 on top of the price of a regular pair
          of pants.
        </p>
        <p>Other cases include, but not limited to:</p>
        <ul>
          <li>Stains [regular vs. significant]</li>
          <li>Embroideries, beads and sequels, pleats</li>
          <li>Leather trim</li>
          <li>Special buttons</li>
          <li>Layers and linding [i.e. Regular Dress/pants vs. lined]</li>
          <li>Special patterns [i.e French Laundry Shirts, or some EdHardy T-Shirts]</li>
        </ul>
        <p>
          <b>
            We do NOT upcharge any garments based on brand names or the value a certain garment has. It's only applied
            if more work [manpower/hour] is needed to process and complete the work.
          </b>
        </p>
        <h3>PLANS & PACKAGES:</h3>
        <p>
          User Accounts are categorized as “PAYC, Pay As You Clean” <b>OR</b> “Advantage Program” also known as “VIP
          Accounts, Advantage Member, or Advantage”. These are Account tiers or levels that the User or “Customer” can
          pick from prior to using WashMix services. A User will be categorized in one of the two categories. The user
          can then proceed to using any services WashMix offers through WashMix.com. These tiers and/or categories are
          there to distinguish Users into regular Customers who pay as they use the service, or a part of the Advantage
          Program, which qualifies the User for ongoing discounts and other perks and benefits as showcased in{' '}
          <Link to="/pricing">our website</Link>.
        </p>
        <PackagesForm />

        <h3>PICK-UP & DELIVERY SERVICES:</h3>
        <p>
          Here at WashMix, the norm is to leave the provided Laundry-Counter-bag filled with clothes you want cleaned
          and processed in front of your door.
        </p>
        <ul>
          <li>
            <b>
              It’s important that you notify us with your pickup request a day in advance or by 8am on the same day.
            </b>
          </li>
          <li>
            You can also instruct us with any information pertaining to the location of your bag (i.e. Sidedoor to the
            right side of the house, Backyard, on front or back porch etc).
          </li>
        </ul>
        <p>
          <b>Pickups are scheduled in advance</b>
        </p>
        <ul>
          <li>
            The best way to request your pickup is text (415-993-WASH) [415-993-9274] OR [650-533-5127] with your
            request a day in advance or by 8am on the same day.
          </li>
        </ul>
        <p>
          If you require us to physically receive your garment from you{' '}
          <b>(by knocking on your door or ringing your doorbell, or calling your phone)</b>, please inform us prior to
          pickup.
        </p>
        <ul>
          <li>
            If your bag is stolen prior to being in our possession or if a personless delivery is approved by you
            meaning our valet is ok’d to pick up an unattended bag/order or leave the bag or cleaned garment (or order)
            unattended and it is stolen then we assume NO responsibility.
          </li>
          <li>
            <b>We do</b> assist with an investigation however if the bag or order is stolen prior to pickup or after
            delivery. These events, although very rare, may happen, and we advise customers to file a police report and
            if needed we provide all documentation to the authorities on our behalf.
          </li>
        </ul>
        <p>
          <b>
            Certain garments or specialty items (i.e. Nightgowns) may require more attention and care especially when
            stained — requiring additional cleaning and spot removal processes and time.
          </b>
        </p>
        <ul>
          <li>
            With such considerations in some severe cases clients should expect delays, however upon request, we can
            inform you if any delay has occurred on such items/orders.
          </li>
        </ul>
        <p>
          Email us at <a href="mailto:CS@washmix.com">CS@washmix.com</a> or call us at (415-993-WASH) [415-993-9274] OR
          [650-533-5127]. <i>Be sure to always include your account detail (Name + Address + Inquiry).</i>
        </p>
        <h3>GATED COMMUNITIES:</h3>
        <p>
          Instructions must be provided for Gated Residence and/or apartment complexes where a reentry code is required
          for after hour pick-up and drop offs. Delivery surcharges will apply if WashMix teams have to make multiple
          attempts in delivering an order or fulfilling a pickup request due to such related reasons.
        </p>
        <h4>AUTOMATED / RECURRING PICK-UP SERVICE:</h4>
        <p>
          When using the automated recurring Pick-Up Service through Washmix.com, <b>you agree</b> that on the specified
          days (picked by the Customer, or you) that you’ll have items out and ready for pick-up.
        </p>
        <p>
          Our team will show-up as requested by the Customer. However, If no bag/load is available for pickup delivery
          charges will apply.
        </p>
        <ul>
          <li>
            <b>
              For Dry Cleaning, Laundry and Alterations [Range depending on volume $9.99-$29.99, this depends on the
              area the service has been requested from].
            </b>
          </li>
        </ul>
        <p>
          <u>
            You can always cancel a service if you do not have anything for pick-up that day, . ALL Customers have a 3
            hours window to CANCEL or CHANGE their pickup requests when placed OR simply notify us <b>24hr</b> before
            the pick-up date.
          </u>
        </p>
        <h3>RUSH SERVICE</h3>
        <p>
          <b>Rush Service is only available for Dry Cleaning and Laundry Services and with managerial approval.</b>
        </p>
        <ul>
          <li>
            Exclusions include Leather items, Rug Cleaning, Wedding Gown Preservations and Alterations [exceptions made
            upon managerial approval].
          </li>
          <li>We are able to ONLY provide this service if we receive the items early and its upon availability.</li>
          <li>
            When needed, you may request a pick-up and <b>attach a NOTE (“RUSH SERVICE NEEDED”)</b> and place it inside
            your bag.
          </li>
          <li>Be sure to include this in your Pickup Request in our online portal when pickup is requested.</li>
        </ul>
        <p>
          <b>
            Our rush service is anywhere from 1 to 2 Business Days, depending on the time the request was made by our
            client and the availability of our rush service. Service charge of $9.99-$99.99 (per order) will be applied
            to your order if Rush Service is provided.
          </b>
        </p>
        <p>
          <b>NOTE</b>: Exceptions are made on specialty items (i.e. NightGowns). Some items with specific stains or ones
          requiring more work, may not be possible to process with RUSH. At times however, depending on the workload we
          may be able to expedite orders and pick-up at a later time and have your items ready and delivered in one
          business days. (For more information, Email us at <a href="mailto:CS@washmix.com">CS@washmix.com</a> or call
          us at (415-993-WASH) [415-993-9274] OR [650-533-5127].{' '}
          <i>Be sure to always include your account detail (Name + Address + Inquiry)</i>.
        </p>
        <h3>NO SHOW [or No Bag outside for Pickup]</h3>
        <p>
          <b>
            When pickup is requested, it’s expected that WashMix customers leave their bag/order out and ready for
            pickup OR provide accurate instructions for accessibility to their orders.
          </b>
        </p>
        <p>
          Delivery fees will apply if NO bag/order is ready for pickup. We will attempt to contact you while in the
          premises in order to get in touch with you and obtain your order. The maximum time we can wait per stop will
          be no more than <b>14 minutes.</b> IF we have not received any order for processing, delivery fees will apply
          and the order will be marked as <b>“NO SHOW”.</b>
        </p>
        <h3>DELIVERY FEES:</h3>
        <DeliveryFees />
        <h3>EXTENDED ROUTES:</h3>
        <ul>
          <li>
            For ALL account types [PAYC, GOLD or PLATINUM]:
            <p>
              Routes beyond our central location - more than 15 miles [North or South of the City of Mountain View, CA
              94041] are subject to delivery fees <b>IF</b> the total volume for the order is below $69. [Delivery Fee -
              $14.90-$19.90]
            </p>
          </li>
        </ul>
        <h3>PUBLIC HOLIDAYS:</h3>
        <p>
          Clients should be aware of public holidays, which may delay orders to a day or more after the holiday. You may
          call (415-993-WASH) [415-993-9274] OR [650-533-5127] or email{' '}
          <a href="mailto:CS@washmix.com">CS@washmix.com</a> for more information regarding upcoming holidays. If
          urgency to receive your order back please be sure to contact us prior to placing your order. Rush service may
          be available, however its upon availability and depends on the day of the month. Surcharges will apply to Rush
          Orders in addition to delivery charges, when applicable.{' '}
          <b>We are closed during most major public holidays.</b>
        </p>
        <h2>User Submissions</h2>
        <p>
          The personal information you submit to WashMix &/or WashMix.com is governed by the{' '}
          <Link to="/privacy-policy">Privacy Policy</Link>. To the extent there is an inconsistency between the Terms of
          Use and the Privacy Policy, the Privacy Policy shall govern. WashMix &/or WashMix.com may, in our sole
          discretion, permit you to post, upload, input, publish, submit or transmit information or material through the
          Service (“Submission”). As between you and us, you own all rights to your User Submissions. However, you grant
          to us and our affiliates, representatives, sub licensees and assigns as irrevocable, perpetual, non-exclusive,
          fully-paid, license (sublicensable through multiple tiers) throughout the universe to use, distribute,
          syndicate, license, reproduce, modify, adapt, publish, translate, publicly perform, create derivative works
          and publicly display your User Submissions (in whole or in part) in any format or medium now known or later
          developed; provided, however, that our exercise of our rights under the forgoing license shall at all times be
          subject to the limitations upon disclosure of your User Submissions imposed on us under our Privacy Policy.
        </p>
        <p>
          Submissions will be deemed non-confidential and non-proprietary. Accordingly, WashMix &/or WashMix.com shall
          have the non-exclusive, royalty-free right to use, copy, distribute and disclose to third parties any
          Submission for any purpose, in any medium and throughout the world ("License Grant").
        </p>
        <p>
          We reserve the right to display advertisements in connection with User Submissions and to use User Submissions
          for advertising and promotional purposes without any compensation to you. These advertisements may be targeted
          to the content or information stored on the Services. In consideration for us granting you access to use of
          the Services, you agree that you are solely responsible for all of your User Submissions.
        </p>
        <p>
          You are solely responsible for your Submission, the consequences of making a Submission, and your reliance on
          any Submissions. WashMix &/or WashMix.com is not responsible for the consequences of any Submission. WashMix
          &/or WashMix.com is not responsible for screening or monitoring Submissions made through the Services by
          users. If notified by a user of a Submission allegedly in violation of these Terms of Use, WashMix &
          WashMix.com may investigate the allegation and determine in good faith and its sole discretion whether to
          remove such Submission. WashMix &/or WashMix.com will have no liability or responsibility to users for
          performance or nonperformance of such activities. WashMix &/or WashMix.com will not require to host, display,
          or distribute any User Submissions, and may remove at any time or refuse any User Submissions. WashMix &/or
          WashMix.com is not responsible for any loss, theft or damage of any kind to any User Submissions. You
          represent and warrant that you User Submissions and our authorized use of such submissions do not and will not
          infringe the rights of any third party (including, without limitation, intellectual property rights, right of
          privacy or publicity, or any other legal or moral rights). You, and not we, are responsible for any
          consequences of sharing personal information about yourself on public areas of the Service, such as your home
          address or the home address of others. WashMix &/or WashMix.com owns all rights, title, and interest in any
          compilation, collective work or other derivative work created by us using or incorporating your content (but
          not your original content). When you use a feature on the Services that allows users to share, transform,
          readapt, modify, or combine user content with other content, you grant us and our users an irrevocable,
          non-exclusive, royalty free, perpetual, right and license in the universe to use, reproduce, modify, display,
          remix, perform, distribute, redistribute, adapt, promote, create, derivative works, and syndicate your content
          in any medium and through any form of technology or distribution and to permit any derivative works to be
          licensed under these same license terms. The rights granted under this Section 2 will survive the termination
          of these Terms.
        </p>
        <h3>Account Useability</h3>
        <p>
          If you use the Services, you are responsible for maintaining the confidentiality of your account and password
          and for restricting access to your devices. You agree to accept responsibility for all activities that occur
          under your account or password. Rinse reserves the right to refuse service, terminate accounts, remove or edit
          content, or cancel orders in its sole discretion.
        </p>
        <h3>Copyright Infringement and Trademark Rights:</h3>
        <p>
          Here at WashMix &/or WashMix.com we respect the intellectual property rights of others. Accordingly, we have a
          policy of removing User Submissions that violate copyright law, suspending access to the Services (or any
          portion thereof) to any user who uses the Services in violation of Copyright law, and/or terminating in
          appropriate circumstances the account of any user who uses the Services in violation of Copyright law.
          Pursuant to Title 17 of the United States Code, Section 512, we have implemented procedures for receiving
          written notification of claimed copyright infringement and for processing such claims in accordance with such
          law. If you believe a user of the Services is infringing your copyright, please provide written notice to our
          agent listed below for notice of claims of copyright infringement.
        </p>
        <p>
          WashMix WashMix.com Atten: Michael Beheshtaein 650 Castro St, Suite 185 Mountain View, CA 94041 (415) 933-WASH
          [415-993-9274] OR [650-533-5127] Email: <a href="mailto:terms@washmix.com">terms@washmix.com</a>
        </p>
        <p>
          Your written notice must: (a) contain your physical or electronic signature; (b) identify the copyrighted work
          alleged to have been infringed’ (c) identify the allegedly infringing material in a sufficiently precise
          manner to allow us to locate that material; (d) contain adequate information by which we can contact you
          (including postal address, telephone number, and e-mail address); (e) contain a statement that you have a good
          faith belief that use of the copyrighted material is not authorized by the copyright owner, the copyright
          owner’s agent, or the law; (f) contain a statement that the information in the written notice is accurate; and
          (g) contain a statement, under penalty of perjury, that you are authorized to act on behalf of the copyright
          owner. Please do not send notices or inquiries unrelated to alleged copyright infringement to our designated
          copyright agent.
        </p>
        <p>
          If you believe that your trademark is being used somewhere on the Services in a way that constitutes trademark
          infringement, the owner or an agent of the owner may notify us at{' '}
          <a href="mailto:terms@washmix.com">terms@washmix.com</a> We ask that any complaints provide the accurate
          identity of the owner, how we may contact you, and the specific nature of the complaint.
        </p>
        <h3>Intellectual Property Rights:</h3>
        <p>
          The Sites and all of their contents, features, and functionality (including but not limited to all
          information, software, text, displays, images, video and audio, and the design, selection and arrangement
          thereof), are owned by WashMix Inc, its licensors, or other providers of such material and are protected by
          the United States and international copyright, trademark, patent, trade secret, and other intellectual
          property or proprietary rights laws.
        </p>
        <p>
          These Terms of Use grant you a personal, non-exclusive, non-transferable, revocable license to access and use
          the Sites. You may access the material on the Sites only for your own personal, non-commercial use. You must
          not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, rebulish,
          download, store or transmit any of the material on our Sites, except as incidental to normal web browsing,
          such as the making of temporary copies in RAM or the cache of your Internet browser, and features of the Sites
          that enable sharing via email, social media, linking, and other platforms expressly enabled by the Sites. You
          must not:
        </p>
        <ul>
          <li>Modify copies of any materials from the Sites.</li>
          <li>
            Use any illustrations, photographs, video or audio sequences or any graphics separately from the
            accompanying text.
          </li>
          <li>
            Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from
            the Sites.
          </li>
        </ul>
        <p>
          Any use of the Sites not expressly permitted by these Terms of Use is a breach of these Terms of Use and may
          violate copyright, trademark, and other laws.
        </p>
        <h3>Service Terms & conditions:</h3>
        <p>
          To use the Services, you must first sign up with WashMix &/or WashMix.com. When signing up, we request that
          you provide WashMix &/or WashMix.com with personal information so that we can provide you with the requested
          Services (such information may include name, email address, mobile telephone number, address for pick-up and
          delivery, and/or credit card data). Upon successful completion of your signing up with WashMix &/or
          WashMix.com, WashMix &/or WashMix.com will provide you with a personal account, which may be accessible by you
          with a password of your choice.
        </p>
        <p>
          You warrant that the information you provide to WashMix &/or WashMix.com is accurate and complete. WashMix
          &/or WashMix.com is entitled at all times to verify the information that you have provided and to refuse the
          Services without providing notice. You may only access the Services using authorized means. It is your
          responsibility to check to ensure you are using the correct App and App version for your device. WashMix &/or
          WashMix.com is not liable if you do not have a compatible mobile device or if you download the wrong version
          of the App for your mobile device. WashMix &/or WashMix.com reserves the right to terminate the Services and
          the use of the App if used with an incompatible or unauthorized device.
        </p>
        <h3>Credit Card Payments and Purchases:</h3>
        <p>
          Use of the Site as well as instore is free of charge. WashMix &/or WashMix.com reserves the right to introduce
          a fee for the use of these Services. If WashMix &/or WashMix.com decides to introduce such a fee, WashMix &/or
          WashMix.com will inform you accordingly and allow you to either continue or terminate the Services.
        </p>
        <p>
          WashMix &/or WashMix.com charges for the services that you request, which may include dry cleaning, laundered
          shirts, wash & fold, or related services ("Cleaning"). You agree that you will pay for all Cleaning you
          purchase through WashMix &/or WashMix.com and thatWashMix &/or WashMix.com may charge your credit card account
          as provided by you when registering for the Services for the Cleaning (including any taxes, late fees, or
          additional fees as applicable) that may be accrued by or in connection with your account. You are responsible
          for the timely payment of all fees and for providing WashMix &/or WashMix.com with a valid credit card account
          for payment of all fees at all times. Any payment made is non-refundable.
        </p>
        <p>
          WashMix &/or WashMix.com may use a third-party payment processor (the "Payment Processor") to link your credit
          card account to the Services. The processing of payments or credits, as applicable, in connection with your
          use of the Services will be subject to the terms, conditions and privacy policies of the Payment Processor and
          your credit card issuer in addition to these Terms. Rinse is not responsible for any errors by the Payment
          Processor.
        </p>
        <h3>Mobile, Text Messaging Request/Promotions/Purchase:</h3>
        <p>
          You may opt in to receive WashMix &/or WashMix.com text messages (by contacting us via text or call). Your
          consent to receive our promotional texts is not a condition of purchase or use of the cleaning services.
          Message and data rates may apply. If you have any questions about your text plan or data plan, please contact
          your wireless provider. IF further questions regarding Mobile, text Messaging sent and received from WashMix
          Inc. - please contact us via Email at <a href="mailto:CS@washmix.com">CS@washmix.com</a> or call us at
          (415-993-WASH) [415-993-9274]. <i>Be sure to always include your account detail (Name + Address + Inquiry)</i>
          .
        </p>
        <h4>WashMix &/or WashMix.com Liability for Services provided and garments:</h4>
        <p>
          You understand that there is inherent risk in Cleaning and there is potential for clothing and related items
          to get lost or damaged. WashMix &/or WashMix.com will do its best to ensure situations like this do not
          happen, and in the instances they do happen, will work with you to help rectify the situation when you provide
          us with written notification identifying the concern with the Cleaning within fourteen (7) days of receiving
          your cleaned clothes and items. Without prejudice to the foregoing, and insofar as allowed under mandatory
          applicable law, WashMix’ aggregate liability in no event shall exceed the maximum of 5 times the amount that
          was charged to clean the garment in the first place (after discount) and to not exceed $250 in total, or
          maximum amount of $250 if 5X of the total charged to clean the item exceeds $250. In addition, the
          information, recommendations and/or services provided to you on or through the Services is for general
          information purposes only. The use of the Site or the Contents is at your own risk. The Contents in this Site
          could include technical inaccuracies or typographical errors. WashMix may make changes or improvements at any
          time.
        </p>
        <p>
          USE OF THIS WEBSITE <Link to="/">www.WashMix.com</Link> AND THE CONTENTS IN THIS SITE ARE PROVIDED “AS IS” AND
          WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED, NOR DOES WASHMIX PROVIDE ANY WARRANTIES OF ANY KIND
          IN RESPECT OF ANY GOODS AND SERVICES PURCHASED OR PROVIDED VIA THIS WEBSITE. TO THE FULLEST EXTENT PERMISSIBLE
          PURSUANT TO APPLICABLE LAW, WASHMIX DISCLAIMS ALL WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR
          PURPOSE. WASHMIX DOES NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE MATERIAL WILL BE UNINTERRUPTED OR
          ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THIS SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE
          OF VIRUSES OR OTHER HARMFUL COMPONENTS. WASHMIX DOES NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE
          OF OR THE RESULT OF THE USE OF THE CONTENTS IN THIS SITE IN TERMS OF THEIR CORRECTNESS, ACCURACY, RELIABILITY,
          OR OTHERWISE. YOU (AND NOT WASHMIX) ASSUME THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.
          TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WASHMIX ASSUMES NO LIABILITY, WHETHER IN
          CONTRACT OR TORT, FOR ANY DIRECT, INDIRECT, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING (WITHOUT
          LIMITATION) DAMAGES FOR LOSS OF ANTICIPATED PROFITS OR REVENUE OR OTHER ECONOMIC LOSS IN CONNECTION WITH OR
          ARISING FROM ANY ACT OR OMISSION BY WASHMIX, ITS AGENTS, AFFILIATES, JOINT VENTURE PARTNERS, INDEPENDENT
          CONTRACTORS, OR UNAFFILIATED THIRD PARTIES AS A RESULT OF ANY ACT OR OMISSION IN FULFILLMENT OF OR IN BREACH
          OF THESE TERMS OF USE OR THE PRIVACY POLICY.
        </p>
        <h3>Indemnity:</h3>
        <p>
          You agree to defend, indemnify, and hold WashMix &/or WashMix.com, its subsidiaries, agents, affiliates, its
          licensors, and each of their officers, directors, other users, employees, attorneys, agents, and partners
          harmless from and against any claims, costs, actions, demands, damages, losses, liabilities, expenses, and
          settlements including, without limitation, reasonable legal and accounting fees (including but not limited to
          attorney’s fees) arising out of or in connection with: (a) your violation or breach of any term of these Terms
          or any applicable law or regulation, whether or not referenced herein; (b) your violation of any rights of any
          third party, including, without limitations, any right of privacy, publicity rights or Intellectual Property
          Rights; or (c) your misuse of the Services, (d) your violation of any law, rule, or regulation of the United
          States or access and use of the Service with your unique username, password, or other appropriate security
          code.
        </p>
        <p>
          The indementies in this Agreement are contingent upon: (i) the indemnified party promptly notifying the
          indemnifying party in writing of any claim which may give rise to a claim for indemnification hereunder,
          provided that any failure to give such notice will not waive any rights of the indemnified party except to the
          extent that the rights of the indemnifying party are actually prejudiced thereby; (ii) the indemnifying party
          being allowed to control the defense and settlement of such claim; and (iii) the indemnified party cooperating
          with all reasonable requests of the indemnifying party (at indemnifying party’s expense) in defending or
          settling such claim. The indemnified party shall have the right, at its option and expense, to participate in
          the defense of any action, suit or proceeding relating to such a claim through a counsel of its own choosing,
          provided that the indemnified party will not settle any claim without the prior written consent of the
          indemnifying party.
        </p>
        <p>
          PLEASE NOTE: THESE TERMS OF USE CONTAIN AN ARBITRATION CLAUSE AND CLASS ACTION WAIVER. THE WAIVER AFFECTS HOW
          DISPUTES WITH THE COMPANY ARE RESOLVED. BY ACCEPTING THESE TERMS OF USE, YOU AGREE TO BE BOUND BY THIS
          ARBITRATION PROVISION. PLEASE READ IT CAREFULLY.
        </p>
        <p>
          We may revise these Terms from time to time. The changes will not be retroactive, and the most current version
          of the Terms, which will always be at <Link to="/terms-of-use">https://washmix.com/terms-of-use</Link>, will
          govern our relationship with you. We will try to notify you of material revisions, for example via a service
          notification or an email to the email associated with your account. By continuing to access or use the
          Services after those revisions become effective, you agree to be bound by the revised Terms. These Terms of
          Use (“Terms”) govern your use of the WashMix &/or WashMix.com. (“WashMix &/or WashMix.com”) website,{' '}
          <Link to="/">www.WashMix.com</Link> (“Site”), mobile messaging services, and or other online or offline
          communications (collectively, the “Services”) or in-store in person or over phone orders / transactions. By
          using the Services, you agree, without limitation or qualification, to be bound by these Terms and the WashMix
          &/or WashMix.com Privacy Policy. If you do not agree, please do not use the Services.
        </p>
        <p>
          WashMix &/or WashMix.com may modify these Terms at any time. Your continued usage of the Services will mean
          you accept those changes, and you agree to comply with all applicable laws and regulations.
        </p>
        <h2>Our address for any issues relating to this website is as follows:</h2>
        <div className="info">
          <p>
            <b>WashMix Inc.</b>
          </p>
          <p>650 Castro St, Suite 185,</p>
          <p>Mountain View, CA 94041</p>
        </div>
        <p>
          In an effort to protect the rights of copyright owners, WashMix Inc. &/or WashMix.com maintains a policy for
          the termination, in appropriate circumstances, of users of this Site who are repeat infringers. In such or any
          related circumstance or termination of service, if the customer has any balance (available Credit) that is
          unused with us, will be refunded back to them via check, to their name and address on file. The available
          Credit will be calculated and subtracted from the discount that has been provided during the time of the last
          time the credit was purchased.
        </p>
      </section>
    </div>
  );
};
