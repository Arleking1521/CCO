import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/login_style.css'
import './styles/style.css'
import './styles/inventory.css'
import './styles/profile.css'
import './styles/bank.css'

import PageView from './pages/PageView'
import reportWebVitals from './reportWebVitals';
import UserStore from "./store/UserStore";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const Context = createContext(null)


root.render(<Context.Provider value={{
    user: new UserStore()
}}>
    <App/>
</Context.Provider>);

reportWebVitals();
