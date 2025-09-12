import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const mosaic = [
    // {
    //   title: "Arena Hills",
    //   description: "Gestão e produção",
    //   image: "/images/portfolio/mosaico-1.png",
    //   href: "https://www.instagram.com/reel/DIGznRTxrVH/?igsh=MTk4NmxveWdtY3JjMg=="
    // },
    {
      title: "Flow Hortolândia",
      description: "Gestão e produção",
      image: "/images/portfolio/mosaico-2.png",
      href: "https://www.instagram.com/sejaflow_hortolandia/"
    },
    {
      title: "Mariana Rossi",
      description: "Gestão e produção",
      image: "/images/portfolio/mari.jpeg",
      href: "https://www.instagram.com/marianarossiconsultoria/"
    },
    {
      title: "Zaqueu Magalhães",
      description: "Gestão e produção",
      image: "/images/portfolio/zaqueu.jpeg",
      href: "https://www.instagram.com/zmagalhaesimoveis/"
    },
    {
      title: "Póti",
      description: "Identidade Visual",
      image: "/images/portfolio/mosaico-3.png",
      href: "https://www.behance.net/gallery/151422535/Identidade-Visual-Poti"
    },
    {
      title: "Studio Amarelo",
      description: "Identidade Visual",
      image: "/images/portfolio/mosaico-4.png",
      href: "https://www.behance.net/gallery/180286479/ID-Studio-Amarelo"
    },
    {
      title: "Charme Kids",
      description: "Identidade Visual",
      image: "/images/portfolio/mosaico-5.png",
      href: "https://www.behance.net/gallery/151422215/Identidade-Visual-Charme-Kids"
    },
    {
      title: "Marisa Pacheco",
      description: "Identidade Visual",
      image: "/images/portfolio/mosaico-6.png",
      href: "https://www.behance.net/gallery/207667413/Marisa-Pacheco-Artesanato"
    }
  ]
  return (
    <section className="relative bg-black" id="portfolio">
      <div className="bg-gradient-to-r from-black to-black rounded-t-[50px]">
        <div className="container">
          <div className="flex items-center gap-4 pt-20 pb-16">
            {/* <Image src="/images/gradiente-preto.png" alt="Detalhe" width={100} height={48} quality={100} /> */}
            <h2 className="text-3xl lg:text-5xl text-beige font-semibold">Portfólio</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[2600px] lg:h-[1700px] 2xl:h-[2000px]">
        {mosaic.map((item, index) => (
          <Link key={item.title + index} href={item.href} target="_blank" title={item.title} className="relative group w-full h-full">
            <div className="absolute inset-0 z-5 w-full h-full bg-black/60 group-hover:bg-transparent transition-all duration-500" />
            <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl bg-transparent group-hover:bg-gray group-hover:translate-y-full transition-all duration-500">
              <p className="text-white text-center font-semibold lg:text-3xl text-lg">{item.title}</p>
              <p className="text-white text-center font-semibold lg:text-xl text-base">{item.description}</p>
            </div>
            <Image src={item.image} alt={item.title} fill quality={100} className="object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500" />
          </Link>
        ))}
      </div>
    </section>
  );
}