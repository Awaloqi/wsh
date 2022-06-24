import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../index.scss';
import { RecurringModal } from '.';

export default { title: 'modals/NotifyModal' };

export const recurringModal = () => <RecurringModal isOpen closeModal={action('setVisible')} />;
