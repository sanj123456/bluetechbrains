"use client";
import React from 'react'
import { FaLinkedinIn, FaPhoneVolume } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { FaArrowRight, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "./developer.scss"
import { Icons } from '@/assets/Icons';
import { AppImages } from '@/assets/AppImages';
import { developer } from '@/util/developer';

const MySwal = withReactContent(Swal);
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ContactForm from './ContactForm';
import MaxWidthWrapper from '@/components/common/MaxWidthWrapper';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
const TechnologyWe = dynamic(() =>import("@/components/TechnologyWe/TechnologyWe"),{ssr:true});
export default function Page({ params }) {
    const dev = developer.find(({ name }) => name === params.developerName.replace("-", " "))
    // const dev = params.developer
    const showAlert = () => {
        MySwal.fire({
            // title: ' ',
            html: <ContactForm  dev={dev} />,
            customClass:"",
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
           showConfirmButton:false,
        });
    };

    if (!dev) return notFound();
    return (
        <>
        <MaxWidthWrapper backgroundColor={"#f5f0eb"}>
            <section suppressHydrationWarning={true} className='developerProfileMain'>
    
                <div className='profile-container'>
    
                    <div className='profile-img'>
                        <Image src={dev.profileUrl || `/developer1.jpg`} height={400} width={400} alt=''/>
                    </div>
                    <div className='profile-detail'>
                        <h1>{dev.name || "Arvid Tripathi"} </h1>
                        <span className="designation"> {dev.designation} </span> <span className="pipe">|</span><span className="experience">Experience : { dev.totalExperience}+ year</span>
                        <p>{dev.summary || <>Experienced <b>React.js Developer</b> with a demonstrated history of working in the IT & services industry. Skilled in <b>JavaScript, Node.js, and MongoDB</b></>}</p>
                    </div>
                    <div className='cwe'>
                        <div onClick={() =>  showAlert() } className='call' >
                            contact
                        </div>
                        <a className='whatsapp'> <IoLogoWhatsapp /></a>
                        <div className='email'><MdContentCopy /> Email</div>
                    </div>
                    <div className='socialIcon'>
                        <a href={dev.connect.facebook} target="_blank" className='faceBook'>
                            <FaFacebookSquare />
                        </a>
                        <a href={dev.connect.instagram} target="_blank" className='instagram'>
                            <FaInstagram />
    
                        </a>
                        <a href={dev.connect.github} target="_blank" className='git'>
                            <FaGithub />
    
                        </a>
                        <a href={dev.connect.linkdin} target="_blank" className='linkdin'>
                            <FaLinkedinIn />
    
                        </a>
                    </div>
                </div>
                <div className='workAndSkill'>
                    <div className='work'>
                        <h2 className='title'>Work Experience</h2>
                        <div className='card-container'>
                            {dev.workExperience.map(({ companyLogo, designation, endYear, startYear, companyName }, i) => (
                                <>
                                    <div key={i} className='year'>{startYear + "-" + endYear || "2022-2024"}</div>
                                    <div className='company-conteiner'>
    
                                        <div className='companyLogo'> <img src={companyLogo || "/companyLogo.png"}/></div>
    
                                        <div className='companyDetail'><h4 className='name'>{companyName || "Creativehand Co. In."}</h4> <span className='post'>{designation || "Senior Full Stack Developer | Co-Founder"}</span></div>
                                    </div>
                                </>
                            ))}
    
                        </div>
                    </div>
                    <div className='skill'>
                        <h3 className='title'>
                            My Expert Area
                        </h3>
    
                        <div className='card-container'>
                            {/* {[...new Array(10)].map(() => (
                                <div className='card'>
                                    <div className='img-conateiner'>
                                        <img src={AppImages.vscode.src} />
                                    </div>
                                    <p>
                                        Vs code
                                    </p>
                                </div>
                            ))} */}
                            {dev.technology.map(({ name, imgUrl }, i) => (
                                <div key={i} className='card'>
                                    <div className='img-conateiner'>
                                        <img src={imgUrl || AppImages.vscode.src}/>
                                    </div>
                                    <p>
                                        {name || " Vs code"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
    
                <div className='projects'>
                    <div className='top'>
                        <h2 className='title'>Recent Projects</h2>
                        <Link href={"/portfolio"} className='allProject'>
                            All Projects<FaArrowRight />
                        </Link>
    
                    </div>
                    <div className='project-card-conateiner'>
                        {dev.projects.map((item)=>(
                        <div className='card'>
                            <div className='inner-card'>
                                <Image src={item.projectImg} height={350} width={350} alt=''/>
                            </div>
                            <div className='projectLink'>
                                <a className='link' href={item.projectUrl == "" ? "#" : item.projectUrl}>
                                    {item.projectName}
                                </a>
                            </div>
                        </div>
                        ))}
                        {/* <div className='card'>
                            <div className='inner-card'>
                                <Image src={"/project2.png"} height={350} width={350} alt='' />
                            </div>
                            <div className='projectLink'>
                                <a className='link'>
                                    linkdin Bot clone
                                </a>
                            </div>
                        </div>
    
    
                        <div className='card'>
                            <div className='inner-card'>
                                <Image src={"/project1.png"} height={350} width={350} alt='' />
                            </div>
                            <div className='projectLink'>
                                <a className='link'>
                                    chating Web Application
                                </a>
                            </div>
                        </div> */}
                    </div>
    
                </div>
            </section>
        </MaxWidthWrapper>
            <TechnologyWe/>
        </>
        )
}
