"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import CloseSideMenuIcon from '../../../../public/icons/closeSideMenuIcon.png'
import { SideMenuContext } from '../../NavbarAndSideMenuWrapper'

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