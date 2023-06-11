import { SocialIcons } from 'components/social-icons';
import { WhatsAppButton } from 'components/whatsapp-button';
import { config } from 'config';

export function HomeDesktop() {
  const { company } = config;

  return (
    <div className="hidden lg:block text-dark-900 w-7/12 px-24 pt-20 z-50 bg-gray-100">
      <h3 className="text-xl 2xl:text-2xl text-rose-500 font-abril-fatface">
        Projetista | Design de interiores
      </h3>
      <div className="font-mulish font-bold text-7xl 2xl:text-8xl mt-6">
        {company.name.split(' ').map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
      <div className="px-16 2xl:px-24">
        <p className="text-justify font-inter 2xl:text-lg text-gray-800 my-14">
          {company.description}
        </p>
        <WhatsAppButton />
        <SocialIcons />
      </div>
    </div>
  );
}
