import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {adminRoutes, playerRoutes} from "../routes";
import {MAP_ROUTE} from "../utils/const";
import axios from "../http/axiosApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    let isAdmin = user.isAdmin

    if (user.isAuth) {
        console.log(user.user.email)
        axios.get("/checkAdmin/" + user.user.email).then((response) => {
            isAdmin = data;
            user.setIsAdmin(data)
        })
    }

    return (<Routes>
            {playerRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)}
            {isAdmin === true && adminRoutes.map(({path, Component}) => <Route key={path} path={path}
                                                                               component={Component} exact/>)}
            <Navigate to={MAP_ROUTE}/>
        </Routes>
    );
});

export default AppRouter;