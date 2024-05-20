import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../card/card.css";

import { Link } from "react-router-dom";
import { server } from "../../config/server";

type Props = {
  id?: number | string;
  title?: string;
  price?: number;
  link?: string;
  body?: string;
  image?: string;
  slug?: string;
};

const CardComponent = (props: Props) => {
  const getToken = localStorage.getItem("token") === null;

  return (
    <div className="text-[#002157] shadow-md rounded-lg p-4 grid justify-between">
      <div
        style={{ backgroundImage: `url(${server.BASE_URL}${props.image})` }}
        className="h-[272px] flex items-end justify-end object-cover bg-cover p-5"
      >
        <div className="w-fit bg-slate-50 py-2 rounded-md text-center z-10 font-semibold px-2 h-fit">
          Rp {props.price ? props.price : 0}
        </div>
      </div>
      <div className="p-2 mb-3 w-full">
        <h3 className="font-semibold text-xl mb-2">
          {props.title ? props.title : "Title"}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: props.body ? props.body.substring(0, 150) : "",
          }}
          className="text-[#5B5B5B] font-extralight text-justify first-letter:line-clamp-3"
        />
      </div>
      {getToken ? (
        <Link
          to="/login"
          className="bg-[#002157] text-white py-3 text-center rounded-lg"
        >
          {" "}
          Login untuk pesan{" "}
        </Link>
      ) : (
        <Link
          to={`/${props.link}/${props.id}`}
          className="bg-[#002157] text-white py-3 text-center rounded-lg"
        >
          Pesan Sekarang
        </Link>
      )}
    </div>
  );
};

export default CardComponent;
