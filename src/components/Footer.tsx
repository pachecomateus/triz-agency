import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white w-full py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <Link href="https://www.instagram.com/ag.triz/" target="_blank" title="Triz" className="group flex items-center">
            <Image src="/images/instagram.png" alt="Instagram" width={26} height={26} quality={100} />
            <p className="relative group-hover:text-gray transition-colors duration-300 ease-in-out">
              <span className="relative z-10 px-2 py-1">@ag.triz</span>
              <span className="absolute z-0 inset-0 bg-green rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
            </p>
          </Link>
        </div>
        <p className="text-center text-xs mt-8">
          Triz agency. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}