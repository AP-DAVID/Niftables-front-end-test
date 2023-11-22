'use client';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  header: string;
  imageUrl: string;
};

const MissionAccenture = ({ header, imageUrl }: Props) => {
  const [review, setReview] = useState<boolean>(false);
  return (
    <div className='flex space-x-7 items-start my-10'>
      <Image
        src={imageUrl}
        alt='mission png'
        height={1000}
        width={1000}
        className='lg:max-w-[100px] lg:max-h-[114px] max-w-[73px] max-h-[83px] rounded-[6px] object-cover'
      />

      <div className=' flex flex-col mt-5 w-full'>
        <div className='flex items-start justify-between w-full '>
          {' '}
          <h1
            onClick={() => setReview(!review)}
            className='max-w-[366px] cursor-pointer max-h-[58px] font-mono font-[700] lg:text-[22px] text-[18px] lg:leading-[28.6px] leading-[23.4px] text-white'
          >
            {header}
          </h1>
          {review ? (
            <Image
              onClick={() => setReview(!review)}
              src='/DropUp.png'
              alt='dropup png'
              height={1000}
              width={1000}
              className='max-w-[16px] max-h-[16px] mt-2  object-cover'
            />
          ) : (
            <Image
              onClick={() => setReview(!review)}
              src='/Dropdown.png'
              alt='dropdown png'
              height={1000}
              width={1000}
              className='max-w-[16px] max-h-[16px] mt-2  object-cover'
            />
          )}
        </div>

        {review && (
          <h1
            className='font-[400] mt-3 lg:max-w-[379px] md:max-w-[
              252px] lg:text-[18px] text-[16px] lg:leading-[23.4px] leading-[
            20.8px] font-mono text-white'
          >
            At Creon, we handpick cutting-edge AI projects and offer our
            community and token holders early access and investment
            opportunities. Our community actively contributes to the growth and
            profitability of these projects, creating a dynamic ecosystem of
            innovation and shared success.
          </h1>
        )}
      </div>
    </div>
  );
};

export default MissionAccenture;
