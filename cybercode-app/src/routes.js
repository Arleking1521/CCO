import{
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    REG_ROUTE,
    MAP_ROUTE,
    BANK_ROUTE,
    INVENTORY_ROUTE,
    PROFILE_ROUTE
} from "./utils/const";

import Map from "./pages/map";
import Login from "./pages/login";
import Register from "./pages/register";
import Bank from "./pages/bank";
import Inventory from "./pages/inventory";
import Profile from "./pages/profile";
import AdminPanel from './pages/AdminPanel'
export const playerRoutes = [{
    path: LOGIN_ROUTE, Component: Login
}, {
    path: REG_ROUTE, Component: Register
}, {
    path: MAP_ROUTE, Component: Map
}, {
    path: BANK_ROUTE + '/:id', Component: Bank
}, {
    path: INVENTORY_ROUTE, Component: Inventory
}, {
    path: PROFILE_ROUTE, Component: Profile
}]

export const adminRoutes = [{
    path: LOGIN_ROUTE, Component: Login
}, {
    path: REG_ROUTE, Component: Register
}, {
    path: MAP_ROUTE, Component: Map
}, {
    path: BANK_ROUTE, Component: Bank
}, {
    path: INVENTORY_ROUTE, Component: Inventory
}, {
    path: PROFILE_ROUTE, Component: Profile
}, {
    path: ADMIN_ROUTE, Component: AdminPanel
}]