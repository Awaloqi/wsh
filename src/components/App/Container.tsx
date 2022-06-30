import React, { cloneElement, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from 'hooks';
import { About, Faq, PendingRequest, Pickup, UpcomingOrders, Profile, HowItWorks, OurServices } from 'pages';
import { PrivateRoute } from './PrivateRoute';
import { PasswordForgot, PasswordForgotConfirm, PasswordReset, PasswordResetConfirm } from '../Password';
import { Header } from '../Header';
import { LightHeader } from '../Header/LightHeader';
import { Footer } from '../Footer';
import { Login } from '../Login';
import { HomeUser } from '../HomeUser';
import { Home } from '../Home';
import { HomeNew } from '../Home/HomeNew';
import { Pricing } from '../Pricing';
import { WashmixAdvantages } from 'pages/WashmixAdvantages';
import { WashAndFold } from '../../pages/WashAndFold';
import WashmixProcess from 'pages/WashmixProcess';

export const Container = () => {
  const { user, logout } = useAuth();
  const [flag, setFlag] = useState<boolean>(false);
  const prevScrollY = React.useRef(0);
  const onScroll = (e: any) => {
    const currentScrollY = e.target.scrollTop;
    if (currentScrollY > 50) {
      setFlag(true);
    }
    if (currentScrollY < 50) {
      setFlag(false);
    }
    prevScrollY.current = currentScrollY;
  };

  return (
    <div className="grid-container" onScroll={onScroll}>
      {/*<Header logout={logout} user={user} />*/}
      <div className="page-container">
        <Switch>
          {user ? <Redirect exact from="/login" to="/" /> : <Route path="/login" component={Login} />}
          <Route exact path="/" component={user ? HomeUser : Home} />
          {/* new home */}
          <Route exact path="/new-home" component={() => <HomeNew flag={flag} />} />
          {/* new home end*/}
          <Route path="/about" component={About} />
          <Route path="/faqs" component={Faq} />
          <Route path="/hiw" component={HowItWorks} />
          <Route path="/password/reset/confirm/:uid/:token" component={PasswordReset} />
          <Route path="/password/reset/confirm" component={PasswordResetConfirm} />
          <Route path="/password/forgot/confirm" component={PasswordForgotConfirm} />
          <Route path="/password/forgot" component={PasswordForgot} />
          {/*<Route path="/pricing" component={Pricing} />*/}
          <Route exact path="/services/wash-and-fold" component={WashAndFold} />
          <Route exact path="/services" component={OurServices} />
          <Route exact path="/washmix-process" component={WashmixProcess} />
          <Route path="/advantage" component={WashmixAdvantages} />
          <PrivateRoute path="/pending" component={PendingRequest} />
          <PrivateRoute path="/pickup" component={Pickup} />
          <PrivateRoute path="/upcoming" component={UpcomingOrders} />
          <PrivateRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};
