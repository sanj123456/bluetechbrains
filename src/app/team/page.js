// "use client";
import { AppImages } from '@/assets/AppImages'
import KnowMore from '@/components/common/KnowMore'
import Infrastructureforabout from '@/components/Infrastructureforabout/Infrastructureforabout'
import Pillars from '@/components/Pillars/Pillars'
import PortfolioBanner from '@/components/Portfolio/PortfolioBanner'
import Team from '@/components/Team/Team'
import Celebration from '@/components/TeamPageComponents/Celebration'
import TeamStats from '@/components/TeamPageComponents/TeamStats'
import React from 'react'
const portfolioData = {
  content: `The siciliantech team has highly competent and dependable individuals. Their structured hierarchy ensures that everyone stays updated with the latest technology trends through systematic training.`,
  img: '/groupp.jpg', 
  heading: "Our Team"
}
export default function Page() {
  return (
    <>
      <PortfolioBanner content={portfolioData.content} heading={portfolioData.heading} imgSrc={portfolioData.img} />
      <TeamStats />
      <KnowMore />
      <Infrastructureforabout/>
      <Celebration/>
      <Pillars />
      <Team />
    </>
  )
}
