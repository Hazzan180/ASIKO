import React, {useEffect, useState} from 'react'
import "./Navbar.css"
import Logo from "../../assets/logo.png"

import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = ()=> {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
  return (
    <nav className= {`contain ${sticky? 'dark-nav' : ''}`}>
        <img src={Logo} alt="logo" className='logo'/>

        <ul className={mobileMenu ? "" : 'hide-mobil-menu'}>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li>home</li>
            <li><button className='btn'>contact us</button></li>
        </ul>
        <CiMenuFries className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
