import Image from 'next/image';
import React from 'react';

type Props = {
  innerText: string;
  header: string;
  subText: string;
  imageUrl: string;
};

const ComingSoonCard = ({ innerText, header, subText, imageUrl }: Props) => {
  return (
    <div className='min-h-[630px] min-w-[292px]   xl:h-[659px] xl:w-[453px] mt-[156px] mx-4 rounded-[6px] bg-[#13171D]'>
      <div className='flex justify-end right-4'>
        <div className=' -mt-[10px] rounded-[100px] mr-[25px] flex justify-end px-[6px] py-[3px] gap-[10px] w-fit bg-white'>
          <h1 className=' h-[13px] font-mono font-[700] text-[12px] leading-[13.2px] text-center text-black'>
            {' '}
            COMING SOON
          </h1>
        </div>
      </div>

      <div className='my-7 mx-5'>
        <h1 className='font-sans font-[400] lg:text-[38px] md:text-[28px] md:leading-[33.6px] lg:leading-[45.6px] text-[22px] leading-[26.4px] text-white'>
          {header}
        </h1>
        <h1 className='font-mono font-[700] lg:text-[22px] lg:leading-[28.6px] text-[18px] leading-[23.4px]  bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text'>
          {subText}
        </h1>
      </div>

      <Image
        src={imageUrl}
        className='lg:w-full lg:h-[234px] w-[272px] h-[234px] md:w-[288px] object-cover md:h-[234px]'
        height={1000}
        width={1000}
        alt='the side image'
      />

      <h1 className='font-[400] font-mono my-10 mx-5 lg:text-[18px] lg:leading-[23.4px] text-[16px] leading-[20.8px]  text-white'>
        {innerText}
      </h1>
    </div>
  );
};

export default ComingSoonCard;
