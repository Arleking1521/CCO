import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainPart from '../Components/MainPart'

export default class PageView extends Component {
    render() {
        return (
            <>
                <div className='mainPart'>
                    <MainPart/>
                </div>
            </>
        )
    }
}