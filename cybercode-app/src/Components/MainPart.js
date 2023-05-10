import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./Footer";

const MainPart = () => {
    return (
            <Router>
                <Footer/>
            </Router>
    );
};

export default MainPart;