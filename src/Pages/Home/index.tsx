import { useEffect } from "react";
import Carousel3D from "./Components/Carrousel";

const images = [
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
  "https://source.unsplash.com/random",
];

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <header id="home" className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover  bg-no-repeat bg-[url('https://source.unsplash.com/random')]">
        <div className="absolute flex flex-col items-center justify-center gap-8 top-0 left-0 right-0 bottom-0">
          <h1 className="text-4xl text-white">Guarde seus momentos</h1>
        </div>
      </header>
      <section className="text-gray-600 body-font" id="sobre">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Sobre
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center"></div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
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
