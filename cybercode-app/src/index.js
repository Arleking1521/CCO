import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/login_style.css'
import './styles/style.css'
import './styles/inventory.css'

import PageView from './pages/PageView'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageView/>
  </React.StrictMode>
);

reportWebVitals();
