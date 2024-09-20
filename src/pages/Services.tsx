import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {  
  return (
    <div className={`group flex flex-col items-center justify-center text-center relative cursor-pointer p-6 xl:flex-1 lg:flex-1 transition-transform duration-500`}>              
      <img
        src={icon}
        className="w-1/3 group-hover:opacity-0 transition-opacity duration-300 ease-in-out lg:w-1/2 lg:mb-4 md:w-1/3 md:mb-1"
        alt={`Ícone do ${title}`}
      />
      <span className="text-xl font-semibold text-lime-800 pb-10 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
        {title}
      </span>
      <div className="opacity-[0.01] group-hover:opacity-100 transition-opacity duration-300 ease-in-out w-3/4 text-justify absolute text-lime-800 text-xl font-semibold uppercase">
        {description}
      </div>
    </div>
  );
};

export default function Services() {
  const iconService = require('../components/images/icon-plant.png');
  const services = [
    {
      title: "EFICIÊNCIA ENERGÉTICA",
      description: "Otimize o consumo de energia da sua empresa para reduzir custos e minimizar o impacto ambiental.",
      icon: iconService,
    },
    {
      title: "GESTÃO DE RESÍDUOS",
      description: "Implementamos soluções para reduzir, reciclar e gerenciar resíduos, melhorando a sustentabilidade e conformidade.",
      icon: iconService,
    },
    {
      title: "TREINAMENTO SUSTENTÁVEL",
      description: "Capacite sua equipe para adotar práticas sustentáveis e promover uma cultura ambiental responsável.",
      icon: iconService,
    },
  ];
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.4 });

  return (
    <div id="services" className="m-8 sm:m-14">
      <h1 className={`text-lime-900 font-bold text-3xl m-6 text-center md:text-4xl sm:text-4xl sm:m-10 transition-opacity duration-500`}> NOSSOS SERVIÇOS</h1>
      <div className="flex justify-center">
        <div ref={ref} className={`w-full flex flex-col flex-wrap rounded-2xl p-8 shadow-2xl relative z-1 bg-white lg:flex-row sm:w-5/6 sm:p-14 transition-opacity duration-500 ${ inView ? 'animate-fade-down animate-duration-1000' : 'animate-none'}`}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
