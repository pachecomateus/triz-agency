"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const cookie_accepted = localStorage.getItem("cookie_accepted");
    if (cookie_accepted === null) {
      setAccepted(false);
    } else {
      setAccepted(true);
    }
  }, []);

  const handleClick = () => {
    localStorage.setItem("cookie_accepted", "true");
    setAccepted(true);
  };

  if (accepted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 md:bottom-5 md:right-5 z-[9999] md:w-2/5 bg-gray p-5 text-white shadow-lg rounded-2xl mx-4 md:m-0">
      <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
        <div className="text-sm">
          <p className="font-bold">
            Política de Privacidade
          </p>
          <p>
            Ao acessar este site, você concorda com o uso de cookies para melhorar a experiência do site e fornecer conteúdo personalizado. Saiba mais em nossa {' '}
            <Link href="/politica-de-privacidade" className="underline">
              Política de Privacidade.
            </Link>
          </p>
        </div>
        <button
          title="Aceitar cookies"
          className="relative group flex text-sm items-center cursor-pointer gap-3 text-nowrap text-gray lg:text-white"
          onClick={handleClick}
        >
          <span className="relative z-10 px-2 py-1 lg:group-hover:text-gray transition-all duration-400">Aceitar cookies</span>
          <span className="absolute z-0 inset-0 bg-green rounded-md transform lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
        </button>
      </div>
    </div>
  );
}
