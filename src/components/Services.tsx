"use client"

import Image from "next/image"
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function Services() {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const cards = [
    {
      title: "Gestão <strong>estratégica</strong> de canais",
      description: "Postar organicamente é importante, mas para escalar de verdade, é fundamental ter uma estratégia de Mídia e audiências, atuação que não para apenas no tráfego pago. <br /><br /> Traçamos uma estratégia Cross Channel, cuidamos da criação, gestão e otimização das suas campanhas pagas para: Aumentar visibilidade, gerar leads ou impulsionar vendas — sempre focados no seu objetivo.",
      image: "/images/services/gestao.svg"
    },
    {
      title: "<strong>Produção</strong> de conteúdo visual",
      description: "Imagem é tudo — especialmente no digital. Produzimos fotos e vídeos autênticos, alinhados ao DNA da sua marca, seja com equipamentos profissionais ou captação criativa via celular. <br /><br /> Nosso objetivo é construir um acervo de imagens que contem histórias, reforcem valores e deixem a comunicação mais viva e próxima.",
      image: "/images/services/conteudo.svg"
    },
    {
      title: "Cobertura de <strong>eventos</strong>",
      description: "Eventos são momentos únicos — e a comunicação precisa traduzir isso para quem está ali e para quem vai ver depois. <br /><br /> Nossa cobertura de eventos é feita com olhar atento: registramos os melhores momentos e transformamos em conteúdos editados prontos para as redes sociais. Seja um lançamento, um encontro ou uma celebração, a sua marca vai viver além do evento.",
      image: "/images/services/eventos.svg"
    },
    {
      title: "<strong>Gerenciamento</strong> de anúncios",
      description: "Postar organicamente é importante, mas para escalar de verdade, o tráfego pago é fundamental. <br /><br /> Cuidamos da criação, gestão e otimização das suas campanhas pagas para aumentar visibilidade, gerar leads ou impulsionar vendas — sempre focados no objetivo do cliente. Estratégia de verdade, não tiro no escuro.",
      image: "/images/services/anuncios.svg"
    },
    {
      title: "<strong>Direção</strong> de arte",
      description: "A estética importa. Muito. Mas na Triz, acreditamos que o visual precisa, antes de tudo, ter propósito. <br /><br /> Criamos artes para feed e stories, respeitando a identidade da marca, trazendo consistência, criatividade e cuidado em cada detalhe. <br /><br /> Mais do que 'posts bonitos', entregamos peças que fazem sentido dentro da sua estratégia.",
      image: "/images/services/d-a.svg"
    },
    {
      title: "Identidade <strong>Visual</strong>",
      description: "Toda marca que quer ser lembrada precisa ser reconhecível. Construímos sua identidade visual do zero, com todo o cuidado e estratégia que o momento pede. Com um pacote personalizado para sua marca.",
      image: "/images/services/id-visual.svg"
    },
  ]

  return (
    <section className="relative bg-beige lg:py-28 py-20" id="servicos">
      <Image src="/images/servicos-detalhe.svg" alt="Background decorativo" width={345} height={200} className="object-cover absolute -top-12 left-0" quality={100} />

      <div className="relative container z-10">
        <div className="flex lg:flex-row flex-col items-center justify-around gap-4">
          <h2 className="text-3xl lg:text-5xl text-black font-bold">Serviços</h2>

          <div className="lg:w-1/2 w-full">
            <Accordion type="single" collapsible>
              {cards.map((card, index) => (
                <AccordionItem key={card.title+index} value={card.title+index}>
                  <AccordionTrigger className="cursor-pointer lg:text-3xl text-xl relative">
                    <div className="absolute z-0 lg:bottom-6 bottom-7 lg:left-20 left-3 rounded-full bg-green h-6 lg:w-60 w-40" />
                    <div className="z-10" dangerouslySetInnerHTML={{ __html: card.title }} />
                  </AccordionTrigger>
                  <AccordionContent className="text-base lg:pl-4.5">
                    <div dangerouslySetInnerHTML={{ __html: card.description }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  );
}