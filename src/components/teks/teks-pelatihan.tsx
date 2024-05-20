import { Skeleton } from "@mui/material";
import React, { useState } from "react";

const Teks = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 500);
  return (
    <div className="p-10 font-sans ">
      {loading ? (
        <div className="">
          <Skeleton variant="rectangular" width={1600} height={300} />
        </div>
      ) : (
        <div>
          <h5 className="font-bold text-center sm:text-left text-xl md:text-4xl text-[#074288]">
            Ikut pelatihan yang kami sediakan untuk anda
          </h5>
          <p className="pt-10 lg:text-[24px] sm-440:text-[18px] text-justify">
            <a
              className="text-[#074288] hover:text-[#6d99d0]"
              href="/"
              target="/"
              rel="/"
            >
              Berisi penjelasan disini...{" "}
            </a>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            suscipit iure asperiores quaerat rerum earum assumenda deleniti
            delectus nam excepturi.
          </p>
        </div>
      )}
    </div>
  );
};

export default Teks;
