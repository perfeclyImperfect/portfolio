import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

// Data
export const workSlider = {
  categories: [
    {
      name: 'Engineering',
      slides: [
        {
          images: [
            {
              title: 'Pozorrubio',
              path: '/Pozorrubio.jpg',
              link: 'pozorrubio',
            },
            {
              title: 'Banaoang',
              path: '/Banaoang.jpg',
              link: '/banaoang',
            },
            {
              title: 'Tarlac',
              path: '/Tarlac.jpg',
              link: '/tarlac',
            },
            {
              title: 'Marawi STP',
              path: '/MarawiSTP.jpg',
              link: '/marawistp',
            },
            // Add more images as needed
          ],
          
        },
        {
          images: [
            {
              title: 'Marawi TMC',
              path: '/MarawiTMC.jpg',
              link: '/martmc',
            },
            {
              title: 'Arellano Apartment',
              path: '/ArellanoApartment.jpg',
              link: '/arellano',
            },
            {
              title: 'Project 2',
              path: '/thumb3.jpg',
              link: '/engineering/project2',
            },
            {
              title: 'Project 2',
              path: '/thumb4.jpg',
              link: '/engineering/project2',
            },
            // Add more images as needed
          ],
          
        },
      ],
    },
    {
      name: 'UI/UX',
      slides: [
        {
          images: [
            {
              title: 'Project 1',
              path: '/uiux1.jpg',
              link: '/uiux/project1',
            },
            {
              title: 'Project 2',
              path: '/uiux2.jpg',
              link: '/uiux/project2',
            },
            // Add more images as needed
          ],
        },
      ],
    },
    {
      name: 'Graphic Design',
      slides: [
        {
          images: [
            {
              title: 'Project 1',
              path: '/graphic1.jpg',
              link: '/graphic/project1',
            },
            {
              title: 'Project 2',
              path: '/graphic2.jpg',
              link: '/graphic/project2',
            },
            // Add more images as needed
          ],
        },
      ],
    },
    {
      name: 'Website',
      slides: [
        {
          images: [
            {
              title: 'Project 1',
              path: '/website1.jpg',
              link: '/website/project1',
            },
            {
              title: 'Project 2',
              path: '/website2.jpg',
              link: '/website/project2',
            },
            // Add more images as needed
          ],
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div>
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {workSlider.categories.map((category, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-md transition-all duration-300 ${
              activeCategory === index
                ? 'bg-accent text-white'
                : 'bg-[#1e3733] text-white'
            }`}
            onClick={() => setActiveCategory(index)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Slider */}
      <Swiper 
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]} // Make sure to add FreeMode if needed
        className='h-[280px] sm:h-[480px]'
      >
        {workSlider.categories[activeCategory].slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => (
                <div
                  className='relative rounded-lg overflow-hidden flex items-center justify-center group'
                  key={index}
                > 
                  <Link href={image.link}>  
                    <div className='flex items-center rounded-lg justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#38dce8] to-[#136b22] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>{image.title}</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Project</div>
                          {/* icon */}
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                        </div>
                      </div>
                    </div>
                  </Link>  
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WorkSlider;
