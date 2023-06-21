"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import HamburgerMenuIconBlack from '../icons8-hamburger-menu-50 (1).png'
import CloseSideMenuIcon from '../icons8-close-50.png'
import { SideMenuContext } from '../NavbarAndSideMenuWrapper'

export default function CloseSideMenuButton() {
    const { toggleSideMenu } = useContext(SideMenuContext)

    return (
        <button 
            aria-label='hamburger_menu' 
            onClick={toggleSideMenu}
            className=''
        >
            <Image
                src={CloseSideMenuIcon}
                width={50}
                height={50}
                alt="Picture of the author"
                className='hover:rotate-90 duration-700'
            />
        </button>
    )
}