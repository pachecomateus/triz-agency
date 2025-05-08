'use client';

import Image from "next/image";
import { useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    event.preventDefault();
  
    if (!captchaToken) {
      setLoading(false);
      alert("Por favor, complete o captcha.");
      return;
    }
  
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "2e23544b-0001-471a-8f4a-12fa0f754781");
    formData.append("h-captcha-response", captchaToken);
  
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
      setLoading(false);
      console.log(result);
      setSuccess(true);
    } else {
      setLoading(false);
      console.log(result);
      setError(true);
    }
  }
  
    const onHCaptchaChange = (token: string) => {
      setCaptchaToken(token);
    };
  
  return (
    <section className="relative bg-gray h-[1100px] lg:h-[800px]" id="contato">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-1/2 h-full relative">
          <Image src="/images/bolha.jpeg" alt="Bolha" fill quality={100} className="object-cover" />
          <div className="absolute flex flex-col gap-6 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white">
            <h2 className="text-4xl lg:text-6xl font-bold lg:leading-[45px]">Vamos conversar?</h2>
            <p className="text-lg lg:text-2xl font-semibold">Se você chegou até aqui, você esta prestes a dar o clique inicial.</p>
            <p className="text-lg lg:text-2xl font-semibold">Entre em contato!</p>
          </div>
        </div>

        <div className="lg:w-1/2 relative flex justify-center items-center bg-gray py-20">
          {error && <p className="text-center px-12 text-white text-lg lg:text-2xl">Ocorreu um erro ao enviar sua mensagem. <br /> Por favor, tente novamente mais tarde.</p>}
          {success && <p className="text-center px-12 text-green text-lg lg:text-2xl">Obrigado! <br /> Seus dados foram enviados com sucesso, em breve entraremos em contato.</p>}
          {!error && !success && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-5 min-w-[300px] lg:min-w-[370px] m-auto">
                  <input type="hidden" name="subject" value="Novo lead recebido" />
                  <input type="hidden" name="from_name" value="trizagency.com.br" />
                  <input required type="text" name="name" placeholder="Nome completo" className="bg-white rounded-full px-5 py-2 outline-green" minLength={2} maxLength={50} />
                  <input required type="email" name="email" placeholder="E-mail" className="bg-white rounded-full px-5 py-2 outline-green" maxLength={50} />
                  <input required type="tel" name="phone" placeholder="Telefone" className="bg-white rounded-full px-5 py-2 outline-green" minLength={8} maxLength={20} />
                  <input type="text" name="company" placeholder="Nome da empresa" className="bg-white rounded-full px-5 py-2 outline-green" maxLength={50} />
                  <input type="text" name="segment" placeholder="Segmento" className="bg-white rounded-full px-5 py-2 outline-green" maxLength={50} />
                  <textarea required name="mensagem" placeholder="Mensagem" rows={4} className="bg-white rounded-2xl px-5 py-2 resize-none outline-green" maxLength={1000} />
                  <button 
                    disabled={loading} 
                    type="submit" 
                    className="bg-green rounded-full px-5 py-2 self-end cursor-pointer text-beige hover:bg-green/70 hover:text-white transition-all duration-300 outline-primary disabled:opacity-50 disabled:cursor-default disabled:pointer-events-none"
                  >
                      {loading ? 'Enviando...' : 'Enviar'}
                  </button>
                  <div className="flex justify-end w-full">
                    <HCaptcha 
                      sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                      reCaptchaCompat={false}
                      onVerify={onHCaptchaChange}
                      loadAsync={true}
                    />
                  </div>
                  <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}} />
              </form>
          )}
        </div>
      </div>
    </section>
  );
}