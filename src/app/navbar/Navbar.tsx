import Link from "next/link"
import HamburgerMenuButton from "./HamburgerMenuButton"
import { links } from "../data/links"

export default function Navbar() {

    return (
        <header className='w-full z-10 py-8'>
            <nav>
                <ul className='flex flex-row justify-around items-center text-lg'>
                    <li className='sm:flex hidden'>
                        <div className='flex flex-row items-center gap-8 sm:gap-24'>
                            {links.map(link => 
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="text-xl font-semibold"
                                >
                                    {link.value}
                                </Link>    
                            )}
                        </div>
                    </li>

                    <HamburgerMenuButton />
                </ul>
            </nav>
        </header>
    )
}