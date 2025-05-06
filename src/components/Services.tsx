import Image from "next/image"

export default function Services() {
  return (
    <section className="relative bg-gray lg:py-28" id="servicos">
      <div className="container">
        <div className="flex items-center gap-3">
          <Image src="/images/gradient.png" alt="Detalhe" width={170} height={54} quality={100} />
          <h2 className="-ml-14 lg:text-5xl text-white font-semibold">Serviços</h2>
        </div>
      </div>
    </section>
  );
}