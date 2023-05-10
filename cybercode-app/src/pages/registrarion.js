import React, {useContext, useState} from 'react';
import Logo from "../images/logo.jpeg";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {register} from "../http/userAPI";

const Registrarion = observer(() => {
    const {user} = useContext(Context)
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const registerEvent = (e) => {
        e.preventDefault()
        const data = register(nickname, email, password)
        let user1 = {email: data.sub}
        user.setUser(user1)
        user.setIsAuth(true)
        //куда-то перейти
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
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div th:if="${param.success}">
                            <div className="alert alert-info">You've successfully registered
                                to our app!
                            </div>
                        </div>
                        <div className="card-reg">
                            <div className="card-header">Registration</div>
                            <div className="card-body">
                                <form method="post" role="form" th:action="@{/register/save}" th:object="${user}"
                                      className="form">
                                    <div className="inputs">
                                        <label className="form-label">Nickame</label>
                                        <input className="form-control"
                                               id="nickname"
                                               value={nickname}
                                               onChange={(e) => {
                                                   setNickname(e.target.value)
                                               }}
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
                                               value={email}
                                               onChange={(e) => {
                                                   setEmail(e.target.value)
                                               }}
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
                                               value={password}
                                               onChange={(e) => {
                                                   setPassword(e.target.value)
                                               }}
                                               placeholder="Enter password"
                                               th:field="*{password}"
                                               type="password"
                                        />
                                        <p th:errors="*{password}" className="text-danger"
                                           th:if="${#fields.hasErrors('password')}">
                                        </p>
                                    </div>

                                    <div className="inputs">
                                        <button className="btn " onClick={(e) => {
                                            registerEvent(e)
                                        }} type="submit">Register
                                        </button>
                                        <span className="reg-text">Already registered? <a href="/" th:href="@{/login}">Login
                                            here</a></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
});

export default Registrarion;