"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import HamburgerMenuIconBlack from '../icons8-hamburger-menu-50 (1).png'
import { SideMenuContext } from '../NavbarAndSideMenuWrapper'

export default function HamburgerMenuButton() {
    const { toggleSideMenu } = useContext(SideMenuContext)

    return (
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
    )
}