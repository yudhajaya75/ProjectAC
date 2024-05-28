import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper";
import Skeleton from "@mui/material/Skeleton";
import useBannerHome from "../../hooks/useBannerHome";

const Registration = () => {
  const { banner, loading } = useBannerHome();

  if (!banner && !banner) return <div>No data</div>;

  return (
    <div>
      {loading ? (
        <div>
          <Skeleton variant="rectangular" width={"100%"} height={500} />
        </div>
      ) : (
        <div>
          <div className="mt-20 ">
            <div>
              {banner && (
                <img
                  className="w-full h-[500px] lg:h-[800px] absolute -top-10 -z-30"
                  src={`${process.env.REACT_APP_UPLOAD_URL}${banner?.attributes.banner.data[0].attributes.url}`}
                  alt="backgroundS"
                />
              )}
              <div className="w-full h-[300px] p-2 lg:h-[400px] flex justify-around mt-20 lg:m-0">
                <div className="h-[120px] relative bottom-0 sm-440:mt-[-220px] sm-440:right-[100px] sm-440:relative sm:top-[0px] lg:bottom-[100px] lg:mt-[-100px] ] lg:right-[350px] lg:relative lg:w-[500px] lg:flex z-50 flex-col gap-8">
                  {banner && (
                    <>
                      <h1 className="text-base md:text-3xl lg:text-5xl sm-440:text-sm sm:text-xl font-bold text-[#002157]">
                        {banner?.attributes.header}
                      </h1>
                      <p className="font-extralight text-xs sm:text-lg sm-440:text-[10px] md:text-xl lg:text-3xl text-[#5B5B5B]">
                        {banner?.attributes.desc}
                      </p>
                      <div className="mt-5 lg:mt-0">
                        <div className="bg-[#002157] hover:bg-[#286cdb] rounded-lg py-2 px-8 lg:w-[220px] sm-440:w-[180px]">
                          <a
                            className="text-slate-100 lg:text-xl sm-440:text-[15px] font-bold "
                            href="/signup"
                          >
                            Daftar Sekarang
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
