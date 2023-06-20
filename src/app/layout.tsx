import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar/Navbar'
import SideMenu from './sideMenu/SideMenu'
import NavbarAndSideMenuWrapper from './NavbarAndSideMenuWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marin Zrvnar',
  description: 'Marin Zrvnar personal developer blog and website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-200`} >
        <NavbarAndSideMenuWrapper>
          <Navbar />
          <SideMenu />
        </NavbarAndSideMenuWrapper>
        <div>This div is shared across layouts in whole app!</div>
        {children}
      </body>
    </html>
  )
}
