import React from 'react'
import { HeroContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import Spline from '@splinetool/react-spline';


const HeroSection = () => {
    return (
        <div id="about" className='mb-52'>
            <HeroContainer>
                <HeroInnerContainer >
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-32'>

                        <div id="Left" className='order-2 justify-center'>
                            <Title>Hi, I am <br /> {Bio.name}</Title>
                            <TextLoop>
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
                            <SubTitle>{Bio.description}</SubTitle>
                            <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>

                        </div>

                        <div id="Right" className='lg:order-2 sm:order-1 lg:-m-56'>
                            
                        <Spline scene="https://prod.spline.design/UTFMrrw71-cpURyo/scene.splinecode"
                        className=''
                        />
                        </div>
                    </div>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection