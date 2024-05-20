import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Autoplay } from "swiper";
import Skeleton from "@mui/material/Skeleton";
import useBanHome from "../../hooks/useBanHome";

const Registration = () => {
  const { banner, sliderhome, loading } = useBanHome();

  if (!banner && !banner) return <div>No data</div>;
  if (!sliderhome && !sliderhome) return <div>No data</div>;

  return (
    <div>
      {loading ? (
        <div>
          <Skeleton variant="rectangular" width={"100%"} height={500} />
        </div>
      ) : (
        <div>
          <div className="md:w-full md:h-[250px] xl:w-[500px] relative lg:left-[60%] lg:top-[15%]">
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
              {sliderhome.map((res) => (
                <SwiperSlide key={res.id}>
                  <div className="relative lg:left-[40px] lg:top-[60px] sm-440:ml-[240px] lg:pt-0 sm-440:pt-[80px] sm-440:top-[0px] sm-440:bg-cover sm:ml-[500px] md:ml-[550px] lg:block lg:ml-0 lg:w-[400px] lg:h-[500px] rounded">
                    <img
                      src={`${process.env.REACT_APP_UPLOAD_URL}${res.attributes.image.data.attributes.url}`}
                      alt="background-people"
                      className="w-full lg:h-[400px] lg:w-[400px] sm-440:w-[180px] sm-440:h-[180px]"
                      style={{ borderRadius: "10%" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <img
                className="absolute -z-10 right-0 lg:top-[10px] sm-440:top-[-20px] sm-440:w-[200px] sm-440:hidden sm:hidden md:hidden lg:block lg:w-[500px] lg:h-[500px]"
                src="./images/bgpeople.webp"
                alt="background-people"
              />
            </div>
          </div>
          <div className="mt-20 ">
            <div>
              {banner && (
                <img
                  className="w-full h-[500px] lg:h-[800px] absolute -top-10 -z-30"
                  src={`${process.env.REACT_APP_UPLOAD_URL}${banner?.attributes?.image?.data?.attributes?.url}`}
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
