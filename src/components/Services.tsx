import Image from "next/image"

export default function Services() {
  return (
    <section className="bg-gray">
      <div className="container">
        <div className="flex items-center gap-3">
            <Image src="/images/gradient.jpeg" alt="Detalhe" width={59} height={38} />
            <h2>Serviços</h2>
        </div>
      </div>
    </section>
  );
}