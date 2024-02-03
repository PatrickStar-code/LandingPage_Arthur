
import { Navbar } from "keep-react";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";


export function NavbarComponent(){
  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  return (
    <>
    <Navbar className={`fixed ${inView ? 'bg-transparent' : 'bg-white shadow-2xl' } w-full z-50`} bordered={false}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className=" items-center gap-6 hidden  md:hidden lg:flex" tag="ul">
      <Link to="/" className={`${inView ? 'text-white' : 'text-black' } hover:text-gray-400`}>
        Home
      </Link>
      <Link to={{}} className={`${inView ? 'text-white' : 'text-black' } hover:text-gray-400`}>
        Sobre
      </Link>
      <Link to="/" className={` ${inView ? 'text-white' : 'text-black' } hover:text-gray-400`}>
        Portifolio
      </Link>
      <Link to="/" className={`${inView ? 'text-white' : 'text-black' } hover:text-gray-400`}>
      Contate-me
      </Link>

          </Navbar.Container>
        <Navbar.Brand>
          <img
            src="LogoPretoAC.png"
            alt="Logo do site"
            className={`w-full h-28 block ${inView ? 'lg:hidden' : 'lg:block' }`}
          />
          <img
            src="LogoBrancoAC.png"
            alt="Logo do site"
            className={`w-full h-28 hidden ${inView ? 'lg:block' : 'lg:hidden' }`}
          />

          
        </Navbar.Brand>
        

        <Navbar.Container className="flex items-center gap-6">
    
          <Navbar.Container
            tag="ul"
            className="lg:flex md:flex hidden items-center justify-between gap-4"
          >
    
            <Navbar.Link
              icon={<FacebookLogo size={30} color={`${inView ? 'white' : 'black' }`} />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<InstagramLogo size={30} color={`${inView ? 'white' : 'black' }`} />}
              iconAnimation={false}
            />
            <Navbar.Link
              icon={<TwitterLogo size={30} color={`${inView ? 'white' : 'black' }`}/>}
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
            <Navbar.Container tag="ul" className="flex flex-col gap-5 justify-center">
            <Navbar.Link
              linkName="Home"
              className="!py-0"
            />
            <Navbar.Link
              linkName="Sobre min"
              className="!py-0"
            />
            <Navbar.Link
              linkName="Portifolio"
              className="!py-0"
            />
              <Navbar.Link
            linkName="Contate-me"
            className="!py-0"
          />
            </Navbar.Container>
            <Navbar.Container tag="ul" className="flex mt-10 gap-5 justify-center">
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
    <div ref={ref} className="invisible "/>
    </>
  );
}
