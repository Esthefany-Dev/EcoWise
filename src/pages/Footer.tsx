import { Link } from 'react-scroll';

export default function Footer(){
    const imgLinkedin = require('../components/images/linkedin.png');
    const imgGitHub = require('../components/images/github.png');
    const imgEmail = require('../components/images/e-mail.png');

    return(
        <div className="bg-[#02013F] w-full px-20 pt-10 z-0 -mt-20">
            <div className="flex-1 items-center justify-between xl:flex">
                <p className="text-white text-3xl font-semibold text-center md:text-2xl sm:text-xl mt-10">
                    E C O W I S E <br />CONSULTORIA
                </p>
                <div className="text-white font-medium flex flex-col justify-center items-center space-x-0 md:text-xl md:flex-row xl:mx-4 xl:my-0 my-5 md:space-x-20 text-lg">
                    <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-[#909E7D] hover:scale-125 py-3 md:hover:scale-120 sm:py-2 text-inherit no-underline">INÍCIO</Link>
                    <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-[#909E7D] hover:scale-125 py-3 md:hover:scale-120 sm:py-2 text-inherit no-underline">SERVIÇOS</Link>
                    <Link to="comments" smooth={true} duration={500} className="cursor-pointer hover:text-[#909E7D] hover:scale-125 py-3 md:hover:scale-120 sm:py-2 text-inherit no-underline">DEPOIMENTOS</Link>
                    <Link to="results" smooth={true} duration={500} className="cursor-pointer hover:text-[#909E7D] hover:scale-125 py-3 md:hover:scale-120 sm:py-2 text-inherit no-underline">CASES</Link>
                    <Link to="noticies" smooth={true} duration={500} className="cursor-pointer hover:text-[#909E7D] hover:scale-125 py-3 md:hover:scale-120 sm:py-2 text-inherit no-underline">NOTÍCIAS</Link>
                </div>
                <div className="flex xl:flex-col items-center justify-center space-x-20 sm:space-x-32 mx-5 xl:space-x-0 xl:justify-normal sm:mx-0">
                    <a href="https://github.com/Esthefany-Dev" target="_blank"> <img src={imgGitHub} alt="Ícone GitHub" className="w-11 h-11 my-2 hover:scale-125"/></a>
                    <a href= "https://br.linkedin.com/in/esthefany-silva-a3533823a" target="_blank"> <img src={imgLinkedin} alt="Ícone LinkedIn" className="w-11 h-11 my-2 hover:scale-125"/></a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=esthefany.dev@gmail.com" target="_blank"> <img src={imgEmail} alt="Ícone E-Mail" className="w-11 h-11 my-2 hover:scale-125"/> </a>
                </div>
            </div>
            <div className="py-12">
                <span className="text-slate-400 font-medium flex justify-center items-center pt-10 border-t-2 border-t-slate-400">
                    @ESTHEFANY-DEV
                </span>
            </div>
        </div>
    )
}