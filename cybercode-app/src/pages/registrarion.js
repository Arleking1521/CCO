import React, { Component } from 'react';

import Logo from "../images/logo.jpeg"

export default class registration extends Component {
    render() {
        return (
            <>
            <main>
                <div className="logo">
                    <div className="logo-img">
                        <img src={Logo} width="100%">
                    </div>
                    <div className="logo-name">CyberCodeOnline</div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">

                            <div th:if="${param.success}">
                                <div className="alert alert-info">You've successfully registered
                                    to our app!</div>
                            </div>
                            <div className="card-reg">
                                <div className="card-header">Registration</div>
                                <div className="card-body">
                                    <form method="post" role="form" th:action="@{/register/save}" th:object="${user}" className="form">

                                        <div className="inputs">
                                            <label className="form-label">Nickame</label>
                                            <input className="form-control"
                                                   id="nickname"
                                                   name="nickname"
                                                   placeholder="Enter first name"
                                                   th:field="*{nickName}"
                                                   type="text"
                                            />
                                            <p th:errors="*{nickName}" className="text-danger"
                                               th:if="${#fields.hasErrors('nickName')}">
                                            </p>
                                        </div>

                                        <div className="inputs">
                                            <label className="control-label">Email</label>
                                            <input className="form-control"
                                                   id="email"
                                                   name="email"
                                                   placeholder="Enter email address"
                                                   th:field="*{email}"
                                                   type="email"
                                            />
                                            <p th:errors="*{email}" className="text-danger"
                                               th:if="${#fields.hasErrors('email')}">
                                            </p>
                                        </div>
                                        <div className="inputs">
                                            <label className="control-label">Password</label>
                                            <input className="form-control"
                                                   id="password"
                                                   name="password"
                                                   placeholder="Enter password"
                                                   th:field="*{password}"
                                                   type="password"
                                            />
                                            <p th:errors="*{password}" className="text-danger"
                                               th:if="${#fields.hasErrors('password')}">
                                            </p>
                                        </div>

                                        <div className="inputs">
                                            <button className="btn " type="submit">Register</button>
                                            <span className="reg-text">Already registered? <a href="/" th:href="@{/login}">Login
                                            here</a></span>
                                        </div>
                                    </form>
                                </div>
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