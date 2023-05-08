import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Footer from './Footer'

export default class MainPart extends Component {
    render() {
        return (
            <>
                <Router>
                    <Footer/>
                </Router>
            </>
        )
    }
}