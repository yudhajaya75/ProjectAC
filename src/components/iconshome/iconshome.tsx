import { Skeleton } from "@mui/material";
import { useState } from "react";
import {
  CgArrowTopRightO,
  CgChevronLeft,
  CgChevronRight,
} from "react-icons/cg";
import useCardHyperlink from "../../hooks/useCardHyperlink";

const Profile = () => {
  const pages = ["Webinar", "Konsultasi", "Layanan", "Pelatihan"];
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
    <div>
      {loading ? (
        <div className="relative top-[100px]">
          <Skeleton variant="rectangular" width={1600} height={500} />
        </div>
      ) : (
        <>
          <div>
            <div className="mx-auto mt-[200px] py-5">
              <ul className="flex items-center justify-center sm-440:flex">
                {pages.map((page, index) => (
                  <li
                    key={index}
                    className={`ml-5 lg:text-[24px] sm-440:text-[10px] sm:text-[18px] sm-440:font-bold p-5 ${
                      activePage === index
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
          <div>
            {hyperlink.map((res, index: number) => (
              <div
                key={index}
                className={activePage === index ? "flex" : "hidden"}
                id={pages[index]}
              >
                <div className="flex items-center justify-center relative ml-[300px] mt-[80px] lg:mx-[300px] sm-440:mx-20 sm-440:bottom-[50px]">
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                    alt="image"
                    className="lg:w-[400px] sm-440:w-[120px] sm:w-[200px] md:w-[300px] aspect-auto object-cover"
                  />
                  <div className="lg:ml-10 sm-440:ml-3">
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
          <div className="flex items-center justify-center">
            <div className="relative lg:bottom-[250px] sm-440:bottom-5">
              <div className="relative sm-440:hidden sm:hidden lg:block lg:bottom-[120px] lg:right-[720px]">
                <button
                  className="lg:mt-10 lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] rounded-md cursor-pointer duration-500"
                  onClick={handlePrev}
                >
                  <CgChevronLeft />
                </button>
              </div>
              <div className="relative sm-440:hidden lg:block sm-440:relative lg:left-[720px] lg:bottom-[190px]">
                <button
                  className="lg:ml-5 lg:text-[24px] lg:p-5 text-[#002157] rounded-md cursor-pointer duration-500"
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

export default Profile;
