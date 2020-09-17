import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
