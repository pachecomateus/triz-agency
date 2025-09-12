import Image from "next/image";

export default function Banner() {
    return (
        <>
            <section className="relative flex flex-col lg:flex-row lg:items-center justify-evenly text-center bg-beige lg:h-[70svh] lg:py-80 pt-20 h-[90svh] px-7 z-10" id="banner">
                <Image src="/images/z-bg.svg" alt="Background decorativo" fill className="object-cover top-0 left-0 right-0 lg:overflow-visible" quality={100} />
                <h1 className="sr-only">Triz Agency</h1>
                <div className="lg:max-w-[321px] z-10">
                    <h2 className="text-6xl text-left">
                        O <strong>instante</strong> <br /> onde tudo <br /> <strong>começa.</strong>
                    </h2>
                </div>

                <div className="text-left text-lg lg:max-w-[345px] z-10">
                    <p>
                        <strong>Onde a ideia encontra forma
                        e a estratégia vira impacto.</strong>
                        <br /><br />
                        Somos uma agência 360° 
                        que une criação, social, mídia, desenvolvimento e diagnóstico digital para entregar soluções completas, do conceito ao resultado.
                    </p>
                </div>
            </section>
            <section className="relative flex lg:flex-row flex-col bg-black lg:py-[100px] pb-20 z-0" id="sobre-nos">
                <div className="container flex items-center justify-between w-full lg:flex-row flex-col">
                    <div className="lg:w-3/5">
                        <Image src="/images/adones-victoria.png" alt="Fundadores" width={1000} height={500} quality={100} className="object-contain lg:max-w-[580px] max-w-full relative ml-5 lg:m-auto" />
                    </div>

                    <div className="lg:w-2/5 text-beige lg:text-lg text-base">
                        <strong className="lg:text-4xl text-xl text-green">
                            Estratégia <br /> & criatividade
                        </strong>
                        <p className="lg:max-w-2/3 mt-8">
                            Adones e Victória formam a dupla estratégica e criativa da Triz.
                            <br /><br />
                            Ele, publicitário com mais de 10 anos de experiência em soluções digitais, redes sociais e tráfego pago, é quem garante eficiência e resultados com base analítica sólida. 
                            <br /><br />
                            Ela, publicitária especializada em Direção de Arte e Branding, transforma cada projeto em algo autêntico e memorável, unindo estética, propósito e identidade.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}