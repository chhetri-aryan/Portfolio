import React from 'react'
import { HeroContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {


    return (
        <div id="about" className=''>
            <HeroContainer>
                <HeroInnerContainer >
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-32 mt-16 md:mt-20 lg:mt-0'>
                        <div id="Left" className='order-2 justify-center mt-60 md:mt-40 lg:mt-5'>
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                                <TextLoop className='flex flex-wrap'>
                                    I am a
                                    <Span>
                                        <Typewriter
                                            options={{
                                                strings: Bio.roles,
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </Span>
                                </TextLoop>
                          
                            <SubTitle className='text-justify'>{Bio.description}</SubTitle>
                            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>

                        </div>


                        <div id="Right" className='lg:order-2 sm:order-1 -m-56 h-92 '>
              <Spline
                scene="https://prod.spline.design/UTFMrrw71-cpURyo/scene.splinecode"
              />
            </div>

                    </div>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection