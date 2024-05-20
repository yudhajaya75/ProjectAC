import { Skeleton } from "@mui/material";

import useCardHome from "../../hooks/useCardHome";
import Image from "../global/Image";

const Consultation = () => {
  const { cardhome, loading } = useCardHome();

  return (
    <>
      {loading ? (
        <div className="gap-y-5 mt-[200px] grid grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="shadow-lg rounded-md">
              <Skeleton variant="rectangular" width="100%" height={180} />
              <div className="w-full p-6">
                <Skeleton variant="text" width="100%" height={32} />
                <Skeleton variant="text" width="100%" height={72} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-10 xl:mt-[100px] ">
          <div className="p-4 w-[400px] text-center mx-auto ">
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#002157] ">
              Kenapa harus konsultasi di Konseling Satir
            </h3>
          </div>
          <div className="grid mt-20 md:grid-cols-3 gap-5 px-5 lg:px-24">
            {!cardhome ? (
              <div>No Daya</div>
            ) : (
              cardhome.map((res, index: number) => (
                <div key={index}>
                  <div className="h-[400px] shadow-lg rounded-md">
                    <Image
                      src={res?.attributes?.image?.data?.attributes?.url}
                      alt=""
                      customClass="w-full h-[180px]"
                    />
                    <div className="w-full p-6">
                      <h3 className="text-xl mb-[15px]">
                        {res.attributes.title}.
                      </h3>
                      <p className="text-lg text-start">
                        {res.attributes.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Consultation;
