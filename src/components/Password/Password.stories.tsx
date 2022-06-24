import React from 'react';
import { withRouter } from 'react-router';

import '../../index.scss';
import { PasswordForgot } from './PasswordForgot';
import { PasswordForgotConfirm } from './PasswordForgotConfirm';
import { PasswordReset } from './PasswordReset';
import { PasswordResetConfirm } from './PasswordResetConfirm';

export default { title: 'components/ResetPassword' };

export const passwordForgot = () => <PasswordForgot />;

export const passwordForgotConfirm = withRouter((props: any) => {
  props.location.state = { email: 'email@example.com' };
  return <PasswordForgotConfirm history={props.history} location={props.location} match={props.match} />;
});

export const passwordReset = withRouter((props: any) => {
  props.location.state = { email: 'email@example.com' };
  return <PasswordReset history={props.history} location={props.location} match={props.match} />;
});

export const passwordResetConfirm = () => <PasswordResetConfirm />;
