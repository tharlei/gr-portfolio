import { config } from 'config';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { WhatsAppSocialIcon } from './whatsapp';

export function SocialIcons() {
  const { social, company } = config;

  const socialMedias = [
    {
      href: social.linkedin,
      icon: <FaLinkedin />,
    },
    {
      href: social.instagram,
      icon: <FaInstagram />,
    },
    {
      href: `mailto:${company.email}`,
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className="flex justify-center lg:justify-start gap-6 grid-cols-3 mt-14 social-icons">
      {socialMedias.map((socialMedia, key) => (
        <a href={socialMedia.href} target="_blank" key={key} rel="noreferrer">
          {socialMedia.icon}
        </a>
      ))}
      <WhatsAppSocialIcon />
    </div>
  );
}
