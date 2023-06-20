"use client"

import { useContext } from "react"
import { SideMenuContext } from "../ClientWrapper"

export default function SideMenu() {

    const { isOpenedSideMenu, closeSideMenu } = useContext(SideMenuContext)
    return (
        <>
            {
                isOpenedSideMenu && 
                <div className="bg-red-500 w-1/4 h-[100%] fixed left-0 top-0 overflow-y-auto px-8 py-16 z-10">
                    Side Menu
                    <div>
                        <button onClick={() => closeSideMenu()} className="bg-green-500 p-4">Close Side Menu</button>
                    </div>
                </div>
            }
        </>
    )
}