import { config } from 'config';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsAppButton() {
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
    <div className="flex items-center justify-evenly">
      <a
        className="flex  gap-3 items-center text-white 2xl:text-lg bg-rose-500 px-10 py-5 rounded-tl-2xl rounded-br-2xl z-50"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <FaWhatsapp className="text-xl" />
        Vamos conversar
      </a>
    </div>
  );
}
