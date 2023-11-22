'use client';
import HeaderLabels from '@/shared/HeaderLabels';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

// Sidebar component
const Sidebar = ({ onClose, reveal, setReveal }: any) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 overflow-y-hidden  z-20 w-screen'>
      {/* Your sidebar content goes here */}
      <div className='fixed top-0 right-0 h-full w-1/2 bg-black z-50 '>
        {/* Add your sidebar content here */}

        <div className=' flex flex-col z-40 h-full justify-between'>
          <div>
            <div className='flex space-x-7 my-5 justify-center items-center'>
              <div className=' z-40 px-2 py-2  left-[1688px] rounded-[6px] border-[2px] bg-black  border-white text-white hover:font-satbold transition ease-out hover:border-0 hover:bg-[#3d8bff]'>
                <h1 className=' font-mono font-[700] sm:text-[18px] text-[10px]   leading-[19.8px] text-center '>
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
                className='w-[38px] h-[38px] lg:hidden z-20'
                alt='creon meny'
              />
            </div>

            <div className='flex justify-center my-10 sm:mr-8'>
              <div className='flex flex-col space-y-9 items-start'>
                <h1 className='font-mono font-[700] sm:text-[18px] text-[16px] leading-[19.8px] transition ease-in-out delay-150 text-white hover:text-[#3d8bff]'>
                  Creon Pass
                </h1>

                <HeaderLabels text='Token' review />
                <HeaderLabels text='AI Revenue' review />
                <HeaderLabels text='AI Launchpad' review />
              </div>
            </div>
          </div>

          <div className='flex space-x-2 justify-center items-center my-9 sm:mr-8 px-2'>
            <Image
              height={1000}
              width={1000}
              src={'/Telegram.png'}
              className='w-[34px] h-[34px] lg:hidden z-20'
              alt='creon meny'
            />
            <Image
              height={1000}
              width={1000}
              src={'/Discord.png'}
              className='w-[34px] h-[34px] lg:hidden z-20'
              alt='creon meny'
            />
            <Image
              height={1000}
              width={1000}
              src={'/Twitter.png'}
              className='w-[34px] h-[34px] lg:hidden z-20'
              alt='creon meny'
            />
          </div>
        </div>

        {/* ... */}
      </div>
    </div>
  );
};

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
