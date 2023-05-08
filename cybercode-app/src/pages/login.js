import React, { Component } from 'react';

import Logo from "../images/logo.jpeg"

export default class login extends Component {
    render() {
        return (
            <>
            <main>
                <div className="logo">
                    <div className="logo-img">
                        <img src={Logo} width="100%"/>
                    </div>
                    <div className="logo-name">CyberCodeOnline</div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div th:if="${param.error}">
                                <div className="alert alert-danger">Invalid Email and Password.</div>
                            </div>
                            <div th:if="${param.logout}">
                                <div className="alert alert-success">You have been logged out.</div>
                            </div>
                            <div className="card-log">
                                <div className="card-header">Login Form</div>
                                <div className="card-body">
                                    <form
                                            method="post"
                                            th:action="@{/login}"
                                            className="form"
                                            role="form">
                                        <div className="inputs">
                                            <label for="username" className="control-label">Email *</label>
                                            <input type="text"
                                                id="username"
                                                name="username"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                
                                        <div className="inputs">
                                            <label for="password" className="control-label">Password *</label>
                                            <input type="password"
                                                id="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Password"
                                            />
                                        </div>
                
                                        <div className="inputs">
                                            <button type="submit" className="btn">Login</button>
                                            <span className="reg-text"> Not registered?
                                                <a th:href="@{/register}"> Register/SignUp Here</a>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </>
        )
    }
}