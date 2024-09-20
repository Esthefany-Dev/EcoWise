import React from "react";
import { useInView } from 'react-intersection-observer';

interface CommentsCardProps{
    image:string,
    name:string,
    text:string
};

const CommentsCard: React.FC<CommentsCardProps> = ({image, name, text}) => (
    <div className="w-[108%] text-justify p-10 rounded-xl m-4 flex items-start space-x-4 md:text-justify sm:text-center bg-white lg:p-7 md:p-6 lg:flex-row sm:w-5/6 flex-col">
        <div className="w-full flex justify-center lg:w-44">
            <img src={image} className="w-16 h-16 mb-6 lg:mb-0"/>
        </div>
        <p className="text-xl sm:text-justify lg:text-justify">
            <span className="font-semibold text-lime-900 text-base md:text-xl">{name}: </span>
            <span className="font-medium  text-[#5f6952] uppercase text-base sm:text-md lg:font-semibold md:text-lg"> {text}</span>
        </p>
    </div>
);

export default function Comments(){
    const iconUser1 = require('../components/images/icon-face-1.png');
    const iconUser2 = require('../components/images/icon-face-2.png');
    const iconUser3 = require('../components/images/icon-face-3.png');

    const comments_array = [
        {
            image: iconUser1,
            name:'CARLOS ALBUQUERQUE - GERENTE DE SUSTENTABILIDADE DA GREENTOUCH',
            text:'“Com a ajuda da EcoWise, nossa gestão de resíduos melhorou significativamente. Reduzimos nossos desperdícios e aumentamos a reciclagem, alinhando nossa empresa com as melhores práticas ambientais.”'
        },
        {
            image: iconUser2,
            name:'ANA MOURA - DIRETORA DE OPERAÇÃO DA ECOTECH',
            text:'“A consultoria da EcoWise transformou nossa abordagem para eficiência energética. Economizamos 20% na conta de energia e nossa equipe está mais engajada com práticas sustentáveis.”'
        },
        {
            image: iconUser3,
            name:'MARINA OLIVEIRA - CEO DA NATUREWORKS',
            text:'"O treinamento sustentável da EcoWise foi um divisor de águas para nossa empresa. Nossa equipe está agora totalmente equipada para implementar e promover práticas de sustentabilidade eficazes no dia a dia."'
        }
    ];

    const { ref: commentsRef, inView: commentsInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    return (
        <div id="comments" className="bg-[#909E7D] p-14 -mt-[28rem] sm:-mt-[19rem] relative z-0 md:-mt-72">
            <h1 className="text-white font-bold text-4xl text-center pt-[25rem] sm:pt-56 xl:text-5xl"> DEPOIMENTOS </h1>
            <div ref={commentsRef} className={`flex flex-col items-center ${commentsInView ? 'animate-fade-right animate-duration-1000' : 'animate-none'}`}>     
                {comments_array.map((comment, index) => (
                    <CommentsCard
                        key={index}
                        image={comment.image}
                        name={comment.name}
                        text={comment.text}
                    />
                ))} 
            </div>
        </div>
    )
}