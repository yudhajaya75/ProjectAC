import Container from "../global/container";
import useContentHome from "../../hooks/useContentHome";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../global/Image";

const AboutCard = () => {
  const { tentangkonseling } = useContentHome();

  return (
    <Container
      boxed
      orientation="horizontal"
      customClass="gap-5 lg:gap-[75px] mt-[90px]"
      firstElement={
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
        >
          {!tentangkonseling ? (
            <div>No Data</div>
          ) : (
            tentangkonseling.map((res, index) => (
              <SwiperSlide className="!w-full" key={index}>
                <Image
                  src={res.attributes.image.data.attributes.url}
                  customClass="w-full rounded-lg bg-center bg-cover duration-500 h-[350px]"
                  alt="Konseling Image"
                />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      }
      secondElement={
        <div className="flex flex-col gap-1 lg:gap-10 ">
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
      }
    />
  );
};

export default AboutCard;
