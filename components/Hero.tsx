"use client"

import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image'

const Hero = () => {
    const handleScroll = () => {}

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    The free, easy way to <br />
                    find, book, or rent a car!
                </h1>

                <p className='hero__subtitle'>
                    A guaranteed rental experience, just the way you wanted.
                </p>

                <CustomButton 
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/hero.png" alt="hero" fill className="object-contain" /> 
                </div>
                <div className='hero__image-overlay'/>
            </div>
        </div>
    )
}

export default Hero