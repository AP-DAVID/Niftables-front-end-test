import Image from 'next/image';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='bg-black'>
      <div className='bg-black flex flex-col md:flex-row justify-between py-7 max-w-[1440px] mx-auto px-2'>
        <div className='flex flex-col-reverse space-y-5 md:space-y-0 md:flex-row space-x-10 items-center'>
          <h1 className='lg:text-[16px] font-mono lg:leading-[20.8px] text-white md:text-[14px] md:leading-[18.2px] '>
            © Creon 2023. All rights reserved.
          </h1>

          {/* footer social icons */}
          <div className='flex space-x-2 items-center py-3'>
            <Image
              height={1000}
              width={1000}
              src={'/Telegram.png'}
              className='w-[34px] h-[34px] '
              alt='creon meny'
            />
            <Image
              height={1000}
              width={1000}
              src={'/Discord.png'}
              className='w-[34px] h-[34px]'
              alt='creon meny'
            />
            <Image
              height={1000}
              width={1000}
              src={'/Twitter.png'}
              className='w-[34px] h-[34px]'
              alt='creon meny'
            />
          </div>
        </div>

        <div className='flex items-center justify-center my-3 space-x-1'>
          <h1 className='font-mono lg:text-[16px] lg:leading-[20.8px] text-white'>
            Powered by
          </h1>
          <Image
            height={1000}
            width={1000}
            src={'/Niftables.png'}
            className='w-[101px] h-[18px]'
            alt='creon meny'
          />
        </div>
      </div>{' '}
    </div>
  );
};

export default Footer;
