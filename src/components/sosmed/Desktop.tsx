import Sosmed from "./sosmed";
import usePersonalCard from "../../hooks/usePersonalCard";
import { Skeleton } from "@mui/material";
import "./sosmed.css";

const Desktop = () => {
  const { personalcard, loading } = usePersonalCard();

  return (
    <div className="px-5 lg:px-24 mt-20">
      {loading ? (
        <div className="grid md:grid-cols-3 gap-5">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-full shadow-lg rounded-md">
              <Skeleton variant="rectangular" width="100%" height={180} />
              <div className="w-full p-6">
                <Skeleton variant="text" width="100%" height={32} />
                <Skeleton variant="text" width="100%" height={72} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-5 gap-y-5">
          {!personalcard ? (
            <div>No Data</div>
          ) : (
            personalcard.map((res, index: number) => (
              <div key={index}>
                <Sosmed
                  name={res.attributes.name}
                  subtitle={res.attributes.title}
                  bio={res.attributes.body}
                  image={`${res.attributes.image.data.attributes.url}`}
                  link1={res.attributes.medsos_1}
                  link2={res.attributes.medsos_2}
                />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Desktop;
