import Teks4 from "../../components/teks/teks-webinar5";
import Teks3 from "../../components/teks/teks-kata-mereka";
import Sosmed from "../../components/sosmed/Desktop";
import Banner from "../../components/banner/banwebminar3";
import TextDescComponent from "../../components/teks/TextDescComponent";
import TextHeadingComponent from "../../components/teks/TextHeadingComponent";
import ButtonWa from "../../components/button/ButtonWa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GlobalLayout from "../../layouts/GlobalLayout";

const Webinar = (props: { email: string }) => {
  const [content, setContent] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/products/${id}?populate[0]=image&populate[1]=*`
      )
      .then((response) => {
        setContent(response.data.data);
      });
  });

  return (
    <div className="mx-auto max-w-[1724px] relative">
      {/* <Navbar accountEmail={props.email} /> */}
      <Teks4 title={content?.attributes.title} />
      <GlobalLayout>
        <Banner
          image={`${process.env.REACT_APP_UPLOAD_URL}${content?.attributes.image.data.attributes.url}`}
        />
        <div className="flex justify-center flex-col gap-y-10 my-20">
          <TextHeadingComponent heading={content?.attributes.title} />
          <ButtonWa />
        </div>
        <TextDescComponent
          title="Webinar ini ?"
          body={content?.attributes.body}
        />
        <Teks3 />
        <Sosmed />
      </GlobalLayout>
      {/* <Footer /> */}
    </div>
  );
};

export default Webinar;
