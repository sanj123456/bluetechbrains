import React from 'react';
import "./Awards.scss";
import { LiaArrowCircleRightSolid } from "react-icons/lia";
import SwipeButton from '../common/SwipeButton';
import ZoomTextEffect from '../text-scroll/zoom';
const Awards = () => {
  return (
    <div className='awards-main-container'>
        <div className='wrapper-div'>
            <div className='text-div'>
                <div className='text-title'>
                    <span className='top-title'>OUR CAPABILITIES</span>
                    <h2 className='h2'>Recognized by <span className='h2-green'>the industry’s best</span></h2>
                </div>
                <div className='text-content'>
                    <p className='text-content-para'>In the last 14 years, our creative team has been awarded so many times. We’re humbled & honored by the recognitions:</p>
                    <ul className='list-parent'>
                        <li>Site of the day winner by awwwards.com in India in 2010.</li>
                        <li>Top Web Developer in India by Clutch in 2019.</li>
                        <li>Most promising UX/UI design service providers by SiliconIndia in 2018.</li>
                        <li>International web awards and recognition by CSS Design Awards & CSSWinner.</li>
                        <li>Premium Magento extension developed and verified by Magento Marketplace.</li>
                        <li>Listed in ThemeForest.net community by Envato Market.</li>
                        <li>Ranked #9 in Top 100 web development companies in India by Manifest.</li>
                    </ul>
                    <SwipeButton text={"Get in Touch"}
                     icon={<LiaArrowCircleRightSolid style={{fontSize:"25px"}}
                      className='arrow' />}
                      />
                </div>
            </div>
            <div className='image-div'> 
            {/* <img src='/awardsHero2.png'/> */}
            {/* <img src='/circle.svg'/>  */}
              <div className='top-img-div'>
                <img src='clutch-new-logo.svg'/>
              </div>
              <div className='bottom-images-wrapper'>
              <div className='bottom-img-div'>
                <img src='awward-black-2-1.svg'/>
              </div>
              <div className='bottom-img-div'>
                <img src='silicon-new-logo.svg'/>
              </div>
              </div>
            </div>
        </div>
        <span className='born-in-india'>
            Born In India
          {/* <ZoomTextEffect/>   */}
        </span>
    </div>
  )
}

export default Awards