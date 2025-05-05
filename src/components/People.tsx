"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';

export default function People() {
  const slides = [
    {
      title: "Quem está <br /> por trás <br /> da Triz",
      image: "/images/people/slide-1.png",
    },
    {
      name: "Adones",
      description: "Publicitário com mais de 10 anos de estrada no digital e mais de 3 anos dentro do TikTok, Adones é o estrategista da Triz. <br /><br /> Com vasta experiência em soluções digitais, redes sociais e tráfego pago, ele é quem constrói a base analítica dos projetos, garantindo que cada ideia criativa também seja eficiente e rentável. <br /><br /> No tempo livre, troca as telas pelo sol, praticando beach tennis e trazendo essa energia vibrante para tudo o que faz.",
      image: "/images/people/slide-2.png",
    },
    {
      name: "Victória",
      description: "Publicitária de formação, Victória é apaixonada pela criação desde sempre. <br /><br /> Especialista em Direção de Arte e Branding, ela enxerga além do óbvio: acredita que marcas únicas precisam ter alma e propósito. Seu olhar cuidadoso para estética e identidade transforma cada projeto em algo autêntico e memorável. <br /><br /> Indo além da profissão, ela encontra inspiração na cerâmica fria, hobby onde continua moldando ideias e explorando novas formas de expressão.",
      image: "/images/people/slide-3.png",
    },
  ];
  return (
    <section className="bg-gray relative">
      <h2 className="sr-only">Quem está por trás da Triz</h2>
      <Swiper
        modules={[Navigation]}
        className="rounded-4xl aspect-[1440/590] w-full h-[240px] lg:h-[590px]"
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        navigation={{
            nextEl: '.next-slider, .swiper-button-next',
            prevEl: '.prev-slider, .swiper-button-prev',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={'slide-' + index} className="relative h-[240px] lg:h-[590px] z-0">
            <div className="container w-full h-full">
              {index === 0 ? (
                <div
                  className="relative top-1/2 -translate-y-1/2 left-[150px] z-10 text-white lg:text-[64px] lg:leading-[1] lg:max-w-[245px] font-semibold"
                  dangerouslySetInnerHTML={{ __html: slide.title ?? slide.description }}
                />
              ) : (
                <div
                  className="relative top-1/2 -translate-y-1/2 right-0 ml-auto z-10 text-gray text-xl lg:leading-[25px] lg:max-w-[420px]"
                  dangerouslySetInnerHTML={{ __html: slide.title ?? slide.description }}
                />
              )}
            </div>
            <Image src={slide.image} alt={slide.title ?? slide.name} className="w-full h-full object-cover" fill quality={100} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute w-full flex justify-center gap-5 -bottom-7 z-20">
        <button 
         className="prev-slider rotate-180 relative cursor-pointer hover:bg-brown transition-all duration-300 disabled:opacity-60 disabled:cursor-default disabled:pointer-events-none select-none"
        >
          <Image src="/images/chevron-right.png" alt="Arrow left" width={57} height={57} quality={100} />
        </button>
        <button 
          className="next-slider relative cursor-pointer transition-all duration-300 disabled:opacity-60 disabled:cursor-default disabled:pointer-events-none select-none"
        >
          <Image src="/images/chevron-right.png" alt="Arrow right" width={57} height={57} quality={100} />
        </button>
        </div>
    </section>
  );
}