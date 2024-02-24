import { Navbar } from "keep-react";
import { InstagramLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export function NavbarComponent() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar
        className={`sticky top-0 z-50 
        bg-white shadow-2xl
        
         w-full`}
        bordered={false}
        fluid={false}
      >
        <Navbar.Container className="flex items-center justify-between md:pl-4 md:pr-4">
          <Navbar.Brand>
            <Link to="/">
              <img
                src="LogoPretoAC.png"
                alt="Logo do site"
                className={`w-28 h-28 block
                 lg:block"
                `}
              />
            </Link>
          </Navbar.Brand>
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
              to="/portifolio?categoria=Todos"
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

          <Navbar.Container className="flex items-center gap-6">
            <Navbar.Container
              tag="ul"
              className="lg:flex md:flex hidden items-center justify-between gap-4"
            >
              <a
                target="_blank"
                href="https://www.instagram.com/arthurcesarfotografiia/"
              >
                <InstagramLogo size={32} />
              </a>
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
                  className={`!py-0`}
                >
                  Sobre
                </Link>
                <Link to="/portifolio?categoria=Todos" className={`!py-0`}>
                  Portifolio
                </Link>
                <span
                  onClick={() => scrollToSection("contato")}
                  className={`!py-0 cursor-pointer`}
                >
                  Contato
                </span>
              </Navbar.Container>
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>
      </Navbar>
    </>
  );
}
