import React from 'react';
import { action } from '@storybook/addon-actions';

import { AdvantageModal } from './AdvantageModal';

export default { title: 'modals/Advantage' };

export const advantageModal = () => <AdvantageModal isOpen closeModal={action('closeModal')} />;
