import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper";
import Skeleton from "@mui/material/Skeleton";
import useBanHome from "../../../hooks/useBanHome";

type Props = {
  bgImage: string;
  firstElement: React.ReactNode;
  secondElement: React.ReactNode;
};

const BannerHome = () => {
  const { banner, sliderhome, loading } = useBanHome();

  if (!banner && !banner) return <div>No data</div>;
  if (!sliderhome && !sliderhome) return <div>No data</div>;

  return (
    <div
      className={`h-[725px] bg-hero-pattern bg-cover bg-center flex-col-reverse flex md:flex-row justify-center md:items-center`}
    >
      <div className="lg:w-2/4 mt-12 lg:mt-0 ml-10 lg:ml-20 xl:ml-[184px] lg:pr-12 xl:pr-14">
        <div className="h-full lg:flex flex-col gap-8">
          {banner && (
            <>
              <h1 className="text-base md:text-3xl lg:text-5xl sm-440:text-sm sm:text-xl font-bold text-[#002157]">
                {banner?.attributes.header}
              </h1>
              <p className="font-extralight text-xs sm:text-lg sm-440:text-[10px] md:text-xl lg:text-3xl text-[#5B5B5B]">
                {banner?.attributes.desc}
              </p>
              <div className="mt-5 lg:mt-0">
                <div className="">
                  <a
                    className="text-slate-100  lg:text-xl sm-440:text-[15px] font-bold bg-[#002157] hover:bg-[#286cdb] rounded-lg py-2 px-8"
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

      <div className="sm:mr-10 md:w-2/4 md:h-auto">
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
          className="mySwiper bg-people bg-contain bg-no-repeat w-[300px] h-[300px]  sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] overflow-hidden"
        >
          {sliderhome.map((res) => (
            <SwiperSlide key={res.id} className="">
              <div className="w-[225px] h-[225px] sm:w-[325px] sm:h-[325px] xl:w-[425px] xl:h-[425px] rounded mx-auto">
                <img
                  src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                  alt="background-people"
                  className="h-full w-full mt-10"
                  style={{ borderRadius: "10%" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerHome;
