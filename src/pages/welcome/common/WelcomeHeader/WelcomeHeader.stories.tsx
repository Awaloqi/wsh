import React from 'react';

import { WelcomeHeader } from './WelcomeHeader';

export default { title: 'components/ProgressBar' };

export const welcome = () => <WelcomeHeader step="welcome" />;
export const packages = () => <WelcomeHeader step="packages" />;
export const delivery = () => <WelcomeHeader step="delivery" />;
export const checkout = () => <WelcomeHeader step="checkout" />;
