import "../youtube/responsive.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import { Skeleton } from "@mui/material";

import useContentHome from "../../hooks/useContentHome";


const Content = () => {
  const { tentangkonseling, loading } = useContentHome();

  return (
    <section className="mt-5 lg:mt-0">
      {loading ? (
        <div className="relative top-[100px]">
          <Skeleton variant="rectangular" width={1600} height={500} />
        </div>
      ) : (
        <div className="w-full flex flex-row-reverse justify-center lg:mt-0 sm-440:mt-[-250px] sm:mb-20 md:mt-[-250px]">
          <div className="w-full md:w-[40%] flex flex-col gap-1 lg:gap-10 lg:ml-10 sm-440:mr-10">
            <h3 className="text-lg font-semibold text-[#002157] sm-440:text-sm sm:text-xl md:text-2xl lg:text-3xl">
              Tentang Konseling Satir
            </h3>
            <p className="font-extralight text-xs text-[#5B5B5B] sm-440:text-sm sm:text-base md:text-lg lg:text-xl">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="bg-[#002157] w-[120px] flex rounded-md py-2 sm:w-[300px] lg:w-[480px] mx-auto mt-2 hover:bg-[#286cdb]">
              <a
                className=" text-slate-100 text-xs sm:text-base lg:text-xl font-bold m-auto"
                href="/signup"
              >
                Daftar Konseling
              </a>
            </div>
          </div>
          <div className="w-full h-full relative flex items-center justify-center px-10 sm:w-[350px] sm:h-[200px] sm-440:w-[250px] md:mt-0 lg:w-[680px] lg:h-[350px]">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {!tentangkonseling ? (
                <div>No Data</div>
              ) : (
                tentangkonseling.map((res) => (
                  <SwiperSlide key={res.id}>
                    <div>
                      <img
                        src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                        className="w-full h-full lg:w-full lg:h-full sm-440:w-[400px] sm-440:h-[150px] sm:w-[500px] sm:h-[200px] rounded-lg bg-center bg-cover duration-500"
                        alt="Konseling Image"
                      />
                    </div>
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
};

export default Content;
