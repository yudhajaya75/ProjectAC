import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useTransaction from "../../hooks/useTransaction";

interface PaymentMethodSectionProps {
  index: number;
  activePage: number;
  handleNext: () => void;
  handlePrevious: () => void;
}

const PaymentMethodSection: React.FC<PaymentMethodSectionProps> = ({
  index,
  activePage,
  handlePrevious,
}) => {
  const [content, setContent] = useState<any>();
  const [contents, setContents] = useState([]);
  const location = useLocation();
  const { email, setEmail, isFetchingData, isLoggedIn, handleNext } =
    useTransaction();
  const id = location.state?.id;
  const title = location.state?.title;
  const price = location.state?.price;

  useEffect(() => {
    if (index === 0) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/product-variants/${id}?populate=*`,
          {
            method: "GET",
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setContent(response.data.data);
        });
    }
  }, [index, id]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/payments`)
      .then((response) => {
        setContents(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("test", content);

  if (index !== 2) return null;

  return (
    <div>
      <div className="p-5">
        <div className="pb-5 -mt-8">
          <label htmlFor="" className="">
            Pilih Metode Pembayaran
          </label>
        </div>
        <div className="flex flex-col h-[400px]">
          <select
            name="transfer"
            id="transfer"
            className="p-2 2xl:w-[400px] sm-440:text-[10px] 2xl:text-[14px] 
            sm-440:w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]"
          >
            <option value="" disabled>
              Select an option
            </option>
            {contents.map((item: any) => (
              <option key={item.id}>{item.attributes.PaymentsBank}</option>
            ))}
          </select>
          <input type="file" name="file" id="file" />
        </div>
      </div>
      <div className="float-right">
        <div className="border-solid border-2 border-[#79ABFF] mt-[-400px] w-[460px] h-[354px]">
          <div className="mx-5 my-5">
            <p className="text-[18px] text-[#79ABFF] font-bold">
              Paket {title ? title : "bukan id nya"}
            </p>
            <br />
            <p className="text-[16px] text-[#002157]">
              SubTotal{" "}
              <p className="float-right">
                Rp.{price ? price : "Harga tidak tersedia"}
              </p>
            </p>
            <div className="border-b-2 border-slate-950"></div>
            <div className="my-2 text-[#002157]">
              <p className="text-[16px] font-bold">
                Total{" "}
                <p className="float-right">
                  Rp.{price ? price : "Harga tidak tersedia"}
                </p>
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        <button
          onClick={handleNext}
          className="bg-[#002157] ml-[743px] left-20 relative bottom-10 text-white px-4 py-1 rounded-lg"
        >
          Done
        </button>
        <button
          onClick={handlePrevious}
          className="border-2 border-[#002157] relative bottom-[80px] left-[30px] text-[#002157] px-5 py-1 rounded-lg"
        >
          &#129056; Previous
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodSection;
