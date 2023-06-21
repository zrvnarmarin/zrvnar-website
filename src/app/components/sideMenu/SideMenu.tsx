"use client"

import Link from "next/link"
import { useContext } from "react"
import { SideMenuContext } from "../../NavbarAndSideMenuWrapper"
import { links } from "../../data/links"
import CloseSideMenuButton from "./CloseSideMenuButton"
import '../../../../public/styles/discoverMoreButton.css'

export default function SideMenu() {

    const { isOpenedSideMenu, closeSideMenu } = useContext(SideMenuContext)

    return (
        <>
            { isOpenedSideMenu && 
                <div className="bg-white w-full h-[100%] fixed left-0 top-0 overflow-y-auto py-8 px-6 ss:px-8 z-50">

                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-medium">MZ</div>
                        <CloseSideMenuButton />
                    </div>

                    <div className='flex flex-col items-center gap-6 py-28'>
                        {links.map(link => 
                            <Link
                                key={link.id}
                                href={link.href}
                                onClick={closeSideMenu}
                                className="text-xl font-semibold discover"
                            >
                                {link.value}
                            </Link>    
                        )}
                    </div>

                    {/* {links.map(link => 
                        <Link key={link.id} href={link.href} onClick={closeSideMenu}>{link.value}</Link>    
                    )}
                    <div>
                        <button onClick={() => closeSideMenu()} className="bg-green-500 p-4">Close Side Menu</button>
                    </div> */}
                </div>
            }
        </>
    )
}