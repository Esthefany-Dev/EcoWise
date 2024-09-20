import React from "react";
import { useInView } from 'react-intersection-observer';

interface ResultsInterfaceProps {
  title: string;
  description: string;
}

const ResultsCard: React.FC<ResultsInterfaceProps> = ({ title, description }) => (
  <div className="w-full sm:w-1/2 lg:w-1/4 m-3 flex flex-col">
    <div className="bg-[#E8EDE1] rounded-t-2xl p-7">
      <h1 className="font-bold text-[#909E7D] text-xl tracking-wider text-center">
        {title}
      </h1>
    </div>
    <div className="bg-[#909E7D] rounded-b-2xl flex-1">
      <p className="p-7 font-medium text-md text-justify uppercase text-white">
        {description}
      </p>
    </div>
  </div>
);

export default function Results() {
  const results = [
    {
      title: "NATUREWORK",
      description:
        "Capacitamos a equipe da NatureWorks com um treinamento em eficiência energética, gestão de resíduos e consumo responsável. Isso resultou em melhorias na sustentabilidade operacional e maior conscientização ambiental na empresa.",
    },
    {
      title: "ECOTECH",
      description:
        "A EcoTech enfrentava altos custos de energia e baixa eficiência. Após uma auditoria energética e a implementação de melhorias nos equipamentos e processos, houve uma redução de 20% na conta de energia e na pegada de carbono. Agora, a EcoTech se destaca com práticas energéticas sustentáveis.",
    },
    {
      title: "GREENTOUCH",
      description:
        "A GreenTouch precisava aprimorar a gestão de resíduos para atender às regulamentações e aumentar a reciclagem. Desenvolvemos um plano personalizado focado na segregação, reciclagem e redução de desperdícios, resultando em um aumento de 30% na taxa de reciclagem, alinhando a empresa às melhores práticas ambientais.",
    },
  ];

  const { ref: resultsRef, inView: resultsInView } = useInView({ triggerOnce: false,  threshold: 0.2 });

  return (
    <div id="results">
      <div className="flex flex-col items-center justify-center w-full mt-14">
        <h1 className="text-lime-900 font-bold text-3xl text-center mb-8 w-4/5 lg:w-1/2 sm:text-4xl">
          TRANSFORMANDO DESAFIOS EM RESULTADOS SUSTENTÁVEIS
        </h1>
        <p className="font-semibold text-[#5f6952] w-4/5 text-md text-center uppercase px-4 lg:w-2/3 sm:w-3/4 sm:text-lg lg:text-xl">
          Nossa abordagem prática e personalizada gerou resultados concretos para empresas de diversos setores. Confira algumas das nossas cases de sucesso:
        </p>
      </div>
      <div ref={resultsRef} className={`flex flex-wrap justify-center my-4 ${resultsInView ? 'animate-fade-down animate-duration-1000' : 'animate-none'}`}>
        {results.map((result, index) => (
          <ResultsCard
            key={index}
            title={result.title}
            description={result.description}
          />
        ))}
      </div>
    </div>
  );
}
