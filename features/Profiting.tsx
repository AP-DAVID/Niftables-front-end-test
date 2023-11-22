import Image from 'next/image';
import React from 'react';

type Props = {};

const Profiting = (props: Props) => {
  return (
    <div className='bg-black px-2 pt-32'>
      {/* component header */}
      <div className=' py-5 max-w-[1350px] mx-auto'>
        <h1 className=' font-sans text-left font-[400] lg:text-[68px] md:text-[44px] lg:leading-[74.8px] md:leading-[48.4px] text-[32px] leading-[35.2px] text-white'>
          PROFITING THROUGH
        </h1>
      </div>

      {/* component sub header */}
      <div className='pb-5 md:mx-auto text-right  flex justify-end w-full  md:max-w-[1350px]'>
        <h1
          className='uppercase   font-sans font-[400] lg:text-[38px] md:text-[28px] text-[22px] lg:leading-[45.6px] md:leading-[33.6px] leading-[
26.4px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text'
        >
          AI Innovation & Decentralization
        </h1>
      </div>

      <div className='flex flex-wrap max-w-[1500px] mx-auto justify-center space-x-6'>
        {/* component image */}
        <Image
          src='/Profiting.png'
          alt='profiting png'
          height={1000}
          width={1000}
          className='md:max-w-[947px] md:max-h-[485px] rounded-[6px] object-cover'
        />

        {/* the large text box */}
        <div className=' lg:max-h-[485px] my-7 py-2 border-t-[1px] border-b-[1px] sm:border-t-[0px] sm:border-b-[0px] sm:border-l-[1px] sm:border-r-[1px] border-[#13171D] flex flex-col justify-center items-center'>
          <div className='w-full lg:max-w-[391px] sm:max-h-[270px] gap-[28px] lg:px-5'>
            <h1 className='w-full lg:max-w-[391px] sm:h-[58px] font-mono font-[700] text-[22px] leading-[28.6px] text-white'>
              The dynamic community driven business model of the future.
            </h1>

            <h1 className='w-full lg:max-w-[391px] sm:max-h-[184px] font-mono font-[400] text-[18px] leading-[23.4px] text-white'>
              At Creon, we blend the power of AI tools with the dynamic crypto
              and NFT markets, utilizing an innovative business model to drive
              profitability. This approach empowers our community, as our NFT
              and token holders directly benefit from the growth and prosperity
              of the Creon network, creating a win-win scenario for both our
              community and for the projects we launch.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiting;
