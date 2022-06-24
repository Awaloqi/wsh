import React from 'react';
import { action } from '@storybook/addon-actions';
import { Header } from './Header';
import '../../index.scss';

export default { title: 'components/Header' };

export const guest = () => <Header logout={action('logout')} />;

export const user = () => <Header logout={action('logout')} user={{ token: 'token', email: 'user@example.com' }} />;
