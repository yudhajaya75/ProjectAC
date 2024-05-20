import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material";

import useCardWebinar from "../../hooks/useCardWebinar";
import Image from "../global/Image";
import ButtonPagination from "../button/ButtonPagination";

const Card = () => {
  const {
    content,
    loading,
    currentPage,
    paginationMeta,
    handleNextClick,
    handlePrevClick,
  } = useCardWebinar(1, 8);

  const showPagination =
    paginationMeta?.pageCount && paginationMeta?.pageCount > 1;

  return (
    <div className="mt-20 p-5">
      {loading ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="w-full shadow-lg rounded-md">
              <Skeleton variant="rectangular" className="w-full" height={180} />
              <div className="w-full p-6">
                <Skeleton variant="text" className="w-full" height={32} />
                <Skeleton variant="text" className="w-full" height={72} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {content &&
            content.data.map((res, index: number) => (
              <div
                className="shadow-lg w-full rounded-lg overflow-hidden"
                key={index}
              >
                <div className="w-full h-[207px]" key={res.id}>
                  <Image
                    src={res.attributes.image.data.attributes.url}
                    alt={res.attributes.title}
                    customClass="h-full w-full object-contain"
                  />
                </div>
                <div className="p-2">
                  <div className="flex gap-4 mt-[-70px] ml-4 text-[#4B465C]">
                    <div className="">
                      {res.attributes.webinar &&
                      res.attributes.webinar.eventDuration ? (
                        <>
                          {res.attributes.webinar.eventDuration
                            .split(",")
                            .map((res: string, index: number) => (
                              <div
                                className=" bg-slate-50 rounded-full px-3 py-1 -mt-1"
                                key={index}
                              >
                                {res}
                              </div>
                            ))}
                        </>
                      ) : (
                        <p>Duration Not Available</p>
                      )}
                    </div>
                  </div>
                  <div className="ml-3 my-7 mt-10 flex flex-col gap-y-3">
                    <h3 className="text-xl font-semibold text-[#002157]">
                      {res.attributes.title}
                    </h3>
                    {res.attributes.webinar &&
                    res.attributes.webinar.webinarPrice !== null ? (
                      <p className="text-[#4B465C]">
                        Rp. {res.attributes.webinar.webinarPrice}
                      </p>
                    ) : (
                      <p className="text-[#4B465C]">
                        Webinar Price Not Available
                      </p>
                    )}
                  </div>
                  <a href={`/webinar/${res.attributes.slug}`}>
                    <div className="bg-[#002157] text-white font-semibold p-[10px] text-center rounded-md w-[90%] mx-auto">
                      <button className="button-webminar">Lihat Detail</button>
                    </div>
                  </a>
                </div>
              </div>
            ))}
        </div>
      )}
      {showPagination && (
        <ButtonPagination
          handlePrev={handlePrevClick}
          handleNext={handleNextClick}
          page={currentPage}
          totalPages={paginationMeta?.pageCount || 0}
        />
      )}
    </div>
  );
};

export default Card;
