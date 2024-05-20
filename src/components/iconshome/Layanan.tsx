import { Skeleton } from "@mui/material";
import { useState } from "react";
import {
  CgArrowTopRightO,
  CgChevronLeft,
  CgChevronRight,
} from "react-icons/cg";
import useCardHyperlink from "../../hooks/useCardHyperlink";
import Image from "../global/Image";

const Layanan = () => {
  const pages = ["Webinar", "Pelatihan", "Layanan", "Konsultasi"];
  const { hyperlink, loading } = useCardHyperlink();
  const [activePage, setActivePage] = useState(0);

  const handlePrev = () => {
    setActivePage((prevPage) => (prevPage - 1 + pages.length) % pages.length);
  };

  const handleNext = () => {
    setActivePage((prevPage) => (prevPage + 1) % pages.length);
  };

  if (!hyperlink && !hyperlink) return <div>No data</div>;

  return (
    <div className="">
      {loading ? (
        <div className="">
          <Skeleton variant="rectangular" width={1600} height={500} />
        </div>
      ) : (
        <>
          <div className="">
            <div className="mx-auto mt-[200px] py-8">
              <ul className="flex items-center justify-center flex-wrap">
                {pages.map((page, index) => (
                  <li
                    key={index}
                    id={page}
                    className={`ml-5 lg:text-[24px] sm-440:text-[10px] sm:text-[18px] sm-440:font-bold p-5 ${activePage === index
                        ? "text-[#ffffff] bg-[#002157]"
                        : "text-[#002157]"
                      } rounded-md cursor-pointer duration-500`}
                    onClick={() => setActivePage(index)}
                  >
                    <a id="hyperlink" href={`#${page}`}>
                      {page.charAt(0).toUpperCase() + page.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-10 md:mx-20">
            {hyperlink.map((res, index: number) => (
              <div
                key={index}
                className={activePage === index ? "flex" : "hidden"}
                id={pages[index]}
              >
                <div className="mx-auto flex-col md:flex-row flex items-center justify-center ">
                  <div className="w-full md:w-[400px] md:h-[250px] xl:w-[600px] xl:h-[350px]">
                    <Image
                      src={`${res.attributes.image.data.attributes.url}`}
                      customClass="w-full h-full aspect-auto object-cover"
                    />
                  </div>
                  <div className="mt-8 md:mt-0 mx-10">
                    <h1
                      className="lg:text-[32px] sm-440:text-[12px] sm:text-[25px] lg:w-[500px] font-bold text-[#002157]"
                      dangerouslySetInnerHTML={{ __html: res.attributes.title }}
                    ></h1>
                    <br />
                    <p
                      className="lg:text-[24px] lg:w-[500px] sm-440:text-[12px] sm:text-[20px]"
                      dangerouslySetInnerHTML={{ __html: res.attributes.body }}
                    ></p>
                    <br />
                    <div className="text-sm md:text-lg lg:text-xl sm-440:text-[10px] sm:text-[20px] font-bold text-[#002157] mt-[2px] flex items-center">
                      <a href={res.attributes.link}>Lihat selengkapnya</a>
                      <CgArrowTopRightO className="ml-[5px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full relative">
            <div className="flex justify-between w-full absolute -top-56 md:-top-44">
              <div className="">
                <button
                  className="text-[#002157] lg:text-[24px] rounded-md cursor-pointer duration-500"
                  onClick={handlePrev}
                >
                  <CgChevronLeft />
                </button>
              </div>
              <div className="">
                <button
                  className="lg:text-[24px] text-[#002157] rounded-md cursor-pointer duration-500"
                  onClick={handleNext}
                >
                  <CgChevronRight />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Layanan;
