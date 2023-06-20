import './globals.css'
import { Sawarabi_Mincho } from 'next/font/google'
import Navbar from './navbar/Navbar'
import SideMenu from './sideMenu/SideMenu'
import NavbarAndSideMenuWrapper from './NavbarAndSideMenuWrapper'

const swarabiMincho = Sawarabi_Mincho({
  weight: "400",
  display: "swap",
  variable: "--font-pacifico",
  subsets: ['latin']
});

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
      <body className={`${swarabiMincho.className} mx-auto`} >
        <NavbarAndSideMenuWrapper>
          <Navbar />
          <SideMenu />
        </NavbarAndSideMenuWrapper>
        {children}
      </body>
    </html>
  )
}
