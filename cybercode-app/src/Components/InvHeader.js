import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export default class InvHeader extends Component {
    render() {
        return (
            <>
                <header>
                    <div class="tb" >EQUIPPED</div>
                    <div class="tb" >INVENTORY</div>
                    <div class="tb" >ITEM INBOX</div>
                    <div class="tb" >CRAFTING</div>
                </header>

                
            </>
        )
    }
}