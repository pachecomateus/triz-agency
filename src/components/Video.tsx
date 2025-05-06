'use client';

import { useEffect, useState } from "react";
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Video({className}: Readonly<{className?: string}>) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
    
  //   // Set initial state
  //   gsap.set(".video-container", {
  //     scale: 1,
  //     opacity: 1
  //   });

  //   gsap.to(".video-container", {
  //     scale: 1.2,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".video-container",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: 1,
  //       pin: true,
  //       markers: false,
  //       anticipatePin: 1,
  //     },
  //   });
  // }, []);

  return (
    <section className={`${className} h-[100svh] w-screen fixed top-0 left-0 z-0 bg-gray video-container`}>
      {isMobile === false && (
        <video
          src={"/videos/video-home.mp4"}
          poster={"/images/home-inicial.png"}
          className="absolute inset-0 z-30 h-full w-full object-cover hidden lg:block"
          autoPlay
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
          muted
          loop
        />
      )}
      {isMobile === true && (
        <video
          src={"/videos/video-home.mp4"}
          // poster={"/images"}
          className="absolute inset-0 z-30 h-full w-full object-cover block lg:hidden"
          autoPlay
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
          muted
          loop
        />
      )}
      <h1 className="sr-only">Triz Agency</h1>
      <div className="absolute w-full bottom-4 left-0 right-0 mx-auto z-30 justify-center lg:flex hidden">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
      <div className="absolute w-full bottom-4 left-0 right-0 mx-auto z-30 justify-center lg:hidden flex">
        <div className="phone">
          <div className="arrasta"></div>
        </div>
      </div>
    </section>
  );
}