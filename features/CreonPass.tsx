import CreoneFrameBox from '@/components/CreoneFrameBox';
import Image from 'next/image';
import React from 'react';

type Props = {};

const CreonPass = (props: Props) => {
  return (
    <div className='flex flex-col pt-10 justify-center px-2 items-center bg-black'>
      <div className='flex  w-full justify-around flex-wrap max-w-[1440px] mx-auto'>
        <div className=''>
          {/* component header */}
          <h1 className='max-w-[700px] font-sans font-[400] text-white lg:text-[68px] md:text-[44px] lg:leading-[74.8px] md:leading-[48.4px] leading-[35.2px] text-[32px] capitalize'>
            creon pass nft
          </h1>

          {/* the divider */}
          <div className='h-[1px] max-w-[700px] bg-[#13171D] my-6' />

          {/* the component description */}
          <h1 className=' md:max-w-[700px]  mb-10 font-mono  font-[700] lg:text-[22px] text-18px lg:leading-[28.6px] leading-[23.4px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text'>
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </h1>

          {/* the text boxes */}
          <div className='flex flex-col space-y-4'>
            <CreoneFrameBox text='Pre-launch investment opportunities for upcoming AI projects' />
            <CreoneFrameBox text='Free and early access to Creon built AI projects' />
            <CreoneFrameBox text='Higher allocation limits on the Creon AI Launchpad' />
            <CreoneFrameBox text='Revenue share distribution from Creon built AI projects' />
          </div>

          {/* the button */}
          <div className='xl:w-[453px] xl:h-[54px] py-[10px] font-mono font-[700] text-[18px] leading-[19.8px] text-center mt-16 flex flex-col justify-center items-center rounded-[6px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] text-white'>
            Buy Creone Pass
          </div>
        </div>

        {/* the component image */}

        <Image
          src='/Video.png'
          className='md:max-w-[500px] md:max-h-[808px] my-6 object-cover'
          height={1000}
          width={1000}
          alt='the side image'
        />
      </div>
    </div>
  );
};

export default CreonPass;
