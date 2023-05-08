import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPart from '../Components/MainPart'
import LeftPart from '../Components/LeftPart'

export default class PageView extends Component {
    render() {
        return (
            <>
                <div className='leftPart'>
                    <LeftPart/>
                </div>
                <div className='mainPart'>
                    <MainPart/>
                </div>
            </>
        )
    }
}