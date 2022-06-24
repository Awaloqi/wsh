import React from 'react';
import { action } from '@storybook/addon-actions';

import { GooglePlaces } from './GooglePlaces';
import '../../index.scss';

export default { title: 'components/GooglePlaces' };

export const googlePlaces = () => <GooglePlaces onSubmit={action('onSubmit')} />;
