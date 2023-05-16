import React from 'react';
import AppRouter from "../components/AppRouter";
import Footer from "../components/Footer";
import {BrowserRouter} from "react-router-dom";
import HeaderPage from "../components/HeaderPage";

const HomePage = () => {
    return (
        <>
            <BrowserRouter>
                <HeaderPage/>
                <AppRouter/>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default HomePage;