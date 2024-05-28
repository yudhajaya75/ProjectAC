import "react-multi-carousel/lib/styles.css";

import Teks from "../../components/teks/teksabout";
import Card from "../../components/card/cardabout";
import Teks2 from "../../components/teks/teksabout-pendiri";
import Founding from "../../components/founding/founding";
import Compslid from "../../components/compslid/compslid";
import Tesk3 from "../../components/teks/teks-kerjasama";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";
import useBanAbout from "../../hooks/useBanAbout";
import Heading from "../../components/global/Heading";
import Image from "../../components/global/Image";
import ReviewCardAbout from "../../components/card/review-card-about";

const About = (props: { email: string }) => {
  const { content } = useBanAbout();

  if (!content || !content.attributes) return <div>No Data</div>;

  return (
    <LayoutWithBanner
      bgImage={`${process.env.REACT_APP_UPLOAD_URL}${content.attributes.image.data.attributes.url}`}
      accountEmail={props.email}
      firstElement={
        <>
          <h1 className="text-5xl font-bold text-[#002157]">
            {content.attributes.header}
          </h1>
          <p className="font-extralight text-4xl text-[#5B5B5B]">
            {content.attributes.desc}
          </p>
        </>
      }
      secondElement
    >
      <div className="flex flex-col md:flex-row justify-center mx-[300px] md:mx-[600px] items-center w-[600px]">
        <Teks title={content.attributes.title} body={content.attributes.body} />
        <Image
          src="./images/AC.jpg"
          alt="AC Image"
          isExternal={true}
          customClass="h-[200px] w-[500px] md:h-[300px] md:w-[500px] relative right-[500px]"
        />
      </div>
      <Heading customClass="mb-16">Join Layanan kami yuk! Cek disini</Heading>
      <Card />
      <Teks2 />
      <ReviewCardAbout />
      <div>
        <Tesk3 />
        <Compslid />
      </div>
    </LayoutWithBanner>
  );
};

export default About;
