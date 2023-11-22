import React from 'react';

type Props = {
  text: string;
};

const CreoneFrameBox = (props: Props) => {
  return (
    <div className='max-w-[522px]  rounded-[6px] border-[1px] pt-[12px] pr-[18px] pb-[16px] pl-[18px] gap-[10px] border-[#13171D]'>
      <h1 className='max-ww-[486px]  font-mono font-[400] lg:text-[18px] text-[16px] lg:leading-[23.4px] leading-[20.8px] text-white  '>
        {props.text}
      </h1>
    </div>
  );
};

export default CreoneFrameBox;
