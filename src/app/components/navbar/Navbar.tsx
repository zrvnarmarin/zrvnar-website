import Link from "next/link"
import HamburgerMenuButton from "./HamburgerMenuButton"
import { links } from "../../data/links"

// stavi discover klasu na linkove - testiraj!

export default function Navbar() {

    return (
        <header className='w-full z-10 py-8'>
            <nav>
                <ul className='flex flex-row justify-between items-center sm:justify-around sm:items-center sm:text-lg'>
                    <li className='sm:flex hidden'>
                        <div className='flex flex-row items-center gap-8 sm:gap-24'>
                            {links.map(link => 
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    className="text-xl font-semibold hover:bg-gradient-to-r from-orange-100 to-yellow-100 "
                                >
                                    {link.value}
                                </Link>    
                            )}
                        </div>
                    </li>

                    <li className="sm:hidden">
                        <div className="text-3xl font-medium pl-6">MZ</div>
                    </li>

                    <li className="sm:hidden pr-6">
                        <HamburgerMenuButton />
                    </li>
                </ul>
            </nav>
        </header>
    )
}