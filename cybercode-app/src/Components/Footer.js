import React, { Component } from 'react'
import {  Routes, Route, Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'


import Header from './Header';
import InvHeader from './InvHeader'
import Profile from '../pages/profile'
import Bank from '../pages/bank'

export default class Footer extends Component {
    render() {
        return (
            <>
                
                <Routes>
                    <Route exact path='/' element={<Header />} />
                    <Route exact path='/inventory' element={<InvHeader />} />
                    <Route exact path='/profile' element={<Profile />} />
                    <Route exact path='/bank' element={<Bank />} />
                    
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
                        <Nav.Link class="profile-nl" as={Link} to="/profile">
                            <div class="prof-img"></div>
                            <div class="prof-name">PROFILE</div>
                        </Nav.Link>
                    </div>
                </footer>
                
            </>
        )
    }
}