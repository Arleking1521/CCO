import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'


import Header from './Header';
import InvHeader from './InvHeader' 

export default class Footer extends Component {
    render() {
        return (
            <>
                
                <Routes>
                    <Route exact path='/' element={<Header />} />
                    <Route exact path='/inventory' element={<InvHeader />} />
                </Routes>

                <footer>
                    <div class="menu">
                        <Nav.Link class="map-nl" as={Link} to="/">
                            <div class="map-img"></div>
                            <div class="map-name">MAP</div>
                        </Nav.Link>
                        <Nav.Link class="inventory-nl" as={Link} to="/inventory">
                            <div class="inv-img"></div>
                            <div class="inv-name">INVENTORY</div>
                        </Nav.Link>
                        <Nav.Link class="profile-nl">
                            <div class="prof-img"></div>
                            <div class="prof-name">PROFILE</div>
                        </Nav.Link>
                    </div>
                </footer>
                
            </>
        )
    }
}