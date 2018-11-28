/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import './assets/stylesheets/ui.scss';
import './assets/stylesheets/index.scss';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './components/app';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('react-container'),
);
