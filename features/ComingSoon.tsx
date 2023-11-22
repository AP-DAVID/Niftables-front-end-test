import ComingSoonCard from '@/components/ComingSoonCard';
import React from 'react';
import { Carousel } from '@mantine/carousel';

type Props = {};

const ComingSoon = (props: Props) => {
  return (
    <div className='bg-black flex flex-col overflow-x-auto  pb-32 '>
      {/* the component cards */}
      <div className='flex xl:justify-center overflow-x-auto '>
        <ComingSoonCard
          header='TOKEN'
          imageUrl='/FirstComing.png'
          subText='The Gateway token to the world of AI'
          innerText='Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.'
        />

        <ComingSoonCard
          header='REVENUE'
          imageUrl='/SecondComing.png'
          subText='Driving income and growth through decentralization'
          innerText='CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.'
        />

        <ComingSoonCard
          header='LAUNCHPAD'
          imageUrl='/ThirdComing.png'
          subText='Driving the future of AI Innovation'
          innerText='The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.'
        />
      </div>
    </div>
  );
};

export default ComingSoon;
