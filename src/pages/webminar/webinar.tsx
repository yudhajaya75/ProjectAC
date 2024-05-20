import Card from "../../components/card/cardwebminar";
import Teks3 from "../../components/teks/teks-webminar2";
import Teks from "../../components/teks/teksabout";
import useBanWebinar from "../../hooks/useBanWebinar";
import LayoutWithBanner from "../../layouts/LayoutWithBanner";

const Webinar = (props: { email: string }) => {
  const {content} = useBanWebinar()
  

  return (
    <div className="max-w-[1710px] mx-auto">
      <LayoutWithBanner
        bgImage={`${process.env.REACT_APP_UPLOAD_URL}${content?.attributes.image.data.attributes.url}`}
        accountEmail={props.email}
        firstElement={
          <>
            <div className=" text-center -ml-10 md:text-left md:ml-0 p-5 grid gap-6 ">
              <h1 className="text-5xl mb-5 sm:mb-0 md:text-3xl font-bold text-[#002157]">
                {content?.attributes.header && content?.attributes.header}
              </h1>
              <p className="font-extralight text-2xl sm:text-lg md:text-xl lg:text-3xl text-[#5B5B5B]">
                {content?.attributes.desc && content?.attributes.desc}             
              </p>
            </div>
          </>
        }
        secondElement=""
      >

        <Teks
          title={content?.attributes.title && content?.attributes.title}
          body={content?.attributes.body && content?.attributes.body}
        />
        <Card />
        <Teks3 />
      </LayoutWithBanner>
    </div>
  );
};

export default Webinar;
