'use client';

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(true);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      setLoading(true);
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      formData.append("access_key", "09fbcb30-38ea-4291-85c6-b84835f10c99");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
          setSuccess(true);
      } else {
          setLoading(false);
          console.log(result);
          setError(true);
      }
  }
  
  return (
    <section className="relative bg-gray h-[500px] lg:h-[800px]" id="contato">
      <div className="lg:flex h-full">
        <div className="lg:w-1/2 h-full relative">
          <Image src="/images/bolha.jpeg" alt="Bolha" fill quality={100} className="object-cover" />
          <div className="absolute flex flex-col gap-6 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white">
            <h2 className="text-6xl font-bold leading-[45px]">Vamos conversar?</h2>
            <p className="text-2xl font-semibold">Se você chegou até aqui, você esta prestes a dar o clique inicial.</p>
            <p className="text-2xl font-semibold">Entre em contato!</p>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center items-center bg-gray py-20">
          {error && <p className="text-center text-white text-lg lg:text-2xl">Ocorreu um erro ao enviar sua mensagem. <br /> Por favor, tente novamente mais tarde.</p>}
          {success && <p className="text-center text-green text-lg lg:text-2xl">Obrigado! <br /> Seus dados foram enviados com sucesso, em breve entraremos em contato.</p>}
          {!error && !success && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-5 min-w-[300px] lg:min-w-[370px] m-auto">
                  <input type="hidden" name="subject" value="Novo lead recebido" />
                  <input type="hidden" name="from_name" value="trizagency.com.br" />
                  <input required type="text" name="name" placeholder="Nome Completo" className="bg-white rounded-full px-5 py-2 outline-green" />
                  <input required type="email" name="email" placeholder="E-mail" className="bg-white rounded-full px-5 py-2 outline-green" />
                  <input required type="tel" name="phone" placeholder="Telefone" className="bg-white rounded-full px-5 py-2 outline-green" />
                  <input required type="text" name="company" placeholder="Nome da empresa" className="bg-white rounded-full px-5 py-2 outline-green" />
                  <input required type="text" name="segment" placeholder="Segmento" className="bg-white rounded-full px-5 py-2 outline-green" />
                  <button 
                    disabled={loading} 
                    type="submit" 
                    className="bg-green rounded-full px-5 py-2 self-end cursor-pointer text-beige hover:bg-green/70 hover:text-white transition-all duration-300 outline-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none"
                  >
                      {loading ? 'Enviando...' : 'Enviar'}
                  </button>
                  <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
              </form>
          )}
        </div>
      </div>
    </section>
  );
}