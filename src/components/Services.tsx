"use client"

import Image from "next/image"
import { useState } from "react";

export default function Services() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Gestão estratégica <br /> de canais",
      description: "Postar organicamente é importante, mas para escalar de verdade, é fundamental ter uma estratégia de Mídia e audiências, atuação que não para apenas no tráfego pago. <br /><br /> Traçamos uma estratégia Cross Channel, cuidamos da criação, gestão e otimização das suas campanhas pagas para: Aumentar visibilidade, gerar leads ou impulsionar vendas — sempre focados no seu objetivo.",
      image: "/images/services/gestao.svg"
    },
    {
      title: "Produção de <br /> Conteúdo Visual",
      description: "Imagem é tudo — especialmente no digital. Produzimos fotos e vídeos autênticos, alinhados ao DNA da sua marca, seja com equipamentos profissionais ou captação criativa via celular. <br /><br /> Nosso objetivo é construir um acervo de imagens que contem histórias, reforcem valores e deixem a comunicação mais viva e próxima.",
      image: "/images/services/conteudo.svg"
    },
    {
      title: "Cobertura de Eventos",
      description: "Eventos são momentos únicos — e a comunicação precisa traduzir isso para quem está ali e para quem vai ver depois. <br /><br /> Nossa cobertura de eventos é feita com olhar atento: registramos os melhores momentos e transformamos em conteúdos editados prontos para as redes sociais. Seja um lançamento, um encontro ou uma celebração, a sua marca vai viver além do evento.",
      image: "/images/services/eventos.svg"
    },
    {
      title: "Gerenciamento <br /> de Anúncios e Promoções",
      description: "Postar organicamente é importante, mas para escalar de verdade, o tráfego pago é fundamental. <br /><br /> Cuidamos da criação, gestão e otimização das suas campanhas pagas para aumentar visibilidade, gerar leads ou impulsionar vendas — sempre focados no objetivo do cliente. Estratégia de verdade, não tiro no escuro.",
      image: "/images/services/anuncios.svg"
    },
    {
      title: "Direção de Arte",
      description: "A estética importa. Muito. Mas na Triz, acreditamos que o visual precisa, antes de tudo, ter propósito. <br /><br /> Criamos artes para feed e stories, respeitando a identidade da marca, trazendo consistência, criatividade e cuidado em cada detalhe. <br /><br /> Mais do que 'posts bonitos', entregamos peças que fazem sentido dentro da sua estratégia.",
      image: "/images/services/d-a.svg"
    },
    {
      title: "Identidade Visual",
      description: "Toda marca que quer ser lembrada precisa ser reconhecível. Construímos sua identidade visual do zero, com todo o cuidado e estratégia que o momento pede. Com um pacote personalizado para sua marca.",
      image: "/images/services/id-visual.svg"
    },
  ]

  return (
    <section className="relative bg-gray lg:py-28 py-20" id="servicos">
      <div className="container">
        <div className="flex items-center gap-4 ml-[-40px] lg:mb-28 mb-16">
          <Image src="/images/gradiente.png" alt="Detalhe" width={100} height={48} quality={100} />
          <h2 className="-ml-10 text-3xl lg:text-5xl text-white font-semibold">Serviços</h2>
        </div>

        {/* Desktop */}
        <div className="grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-5 hidden lg:grid lg:h-[600px]">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="relative group cursor-default bg-white flex flex-col justify-center items-center h-fit min-h-[260px] rounded-[40px] p-20 pt-24 transition-all duration-500 hover:scale-120 shadow-2xl hover:z-10 hover:p-14 hover:pt-24"
              style={{ transformOrigin: 'center', isolation: 'isolate' }}
            >
              <Image 
                src={card.image} 
                alt={card.title} 
                width={94} 
                height={94} 
                className={`absolute -top-12 left-0 right-0 mx-auto transition-all duration-500 ${index % 2 === 0 ? 'group-hover:rotate-12' : 'group-hover:rotate-[-12deg]'}`} 
              />
              <div 
                className="card-title text-xl font-medium text-center transition-all duration-300" 
                dangerouslySetInnerHTML={{ __html: card.title }} 
              />
              <div 
                className="card-description text-gray opacity-0 text-[0px] translate-y-5 max-h-0 group-hover:opacity-100 group-hover:max-h-[500px] group-hover:text-sm overflow-hidden transition-all duration-500 ease-in-out" 
                dangerouslySetInnerHTML={{ __html: card.description }} 
              />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-5 grid lg:hidden">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="relative group cursor-default bg-white flex flex-col justify-center items-center min-h-[230px] rounded-[40px] p-10 pt-14 transition-all duration-500 shadow-2xl"
            >
              <Image 
                src={card.image} 
                alt={card.title} 
                width={70} 
                height={70} 
                className={`absolute -top-8 left-0 right-0 mx-auto transition-all duration-500`} 
              />
              <div 
                className="card-title text-xl font-medium text-center transition-all duration-300" 
                dangerouslySetInnerHTML={{ __html: card.title }} 
              />
              <div 
                className={`card-description text-gray translate-y-5 ${openCardIndex === index ? 'opacity-100 max-h-[500px] text-sm mb-3' : 'text-[0px] opacity-0 max-h-0'} overflow-hidden transition-all duration-500 ease-in-out`} 
                dangerouslySetInnerHTML={{ __html: card.description }} 
              />

              <button 
                onClick={() => setOpenCardIndex(openCardIndex === index ? null : index)} // Toggle the specific card
                className=""
              >
                <Image 
                  src="/images/chevron-right.svg" 
                  alt="Open/Close" 
                  width={30} 
                  height={30} 
                  className={`${openCardIndex === index ? 'rotate-270' : 'rotate-90'} transition-all duration-500 mt-4`} 
                />
              </button>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}