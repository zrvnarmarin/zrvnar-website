import Image from 'next/image'
import Link from 'next/link'
import './discoverMoreButton.css'
import './hover.css'

export default function Home() {
  return (
    <div>
      
      <div className={`flex flex-col gap-16 mt-72 w-full h-full relative`}>
        <div className="absolute z-[0] w-[100%] h-[80%] top-0 blur-[96px] bg-gradient-to-r from-orange-100 to-yellow-100"></div>
        <h1 className={`text-9xl font-normal text-center uppercase z-10`}>Marin Žrvnar</h1>
        <p className={`text-6xl text-center z-10`}>Full-Stack Web Developer</p>
      </div>

      {/* <div className='bg-orange-200 mt-64 text-4xl text-center italic py-4'>
        Professional. Trustworthy. Efficient.
      </div> */}

      <div className='mt-80 relative'>
        <div className='text-start pl-24 text-9xl uppercase text-orange-100 font-bold'>About Me</div>
        <div className='absolute top-8 left-80 text-xl font-bold'>Full stack developer who passionately crafts clean, professional and reliable web products.</div>
        <div className='absolute top-16 left-80 text-xl font-bold'>With my help, you can elevate your digital presence for maximum impact.</div>
      </div>

      <div className='mt-80 relative'>
        <div className='text-end pr-24 text-9xl uppercase text-blue-100 font-bold'>Projects</div>
        <div className='absolute top-8 right-80 text-xl font-bold'>I take pride in delivering high-quality solutions to my clients that also leverage my skills as a developer. </div>
        <div className='absolute top-16 right-80 text-xl font-bold'>Every project is a striving to improve. Dive into some of my latest work.</div>
      </div>

      <div className='grid col-span-2 items-center justify-between px-24 mt-72'>
        <div className='col-start-1 col-end-2'>
          <div className='text-4xl font-bold mb-32'>01</div>
          <div className='px-12 py-8 text-6xl uppercase font-black mb-16 hover:cursor-pointer hover'>Apartmenify</div>
          <div className='px-12 text-3xl font-bold mb-4'>Frontend Development</div>
          <div className='px-12 text-xl font-bold'>This application serves as the app for managing apartments.</div>
        </div>
      </div>

      <div className='grid col-span-2 items-center justify-between px-24 mt-72'>
        <div className='col-start-1 col-end-2'>
          <div className='text-4xl font-bold mb-32'>02</div>
          <div className='px-12 py-8 text-6xl uppercase font-black mb-16 hover:cursor-pointer hover'>Apartmenify</div>
          <div className='px-12 text-3xl font-bold mb-4'>Frontend Development</div>
          <div className='px-12 text-xl font-bold'>This application serves as the app for managing apartments.</div>
        </div>
      </div>

      <div className='grid col-span-2 items-center justify-between px-24 mt-72'>
        <div className='col-start-1 col-end-2'>
          <div className='text-4xl font-bold mb-32'>03</div>
          <div className='px-12 py-8 text-6xl uppercase font-black mb-16 hover:cursor-pointer hover'>Apartmenify</div>
          <div className='px-12 text-3xl font-bold mb-4'>Frontend Development</div>
          <div className='px-12 text-xl font-bold'>This application serves as the app for managing apartments.</div>
        </div>

      <div className='col-start-2 col-end-3'>
        {/* <Image src={AuthorImage} alt="gbcfg" /> */}
        </div>
      </div>

      <div className='text-center mt-36 mb-24'>
        <Link href="/projects" 
        className='bg-orange-300 px-24 py-8 text-white font-bold text-2xl discover'>Discover More</Link>
      </div>

      <div className='mt-80 relative'>
        <div className='text-start pl-24 text-9xl uppercase text-rose-100 font-bold'>Latest Blogs</div>
        <div className='absolute top-8 left-80 text-xl font-bold'>Full stack developer who passionately crafts clean, professional and reliable web products.</div>
        <div className='absolute top-16 left-80 text-xl font-bold'>With my help, you can elevate your digital presence for maximum impact.</div>
      </div> 

    </div>
  )
}
