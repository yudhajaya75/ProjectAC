import { Skeleton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import useCompanySlide from "../../hooks/useCompanySlide";
import Image from "../global/Image";

function Compslid() {
    const { content, loading } = useCompanySlide();

    if (!content) return <div>No Data</div>;
    return (
        <div className="mt-5">
        <Swiper
            spaceBetween={30}
            autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            440: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            {loading ? (
            <SwiperSlide>
                {[...Array(4)].map((_, index) => (
                <div
                    key={index}
                    className="shadow-lg rounded-md  grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    <Skeleton
                    variant="rectangular"
                    className="w-full"
                    height={180}
                    />
                </div>
                ))}
            </SwiperSlide>
            ) : (
            content.data.map((res, index) => (
                <SwiperSlide key={index}>
                <Image
                    src={res.attributes.image.data.attributes.url}
                    customClass="w-full h-[200px] aspect-square object-contain"
                />
                </SwiperSlide>
            ))
            )}
        </Swiper>
        </div>
    );
}

export default Compslid;
