import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Skeleton } from "@mui/material";

import "../card/cardabout.css";
import useCardHyperlink from "../../hooks/useCardHyperlink";
import Image from "../global/Image";

const Cards = () => {
  const { hyperlink, loading } = useCardHyperlink();
  if (!hyperlink && !hyperlink) return <div>No data</div>;

  return (
    <div className="md:px-10 px-2">
      {loading ? (
        <div className="flex justify-evenly mt-[50px] flex-wrap">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-[400px] sm:w-[500px] md:w-[600px] shadow-lg rounded-md"
            >
              <Skeleton variant="rectangular" width={600} height={180} />
              <div className="w-full p-6">
                <Skeleton variant="text" width={500} height={32} />
                <Skeleton variant="text" width={550} height={72} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="font-extralight gap-5 lg:gap-10 grid md:grid-cols-4">
          {hyperlink.map((res, index) => (
            <div
              key={index}
              className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-1 border border-gray-300 rounded-md w-full shadow-lg"
            >
              <Image
                src={res.attributes.image.data.attributes.url}
                alt="logo"
                customClass="w-full h-[200px] md:h-full"
              />
              <div className="w-full card-body p-4 md:p-6 grid gap-2">
                <h3 className="card-title">{res.attributes.title}</h3>
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: res.attributes.body }}
                ></p>
                <a
                  href={res.attributes.link}
                  className="p-3 h-fit w-full md:w-fit text-center bg-blue-500 text-white border-none rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:bg-blue-600"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
