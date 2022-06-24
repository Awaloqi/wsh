import React from 'react';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import '../src/index.scss';
import '../src/bootstrap.min.css';

const history = createHashHistory();

export const decorators = [
  (Story) => (
    <Router history={history}>
      <Story />
    </Router>
  ),
];
