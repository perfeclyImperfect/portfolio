// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination]);

// import swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// components 

import React from 'react';
import BanCarousel from '../../components/BanCarousel';
import Socials from '../../components/Socials';

//icons
import {BsArrowRight} from 'react-icons/bs';
import WorkSlider from '../../components/WorkSlider';
import { SiGoogledrive } from 'react-icons/si';



const Banaoang = () => {
  return (
    
    <div className='h-full bg-primary/30 scrollbar overflow-y-scroll overflow-x-hidden scrollbar-thumb-accent scrollbar-thumb-rounded-full'>
      {/* header */}

      <div className='z-0 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='container mx-auto'
        >
          <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
            {/* logo */}
            <Link href={'/'}>
              <Image 
                src={'/jlogo.svg'}
                width={220}
                height={48} 
                alt=''
                priority={true}
              />
            </Link>
            <div className=''>
              <Socials />
            </div>
          </div>
        </motion.div>
      </div>

      <div className='h-full py-32 xl:mx-[150px] mx-[20px] text-center'>
        
        <div className='container mx-auto flex flex-col justify-center mt-300'>

          {/* title */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mb-8 xl:mb-0'
          >
            <span className='text-accent'>Banaoang</span> 2-storey residential house<span className='text-accent'>.</span>
          </motion.h2>

          {/* subtitle*/}
          <motion.p
            variants={fadeIn('up', 0.3)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-[800px] mx-auto mb-5 mt-5 justify-center'
          >
            Step into this thoughtfully designed two-story residence, where comfort meets elegance. The ground floor offers a cozy bedroom, perfect for guests or family members, along with spacious living areas that invite warmth and togetherness. Ascend to the second floor, where the master bedroom awaits, offering a serene retreat complete with modern amenities and a peaceful ambiance. This home seamlessly blends style and functionality, making it the perfect sanctuary for your family.
          </motion.p>

          {/* slider */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='container overflow-y-auto mt-[100px] flex-auto overflow-hidden'
          >
            {/* carousel */}
                <BanCarousel />
          </motion.div>
        </div> 
      

        {/* button */}
        <div className='flex justify-center items-center mt-[30px] xl:mb-[200px]'>
          <Link
            href={'https://drive.google.com/drive/folders/1LSBzd7qRwH5E9mUj1_Kp1DGhQ2Sl2qET?usp=sharing'}
            target="_blank"
            className='btn rounded-full border border-white/50 max-w-[200px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
          >
            <SiGoogledrive />
            <span className='group-hover:-translate-y-[120%] hover:cursor-pointer group-hover:opacity-0 translate-x-[15%] transition-all duration-500'>HD on Drive</span>
            <BsArrowRight className='-translate-y-[120%] -translate-x-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[22px]' />
             
          </Link>
        </div>
        {/* fly through */}
        <div className='container mx-auto flex flex-col justify-center mt-300'>
          {/* title */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mb-1 xl:mb-0'
          >
            <span className='text-accent'>Fly</span> through<span className='text-accent'>.</span>
          </motion.h2>
          
          {/* video */}
          
        </div> 
        

        {/* design 1 */}
        <div>
          <div className='container mx-auto xl:mt-[30px]'>
            <div className='flex flex-col xl:flex-row xl:justify-center xl:items-center xl:mx-auto gap-x-12 mt-[30px]'>
              {/* title*/}
              <div className='text-center flex flex-col xl:text-left mb-4 lg:mb-0'>
                <motion.h1
                  variants={fadeIn('down', 0.4)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='h2 xl:mt-8'
                  >
                    Simple design<span className='text-accent'>.</span>
                </motion.h1>
                {/* subtitle*/}
                <motion.p
                  variants={fadeIn('up', 0.3)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='mb-4 max-w-[515px] mx-auto lg:mx-0'
                >
                  Discover simplicity and sophistication in this two-story home. Featuring a ground-floor bedroom and a master suite upstairs, this design balances comfort with practicality for modern living.
                </motion.p>
              </div>
              {/* image*/}
              <div className='wfull'>
                <Image 
                  src={'/Ban1.jpg'} 
                  width={590} 
                  height={490} 
                  alt='' 
                  className='rounded-lg justify-right'
                />
              </div>
            </div>
          </div>
          {/* floor plan */}
          <div className='container mx-auto flex flex-col h-[80%] mb-5 xl:mt-[60px]'>
            {/* image*/}
            <div className='flex flex-col xl:flex-row justify-between items-center gap-y-8 py-8'>
              <Image 
                src={'/1Frender.png'} 
                width={600} 
                height={600} 
                alt='' 
                className='justify-center'
              />
              <Image 
                src={'/2Frender.png'} 
                width={600} 
                height={600} 
                alt='' 
                className='justify-center'
              />
            </div>
            {/* text */}
            <div className='text-center flex flex-col items-center justify-center lg:text-left mb-4 xl:mb-0'>
                <motion.h1
                  variants={fadeIn('down', 0.4)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='h3 xl:mt-8'
                  >
                    Two<span className='text-accent'>-</span>storey Residential<span className='text-accent'>.</span>
                </motion.h1>
                {/* subtitle*/}
                <div className='flex flex-col justify-center mt-4 max-w-[400px] mx-auto lg:mx-0'>
                  <p>
                    1 Master Bedroom
                  </p>
                  <p>
                    2 Bedroom
                  </p>
                  <p>
                    1 Toilet & Bath | Lavatory | Toilet | Shower
                  </p>
                  <p>
                    1 Living Room
                  </p>
                  <p>
                    1 Dining Room
                  </p>
                  <p>
                    1 Kitchen | Mini Bar | Island Counter
                  </p>
                  <p>
                    1 Garage
                  </p>
                </div>
              </div>
          </div>
        </div>
        
        
        {/* button */}
        <div className='h-[300px] flex justify-center items-center mt-[150px] xl:mb-[200px]'>
          <Link
            href={'/work'}
            className='btn rounded-full border border-white/50 max-w-[250px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
          >
            <span className='group-hover:-translate-y-[120%] hover:cursor-pointer group-hover:opacity-0 transition-all duration-500 translate-x-[10%]'>See my other works</span>
            <BsArrowRight className='-translate-y-[120%] -translate-x-[250%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300  text-[22px]' />
            
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Banaoang;