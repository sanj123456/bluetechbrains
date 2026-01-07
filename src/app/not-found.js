import React from 'react'
import './pageNotFound.scss'
import Image from 'next/image'
import { AppImages } from '@/assets/AppImages'
import SwipeButton from '@/components/common/SwipeButton'

export default function NotFoundPage() {
  return (
    <div className='page-not-found'>
      <div className="grid-box">
        <div className="left">
          <h1>Uh, ohh!</h1>
          <p>We can’t find the page that you are looking for!</p>
          <SwipeButton text={"Go Home"} href='/'/>
        </div>
        <div className="right">
          <Image src={AppImages.PageNotFound} />
        </div>
      </div>
    </div>
  )
}
