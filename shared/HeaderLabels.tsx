import React from 'react';

type Props = {
  text: string;
  review?: boolean;
};

const HeaderLabels = ({ text, review }: Props) => {
  return (
    <div className={` gap-[4px] ${review ? 'flex' : 'hidden lg:flex'}`}>
      <h1 className='font-mono font-[700] sm:text-[18px] text-[16px] leading-[19.8px] text-white text-center'>
        {text}
      </h1>
      <div className='w-[38px] h-[14px] rounded-[100px] pt-[2px] pr-[4px] pb-[1px] pl-[4px] gap-[10px] bg-black'>
        <h1 className='w-[30px] h-[11px] font-mono font-[700] text-[10px] leading-[11px] text-center text-[#AB23FF]'>
          SOON
        </h1>
      </div>
    </div>
  );
};

export default HeaderLabels;
