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
      imageDesk: "/images/people/slide-1-nofilter.png",
      imageMob: "/images/people/slide-1-mob.png"
    },
    {
      name: "Adones",
      descriptionDesk: "Publicitário com mais de 10 anos de estrada no digital e mais de 3 anos dentro do TikTok, Adones é o estrategista da Triz. <br /><br /> Com vasta experiência em soluções digitais, redes sociais e tráfego pago, ele é quem constrói a base analítica dos projetos, garantindo que cada ideia criativa também seja eficiente e rentável. <br /><br /> No tempo livre, troca as telas pelo sol, praticando beach tennis e trazendo essa energia vibrante para tudo o que faz.",
      descriptionMob: "<strong style='font-size: 12px'>Publicitário com mais de 10 anos de estrada no digital e mais de 3 anos dentro do TikTok, Adones é o estrategista da Triz.</strong> <br /><br /> Com vasta experiência em soluções digitais, redes sociais e tráfego pago, ele é quem constrói a base analítica dos projetos, garantindo que cada ideia criativa também seja eficiente e rentável. <br /><br /> No tempo livre, troca as telas pelo sol, praticando beach tennis e trazendo essa energia vibrante para tudo o que faz.",
      imageDesk: "/images/people/slide-2-nofilter.png",
      imageMob: "/images/people/slide-2-mob-nofilter.svg"
    },
    {
      name: "Victória",
      descriptionDesk: "Publicitária de formação, Victória é apaixonada pela criação desde sempre. <br /><br /> Especialista em Direção de Arte e Branding, ela enxerga além do óbvio: acredita que marcas únicas precisam ter alma e propósito. Seu olhar cuidadoso para estética e identidade transforma cada projeto em algo autêntico e memorável. <br /><br /> Indo além da profissão, ela encontra inspiração na cerâmica fria, hobby onde continua moldando ideias e explorando novas formas de expressão.",
      descriptionMob: "<strong style='font-size: 12px'>Publicitária de formação, Victória é apaixonada pela criação desde sempre.</strong> <br /><br /> Especialista em Direção de Arte e Branding, ela enxerga além do óbvio: acredita que marcas únicas precisam ter alma e propósito. Seu olhar cuidadoso para estética e identidade transforma cada projeto em algo autêntico e memorável. <br /><br /> Indo além da profissão, ela encontra inspiração na cerâmica fria, hobby onde continua moldando ideias e explorando novas formas de expressão.",
      imageDesk: "/images/people/slide-3-nofilter.png",
      imageMob: "/images/people/slide-3-mob-nofilter.svg"
    },
  ];
  return (
    <section className="bg-gray relative">
      <h2 className="sr-only">Quem está por trás da Triz</h2>
      <Swiper
        modules={[Navigation]}
        className="md:rounded-4xl rounded-b-2xl md:aspect-[1440/590] w-full h-[354px] md:h-[590px]"
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        navigation={{
            nextEl: '.next-slider, .swiper-button-next',
            prevEl: '.prev-slider, .swiper-button-prev',
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={'slide-' + index} className="relative h-[354px] md:h-[590px] z-0">
            <div className="container w-full h-full">
              {index === 0 ? (
                <div
                  className="relative top-1/2 -translate-y-1/2 xl:left-[150px] left-[50px] z-10 text-white text-[40px] md:text-[64px] leading-[1] md:max-w-[245px] max-w-[150px] font-semibold"
                  dangerouslySetInnerHTML={{ __html: slide.title ?? slide.descriptionDesk }}
                />
              ) : (
                <>
                  <div
                    className="relative top-1/2 -translate-y-1/2 right-0 ml-auto z-10 text-gray text-[11px] md:text-xl md:leading-[25px] max-w-[170px] md:max-w-[270px] lg:max-w-[420px] block lg:hidden"
                    dangerouslySetInnerHTML={{ __html: slide.title ?? slide.descriptionMob }}
                  />
                  <div
                    className="relative top-1/2 -translate-y-1/2 right-0 ml-auto z-10 text-gray text-[11px] md:text-xl md:leading-[25px] max-w-[170px] md:max-w-[270px] lg:max-w-[450px] 2xl:max-w-[550px] hidden lg:block"
                    dangerouslySetInnerHTML={{ __html: slide.title ?? slide.descriptionDesk }}
                  />
                </>
              )}
            </div>
            <Image src={slide.imageDesk} alt={slide.title ?? slide.name} className="w-full h-full object-cover hidden md:block" fill quality={100} />
            <Image src={slide.imageMob} alt={slide.title ?? slide.name} className="w-full h-full object-cover object-bottom block md:hidden" fill quality={100} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute w-full flex justify-center gap-5 md:-bottom-7 -bottom-4 z-10">
        <button 
         className="prev-slider rotate-180 relative cursor-pointer hover:bg-brown transition-all duration-300 disabled:opacity-60 disabled:cursor-default disabled:pointer-events-none select-none"
        >
          <Image src="/images/chevron-right.svg" alt="Arrow left" className="hidden md:block" width={57} height={57} quality={100} />
          <Image src="/images/chevron-right.svg" alt="Arrow left" className="block md:hidden" width={34} height={34} quality={100} />
        </button>
        <button 
          className="next-slider relative cursor-pointer transition-all duration-300 disabled:opacity-60 disabled:cursor-default disabled:pointer-events-none select-none"
        >
          <Image src="/images/chevron-right.svg" alt="Arrow right" className="hidden md:block" width={57} height={57} quality={100} />
          <Image src="/images/chevron-right.svg" alt="Arrow right" className="block md:hidden" width={34} height={34} quality={100} />
        </button>
        </div>
    </section>
  );
}