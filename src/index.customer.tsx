import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { App } from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'antd/dist/antd.css';

const rootElement = document.getElementById('root');

render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
