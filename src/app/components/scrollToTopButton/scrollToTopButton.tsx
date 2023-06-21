import Image from "next/image"
import ArrowUpIcon from '../../../../public/icons/arrowUpIcon.png'

export default function ScrollToTopButton() {
    return (
        <div className='bottom-10 right-10 rounded-full px-6 py-6 fixed bg-gradient-to-r from-orange-100 to-yellow-100 hover:bg-gradient-to-r hover:from-orange-200 hover:to-yellow-200 duration-700 transition-all'>
          <Image src={ArrowUpIcon} width={20} height={20} alt="arrow_up"  />
        </div>
    )
}