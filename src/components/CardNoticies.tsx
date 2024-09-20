import React from "react";

interface CardNoticiesProps {
  title: string;
  text: string;
  onClose: () => void;
}

const CardNoticies: React.FC<CardNoticiesProps> = ({ title, text, onClose }) => (
    <div className="bg-white rounded-xl p-6 relative">
        <p className="font-semibold text-[#5f6952] text-lg sm:text-xl text-center uppercase">{title}</p>
        <p className="font-medium text-[#5f6952] text-base sm:text-xl text-justify py-2">{text}</p>
        <span
            className="text-[#5f6952] absolute border-2 border-[#8f9983] hover:border-[#e1e7d9] px-2 py-1 rounded-md cursor-pointer hover:bg-[#e1e7d9] flex items-center justify-center right-5"
            onClick={onClose}
        >
            Voltar
        </span>
  </div>
  
);

export default CardNoticies;
