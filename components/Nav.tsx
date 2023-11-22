'use client';
import HeaderLabels from '@/shared/HeaderLabels';
import Image from 'next/image';
import React, { useState } from 'react';
import Sidebar from './Sidebar';

type Props = {};

// Sidebar component

const Nav = (props: Props) => {
  const [reveal, setReveal] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setReveal(!reveal);
  };

  return (
    <div>
      <div className='pt-[30px] px-[50px] flex justify-between'>
        {/* the logo */}
        <Image
          height={1000}
          width={1000}
          src={'/Creonlogo.png'}
          alt='creon logo'
          className='w-[140px] h-[39px] z-30'
        />
        <div className=''>
          <div className='flex space-x-8 items-center'>
            <h1 className='font-mono hidden lg:inline-flex font-[700] text-[18px] leading-[19.8px] transition ease-in-out delay-150 text-white hover:text-[#3d8bff]'>
              Creon Pass
            </h1>

            <HeaderLabels text='Token' />
            <HeaderLabels text='AI Revenue' />
            <HeaderLabels text='AI Launchpad' />

            <div className=' hidden md:flex w-[110px] py-2 xl:w-[132px] flex-col items-center justify-center  xl:h-[44px] left-[1688px] rounded-[6px] border-[2px]  border-white text-white hover:font-satbold transition ease-out hover:border-0 hover:bg-[#3d8bff]'>
              <h1 className=' font-mono font-[700] text-[16px] xl:text-[18px]   leading-[19.8px] text-center '>
                Connect
              </h1>
            </div>

            <Image
              onClick={() => {
                setReveal(!reveal);
              }}
              height={1000}
              width={1000}
              src={reveal ? '/OpenMenu.png' : '/menu.png'}
              className=' w-[38px] h-[38px] lg:hidden '
              alt='creon meny'
            />

            {/* Render sidebar if reveal is true */}
          </div>
        </div>
      </div>

      <div className='lg:hidden'>
        {reveal && (
          <Sidebar
            onClose={handleToggleSidebar}
            reveal={reveal}
            setReveal={setReveal}
          />
        )}
      </div>
    </div>
  );
};

export default Nav;
