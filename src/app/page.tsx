import Image from 'next/image'
import Link from 'next/link'
import '../../public/styles/discoverMoreButton.css'
import '../../public/styles/hover.css'
import ReactImage from '../../public/images/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png'
import AuthorImage from '../../public/images/marin-removebg-preview.png'

export default function Home() {

  const blogs = [1, 2, 3, 4, 5, 6]

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
        className='bg-blue-300 px-24 py-8 text-white font-bold text-2xl discover'>Discover More</Link>
      </div>

      <div className='mt-80 relative'>
        <div className='text-start pl-24 text-9xl uppercase text-green-100 font-bold'>Blogs</div>
        <div className='absolute top-8 left-80 text-xl font-bold'>Full stack developer who passionately crafts clean, professional and reliable web products.</div>
        <div className='absolute top-16 left-80 text-xl font-bold'>With my help, you can elevate your digital presence for maximum impact.</div>
      </div> 

      {/* Blog container with blog cards*/}
      <div className='grid grid-cols md:grid-cols-3 gap-12 mt-72 px-24'>
        {blogs.map(blog =>

          // Blog Card
          <div key={blog} className='relative flex flex-col gap-4 border-[2px] rounded-0 border-slate-500 text-justify'>
          <div className='absolute right-10 top-10 blur-3xl bg-green-300'></div>
          <div className='absolute left-10 top-10 blur-3xl bg-green-100'></div>

          <div className='flex flex-col gap-6 p-12 relative z-10'>
            <h1 className='z-10 text-5xl text-center font-black hover:underline hover:underline-offset-4 decoration-green-200 decoration-4 cursor-pointer text-slate-800'>How will AI affect the web Development</h1>
            <div className='flex fle-row items-center justify-start gap-8 relative z-10'>
              <div className="absolute z-0 right-0 bottom-0 w-full h-full blur-xl bg-gradient-to-r from-green-50 to-green-50"></div>
              <span className='z-10 border-2 border-slate-800 px-4 py-2 text-slate-800 font-bold rounded-full'>React</span>
              <span className='z-10 border-2 border-slate-800 px-4 py-2 text-slate-800 font-bold rounded-full'>Redux Toolkit</span>
              <span className='z-10 border-2 border-slate-800 px-4 py-2 text-slate-800 font-bold rounded-full'>AI</span>
            </div>
            <div className='text-xl font-medium relative z-10'>
              <p className='z-10 text-slate-800 font-semibold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt
                reiciendis quas libero nostrum quae eveniet, repudiandae ipsum. Officiis, vero.
              </p>
            </div>
            <div className='flex flex-row items-center justify-between'>
              <div className='flex flex-row gap-4'>
                <Image className='rounded-full' width={50} height={50} alt='author_image' src={AuthorImage} />
                <div className=''>
                  <p>Marin Zrvnar</p>
                  <p>2 days ago</p>
                </div>
              </div>
              <div className='flex flex-col'>
                <p>10 min read</p>
                <p>37 comments</p>
              </div>
            </div>
            <div className='text-center '>
              <Link 
                href="/" 
                className='bg-green-300 py-2 px-8 border-[1px] border-slate-200 text-white font-medium discover'
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        )}
        
      </div>

      <div className='text-center mt-36 mb-24'>
        <Link href="/blogs" 
        className='bg-green-300 px-24 py-8 text-white font-bold text-2xl discover'>Discover More</Link>
      </div>

    </div>
  )
}
