'use client'

import React from "react";
import { IoMail } from "react-icons/io5";
import {PiPhoneCallThin} from "react-icons/pi";
import {LiaFaxSolid} from "react-icons/lia";
import {ImLocation} from "react-icons/im";
import {FooterActionsWrapper} from "./FooterWrapper";
import dictionary from "~/dictionary/dictionaryLink";


export function Footer() {

    return (
        <div id='ContactUs' className='pt-16'>
            <div className='mb-16'>
                <h2 className='text-center text-primary text-5xl mb-5 font-bold'>{dictionary.ContactUs.texts.section}
                </h2>

                <h3 className='text-center text-primary text-3xl'>  {dictionary.ContactUs.texts.paragraph}
                </h3>
            </div>

            <div className="custom-shape-divider-bottom-1702225207">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
            </div>

            <div className='pt-8 pb-8 lg:pt-0 mt-[-10px] bg-primary'>
                <div className='mb-10'>
                    <FooterActionsWrapper/>
                </div>


                <div className='flex justify-center items-center mt-[-5px] p-10'>
                    <div className='flex flex-col lg:flex-row gap-10 rounded-2xl bg-white py-5 px-8'>
                        <div className='flex gap-2 items-center'>
                            <ImLocation className='text-primary h-6 w-6'/>
                            <span>1101 Miranda Ln.Kissimmee, Fl. 34741</span>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <PiPhoneCallThin className='text-primary h-6 w-6'/>
                            <span className='underline'> <a href="tel:+13213009077">(321) 300-9077</a> </span>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <LiaFaxSolid className='text-primary h-6 w-6'/>
                            <span>(321) 291-5124</span>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <IoMail className='text-primary h-6 w-6'/>
                            <span className='underline'><a
                                href="mailto:evanhomecare@gmail.com">evanhomecare@gmail.com</a></span>
                        </div>
                    </div>
                </div>

                <p className='text-center font-bold text-white'>© 2022 Evan Home Care, LLC. All Rights Reserved.</p>
            </div>


        </div>);
}

