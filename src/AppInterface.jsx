import React from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
function AppInterface() {
    return (
        <>
        <NavBar/>
        {/* <Home/> */}
        <Outlet/>
        <Body/>
        {/* <Footer/> */}
        </>
    )
}

export default AppInterface