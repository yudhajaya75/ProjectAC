import { Skeleton } from "@mui/material";
import { useState } from "react";

type Props = {
  title: string;
  body: string;
}

const Teks = ({title,body}: Props) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 500);

  return (
    <>
      <div className="p-10 font-sans">
        {loading ? (
          <div className="relative top-[100px] right-[50px]">
            <Skeleton variant="rectangular" width={1600} height={300} />
          </div>
        ) : (
          <div>
            <h5 className="font-bold text-center sm:text-left text-4xl sm:text-3xl sm-440:text-2xl text-[#074288]">
              {title}
            </h5>
            <p className="mt-10 text-justify text-[#5b5b5b]">
              {body}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Teks;
