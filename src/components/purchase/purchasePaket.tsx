import { useNavigate } from "react-router-dom";
import Image from "../global/Image";

type Props = {
  accountEmail?: string;
  isPopular?: boolean;
  id?: number;
  feature?: { id: number; feature: string }[];
  title?: string;
  content?: string;
  price?: number;
  paket?: boolean;
};

const PurchasePaket = (props: Props) => {
  const isPopular = props.isPopular;
  const router = useNavigate();
  const accountEmail = "";

  const handlePesanSekarang = () => {
    const paymentData = {
      id: props.id,
      title: props.title,
      price: props.price,
      features: props.feature,
    };

    if (accountEmail !== "") {
      router(`/login`);
    } else {
      props.paket
        ? router("/coming-soon", { state: paymentData })
        : router(`/payment`, { state: paymentData });
    }
  };

  return (
    <div
      className={`w-full p-3 lg:px-10 lg:py-6 rounded-md text-[16px] font-bold mb-auto ${
        isPopular ? "bg-[#1D3A69] text-white" : "bg-white text-[#103D72]"
      }`}
      style={{ boxShadow: "0px 0px 10px -5px rgba(0, 0, 0, 0.75)" }}
    >
      <h3 className="lg:text-[25px] text-base font-bold">
        {props.title ? props.title : "Insert Your Title"}
      </h3>
      <p
        className="text-[#BFBFBF] pt-1 text-[14px]"
        dangerouslySetInnerHTML={{
          __html: props.content ? props.content : "Insert Body Content",
        }}
      ></p>
      <p className="text-[16px] font-bold pt-2">Mulai Dari</p>
      <p className="text-3xl lg:text-[48px]">Rp.{props.price}</p>
      <div className="pt-5 font-bold">
        <button
          onClick={handlePesanSekarang}
          className="bg-[#F3440D] rounded-lg text-white w-full py-3 hover:bg-[#ef592b]"
        >
          Daftar sekarang
        </button>
      </div>
      <p className="lg:text-[20px] py-7">Fitur :</p>
      {props.feature &&
        props.feature.length > 0 &&
        props.feature.map((feature, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Image
              isExternal
              src="../images/ceklis.webp"
              customClass="h-full"
              alt={feature.feature}
            />
            <p>{feature.feature}</p>
          </div>
        ))}
    </div>
  );
};

export default PurchasePaket;
