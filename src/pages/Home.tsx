import { useState } from 'react'
import { useInView } from 'react-intersection-observer';

import ModalContact from "../components/ModalContact";

export default function Home() {
  const imgHome = require('../components/images/home-ecowise.png')

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleShow = () => { setIsModalOpen(true); };

  const { ref: homeRef, inView: homeInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div id="home" className="relative w-full h-screen">
      <img src={imgHome} className="absolute inset-0 w-full h-full object-cover" alt="Imagem de fundo" />
      <h1 className="text-white font-bold text-center tracking-[.25em] text-3xl absolute w-full p-6 sm:p-10">
        ECOWISE
      </h1>
        <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-5 ${ homeInView ? 'animate-fade-right' : 'animate-undefined'}`}>
          <h1 className={`text-white font-bold text-3xl w-full xl:w-1/2 lg:text-5xl md:text-4xl sm:text-4xl sm:w-5/7`} ref={homeRef}>
            TRANSFORME SUA EMPRESA COM SOLUÇÕES SUSTENTÁVEIS.
          </h1>
          <button onClick={handleShow} className={`bg-white w-6/7 mt-10 p-3 rounded-full opacity-70 font-bold text-lg text-lime-900 hover:opacity-95 xl:w-1/2 sm:w-2/3 sm:mt-14 sm:text-xl`}>
            SOLICITE UMA CONSULTORIA
          </button>
        </div>
        <ModalContact isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}  