import React from 'react'
import "./Team.scss";
import { AppImages } from '@/assets/AppImages';
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
const Team = () => {
  return (
 

    <div className='team-container'>
       <div className='wrapper-div'>
        <div className='content-wrapper'>
            <h2 className='team-heading'>Our Stellar Team</h2>
            <div className='th-bottom'>
                <h4>Ready to join our Team?</h4>
                <Link href='/career'>Apply Now</Link>
            </div>
        </div>
       </div>
       <figure>
        <Image src='/groupp.jpg' alt="" height={500} width={500}/>
       </figure>
        </div>
 
  )
}

export default Team