import { useState } from "react";
import { useInView } from 'react-intersection-observer';

import ModalContact from "../components/ModalContact";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShow = () => { setIsModalOpen(true) };

  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div id="contact" className="flex flex-col items-center justify-center mx-5">
      <h1 className="text-lime-900 font-bold text-3xl text-center w-full md:w-3/4 lg:text-4xl sm:text-3xl">
        ESTAMOS AQUI PARA AJUDAR SUA EMPRESA A CRESCER DE FORMA SUSTENTÁVEL
      </h1>
      <span className="text-lg md:text-xl uppercase font-semibold text-justify w-4/5 md:w-2/3 my-5 mb-10 text-[#5f6952]">
        Entre em contato conosco para saber mais sobre como podemos ajudar sua empresa a adotar práticas mais sustentáveis.
        Estamos prontos para responder às suas perguntas e fornecer mais informações sobre nossos serviços.
      </span>
      <ModalContact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <button
        ref={contactRef}  onClick={handleShow}
        className={`p-4 bg-[#5f6952] hover:bg-[#909E7D] rounded-xl w-2/3 md:w-2/5 font-semibold text-white text-lg md:text-xl tracking-wider mb-10 z-1 ${contactInView ? 'animate-fade' : 'animate-none'}`}
      >
        ENTRAR EM CONTATO
      </button>

    </div>
  );
}
