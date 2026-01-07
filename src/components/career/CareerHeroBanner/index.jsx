import React from 'react'
import './careerherobanner.scss'
import Image from 'next/image'
import { AppImages } from '@/assets/AppImages'
import SwipeButton from '@/components/common/SwipeButton'

export default function CareerHeroBanner() {
  return (
    <div id='career-hero-banner'>
        <figure>
            <img src='/groupp.jpg'/>
        </figure>
        <div className="banner-box">
            <span className='top-title'>Find the career of your dreams</span>
            <h1 className='title'>We're more than just a workplace. We're a family</h1>
            {/* <SwipeButton text={"View All Openings"} wrapperClass='career-btn'/> */}
        </div>
    </div>
  )
}
