import Image from 'next/image';
import React from 'react';

type Props = {
  imageUrl: string;
  header: string;
  subText: string;
};

const MarketCard = ({ imageUrl, header, subText }: Props) => {
  return (
    <div className=' rounded-[6px] bg-[#13171D] min-w-[300px] mx-4 md:mx-0 min-h-[302px] md:w-[708px] md:h-[336px] lg:h-[370px] lg:w-[964px] 2xl:w-[1440px] 2xl:h-[302px] flex flex-col md:flex-row  my-7'>
      <div className='hidden md:flex flex-col space-y-6  mx-5 my-5'>
        <h1 className=' font-sans font-400 2xl:text-[38px] md:text-[28px] lg:leading-[45.6px] md:leading-[33.6px] text-[22px] leading-[26.4px] text-white'>
          {header}
        </h1>

        <h1 className='font-[400] font-mono 2xl:text-[18px] lg:leading-[23.5px] text-[16px] leading-[20.8px] text-white'>
          {subText}
        </h1>
      </div>

      <Image
        src={imageUrl}
        className=' md:w-[223px] md:h-[336px] lg:w-[453px] lg:h-[370px]  2xl:h-[302px]'
        height={1000}
        width={1000}
        alt='the side image'
      />

      <div className='md:hidden flex  flex-col space-y-6  mx-5 my-5'>
        <h1 className=' font-sans font-400 2xl:text-[38px] md:text-[28px] lg:leading-[45.6px] md:leading-[33.6px] text-[22px] leading-[26.4px] text-white'>
          {header}
        </h1>

        <h1 className='font-[400] font-mono 2xl:text-[18px] lg:leading-[23.5px] text-[16px] leading-[20.8px] text-white'>
          {subText}
        </h1>
      </div>
    </div>
  );
};

export default MarketCard;
