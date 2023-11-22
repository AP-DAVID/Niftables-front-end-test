import MarketCard from '@/components/MarketCard';
import React from 'react';

type Props = {};

const Market = (props: Props) => {
  return (
    <div className='bg-black flex flex-col overflow-x-auto'>
      {/* the componnet cards */}
      <div className='md:max-w-[1440px] md:mx-auto flex  md:space-x-0  overflow-x-auto md:flex-col'>
        <MarketCard
          header='AI Prospects, Market Size, and Development Pace'
          imageUrl='/FirstMarket.png'
          subText='The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.'
        />

        <MarketCard
          header='AI Tools and Market'
          imageUrl='/SecondMarket.png'
          subText='AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.'
        />

        <MarketCard
          header='AI, Crypto, and NFT Market'
          imageUrl='/ThirdMarket.png'
          subText='Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.'
        />
      </div>
    </div>
  );
};

export default Market;
