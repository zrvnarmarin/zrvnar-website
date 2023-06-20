import Link from "next/link"
import HamburgerMenuButton from "./HamburgerMenuButton"
import { links } from "../data/links"

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
                            {links.map(link => 
                                <Link key={link.id} href={link.href}>{link.value}</Link>    
                            )}
                        </div>
                    </li>

                    <HamburgerMenuButton />
                </ul>
            </nav>
        </header>
    )
}