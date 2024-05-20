import "swiper/swiper-bundle.min.css";
import useBanHome from "../../../hooks/useBanHome";
import { Skeleton } from "@mui/material";

type Props = {
  bgImage: string;
  firstElement?: React.ReactNode;
  secondElement?: React.ReactNode;
};

const GlobalBanner = ({ bgImage, firstElement, secondElement }: Props) => {
  const { banner, sliderhome, loading } = useBanHome();

  if (!banner && !banner) return <div>No data</div>;
  if (!sliderhome && !sliderhome) return <div>No data</div>;

  if (loading)
    return (
      <div>
        <Skeleton variant="rectangular" width={"100%"} height={750} />
      </div>
    );

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className={`md:h-[725px] bg-cover object-contain aspect-auto bg-center flex-col-reverse flex md:flex-row px-[5%] md:items-center justify-between py-[20%] gap-10 md:gap-0`}
    >
      <div className="w-full md:w-[40%] lg:flex flex-col gap-8 justify-center">
        {firstElement}
      </div>
      <div className="w-full md:w-fit">{secondElement}</div>
    </div>
  );
};

export default GlobalBanner;
