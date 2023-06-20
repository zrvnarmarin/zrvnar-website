import Image from 'next/image'

export default function Home() {
  return (
    <div>
      
      <div className={`flex flex-col gap-16 mt-72 w-full h-full`}>
        <h1 className={`text-9xl font-normal text-center uppercase`}>Marin Žrvnar</h1>
        <p className={`text-6xl text-center`}>Full-Stack Web Developer</p>
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
        <div className='text-end pr-24 text-9xl uppercase text-orange-100 font-bold'>Projects</div>
        <div className='absolute top-8 right-80 text-xl font-bold'>I take pride in delivering high-quality solutions that also leverage my skills as a developer. </div>
        <div className='absolute top-16 right-80 text-xl font-bold'>Every project is a striving to improve. Dive into some of my latest work.</div>
      </div>

      <div className='mt-72'></div>
        <div className='grid col-span-2 items-center justify-between px-24'>
          <div className='text-4xl font-bold mb-32'>01</div>
          <div className='px-12 text-6xl uppercase font-black mb-16'>Apartmenify</div>
          <div className='px-12 text-3xl font-semibold mb-4'>Frontend Development</div>
          <div className='px-12 text-2xl font-medium'>This application serves as the app for managing apartments.</div>
        </div>
    </div>
  )
}
