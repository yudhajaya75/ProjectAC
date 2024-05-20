import { Skeleton } from "@mui/material";
import { useState } from "react";

const Teks = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 500);
  return (
    <div className="p-10 font-sans relative bottom-[0px]">
      {loading ? (
        <div className="relative top-[0px] right-10">
          <Skeleton variant="rectangular" width={"100%"} height={300} />
        </div>
      ) : (
        <div>
          <h5 className="font-bold text-center sm:text-left lg:text-4xl sm-440:text-2xl text-[#074288]">
            Layanan konseling individu pasangan & keluarga
          </h5>
          <p className="pt-10 lg:text-[24px] sm-440:text-[18px]">
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
