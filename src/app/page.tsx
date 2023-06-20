import Image from 'next/image'
import { Pacifico, Sawarabi_Mincho } from 'next/font/google'

const pacifico = Sawarabi_Mincho({
  weight: "400",
  display: "swap",
  variable: "--font-pacifico",
  subsets: ['latin']
});

export default function Home() {
  return (
    <div>
      
      <div className={`flex flex-col gap-16 mt-72 w-full h-full`}>
        <h1 className={`${pacifico.className} text-9xl font-normal text-center uppercase`}>Marin Žrvnar</h1>
        <p className={`text-6xl text-center ${pacifico.className}`}>Full Stack Developer</p>
      </div>

      {/* <div className='bg-orange-200 mt-64 text-4xl text-center italic py-4'>
        Professional. Trustworthy. Efficient.
      </div> */}

      <div className='mt-80 relative'>
        <div className='text-start pl-16 text-9xl uppercase text-orange-100 font-bold'>About Me</div>
        <div className='absolute top-8 left-80 text-xl font-bold'>Full stack developer who passionately crafts clean, professional and reliable web products.</div>
        <div className='absolute top-16 left-80 text-xl font-bold'>With my help, you can elevate your digital presence for maximum impact.</div>

      </div>

    </div>
  )
}
//Full-Stack Web Developer who builds clean, professional and reliable digital products.