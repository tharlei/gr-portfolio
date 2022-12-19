import { config } from 'config';

export function InitialsName() {
  const { social, company } = config;

  const initials = company.name
    .split(' ')
    .map((word: string) => word[0])
    .join('');

  return (
    <a
      href={social.linktree}
      target="_blank"
      className="font-amsterdam text-rose-500 lg:text-2xl 2xl:text-3xl"
      rel="noreferrer"
    >
      {initials}
    </a>
  );
}
