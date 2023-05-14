import React, {useContext} from 'react';
import {Router, Route, Redirect} from "react-router-dom";
import {adminRoutes, playerRoutes} from "../routes";
import {MAP_ROUTE} from "../utils/const";
import axios from "../http/axiosApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    const {favorite} = useContext(Context)
    let isAdmin = user.isAdmin

    if (user.isAuth) {
        console.log(user.user.email)
        axios.get("/checkAdmin/" + user.user.email).then((response) => {
            isAdmin = response.data;
            user.setIsAdmin(response.data)
        })
    }

    return (<Router>
            {playerRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)}
            {isAdmin === true && adminRoutes.map(({path, Component}) => <Route key={path} path={path}
                                                                               component={Component} exact/>)}
            <Redirect to={MAP_ROUTE}/>
        </Router>

    );
});

export default AppRouter;