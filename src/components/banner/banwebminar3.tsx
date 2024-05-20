import { Skeleton } from "@mui/material";
import { useState } from "react";

const Banner = (props: any) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 500);
  return (
    <div className="w-full mt-10">
      {loading ? (
        <div className="relative">
          <Skeleton variant="rectangular" className="w-full" height={500} />
        </div>
      ) : (
        <img
          className="w-full h-full object-contain"
          src={props.image}
          alt=""
        />
      )}
    </div>
  );
};

export default Banner;
