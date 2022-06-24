import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';

import { Close } from 'icons';
import './legal.scss';

export const PrivacyPolicy = () => {
  const history = useHistory();

  return (
    <div className="grid-container legal_container container">
      <Helmet>
        <title>WashMix — WashMix Privacy Policy Statement</title>
        <meta name="description" content="WashMix Privacy Policy Statement" />
      </Helmet>
      <div className="closeBtn">
        <button onClick={history.goBack}>
          <Close />
          <span>Close</span>
        </button>
      </div>
      <section className="page-container legal_content">
        <h1>WashMix Privacy Policy Statement</h1>
        <div className="monospace">
          <p>
            <b>This Agreement was made effective on July 11, 2021, last updated on February 22, 2022.</b>
          </p>
          <p>
            If you are looking for TERMS AND CONDITIONS [or Terms of Service] please refer to this{' '}
            <Link to="/terms-of-use">link</Link>.
          </p>
          <p>
            WashMix / WashMix.com is a professional full-service, Dry Clean, Laundry service provider with
            home/residential and office delivery services. All services are provided to customers through registration
            in our website <Link to="/">(www.WashMix.com)</Link>.
          </p>
          We understand that when you use our service through our website www.WashMix.com and that you are placing your
          trust in us to handle your data appropriately, including the personal information of you. That is why we take
          no shortcuts in protecting your data and privacy.
          <p>
            Part of this approach is to make sure that you, as our valued customer, have information about how we
            process your information in connection with your use of our products and services, including our website.
          </p>
          <p>
            We may, in our sole discretion, modify or update this Privacy Policy Statement from time to time, and so you
            should review this page periodically. When we change the Agreement, we will update the last modified date at
            the top of this page. If there are material changes to this Agreement, we will notify you either by
            prominently posting a notice of such changes prior to implementing the change or by directly sending you a
            notification. Your continued use of the Service after any such change constitutes your acceptance of the new
            Privacy Policy. If you do not agree to any of these terms or any future Terms & Conditions of Service and
            Privacy Policy, do not use or access (or continue to access) the Service.
          </p>
          <p>
            This privacy notice discloses the privacy practices for <Link to="/">(www.WashMix.com)</Link>. This privacy
            notice applies solely to information collected by this website. It will notify you of the following:
          </p>
          <ol>
            <li>
              What personally identifiable information is collected from you through the website, how it is used and
              with whom it may be shared.
            </li>
            <li>What choices are available to you regarding the use of your data.</li>
            <li>The security procedures in place to protect the misuse of your information.</li>
            <li>How you can correct any inaccuracies in the information.</li>
          </ol>
        </div>
        <h2>Information Collection, Use, and Sharing </h2>
        <p>
          We are the sole owners of the information collected on this site. We only have access to/collect information
          that you voluntarily give us via email or other direct contact from you. We will not sell or rent this
          information to anyone.
        </p>
        <p>We collect and process personal information:</p>
        <ul>
          <li>
            When you visit our website <Link to="/">(www.WashMix.com)</Link>, sign up for our newsletter or services, or
            make a request for information about our products and services, or when requested or scheduling a pickup
            and/or delivery via our website <Link to="/">(www.WashMix.com)</Link> and/or our SMS (Short Message Service)
            by texting our phone (415-993-9274) OR [650-533-5127].
          </li>
          <li>[Text & Data charges may/will be applied by your service provider]</li>
          <li>Change/correct any data we have about you.</li>
          <li>When you contact our Sales Team or Customer Support Team; via email or call/text.</li>
        </ul>
        <p>
          We call this <b>personal information, Customer Data, or information</b>, in general. We will use your
          information to respond to you, regarding the reason you contacted us. We will not share your information with
          any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an
          order, placing an order, paying for services, using our product and services and all related services and
          features on our website and its affiliated subsidiaries.
        </p>
        <p>
          We may contact you via email or SMS / Text{' '}
          <i>[Text & Data charges may/will be applied by your service provider]</i>
          in the future to tell you about specials, new products or services, or changes to this privacy policy.
        </p>
        <h2>Your Access to and Control Over Information</h2>
        <p>
          You may opt out of any future contacts from us at any time, if part of the newsletter. You can do the
          following at any time by contacting us via the email address or phone number given on our website:
        </p>
        <ul>
          <li>See what data we have about you, if any.</li>
          <li>Change/correct any data we have about you.</li>
          <li>Have us delete any data we have about you.</li>
          <li>Express any concern you have about our use of your data.</li>
        </ul>
        <h2>Security</h2>
        <p>
          We take precautions to protect your information. When you submit sensitive information via the website, your
          information is protected both online and offline. We use appropriate security measures to protect the security
          of your personal information both online and offline.
        </p>
        <p>
          Wherever we collect sensitive information (such as credit card data), that information is encrypted and
          transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and
          looking for “https” at the beginning of the address of the Web page.
        </p>
        <p>
          While we use encryption to protect sensitive information transmitted online, we also protect your information
          offline. Only employees who need the information to perform a specific job (for example, billing or customer
          service) are granted access to personally identifiable information. The computers/servers in which we store
          personally identifiable information are kept in a secure environment.
        </p>
        <h2>Registration</h2>
        <p>
          In order to use this website, a user must first complete the registration form. During registration a user is
          required to give certain information (such as name and email address). This information is used to contact you
          about the products/services on our site in which you have expressed interest. At your option, you may also
          provide demographic information (such as gender or age) about yourself, but it is not required.{' '}
        </p>
        <h2>Store information</h2>
        <p>
          WashMix will store your information as long as needed to provide you with our services and to operate our
          business. If you ask WashMix to delete your information (Call (415-993-9274) OR (650-533-5127). or email [
          <a href="mailto:privacy@washmix.com">privacy@washmix.com</a>]), we will honor this request unless deleting
          that information prevents us from carrying out necessary business functions, like billing for our services,
          calculating taxes, or conducting required audits.
        </p>
        <h2>California Consumer Access and Deletion Rights</h2>
        <p>
          For those customers that would like more information about our use of Customer Information, you have the
          ability to request:
        </p>
        <ul>
          <li>
            That we provide details about the categories of personal information that we collect about you, including
            how we collect and share it.
          </li>
          <li>That we provide you access to the personal information we collect about you.</li>
          <li>That we delete the personal information we have about you.</li>
          <li>
            <i>
              We will honor this request unless deleting that information prevents us from carrying out necessary
              business functions, like billing for our services, calculating taxes, or conducting required audits.
            </i>
          </li>
        </ul>
        <p>
          Please be aware that when you ask us for these things, we will take steps to verify that you are authorized to
          make the request.
        </p>
        <h2>Orders</h2>
        <p>
          We request information from you on our order form. To buy from us, you must provide contact information (like
          name and shipping and billing address(es)) and financial information (like credit card number, expiration
          date). This information is used for billing purposes and to fill your orders. If we have trouble processing an
          order, we’ll use this information to contact you.
        </p>
        <h2>Cookies</h2>
        <p>
          We use “cookies” on this site. A cookie is a piece of data stored on a site visitor’s hard drive to help us
          improve your access to our site and identify repeat visitors to our site. For instance, when we use a cookie
          to identify you, you would not have to login a password more than once, thereby saving time while on our site.
          Cookies can also enable us to track and target the interests of our users to enhance the experience on our
          site. Usage of a cookie is in no way linked to any personally identifiable information on our site.
        </p>
        <p>
          When you visit our website, sign up for our services and/or products, or request more information about
          Washmix, we collect information automatically using tracking technologies, like cookies, and through web forms
          where you type in your information. We collect this information to provide you with what you request through
          the web form, to learn more about who is interested in our products and services, and to improve navigation
          experience in our pages.
        </p>
        <p>
          Some of our business partners may use cookies on our site (for example, advertisers, if any). However, we have
          no access to or control over these cookies.
        </p>
        <h2>Sharing</h2>
        <p>
          At times we may use an outside shipping company to ship orders, and a credit card processing company to bill
          users for goods and services. These companies do not retain, share, store or use personally identifiable
          information for any secondary purposes beyond filling your order.{' '}
        </p>
        <p>
          We partner with another party to provide specific services. When the user signs up for these services, we will
          share names, or other contact information that is necessary for the third party to provide these services.
          These parties are not allowed to use personally identifiable information except for the purpose of providing
          these services.{' '}
        </p>
        <h2>Links</h2>
        <p>
          This website contains links to other sites. Please be aware that we are not responsible for the content or
          privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read
          the privacy statements of any other site that collects personally identifiable information.
        </p>
        <h2>Surveys & Contests</h2>
        <p>
          From time-to-time our site requests information via surveys or contests. Participation in these surveys or
          contests is completely voluntary and you may choose whether or not to participate and therefore disclose this
          information. Information requested may include contact information (such as name and shipping address), and
          demographic information (such as zip code, age level). Contact information will be used to notify the winners
          and award prizes. Survey information will be used for purposes of monitoring or improving the use and
          satisfaction of this site.
        </p>
        <div className="info">
          <p>
            <b>
              If you feel that we are not abiding by this privacy policy, you should contact us immediately via
              telephone at 415-993-WASH OR 650-533-5127 OR <a href="mailto:privacy@washmix.com">privacy@washmix.com</a>.
              You may also contact us via mail.
            </b>
          </p>
          <h2>Our Main Headquarters</h2>
          <p>
            <b>WashMix Inc.</b>
          </p>
          <p>650 Castro St, Suite 185,</p>
          <p>Mountain View, CA 94041</p>
        </div>
      </section>
    </div>
  );
};
