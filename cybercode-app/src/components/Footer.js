import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Header from "./Header";
import InvHeader from "./InvHeader";
import Profile from "../pages/profile";
import Bank from "../pages/bank";
import {Nav} from "react-bootstrap";
import { useNavigate} from "react-router-dom";

import {MAP_ROUTE, INVENTORY_ROUTE, PROFILE_ROUTE} from "../utils/const";

const Footer = () => {
    const navigate = useNavigate()

    return (
        <>

            <footer>
                <div className="menu">
                    <Nav.Link className="map-nl" onClick={() => {
                        navigate(MAP_ROUTE)}}>
                        <div className="map-img"></div>
                        <div className="map-name">MAP</div>
                    </Nav.Link>
                    <Nav.Link className="inventory-nl" onClick={() => {
                        navigate(INVENTORY_ROUTE)}}>
                        <div className="inv-img"></div>
                        <div className="inv-name">INVENTORY</div>
                    </Nav.Link>
                    <Nav.Link className="profile-nl" onClick={() => {
                        navigate(PROFILE_ROUTE)}}>
                        <div className="prof-img"></div>
                        <div className="prof-name">PROFILE</div>
                    </Nav.Link>
                </div>
            </footer>

        </>
    );
};

export default Footer;