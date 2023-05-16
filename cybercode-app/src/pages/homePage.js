import React from 'react';
import AppRouter from "../components/AppRouter";
import Footer from "../components/Footer";
import {BrowserRouter} from "react-router-dom";

const HomePage = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    )
}
export default HomePage;