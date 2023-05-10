import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Header from "./Header";
import InvHeader from "./InvHeader";
import Profile from "../pages/profile";
import Bank from "../pages/bank";
import {Nav} from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Header/>}/>
                <Route exact path='/inventory' element={<InvHeader/>}/>
                <Route exact path='/profile' element={<Profile/>}/>
                <Route exact path='/bank' element={<Bank/>}/>
            </Routes>
            <footer>
                <div className="menu">
                    <Nav.Link className="map-nl" as={Link} to="/">
                        <div className="map-img"></div>
                        <div className="map-name">MAP</div>
                    </Nav.Link>
                    <Nav.Link className="inventory-nl" as={Link} to="/inventory">
                        <div className="inv-img"></div>
                        <div className="inv-name">INVENTORY</div>
                    </Nav.Link>
                    <Nav.Link className="profile-nl" as={Link} to="/profile">
                        <div className="prof-img"></div>
                        <div className="prof-name">PROFILE</div>
                    </Nav.Link>
                </div>
            </footer>

        </>
    );
};

export default Footer;