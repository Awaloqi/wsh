import React from 'react';
import { action } from '@storybook/addon-actions';
import '../../index.scss';
import { SaveCardModal } from '.';

export default { title: 'modals/SaveCardModal' };

export const saveCardModal = () => <SaveCardModal isOpen closeModal={action('setVisible')} />;
