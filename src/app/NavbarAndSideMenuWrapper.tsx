"use client"

import { createContext, useState } from 'react';

interface defaultContextValue {
  isOpenedSideMenu: boolean;
  toggleSideMenu: () => void;
  closeSideMenu: () => void;
}

const defaultValues: defaultContextValue = {
  isOpenedSideMenu: false,
  toggleSideMenu: () => {},
  closeSideMenu: () => {},
}

export const SideMenuContext = createContext<defaultContextValue>(defaultValues);

export default function NavbarAndSideMenuWrapper({ children} : { children: React.ReactNode }) {

  const [isOpenedSideMenu, setIsOpenedSideMenu] = useState(false);

  const closeSideMenu = () => setIsOpenedSideMenu(false);
  const toggleSideMenu = () => setIsOpenedSideMenu(prev => !prev);

  return (
    <div className=''>
      <SideMenuContext.Provider value={{ 
        isOpenedSideMenu: isOpenedSideMenu,
        toggleSideMenu: toggleSideMenu,
        closeSideMenu: closeSideMenu,
      }}>
        {children}
      </SideMenuContext.Provider>
    </div>
  );
}
