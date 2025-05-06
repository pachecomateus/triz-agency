'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

  const menu = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sobre nós",
      href: "#sobre-nos",
    },
    {
      label: "Serviços",
      href: "#servicos",
    },
    {
      label: "Portfólio",
      href: "#portfolio",
    },
    {
      label: "Contato",
      href: "#contato",
    },
  ];
  return (
    <>
      <header className="container fixed top-2 left-0 right-0 z-20 rounded-3xl bg-transparent hover:bg-gray transition-colors duration-300 ease-in-out hidden lg:block">
        <div className="flex items-center justify-between">
          <Link href="/" title="Triz">
            <Image src="/images/logo-branco.png" alt="Logo Triz" width={216} height={122} quality={100} />
          </Link>
          <nav>
            <ul className="flex items-center gap-10 pr-12 uppercase">
              {menu.map((item) => (
                <li key={item.href} className="relative group">
                  <Link href={item.href} className="relative z-10 px-2 py-1 text-white group-hover:text-gray transition-colors duration-400 ease-in-out">{item.label}</Link>
                  <span className="absolute inset-0 bg-green rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
                </li>
              ))}
            </ul>   
          </nav>
        </div>
      </header>


			{/* Menu mobile */}

      <header className="container fixed top-2 left-0 right-0 !mx-2 w-[calc(100%-1rem)] z-20 rounded-3xl bg-gray block lg:hidden">
        <div className="flex items-center justify-between">
          <Link href="/" title="Triz" className="-ml-12 mt-2">
            <Image src="/images/logo-branco.png" alt="Logo Triz" width={180} height={122} quality={100} />
          </Link>
					<button
            type="button"
            onClick={toggleMenu}
            className={`z-[100] flex items-center justify-center outline-none transition-all duration-300 lg:block cursor-pointer`}
            title="Open menu"
          >
            <div className="flex w-9 flex-col items-center">
              <div
                className={`relative mt-0 h-[3px] w-9 bg-white ${isOpen ? 'top-[9px] rotate-45 transition-all duration-300' : 'top-0 rotate-0 transition-all duration-300'}`}
              />
              <div
                className={`mt-1.5 h-[3px] w-9 bg-white ${isOpen ? '-rotate-45 transition-all duration-300' : 'rotate-0 transition-all duration-300'}`}
              />
              <div
                className={`relative mt-1.5 h-[3px] w-9 bg-white ${isOpen ? 'top-[-9px] -rotate-45 transition-all duration-300' : 'top-0 rotate-0 transition-all duration-300'}`}
              />
            </div>
          </button>
        </div>
      </header>

			<div
          className={`fixed right-2 lg:left-0 -top-0 z-20 flex flex-col items-start rounded-b-3xl bg-gray text-lg shadow-2xl transition-all duration-300 lg:min-w-80 ${isOpen ? ' translate-y-20 top-0 opacity-100 scale-100' : 'scale-0 -translate-y-20 opacity-0'}`}
        >
          <div className="w-full overflow-hidden">
            <div className="lg:p-12 p-8">
              <div className="flex flex-col gap-3 text-white">
                {menu.map((item) => (
                  <Link onClick={toggleMenu} key={item.label} href={item.href} title={item.label} className="hover:opacity-70 transition-all duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}