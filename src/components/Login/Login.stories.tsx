import React from 'react';
import { Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';

import { Login } from './Login';
import '../../index.scss';
import { LoginForm } from './LoginForm';

export default { title: 'components/Login' };

export const login = () => <Login />;

export const loginForm = () => <Form onSubmit={action('onSubmit')} component={LoginForm} />;
