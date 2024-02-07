import { Navbar } from "keep-react";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "phosphor-react";
import { Link } from "react-router-dom";


export function NavbarComponent(){


    
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar
        className={`fixed navbar 
        bg-white shadow-2xl
         w-full z-50 navbar`}
        bordered={false}
      >
        <Navbar.Container className="flex items-center justify-between">
          <Navbar.Container
            className=" items-center gap-6 hidden  md:hidden lg:flex"
            tag="ul"
          >
            <Link
              to="/"
              className={`
                "text-black"
               hover:text-gray-400`}
              onClick={() => scrollToSection("home")}
            >
              Home
            </Link>
            <Link
              to="/"
              onClick={() => scrollToSection("sobre")}
              className={`
               text-black
               hover:text-gray-400`}
            >
              Sobre
            </Link>
            <Link
              to="/portifolio"
              className={`text-black
              hover:text-gray-400`}
            >
              Portifolio
            </Link>

            <span
              onClick={() => scrollToSection("contato")}
              className={`!py-0 cursor-pointer text-black
               hover:text-gray-400`}
            >
              Contato
            </span>
          </Navbar.Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="LogoPretoAC.png"
                alt="Logo do site"
                className={`w-full h-28 block 
                 lg:block"
                `}
              />
              <img
                src="LogoBrancoAC.png"
                alt="Logo do site"
                className={`w-full h-28 hidden   lg:hidden"
                `}
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Container className="flex items-center gap-6">
            <Navbar.Container
              tag="ul"
              className="lg:flex md:flex hidden items-center justify-between gap-4"
            >
              <Navbar.Link
                icon={
                  <FacebookLogo
                    size={30}
                    color="black"
                  />
                }
                iconAnimation={false}
              />
              <Navbar.Link
                icon={
                  <InstagramLogo
                    size={30}
                    color="black"
                  />
                }
                iconAnimation={false}
              />
              <Navbar.Link
                icon={
                  <TwitterLogo
                    size={30}
                    color="black"
                  />
                }
                iconAnimation={false}
              />
            </Navbar.Container>
            <Navbar.Container className="lg:hidden flex gap-1 z-10">
              <Navbar.Toggle />
            </Navbar.Container>
          </Navbar.Container>
          <Navbar.Collapse
            collapseType="sidebar"
            className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2 h-full"
          >
            <Navbar.Container tag="div" className="flex flex-col">
              <Navbar.Container
                tag="ul"
                className="flex flex-col gap-5 justify-center"
              >
                <Link
                to="/"
                  className="!py-0"
                  onClick={() => scrollToSection("home")}
                />
                Home
                <Link
                  to="/"
                  onClick={() => scrollToSection("sobre")}
                  className={`!py-0`}
                >
                  Sobre
                </Link>
                <Link to="/portifolio" className={`!py-0`}>
                  Portifolio
                </Link>
                <span
                  onClick={() => scrollToSection("contato")}
                  className={`!py-0 cursor-pointer`}
                >
                  Contato
                </span>
              </Navbar.Container>
              <Navbar.Container
                tag="ul"
                className="flex mt-10 gap-5 justify-center"
              >
                <Navbar.Link
                  icon={<FacebookLogo size={30} color="#444" />}
                  iconAnimation={false}
                />
                <Navbar.Link
                  icon={<InstagramLogo size={30} color="#444" />}
                  iconAnimation={false}
                />
                <Navbar.Link
                  icon={<TwitterLogo size={30} color="#444" />}
                  iconAnimation={false}
                />
              </Navbar.Container>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
      </Navbar>
    </>
  );
}

