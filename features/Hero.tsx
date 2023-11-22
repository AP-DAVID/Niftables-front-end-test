import Nav from '@/components/Nav';
import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  const style = {
    backgroundImage: 'url(/HeroBackground.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
  };

  return (
    <div style={style} className='bg-black h-screen text-white'>
      {/* the header/navbar */}
      <Nav />

      <div className='flex flex-col max-w-[1440px] px-2 items-center mt-[70px] mx-auto  justify-center h-full space-y-10'>
        <div className='flex flex-col space-y-10'>
          {/* hero header */}
          <h1 className='font-sans font-[400] lg:text-[68px] md:text-[44px] text-[32px] lg:leading-[74.8px] md:leading-[48.4px] leading-[35.2px] max-w-[1200px] text-white'>
            The world&apos;s first platform for Tokenizing AI blockchain
            projects
          </h1>

          {/* hero subheader */}
          <div className=' pt-[7px] lg:w-[656px] lg:h-[48px] pr-[0px] pb-[12px] pl-[0px] gap-[10px]  border-t-[1px] border-b-[1px] '>
            <h1 className='font-mono font-[700] text-[22px] leading-[28.6px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text'>
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
