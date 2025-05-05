import Image from "next/image";

export default function About() {
  return (
    <section className="flex lg:flex-row flex-col bg-gray lg:py-[150px] pb-20">
      <div className="container flex lg:flex-row flex-col">
        <div className="relative lg:w-1/2 h-[200px] lg:h-auto">
            <Image src="/images/logo-colorido.png" alt="Logo Triz" fill quality={100} className="object-contain" />
        </div>
        <div className="relative lg:w-1/2 h-full">
          <p className="text-white text-xl">
            <strong className="text-2xl">Triz é o instante onde tudo começa.</strong>
            <br /> <br />
            A faísca antes do fogo, o clique antes da transformação.
            <br /> <br />
            A gente não espera a ideia vir — a gente vive no ponto exato onde ela nasce.
            <br /> <br />
            É no agora que a gente encontra o novo. No movimento, 
            na conexão.
            <br /> <br />
            Porque a criatividade verdadeira não vem do acaso. 
            Ela é provocada. Ela é cultivada.
            <br /> <br />
            <strong className="text-2xl">Triz é isso:</strong>
            <br /> <br />
            Um estado criativo. Um campo de ignição. 
            <br />
            Um convite à virada. O clique inicial.
          </p>
        </div>
      </div>
    </section>
  );
}