import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import styles from './home.module.scss';
import GiovannaRamaldo from 'assets/giovanna-ramaldo.jpg';
import Image from 'next/image';
import Head from 'next/head';

interface MenuItem {
  name: string;
  link: string;
  active: boolean;
}

export default function Home() {
  const menu: MenuItem[] = [
    // {
    //   name: 'Home',
    //   active: true,
    //   link: '/',
    // },
    // {
    //   name: 'Sobre mim',
    //   active: false,
    //   link: '/',
    // },
    // {
    //   name: 'Projetos',
    //   active: false,
    //   link: '/',
    // },
    // {
    //   name: 'Contato',
    //   active: false,
    //   link: '/',
    // },
  ];

  return (
    <>
      <Head>
        <title>Giovanna Ramaldo | Home</title>
      </Head>
      <div className="bg-gray-100 flex overflow-hidden">
        <div className="bg-dark-900 h-screen w-5/12 px-4">
          <nav className="flex items-center justify-between mt-12">
            <div>
              <a
                href="https://linktr.ee/giovannaramaldo.arq"
                target="_blank"
                className="font-amsterdam text-rose-500 text-2xl 2xl:text-3xl"
                rel="noreferrer"
              >
                GR
              </a>
            </div>
            <ul className="grid grid-cols-4 gap-20 text-white">
              {menu.map((item) => (
                <a
                  href={item.link}
                  className={
                    (item.active ? 'text-rose-300' : '') +
                    ' hover:text-rose-300 duration-300 transition-colors'
                  }
                  key={item.name}
                >
                  {item.name}
                </a>
              ))}
            </ul>
          </nav>
          <div className="mt-12 flex justify-center">
            <div className="lg:w-[320px] 2xl:w-[441px]">
              <Image
                src={GiovannaRamaldo}
                alt="Foto de Giovanna Ramaldo"
                className="rounded-full shadow-lg z-50"
              />
            </div>
          </div>
          <div className="absolute w-6/12 bottom-0 left-0">
            <svg
              viewBox="0 0 1045 648"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-1.2"
                y="1.2"
                width="378.6"
                height="886.6"
                rx="189.3"
                transform="matrix(-1 0 0 1 1042.6 84)"
                stroke="url(#paint0_linear_79_43)"
                strokeWidth="2.4"
              />
              <path
                d="M735.8 322C735.8 144.827 592.173 1.2 415 1.2C237.827 1.2 94.2 144.827 94.2 322V684.8H399C585.01 684.8 735.8 534.01 735.8 348V322Z"
                stroke="url(#paint1_linear_79_43)"
                strokeWidth="2.4"
              />
              <path
                d="M1.20001 450.5C1.20001 559.51 86.2195 647.8 191 647.8C295.781 647.8 380.8 559.51 380.8 450.5C380.8 341.49 295.781 253.2 191 253.2C86.2195 253.2 1.20001 341.49 1.20001 450.5Z"
                stroke="url(#paint2_linear_79_43)"
                strokeWidth="2.4"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_79_43"
                  x1="495"
                  y1="-246"
                  x2="171.242"
                  y2="398.967"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7E64" stopOpacity="0.42" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_79_43"
                  x1="391.5"
                  y1="-162.5"
                  x2="166.5"
                  y2="920"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#B76E79" />
                  <stop offset="1" stopColor="#B76E79" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_79_43"
                  x1="279.837"
                  y1="29.9057"
                  x2="184.053"
                  y2="647.923"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC89E" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="text-dark-900 w-7/12 px-24 pt-20 z-50 bg-gray-100">
          <h3 className="text-xl 2xl:text-2xl text-rose-500 font-abril-fatface">
            Arquiteta
          </h3>
          <div className="font-mulish font-bold text-7xl 2xl:text-8xl break-words mt-6">
            <p>Giovanna</p>
            <p>Ramaldo</p>
          </div>
          <div className="px-16 2xl:px-24">
            <p className="text-justify font-inter 2xl:text-lg text-gray-800 mt-14">
              Futura arquiteta, cursando Arquitetura e Urbanismo desde 2018.
              Trabalhei em projetos tanto residenciais, quanto comerciais e
              possuo sólidos conhecimentos em renderização. Tenho interesse em
              urbanismo e sempre vou continuar expandindo meu conhecimento.
            </p>
            <div className="flex items-center justify-evenly mt-14">
              <a
                className="text-white 2xl:text-lg bg-rose-500 px-10 2xl:px-12 py-5 2xl:py-7 rounded-tl-2xl rounded-br-2xl"
                target="_blank"
                rel="noopener"
                href="/portfolio.pdf"
              >
                Download portfólio
              </a>
              {/* <a href="">Conheça meus projetos</a> */}
            </div>
            <div className="flex gap-6 grid-cols-3 mt-14">
              <a
                href="https://www.linkedin.com/in/giovannaramaldo"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className={styles.socialIcon} />
              </a>
              <a
                href="https://www.instagram.com/giovannaramaldo.arq/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className={styles.socialIcon} />
              </a>
              <a
                href="mailto:giovannaramaldo.arq@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
