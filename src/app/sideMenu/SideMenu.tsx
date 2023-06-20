"use client"

import Link from "next/link"
import { useContext } from "react"
import { SideMenuContext } from "../NavbarAndSideMenuWrapper"
import { links } from "../data/links"

export default function SideMenu() {

    const { isOpenedSideMenu, closeSideMenu } = useContext(SideMenuContext)
    return (
        <>
            { isOpenedSideMenu && 
                <div className="bg-red-500 border-black border-2 w-full h-[100%] fixed left-0 top-0 overflow-y-auto px-8 py-16 z-10">
                    {links.map(link => 
                        <Link key={link.id} href={link.href} onClick={closeSideMenu}>{link.value}</Link>    
                    )}
                    <div>
                        <button onClick={() => closeSideMenu()} className="bg-green-500 p-4">Close Side Menu</button>
                    </div>
                </div>
            }
        </>
    )
}