import React from 'react'
import "./Keytakeaway.scss";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import MaxWidthWrapper from '../common/MaxWidthWrapper';
import { Colors } from '@/styles/colors';
const StaggerComponent = dynamic(() => import("../StaggerEffect/Stagger"), {
    ssr: false,
  });
const Keytakeaway = () => {
    const data = [
        {
        img: "/expertise.svg",
        text: "Industry Expertise",
    },
        {
        img: "/quality-assurance.svg",
        text: "Quality Assurance",
    },
        {
        img: "/affordable-price.svg",
        text: "Competitive Pricing",
    },
        {
        img: "/work-on-time.svg",
        text: "On-time Delivery",
    },
        {
        img: "/policy.svg",
        text: "Strict NDA Policy",
    },
        {
        img: "/cost.svg",
        text: "No Hidden Costs",
    },
        {
        img: "/support.svg",
        text: "Quick Support",
    },
]
    return (
      <MaxWidthWrapper backgroundColor={Colors.$secondary_color}>
            
    <div className='Keytakeaway-container'>
        <div className='wrapper-div'>
            <div className='heading-div'>
                <h3 className='heading-h3'><StaggerComponent text={"Key takeaways from ScilianTech"}/></h3>
            </div>
            <div className='bottom-container-div'>
                {data?.map((item, index) => (
                    <div className='image-box' key={index}>
                        <figure className='figureforimage'>
                            <Image className='figuresimage' src={item?.img} alt="image" width={40} height={40}/>
                        </figure>
                        <h5 className='figures-h5'>{item?.text}</h5>
                    </div>
                ))}
                {/* <div className='image-box'>
                    <figure className='figureforimage'>
                        <Image className='figuresimage' src="/expertise.svg" alt="image" width={40} height={40}/>
                    </figure>
                    <h5 className='figures-h5'>Industry Expertise</h5>
                </div> */}
            </div>
        </div>
    </div>
      </MaxWidthWrapper>
  )
}

export default Keytakeaway