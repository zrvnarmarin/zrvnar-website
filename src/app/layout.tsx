import './globals.css'
import { Sawarabi_Mincho } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import SideMenu from './components/sideMenu/SideMenu'
import NavbarAndSideMenuWrapper from './NavbarAndSideMenuWrapper'
import Image from 'next/image';
import ArrowUpIcon from '../../public/icons/arrowUpIcon.png'
import ScrollToTopButton from './components/scrollToTopButton/scrollToTopButton'

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
      <body className={`${swarabiMincho.className} mx-auto relative`} >
        <NavbarAndSideMenuWrapper>
          <Navbar />
          <SideMenu />
        </NavbarAndSideMenuWrapper>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
