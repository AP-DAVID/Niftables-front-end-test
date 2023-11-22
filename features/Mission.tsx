import MissionAccordion from '@/components/MissionAccordion';
import Image from 'next/image';
import React from 'react';

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className='flex flex-wrap justify-center bg-black pt-52 px-2 '>
      <div className='flex flex-col'>
        {/* component description */}
        <h1 className='max-w-[699px] max-h-[322px] font-sans uppercase font-[400] lg:text-[38px] md:text-[28px] inline-block lg:leading-[45.6px] text-[22px] leading-[26.4px] md:leading-[33.6px] text-white'>
          Our vision is to support the innovation of AI blockchain projects{' '}
          <span className='bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text'>
            while prioritizing communities and democratizing profits
          </span>
        </h1>

        {/* the image below */}
        {/* compoenent image */}
        <Image
          src='/Mission.png'
          alt='mission png'
          height={1000}
          width={1000}
          className=' md:w-[628px] md:h-[377px] h-[182px] w-[302px] lg:h-[502px] lg:w-[836px] rounded-[6px] object-cover'
        />
      </div>

      {/* component Accordions */}
      <div>
        <MissionAccordion
          header='Profitability and Growth'
          imageUrl='/FirstAccenture.png'
        />
        <MissionAccordion
          header='Transparent & Fair Decentralized Earnings'
          imageUrl='/SecondAccenture.svg'
        />
        <MissionAccordion
          header='Launching the future'
          imageUrl='/ThirdAccenture.png'
        />
        <MissionAccordion
          header='Limitless Possibilities of AI & Crypto'
          imageUrl='/FourthAccenture.png'
        />
      </div>
    </div>
  );
};

export default Mission;
