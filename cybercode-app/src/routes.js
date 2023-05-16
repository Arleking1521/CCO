import{
    ADMIN_ROUTE,
    MAP_ROUTE,
    BANK_ROUTE,
    INVENTORY_ROUTE,
    PROFILE_ROUTE
} from "./utils/const";

import Header from "./components/Header";
import Login from "./pages/login";
import Register from "./pages/register";
import Bank from "./pages/bank";
import InvHeader from "./components/InvHeader";
import Profile from "./pages/profile";
import AdminPanel from './pages/AdminPanel'
export const playerRoutes = [{
    path: MAP_ROUTE, Component: Header
}, {
    path: BANK_ROUTE, Component: Bank
}, {
    path: INVENTORY_ROUTE, Component: InvHeader
}, {
    path: PROFILE_ROUTE, Component: Profile
}]

export const adminRoutes = [{
    path: MAP_ROUTE, Component: Header
}, {
    path: BANK_ROUTE, Component: Bank
}, {
    path: INVENTORY_ROUTE, Component: InvHeader
}, {
    path: PROFILE_ROUTE, Component: Profile
}, {
    path: ADMIN_ROUTE, Component: AdminPanel
}]