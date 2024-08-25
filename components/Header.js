// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Header = () => {
  return <header className='absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
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
        <div className='z-10'>
          <Socials />
        </div>
      </div>
    </motion.div>
  </header>;
};

export default Header;
