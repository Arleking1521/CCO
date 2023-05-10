import {$authHost} from "./axiosApi";
import jwtDecode from "jwt-decode";


export const register = async (nickname, email, password) => {
    const {data} = await $authHost.post('/register', {nickName: nickname, email: email, password: password})
    localStorage.setItem('token', data)
    return jwtDecode(data)
}
export const login = async (email, password) => {
    const {data} = await $authHost.post('/login', {email: email, password: password})
    localStorage.setItem('token', data)
    return jwtDecode(data)
}

export const check = async () => {
    const {data} = await $authHost.get('/check')
    if (data !== "LOGOUT") {
        localStorage.setItem('token', data)
        return jwtDecode(data)
    } else {
        localStorage.setItem('token', '')
    }
}