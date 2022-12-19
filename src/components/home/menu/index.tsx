interface MenuItem {
  name: string;
  link: string;
  active: boolean;
}

export function HomeMenu() {
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
  );
}
