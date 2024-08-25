// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// testimonial data
export const projectSlider = [
  {
    image: '/Poz1.jpg',
    
  },
  {
    image: '/Poz2.jpg',
   
  },
  {
    image: '/Poz3.jpg',
   
  },
  {
    image: '/Poz4.jpg',
   
  },
  {
    image: '/Poz5.jpg',
   
  },
  {
    image: '/Poz6.jpg',
   
  },
  {
    image: '/Poz7.jpg',
   
  },
];

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
import PozCarousel from '../../components/PozCarousel';
import Socials from '../../components/Socials';

//icons
import {BsArrowRight} from 'react-icons/bs';
import WorkSlider from '../../components/WorkSlider';
import { SiGoogledrive } from 'react-icons/si';





const Pozorrubio = () => {
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
            <span className='text-accent'>Pozorrubio</span> project design<span className='text-accent'>.</span>
          </motion.h2>
          {/* subtitle*/}
          <motion.p
            variants={fadeIn('up', 0.3)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w-md mx-auto mb-5 mt-5 justify-center'
          >
            Where luxury living meets executive sophistication. Nestled amidst pristine landscapes, this exclusive subdivision offers meticulously crafted estates, unparalleled in elegance and refinement. 
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
          
                <PozCarousel />
          
          </motion.div>
        </div> 
        {/* button */}
        <div className='flex justify-center items-center mt-[30px] xl:mb-[200px]'>
          <Link
            href={'https://drive.google.com/drive/folders/1B18k4VNui4pcG-Meg_76W6yqNhTIkRxU?usp=sharing'}
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
        
        {/* the design */}
        <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 mb-[60px] xl:mb-0'
          >
            <span className='text-accent'>The</span> design<span className='text-accent'>.</span>
          </motion.h2>
        {/* design 1 */}
        <div className='pt-[60px]'>
          <div className='container hover:bg-[#0234357a] transition-all duration-300 py-[20px]  rounded-lg mx-auto'>
            <div className='flex flex-col xl:flex-row gap-x-12 mt-[30px]'>
              {/* title*/}
              <div className='text-center flex flex-col lg:text-left mb-4 xl:mb-0'>
                <motion.h1
                  variants={fadeIn('down', 0.4)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='h2 xl:mt-8'
                  >
                    Modern design<span className='text-accent'>.</span>
                </motion.h1>
                {/* subtitle*/}
                <motion.p
                  variants={fadeIn('up', 0.3)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='mb-4 max-w-[515px] mx-auto lg:mx-0'
                >
                  A sleek blend of innovation and contemporary living. With clean lines, expansive glass windows, and an open floor plan, this masterpiece offers a harmonious sanctuary for modern living. Welcome home to the epitome of style and functionality.
                </motion.p>
              </div>
              {/* image*/}
              <div className='wfull'>
                <Image 
                  src={'/Poz3.jpg'} 
                  width={590} 
                  height={490} 
                  alt='' 
                  className='rounded-lg justify-right'
                />
              </div>
            </div>
          </div>
          {/* floor plan */}
          <div className='container mx-auto flex flex-col h-full xl:mt-[60px]'>
            {/* image*/}
            <div className='flex flex-col xl:flex-row justify-between items-center gap-y-8 py-8'>
              <Image 
                src={'/1stdesign1.png'} 
                width={300} 
                height={300} 
                alt='' 
                className='justify-center'
              />
              <Image 
                src={'/2nddesign1.png'} 
                width={300} 
                height={300} 
                alt='' 
                className='justify-center'
              />
            </div>
            {/* text */}
            <div className='text-center flex flex-col items-center justify-center lg:text-left mb-4 xl:mb-0 xl:mt-[-500px]'>
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
                <div className='flex flex-col justify-center mb-4 max-w-[400px] mx-auto lg:mx-0'>
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

            {/* design 2 */}
            <div className='pt-[60px]'>
            <div className='container hover:bg-[#0234357a] transition-all duration-300 py-[20px] mt-[200px] rounded-lg mx-auto'>
            <div className='flex flex-col xl:flex-row gap-x-12 mt-[30px]'>
              {/* title*/}
              <div className='text-center flex flex-col lg:text-left mb-4 xl:mb-0'>
                <motion.h1
                  variants={fadeIn('down', 0.4)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='h2 xl:mt-8'
                  >
                    Elegant design<span className='text-accent'>.</span>
                </motion.h1>
                {/* subtitle*/}
                <motion.p
                  variants={fadeIn('up', 0.3)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='mb-4 max-w-[515px] mx-auto lg:mx-0'
                >
                  Boasting a striking elegant design, this two-story home offers a harmonious blend of elegance and functionality. With its expansive windows, clean architectural lines, and thoughtfully crafted open-concept layout, this residence provides an abundance of natural light and spacious living areas. Every detail is designed to enhance both aesthetic appeal and practical living, making it an ideal sanctuary for contemporary lifestyles.
                </motion.p>
              </div>
              {/* image*/}
              <div className='wfull'>
                <Image 
                  src={'/Poz5.jpg'} 
                  width={590} 
                  height={490}  
                  alt='' 
                  className='rounded-lg justify-right'
                />
              </div>
            </div>
            </div>
          {/* floor plan */}
          <div className='container mx-auto flex flex-col h-full xl:mt-[60px]'>
            {/* image*/}
            <div className='flex flex-col xl:flex-row justify-between items-center gap-y-8 py-8'>
              <Image 
                src={'/1stdesign2.png'} 
                width={300} 
                height={300} 
                alt='' 
                className='justify-center'
              />
              <Image 
                src={'/2nddesign2.png'} 
                width={300} 
                height={300} 
                alt='' 
                className='justify-center'
              />
            </div>
            {/* text */}
            <div className='text-center flex flex-col items-center justify-center lg:text-left mb-4 xl:mb-0 xl:mt-[-500px]'>
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
                <div className='flex flex-col justify-center mb-4 max-w-[400px] mx-auto lg:mx-0'>
                  <p>
                    1 Master Bedroom
                  </p>
                  <p>
                    2 Bedroom
                  </p>
                  <p>
                    2 Toilet & Bath | Lavatory | Toilet | Shower
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

    {/* design 3 */}
    <div className='pt-[60px]'>
          <div className='container hover:bg-[#0234357a] transition-all duration-300 py-[20px] mt-[100px] rounded-lg mx-auto'>
            <div className='flex flex-col xl:flex-row gap-x-12 mt-[30px]'>
              {/* title*/}
              <div className='text-center flex flex-col lg:text-left mb-4 xl:mb-0'>
                <motion.h1
                  variants={fadeIn('down', 0.4)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='h2 xl:mt-8'
                  >
                    Minimalist design<span className='text-accent'>.</span>
                </motion.h1>
                {/* subtitle*/}
                <motion.p
                  variants={fadeIn('up', 0.3)} 
                  initial='hidden'
                  animate='show'
                  exit='hidden'
                  className='mb-4 max-w-[515px] mx-auto lg:mx-0'
                >
                  Embodying the essence of minimalist design, this two-story home is a masterpiece of simplicity and elegance. With its clean lines, uncluttered spaces, and a focus on functionality, every element serves a purpose. Large, unadorned windows invite natural light into the open-plan living areas, creating a serene and airy atmosphere. This home is the perfect retreat for those who appreciate the beauty of simplicity and the luxury of less.
                </motion.p>
              </div>
              {/* image*/}
              <div className='wfull'>
                <Image 
                  src={'/Poz6.jpg'} 
                  width={590} 
                  height={490} 
                  alt='' 
                  className='rounded-lg justify-right'
                />
              </div>
            </div>
          </div>
          {/* floor plan */}
          <div className='container mx-auto flex flex-col h-full xl:mt-[60px]'>
            {/* image*/}
            <div className='flex flex-col xl:flex-row justify-between items-center gap-y-8 py-8'>
              <Image 
                src={'/1stdesign3.png'} 
                width={300} 
                height={300} 
                alt='' 
                className='justify-center'
              />
              <Image 
                src={'/2nddesign3.png'} 
                width={300} 
                height={300} 
                alt='' 
                className='justify-center'
              />
            </div>
            {/* text */}
            <div className='text-center flex flex-col items-center justify-center lg:text-left mb-4 xl:mb-0 xl:mt-[-500px]'>
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
                <div className='flex flex-col justify-center mb-4 max-w-[400px] mx-auto lg:mx-0'>
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

export default Pozorrubio;
