import { InitialsName } from 'components/initials-name';
import { SocialIcons } from 'components/social-icons';
import { config } from 'config';

export function HomeMobile() {
  const { company, portfolio } = config;

  return (
    <div className="lg:hidden block mt-8 text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-rose-500 font-abril-fatface">
          Projetista | Design de interiores
        </h3>
        <InitialsName />
      </div>
      <div className="font-mulish font-bold text-5xl mt-12">
        {company.name.split(' ').map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
      <div className="ml-6">
        <p className="text-justify font-inter text-sm text-gray-300 mt-6">
          {company.description}
        </p>
        <div className="flex items-center justify-evenly mt-14">
          <a
            className="text-white 2xl:text-lg bg-rose-500 px-10 py-5 rounded-tl-2xl rounded-br-2xl z-50"
            target="_blank"
            rel="noopener noreferrer"
            href={portfolio}
          >
            Download portfólio
          </a>
          {/* <a href="">Conheça meus projetos</a> */}
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}
