import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Inventory from '../pages/inventory'
export default class InvHeader extends Component {
    render() {
        return (
            <>
                
                <div className='header'>
                    <div class="tb" >INVENTORY</div>
                    <div className='Cell-count'>Size: 25/50</div>
                </div>

                <div className='inv-main'>
                    <Inventory/>
                </div>
            </>
        )
    }
}