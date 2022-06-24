import React from 'react';
import { action } from '@storybook/addon-actions';

import { NotifyModal } from './NotifyModal';
import '../../index.scss';

export default { title: 'modals/NotifyModal' };

export const notifyModal = () => <NotifyModal isOpen closeModal={action('setVisible')} />;
