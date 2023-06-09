import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import GamePage from "./pages/GamePage";

const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
         check().then((data) => {
             if (data !== "LOGOUT") {
                 let user1 = {email: data.sub};
                 user.setUser(user1);
                 user.setIsAuth(true)
             } else {
                 user.setUser('');
             }
         }).finally(() => {
             setLoading(false)
         })
     }, [])

     if (loading) {
         <Spinner animation={"grow"}/>
     }
    return (

            <GamePage/>

    );
});

export default App;