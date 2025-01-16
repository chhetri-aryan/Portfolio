import React from "react";
import {
  HeroContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import Spline from "@splinetool/react-spline";
import image from "../../assets/img/hero_img.png";
import { useState, Suspense, useEffect } from "react";

const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

const HeroSection = () => {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  const handleLoad = () => {
    //10 s load
    setTimeout(() => {
      setIsSplineLoaded(true);
    }, 10000);
    // setIsSplineLoaded(true);
  };

  return (
    <div id="about" className="">
      <HeroContainer>
        <HeroInnerContainer>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:gap-32 mt-16 md:mt-20 lg:mt-0">
            <div
              id="Left"
              className="order-2 justify-center mt-60 md:mt-40 lg:mt-5"
            >
              <Title>
                Hi, I am <br /> {Bio.name}
              </Title>
              <TextLoop className="flex flex-wrap">
                I am a
                <Span className="glow">
                  <Typewriter
                    options={{
                      strings: Bio.roles,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Span>
              </TextLoop>

              <SubTitle className="text-justify">{Bio.description}</SubTitle>
              <ResumeButton href={Bio.resume} target="display">
                Check Resume
              </ResumeButton>
            </div>
            <div id="Right" className="lg:order-2 sm:order-1 -m-48 h-92 ">
              <div className="relative mt-10 w-full h-screen">
                <img
                  src={image}
                  alt="hero"
                  className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-500 ${
                    isSplineLoaded ? "opacity-0" : "opacity-100"
                  }`}
                />
                <Suspense fallback={null}>
                  <LazySpline
                    scene="https://prod.spline.design/UTFMrrw71-cpURyo/scene.splinecode"
                    onLoad={handleLoad}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                      isSplineLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Suspense>
              </div>
            </div>
          </div>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
