
// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';

// components
import Socials from '../components/Socials';

import Header from '../components/Header'

const Home = () => {
  return (
    
  <div  className='bg-primary/60 h-full'>
    {/* logo */}
   
        <Header />
     
    {/* image */}
    <div className='w-[1100px] h-full absolute right-0 bottom-0'>
      
      {/* bg image */}
      <div className='bg-none xl:bg-explosion xl:bg-cover animate-pulse xl:bg-right xl:bg-no-repeat w-full h-full absolute opacity-40 mix-blend-color-dodge translate-z-100'>
      </div>
      {/* particles */}
      <ParticlesContainer />
      {/* avatar img */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration: 1, ease: 'easeInOut'}}
        className='w-full h-full max-w-[850px] max-h-[800px] absolute -bottom-300 right-10 lg:bottom-0'>
        <Avatar />
      </motion.div>
    </div>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-20 xl:text-left h-full container mx-auto'>
        {/* title*/}
        <motion.h1
          variants={fadeIn('down', 0.4)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-0'
          >
            Hi! I'm {' '} 
            <span className='text-accent'>Jelo Brylle</span>
        </motion.h1>
        {/* subtitle*/}
        <motion.p
          variants={fadeIn('up', 0.3)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-5 mt-5 xl:mt-5 xl:mb-5'
        >
          I'm a versatile professional with expertise in engineering, programming, and graphic design. As an adept engineer, I solve complex problems and design innovative solutions. My programming skills create efficient applications, and as a creative graphic designer, I craft visually appealing designs. Passionate about combining these skills for impactful projects.
        </motion.p> 
          {/* btn */}
          <div className='flex justify-center xl:hidden'>
            <ProjectsBtn />
          </div>
        <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex mt-10 mb-0'
        >
          <ProjectsBtn />
        </motion.div>

      </div>
    </div>
    
  </div>
  
  );
};

export default Home;
