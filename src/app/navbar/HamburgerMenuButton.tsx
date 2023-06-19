"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import HamburgerMenuIconBlack from '../icons8-hamburger-menu-50.png'

export default function HamburgerMenuButton() {
    const [isOpenedSideMenu, setIsOpenedSideMenu] = useState(false)
  
    const closeSideMenu = () => setIsOpenedSideMenu(false)
    const toggleSideMenu = () => setIsOpenedSideMenu(prev => !prev)

    return (
        <li className="sm:hidden">
            <button 
                aria-label='hamburger_menu' 
                onClick={toggleSideMenu}
            >
                <Image
                    src={HamburgerMenuIconBlack}
                    width={50}
                    height={50}
                    alt="Picture of the author"
                />
            </button>
        </li>
    )
}