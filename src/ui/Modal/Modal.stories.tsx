import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from '../Button';
import { H4 } from '../Typography';
import { Modal } from './Modal';
import { ModalEdit } from './ModalEdit';
import { ModalUpdate } from './ModalUpdate';
import { ModalTitle } from './ModalTitle';

export default { title: 'ui/Modal' };

const ModalComponent = ({ Component, props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        open
      </Button>
      <Component {...props} isOpen={isOpen} close={() => setIsOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolore dolores eaque eveniet excepturi harum,
        iste itaque molestiae quos sit! Aut dolorem esse facilis fugiat itaque minus nihil optio porro.
      </Component>
    </>
  );
};

export const modal = () => <ModalComponent Component={Modal} />;
export const modalEdit = () => <ModalComponent Component={ModalEdit} />;
export const modalUpdate = () => <ModalComponent Component={ModalUpdate} />;
export const modalTitle = () => <ModalComponent Component={ModalTitle} props={{ title: <H4>Title</H4> }} />;
export const modalTitlePrev = () => (
  <ModalComponent Component={ModalTitle} props={{ title: <H4>Title</H4>, prev: action('prev') }} />
);
