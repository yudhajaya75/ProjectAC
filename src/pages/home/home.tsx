import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Teks from "../../components/teks/teks-kata-mereka";
import Card from "../../components/card/cardhome";
import Sosmed from "../../components/sosmed/Founding";
import Youtube from "../../components/youtube/youtube";
import Article2 from "../../components/articlehome/article2";
import Questions from "../../components/questions/questions";
import AboutCard from "../../components/card/about-card";
import ReviewCard from "../../components/card/review-card";
import "swiper/swiper-bundle.min.css";
import CLink from "../../components/button/CLink";
import useBannerHome from "../../hooks/useBannerHome";
import LayoutWithBanner2 from "../../layouts/LayoutWithBanner2";
import BannerHome from "../../components/banner/banner-v2/BannerHome";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";

const Home = (props: { email: string }) => {
  const { banner } = useBannerHome();

  return (
    <LayoutWithBanner2
      bgImage={`${process.env.REACT_APP_UPLOAD_URL}${banner?.attributes.banner.data[0].attributes.url}`}
      accountEmail={props.email}
      firstElement={<></>}
      secondElement={<></>}
    >
      <AboutCard />
      <ReviewCard />
      <Card />
      <div className="mt-20">
        <Teks />
      </div>
      <Sosmed />
      <Youtube />
      <Article2 />
      <Questions />
    </LayoutWithBanner2>
  );
};

export default Home;

//   <Swiper
//   spaceBetween={30}
//   centeredSlides={true}
//   autoplay={{
//     delay: 2500,
//     disableOnInteraction: false,
//   }}
//   pagination={{
//     clickable: true,
//   }}
//   modules={[Autoplay]}
//   className="mySwiper bg-people bg-contain bg-no-repeat w-full h-auto sm:w-[400px] sm:h-[400px] xl:w-[500px] xl:h-[500px] overflow-hidden"
// >

// </Swiper>
