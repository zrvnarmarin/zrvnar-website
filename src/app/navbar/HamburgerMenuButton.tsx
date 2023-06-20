"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import HamburgerMenuIconBlack from '../icons8-hamburger-menu-50.png'
import { SideMenuContext } from '../NavbarAndSideMenuWrapper'

export default function HamburgerMenuButton() {
    const { isOpenedSideMenu, toggleSideMenu } = useContext(SideMenuContext)

    return (
        <li className="sm:hidden">
            {isOpenedSideMenu.toString()}
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