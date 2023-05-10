import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/login_style.css'
import './styles/style.css'
import './styles/inventory.css'
import './styles/profile.css'
import './styles/bank.css'

import PageView from './pages/PageView'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageView/>
  </React.StrictMode>
);

reportWebVitals();
