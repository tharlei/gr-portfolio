import { InitialsName } from 'components/initials-name';
import { SocialIcons } from 'components/social-icons';
import { WhatsAppButton } from 'components/whatsapp-button';
import { config } from 'config';

export function HomeMobile() {
  const { company } = config;

  return (
    <div className="lg:hidden block my-8 text-white overflow-auto z-10 bg-dark">
      <div className="flex justify-between items-center">
        <h3 className="text-rose-500 font-abril-fatface">
          Projetista | Design de interiores
        </h3>
        <InitialsName />
      </div>
      <div className="font-mulish font-bold text-5xl my-8">
        {company.name.split(' ').map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
      <WhatsAppButton />
      <p className="text-justify font-inter text-sm text-gray-200 my-6">
        {company.description}
      </p>
      <SocialIcons />
    </div>
  );
}
