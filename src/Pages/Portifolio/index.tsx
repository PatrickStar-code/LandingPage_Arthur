import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dictionary } from "../../Dictionary";
import { useLocation } from "react-router-dom";
import Viewer from "react-viewer";
import { MagnifyingGlass } from "phosphor-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Arrayprops {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export function Portifolio() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const categoria = [
    "Todos",
    ...new Set(dictionary.map((item) => item.category)),
  ];

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const param = searchParams.get("categoria");
  const [imgs, setImgs] = useState<Arrayprops[]>([]);
  const [itensList, setItenList] = useState(8);

  function loadMore() {
    setItenList(itensList + 8);
  }

  function resetList() {
    setItenList(8);
  }

  function openViewer(index: number) {
    setVisible(true);
    setActiveIndex(index);
  }

  useEffect(() => {
    if (param !== "Todos") {
      const filtered = dictionary.filter((item) => item.category === param);
      setImgs(filtered);
    } else {
      setImgs(dictionary);
    }
  }, [param]);

  const newImgs = imgs.slice(0, itensList);

  return (
    <>
      <main className="flex flex-col text-center justify-center p-8 contet-center items-center">
        <div className="">
          <h1 className="text-3xl text-center">Portifolio</h1>
          <nav>
            <div className="flex text-center  border-b flex-row flex-wrap">
              {categoria.map((item) => (
                <Link
                  key={item}
                  onClick={() => resetList()}
                  to={`/portifolio?categoria=${item}`}
                  className=""
                >
                  <button
                    type="button"
                    className="flex  items-center justify-center px-3.5 py-2.5 text-body-5 font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-metal-400 rounded-none border-b-2 border-transparent text-metal-700 hover:bg-primary-25 hover:border-primary-200 hover:text-primary-500"
                  >
                    {item}
                  </button>{" "}
                </Link>
              ))}
            </div>
          </nav>
        </div>
        <ResponsiveMasonry
          className="w-full"
          columnsCountBreakPoints={{ 750: 2, 900: 4 }}
        >
          <Masonry>
            {newImgs.map((item,i) => (
              <div
                className="relative group p-2 hover:transition-shadow hover:grayscale"
                onClick={() => openViewer(i)}
                key={item.id}
              >
                <LazyLoadImage
                  className="max-w-full rounded-xl "
                  src={item.src}
                  alt={item.alt}
                  effect="blur"
                  loading="lazy"
                />

                <MagnifyingGlass
                  size={40}
                  className="absolute  text-white font-bold lg:left-[45%] left-[40%] top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        <div className="flex justify-center mt-5">
          {newImgs.length < imgs.length && (
            <button
              onClick={loadMore}
              className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
            >
              <div className="absolute inset-0 w-3 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                Carregar Mais
              </span>
            </button>
          )}
        </div>
        <Viewer
          visible={visible}
          onClose={() => setVisible(false)}
          images={newImgs}
          noImgDetails={false}
          activeIndex={activeIndex}
          className="sticky top-0 z-50 bg-white shadow-2xl w-full"
        />
      </main>
    </>
  );
}
