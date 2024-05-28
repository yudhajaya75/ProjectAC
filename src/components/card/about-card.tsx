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
        <>
          {tentangkonseling &&
            tentangkonseling.map((res, index) => (
              <div
                className="flex flex-col gap-1 lg:gap-10 mt-0 md:-mt-5"
                key={index}
              >
                <h3 className="text-lg font-semibold text-[#002157] sm-440:text-sm sm:text-xl md:text-2xl lg:text-3xl">
                  {res.attributes.header}
                </h3>
                <p
                  className="font-extralight text-xs text-[#5B5B5B] sm-440:text-sm sm:text-base md:text-lg lg:text-xl"
                  dangerouslySetInnerHTML={{ __html: res.attributes.body }}
                />
              </div>
            ))}
        </>
      }
    />
  );
};

export default AboutCard;
