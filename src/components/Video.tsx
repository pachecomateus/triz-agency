'use client';

import { useEffect, useState } from "react";

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

  return (
    <section className={`${className} h-screen w-screen bg-gray`}>
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
          src={"/videos/video-home-mobile.mp4"}
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