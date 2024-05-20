import Slider from "react-slick";
import SocialMediaProfile from "./sosmed";
import "./sosmed.css";
import usePersonalCard from "../../hooks/usePersonalCard";

const Mobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const { personalcard } = usePersonalCard();

  return (
    <div className="px-20">
      <Slider {...settings}>
        {!personalcard ? (
          <div>No Data</div>
        ) : (
          personalcard.map((res, index: number) => (
            <SocialMediaProfile
              key={index}
              name={res.attributes.name}
              subtitle={res.attributes.title}
              bio={res.attributes.body}
              image={`${res.attributes.image.data.attributes.url}`}
              link1={res.attributes.medsos_1}
              link2={res.attributes.medsos_2}
            />
          ))
        )}
      </Slider>
    </div>
  );
};

export default Mobile;
