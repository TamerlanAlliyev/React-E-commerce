import React from 'react'
import logo from '../assets/images/logo.png'
import '../assets/styles/Header.css'
import { FaBasketShopping } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { useState } from 'react';
function Header() {
    const [theme, setTheme] = useState(false)

    const toggleTheme = () => {
        setTheme(!theme)
        let root = document.querySelector('#root')
        if (theme) {
            root.style.color = "white"
            root.style.backgroundColor = "#151515"
        } else {
            root.style.color = "black"
            root.style.backgroundColor = "white"

        }
    }

    return (
        <div className='flex-between'>
            <div className='flex-row'>
                <img className='logo-png' src={logo} alt={logo} />
                <p>Emporium</p>
            </div>

            <div className='flex-row' style={{ gap: '15px' }}>
                <input className='search-input' type="text" />

                <div className="header-icon-list flex-row">

                    {
                        theme ?
                            <div className="theme-button flex-row">
                                <IoIosMoon className='header-icon' onClick={toggleTheme} />
                            </div> :
                            <div className="theme-button flex-row">
                                <MdSunny className='header-icon' onClick={toggleTheme} />
                            </div>
                    }

                    <FaBasketShopping className='header-icon' />
                </div>
            </div>
        </div>
    )
}

export default Header
