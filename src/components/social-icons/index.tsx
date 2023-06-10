import { config } from 'config';
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';
import { isMobile } from 'is-mobile';

interface SocialIconsProps {
  style: string;
}

export function SocialIcons({ style }: SocialIconsProps) {
  const { social, company } = config;

  const whatsText = encodeURI('Olá, Giovanna! Podemos conversar?');
  const whatsappDomain = isMobile() ? 'api' : 'web';
  const whatsappHref = `https://${whatsappDomain}.whatsapp.com/send?phone=${social.whatsapp}&text=${whatsText}`;

  return (
    <div className="flex justify-center lg:justify-start gap-6 grid-cols-3 mt-14">
      <a
        href={social.linkedin}
        className="z-50"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className={style} />
      </a>
      <a
        href={social.instagram}
        className="z-50"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={style} />
      </a>
      <a
        href={`mailto:${company.email}`}
        className="z-50"
        target="_blank"
        rel="noreferrer"
      >
        <FaEnvelope className={style} />
      </a>
      <a href={whatsappHref} className="z-50" target="_blank" rel="noreferrer">
        <FaWhatsapp className={style} />
      </a>
    </div>
  );
}
