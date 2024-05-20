import "react-multi-carousel/lib/styles.css";
import Teks2 from "../../components/teks/teks-kata-mereka";
import Sosmed from "../../components/sosmed/Desktop";
import Card from "../../components/card/card";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";
import Compslid from "../../components/compslid/compslid";
import Heading from "../../components/global/Heading";
import useBannerData from "../../hooks/UseBannerData";
import Teks from "../../components/teks/teksabout";

const Konseling = (props: { email: string }) => {
  const { content } = useBannerData();

  return (
    <LayoutWithBanner
      bgImage={`${process.env.REACT_APP_UPLOAD_URL}${content?.attributes.image.data.attributes.url}`}
      accountEmail={props.email}
      firstElement={
        <>
          <div className=" text-center -ml-10 md:text-left md:ml-0 p-5 grid gap-6 text-slate-50">
            <h1 className="text-5xl mb-5 sm:mb-0 md:text-6xl font-bold ">
              {content?.attributes.header && content?.attributes.header}
            </h1>
            <p className="font-extralight text-3xl sm:text-lg md:text-xl lg:text-4xl">
              {content?.attributes.desc && content?.attributes.desc}
            </p>
          </div>
        </>
      }
      secondElement=""
    >
      <main className="px-5 lg:px-24 py-20">
        <Teks
          title={content?.attributes.title && content?.attributes.title}
          body={content?.attributes.body && content?.attributes.body}
        />
        <Card type="Konseling" prefixLink="konseling" />
        <Teks2 />
        <Sosmed />
        <Heading customClass="py-10">Kerjasama Kami</Heading>
        <Compslid />
      </main>
    </LayoutWithBanner>
  );
};

export default Konseling;