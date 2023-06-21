"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import HamburgerMenuIconBlack from '../../../../public/icons/hamburgerMenuIconBlack.png'
import { SideMenuContext } from '../../NavbarAndSideMenuWrapper'

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