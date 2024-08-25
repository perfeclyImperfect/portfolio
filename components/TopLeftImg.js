// next image
import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge animate-pulse z=10 w-[200px] xl:w-[600px] opacity-40">
      <Image 
        src='/splash1.jpg' 
        width={400} 
        height={400} 
        alt=""
      />
    </div>
  );
};

export default TopLeftImg;
