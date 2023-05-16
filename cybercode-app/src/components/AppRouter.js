import React, {useContext} from 'react';
import {Route} from "react-router-dom";
import {adminRoutes, playerRoutes} from "../routes";
import {MAP_ROUTE} from "../utils/const";
import {$host} from "../http/axiosApi";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Switch from "react-router-dom/es/Switch";
import Redirect from "react-router-dom/es/Redirect";

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    let isAdmin = user.isAdmin

    if (user.isAuth) {
        console.log(user.user.email)
        $host.get("/checkAdmin/" + user.user.email).then((data) => {
            isAdmin = data;
            user.setIsAdmin(data)
        })
    }

    return (<Switch>
            {playerRoutes.map(({path, Component}) => <Route key={path} path={path} component={Component} exact/>)}
            {isAdmin === true && adminRoutes.map(({path, Component}) => <Route key={path} path={path}
                                                                               component={Component} exact/>)}
            <Redirect to={MAP_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;