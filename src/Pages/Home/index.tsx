import Carousel3D from "./Components/Carrousel";

const images = [
  "assets/imgs/Casamento/Casamento_Tainara/Casamento (2).jpg",
  "assets/imgs/Casamento/Casamento_Tainara/Casamento (4).jpg",
  "assets/imgs/Aniversarios/15_Lorrane/foto (13).jpg",
  "assets/imgs/Ensaios/Markson/foto (18).jpg",
  "assets/imgs/Formatura/Formaturas/Blenda/foto (3).jpg",
];

import Arthurimg from "../../assets/imgs/Arthur.jpeg";
import Wesleyimg from "../../assets/imgs/Wesley.jpeg";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";
export function Home() {
  return (
    <>
      <header
        id="home"
        className="flex items-center justify-center h-screen mb-12 bg-center bg-cover   bg-no-repeat bg-[url('/src/assets/imgs/Aniversarios/Leticia/xv-lele-13.jpg')]"
      >
        <div className="absolute flex flex-col items-center justify-center gap-8 top-0 left-0 right-0 bottom-0">
          <h1 className="text-6xl text-white font-bold font-dense font-poppins drop-shadow-2xl">
            Guarde seus momentos
          </h1>
        </div>
      </header>

      <section className="text-gray-600 body-font p-6" id="sobre">
        <div className="container px-6 py-10 mx-auto">
          <div className="xl:flex xl:items-center xL:-mx-4">
            <div className="xl:w-1/2 xl:mx-4">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
                Nosso Time
              </h1>

              <p className="max-w-2xl mt-4 text-gray-800   ">
                Explore nosso portfólio e deixe-nos capturar momentos memoráveis
                para você. Nossa equipe de fotógrafos apaixonados está pronta
                para transformar suas ocasiões especiais em memórias eternas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
              <div>
                <img
                  className="object-cover rounded-xl h-64 w-full"
                  src={Arthurimg}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                  Arthur Cesar
                </h1>

                <p className="mt-2 text-gray-700 capitalize flex item-center gap-2">
                  <a href="https://www.instagram.com/arthurcesarfotografiia/">
                    <InstagramLogo size={32} />
                  </a>
                  <a href="https://wa.me/message/ZZKOBVSCQXCHN1">
                    <WhatsappLogo size={32} />
                  </a>
                </p>
              </div>

              <div>
                <img
                  className="object-cover rounded-xl h-64 w-full"
                  src={Wesleyimg}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize ">
                  Wesley Cardoso
                </h1>

                <p className="mt-2 text-gray-700 capitalize flex items-center gap-2">
                  <a href="https://www.instagram.com/wesleycjf/">
                    <InstagramLogo size={32} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[124rem] p-4 mx-auto">
        <h1 className="text-4xl text-center mb-8">Meus Principais Trabalhos</h1>
        <Carousel3D images={images} />
      </section>
    </>
  );
}
