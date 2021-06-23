import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
// import Logo from '../../images/logo.svg'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Tugas8</h1>
                    {/* <img src={Logo}
                    alt='logo' /> */}
                </NavLink>
                <Bars />
                <NavMenu>
                    {/* <NavLink to="/home">
                        Home
                    </NavLink> */}
                    <NavLink to="/about">
                        About
                    </NavLink>
                    <NavLink to="/data">
                        Data
                    </NavLink>
                    <NavLink to="/signup">
                        Sign Up
                    </NavLink>
                    {/* 2nd nav */}
                    {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
