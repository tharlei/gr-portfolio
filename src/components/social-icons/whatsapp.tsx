import { config } from 'config';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppSocialIcon() {
  const [screen, setScreen] = useState(0);
  const { social } = config;

  useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const text = encodeURI(social.whatsappMessage);
  const domain = screen < 1024 ? 'api' : 'web';
  const href = `https://${domain}.whatsapp.com/send?phone=${social.whatsapp}&text=${text}`;

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <FaWhatsapp />
    </a>
  );
}
