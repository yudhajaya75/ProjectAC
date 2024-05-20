import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Payment } from "../../../@types/Payment";

const PaymentMethod: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const title = location.state?.title;
  const price = location.state?.price;
  const id = location.state?.id;
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [contents, setContents] = useState<Payment[]>([]);
  const [providerAcc, setProviderAcc] = useState<string>("");
  const [payment, setPayment] = useState<number>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/payments?populate=*`, {
        method: "GET",
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setContents(response.data.data);
      });
  }, []);

  const transaction = async () => {
    if (selectedOption === "") {
      return Swal.fire("Oops...", "Pilih metode pembayaran", "error");
    }
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, create the transaction!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const dataToSend = {
          data: {
            users: {
              id: localStorage.getItem("id"),
            },
            orders: [
              {
                product: id,
                amount: price.toString(),
              },
            ],
            payment: {
              payment: payment,
              statusPayment: "Unpaid",
              totalPrice: price.toString(),
            },
            product_variant: id,
          },
        };
        try {
          await axios.post(
            `${process.env.REACT_APP_API_URL}/transactions?populate=*`,
            dataToSend,
            {
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_ADMIN_TOKEN}`,
              },
            }
          );
          Swal.fire(
            "Good job!",
            "Transaksi berhasil diproses, lanjutkan di riwayat profile, untuk upload bukti pembayaran",
            "success"
          );
          navigation("/profile");
        } catch (error) {
          Swal.fire("Oops...", "Terjadi kesalahan", "error");
        }
      }
    });
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Cari gambar yang sesuai dengan pilihan
    const selectedContent = contents.find(
      (item) => item.attributes.provider === selectedValue
    );

    setPayment(selectedContent?.id);

    if (selectedContent) {
      setImageURL(selectedContent.attributes.qrisScan.data.attributes.url);
      setProviderAcc(selectedContent.attributes.providerAccount);
    } else {
      setImageURL(null);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between mb-20">
      <div className="">
        <div className="mt-10 md:mt-0">
          <label htmlFor="" className="">
            Pilih Metode Pembayaran
          </label>
        </div>
        <div className="">
          <select
            name="transfer"
            id="transfer"
            value={selectedOption}
            onChange={handleOptionChange}
            className="p-2 xl:w-[400px] text-[10px] xl:text-[14px] 
            w-[160px] outline-none no-underline rounded-md border border-[#8D8D8D]"
          >
            <option value="" disabled>
              Select an option
            </option>
            {contents.map((item: any) => (
              <option key={item.id}>{item.attributes.provider}</option>
            ))}
          </select>
          {imageURL && (
            <div className="w-[200px] h-auto mt-8">
              <img
                src={`${process.env.REACT_APP_UPLOAD_URL}${imageURL}`}
                alt={selectedOption}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          {providerAcc && (
            <div className="w-[200px] h-auto">
              <p className="text-[20px] font-bold">No. Rekening</p>
              <p className="text-[20px] font-semibold">{providerAcc}</p>
            </div>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <div className="border-solid border-2 border-[#79ABFF] w-full h-[354px]">
          <div className="mx-5 my-5">
            <p className="text-[18px] text-[#79ABFF] font-bold">
              Paket {title ? title : "bukan id nya"}
            </p>
            <br />
            <div className="text-[16px] text-[#002157]">
              SubTotal{" "}
              <p className="">Rp.{price ? price : "Harga tidak tersedia"}</p>
            </div>
            <div className="border-b-2 border-slate-950"></div>
            <div className="my-2 text-[#002157]">
              <div className="text-[16px] font-bold">
                Total{" "}
                <span className="">
                  Rp.{price ? price : "Harga tidak tersedia"}
                </span>
              </div>
              <br />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={transaction}
          className="bg-[#002157] my-5 text-white px-4 py-1 rounded-lg"
        >
          buat transaksi
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
