import photo from 'assets/photo.jpeg';
import Image from 'next/image';
import Head from 'next/head';
import { AbstractLines } from 'components/abstract-lines';
import { HomeMobile } from 'components/home/mobile';
import { HomeDesktop } from 'components/home/desktop';
import { HomeMenu } from 'components/home/menu';
import { config } from 'config';
import { InitialsName } from 'components/initials-name';

export default function Home() {
  const { company } = config;

  return (
    <>
      <Head>
        <title>{company.name} | Home</title>
      </Head>
      <div className="bg-gray-100 flex overflow-hidden">
        <div className="bg-dark-900 h-screen lg:w-5/12 px-8 lg:px-4">
          <nav className="items-center justify-between mt-4 hidden lg:flex">
            <InitialsName />
            <HomeMenu />
          </nav>
          <div className="lg:flex justify-center hidden">
            <div className="lg:w-[400px] 2xl:w-[500px]">
              <Image
                src={photo}
                alt={`Foto de ${company.name}`}
                className="rounded-full shadow-lg z-50"
              />
            </div>
          </div>

          <AbstractLines />
          <HomeMobile />
        </div>
        <HomeDesktop />
      </div>
    </>
  );
}
