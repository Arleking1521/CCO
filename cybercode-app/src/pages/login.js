import React, {useContext, useState} from 'react';
import {Button} from "react-bootstrap";
import Logo from "../assets/logo.jpeg";
import {Context} from "../index";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";

import {MAP_ROUTE, REG_ROUTE} from "../utils/const";
import {useNavigate} from "react-router-dom";

const Login = observer(() => {
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const click = (e) => {
        e.preventDefault()
        const data = login(email, password)
        let user1 = {email: data.sub}
        user.setUser(user1)
        user.setIsAuth(true)
        navigate(MAP_ROUTE)
    }
    return (
        <main>
            <div className="logo">
                <div className="logo-img">
                    <img src={Logo} width="100%"/>
                </div>
                <div className="logo-name">CyberCodeOnline</div>
            </div>

            <div className="container">
                <div >
                    <div className="alert alert-danger">Invalid Email and Password.</div>
                </div>
                <div >
                    <div className="alert alert-success">You have been logged out.</div>
                </div>
                <div className="card-log">
                    <div className="card-header">Login Form</div>
                    <div className="card-body">
                        <form
                            method="post"
                            className="form"
                            role="form">
                            <div className="inputs">
                                <label for="username" className="control-label">Email *</label>
                                <input type="text"
                                       id="username"
                                       name="username"
                                       value={email}
                                       onChange={(e)=>{setEmail(e.target.value)}}
                                       className="form-control"
                                       placeholder="Email"
                                />
                            </div>

                            <div className="inputs">
                                <label for="password" className="control-label">Password *</label>
                                <input type="password"
                                       id="password"
                                       name="password"
                                       value={password}
                                       onChange={(e)=>{setPassword(e.target.value)}}
                                       className="form-control"
                                       placeholder="Password"
                                />
                            </div>

                            <div className="inputs">
                                <Button type="submit"
                                        className="btn"
                                        onClick={() => {
                                            click()}}>
                                    Login
                                </Button>
                                <span className="reg-text"> Not registered?
                                    <a onClick={() => {
                                        navigate(REG_ROUTE)
                                    }} > Register/SignUp Here</a>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
});

export default Login;