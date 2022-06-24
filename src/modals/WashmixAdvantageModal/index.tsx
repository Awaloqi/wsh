import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { WashmixAdvantages } from 'pages/WashmixAdvantages';
import { Close } from 'icons';

const Content = ({ onGoBack }: any) => {
  return (
    <div className="container d-flex flex-column w-100 h-100">
      <div className="closeBtn">
        <button onClick={onGoBack}>
          <Close />
          <span>Close</span>
        </button>
      </div>
      <div style={{ flex: 1, overflowY: 'scroll' }}>
        <WashmixAdvantages isModal={true} />
      </div>
    </div>
  );
};

const WashmixAdvantageModal = ({ visible, onHide }: any) => {
  return (
    <Drawer
      placement="bottom"
      visible={visible}
      onClose={onHide}
      destroyOnClose
      height="100vh"
      width="100vw"
      closable={false}
      bodyStyle={{ padding: 0, margin: 0 }}
    >
      <Content onGoBack={onHide} />
    </Drawer>
  );
};

export default WashmixAdvantageModal;
