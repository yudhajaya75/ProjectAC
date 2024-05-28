import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { Skeleton } from "@mui/material";
import useBannerHome2 from "../../../hooks/useBannerHome2";
import CLink from "../../button/CLink";

const BannerHome = () => {
  const { banner, loading } = useBannerHome2();

  if (!banner || banner.length === 0) return <div>No data</div>;

  if (loading)
    return (
      <div>
        <Skeleton variant="rectangular" width={"100%"} height={750} />
      </div>
    );

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper bg-contain bg-no-repeat w-full h-auto sm:w-[400px] sm:h-[400px] xl:w-auto xl:h-[500px] overflow-hidden"
      >
        {banner.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${`${process.env.REACT_APP_UPLOAD_URL}${item.attributes.banner.data[0].attributes.url}`})`,
              }}
              className={`md:h-[725px] bg-cover object-contain aspect-auto bg-center flex-col-reverse flex md:flex-row px-[5%] md:items-center justify-between py-[20%] gap-10 md:gap-0`}
            >
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#002157]">
                  {item?.attributes.header}
                </h1>
                <p className="font-extralight text-3xl lg:text-4xl text-[#5B5B5B]">
                  {item?.attributes.desc}
                </p>
                <CLink url="/signup" customClass="w-fit text-3xl">
                  Daftar Sekarang
                </CLink>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerHome;
