import { config } from 'config';
import logo from 'assets/logo.png';
import Image from 'next/image';

export function InitialsName() {
  const { social, company } = config;

  return (
    <a
      href={social.linktree}
      target="_blank"
      rel="noreferrer"
      className="w-24 lg:w-36"
    >
      <Image src={logo} alt={`Foto de ${company.name}`} className="z-50" />
    </a>
  );
}
