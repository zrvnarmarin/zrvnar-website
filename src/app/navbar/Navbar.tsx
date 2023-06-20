import Link from "next/link"
import HamburgerMenuButton from "./HamburgerMenuButton"

export default function Navbar() {

    return (
        <header className='fixed w-full z-10 backdrop-blur-md'>
            <nav>
                <ul className='flex flex-row justify-between items-center'>
                    <li className='flex flex-row items-center'>
                        <Link href="/">Marin Zrvnar dev</Link>
                    </li>

                    <li className='sm:flex hidden'>
                        <div className='flex flex-row items-center gap-8 sm:gap-12'>
                            <Link href="/">Home</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/resources">Resources</Link>
                        </div>
                    </li>

                    <HamburgerMenuButton />
                </ul>
            </nav>

            {/* { isOpenedSideMenu 
                ? <SideMenu closeSideMenu={closeSideMenu} /> 
                : <></>
            } */}
    </header>
    )
}