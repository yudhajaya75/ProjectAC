import { Link } from "react-router-dom";

const Purchase = (props: any) => {
  const isPopular = props.isPopular;

  return (
    <>
      <div
        className={`mx-12 lg:mx-0 md:w-[430px] xl:w-[430px] h-[740px] rounded-md mb-[100px] ${
          isPopular ? "bg-[#1D3A69]" : "bg-white"
        }`}
        style={{ boxShadow: "0px 0px 10px -5px rgba(0, 0, 0, 0.75)" }}
      >
        <div
          className={`text-[16px] p-10 font-bold ${
            isPopular ? "text-white" : "text-[#103D72]"
          }`}
        >
          <p className="text-[25px] font-bold pt-2">{props.title}</p>
          <p
            className="text-[#BFBFBF] pt-1 text-[14px]"
            dangerouslySetInnerHTML={{ __html: props.content }}
          ></p>
          <p className="text-[16px] font-bold pt-2">Mulai Dari</p>
          <p className="text-[48px]">Rp.{props.price}</p>
          <div className="pt-5 font-bold">
            <Link
              to={`${localStorage.getItem("token") ? "/payment" : "/login"}`}
              state={{
                id: props.id,
                title: props.title,
                price: props.price,
                features: props.feature,
              }}
            >
              <button className="bg-[#F3440D] rounded-lg text-white py-2 px-[110px] hover:bg-[#ef592b]">
                Daftar sekarang
              </button>
            </Link>
          </div>
          <p className="text-[20px] pt-7 pb-7">Fitur :</p>
          {props.features.map((feature: any, index: number) => (
            <div key={index} className="flex py-2">
              <img src="../images/ceklis.webp" className="w-[20px]" alt="" />
              <p className="text-[20px] ml-2">{feature.feature}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Purchase;
