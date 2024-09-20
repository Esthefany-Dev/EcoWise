import React, { useState } from "react";
import { useInView } from 'react-intersection-observer';
import CardNoticies from "../components/CardNoticies";

interface NoticesCardProps {
  title: string;
  description: string;
  text: string;
  onClick: () => void;
}

const NoticesCard: React.FC<NoticesCardProps> = ({ title, description, onClick }) => (
  <div className="bg-white rounded-xl p-5 m-4 w-full sm:m-5 min-h-[350px] flex flex-col shadow-lg lg:w-1/2 md:w-2/3 sm:w-3/4 xl:w-1/3">
    <p className="font-semibold text-[#5f6952] sm:text-xl text-justify uppercase">{title}</p>
    <p className="font-medium text-[#5f6952] sm:text-xl text-justify py-5">{description}</p>
    <button className="bg-[#5f6952] hover:bg-[#909E7D] w-full p-2 rounded-lg text-white font-semibold sm:text-lg tracking-wider mt-auto" onClick={onClick}>
      SAIBA MAIS
    </button>
  </div>
);

export default function Notices() {
  const [selectedNotice, setSelectedNotice] = useState<{ title: string; text: string } | null>(null);

  const noticeLine1 = [
    {
      title: 'Como Reduzir o Consumo de Energia em Pequenas Empresas.',
      description: 'Descubra estratégias práticas e eficazes para reduzir o consumo de energia e economizar custos operacionais em sua pequena empresa.',
      text: 'Para reduzir o consumo de energia e economizar custos, realize uma auditoria energética e adote tecnologias eficientes, como iluminação LED e sistemas de aquecimento e resfriamento mais econômicos. Utilize sensores de movimento e controle de temperatura para minimizar desperdícios. Investir em energia renovável também pode gerar economias e contribuir para a sustentabilidade.'
    },
    {
      title: 'A Importância da Gestão Adequada de Resíduos',
      description: 'Aprenda sobre as melhores práticas para a gestão de resíduos e como uma abordagem eficaz pode melhorar a sustentabilidade da sua empresa e cumprir as regulamentações ambientais.',
      text: 'Uma gestão eficaz de resíduos envolve a implementação de programas de reciclagem, educação dos funcionários e parcerias com empresas de reciclagem e compostagem. Reduzir, reutilizar e optar por fornecedores sustentáveis ajuda a cumprir regulamentações e pode reduzir custos, melhorando a imagem da empresa.'
    }
  ];
  const noticeLine2 = [
    {
      title: 'Tendências em Sustentabilidade Corporativa para 2024.',
      description: 'Explore as principais tendências e inovações em sustentabilidade corporativa que estão moldando o futuro dos negócios e como sua empresa pode se adaptar e se beneficiar delas.',
      text: 'As principais tendências em sustentabilidade corporativa incluem a adoção de tecnologias verdes, economia circular e metas de neutralidade de carbono. Inovações como sistemas de monitoramento ambiental e inteligência artificial são cada vez mais comuns. Adaptar-se a essas tendências pode melhorar a imagem da empresa e criar oportunidades de mercado.'
    },
    {
      title: 'Impacto da Automação na Sustentabilidade Empresarial.',
      description: 'Explore como a automação pode contribuir para práticas empresariais mais sustentáveis e eficientes.',
      text: 'A automação pode tornar as práticas empresariais mais sustentáveis e eficientes, reduzindo desperdícios e otimizando processos. Sistemas automatizados para controle de energia e monitoramento de processos melhoram a eficiência e precisão, reduzindo a necessidade de intervenções humanas e alinhando operações com práticas sustentáveis.'
    }
  ];

  const handleCardClick = (title: string, text: string) => { setSelectedNotice({ title, text }) };
  const handleCloseCard = () => { setSelectedNotice(null); };
  const { ref: noticiesRef, inView: noticiesInView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div id="noticies" ref={noticiesRef} className={`flex justify-center`}>
      <div className="sm:w-4/5 my-14 sm:rounded-xl bg-[#909E7D] items-center justify-center">
        <h1 className="text-white font-bold text-4xl text-center mt-14 lg:text-5xl">NOTÍCIAS</h1>
        <div className="flex flex-col justify-center items-center py-8">
          <p className="font-medium text-md uppercase text-justify px-5 w-full sm:font-semibold sm:w-4/5 sm:text-xl text-[#4a5140]">
            Mantenha-se atualizado com as últimas tendências, dicas e notícias sobre sustentabilidade e práticas ambientais.
            Explore nossos artigos para obter insights valiosos e aprender como sua empresa pode fazer a diferença.
          </p>
          <div className="flex flex-wrap justify-center">
            {noticeLine1.map((notice, index) => (
              <NoticesCard
                key={index}
                title={notice.title}
                description={notice.description}
                text={notice.text}
                onClick={() => handleCardClick(notice.title, notice.text)} // Passa os dados do card clicado
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {noticeLine2.map((notice, index) => (
              <NoticesCard
                key={index}
                title={notice.title}
                description={notice.description}
                text={notice.text}
                onClick={() => handleCardClick(notice.title, notice.text)} // Passa os dados do card clicado
              />
            ))}
          </div>
        </div>
      </div>
      {selectedNotice && (
        <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center`}>
          <div className={`bg-white rounded-xl p-8 w-2/3 mx-4 relative ${noticiesInView ? 'animate-jump-in' : 'animate-none'}`}>
            <CardNoticies
              title={selectedNotice.title}
              text={selectedNotice.text}
              onClose={handleCloseCard} // Fecha o card
            />
          </div>
        </div>
      )}
    </div>
  );
}
