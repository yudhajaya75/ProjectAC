import { useState } from "react";
import { ITransaction } from "../../@types/Transaction";
import Image from "../global/Image";
import ModalSection from "./profile/modal";
import Button from "../button/Button";
import { formatRupiah } from "../../helper/currencyFormatter";

type Props = {
  detail: ITransaction;
};

const HistoryCard = ({ detail }: Props) => {
  const [open, setOpen] = useState(false);

  const Catatan = () => {
    if (
      detail.attributes.paymentReceiptImage?.data !== null &&
      detail.attributes.payment.statusPayment !== "paid"
    ) {
      return (
        <div>
          <hr></hr>
          <p>Catatan : </p>
          <p>Pembelian masih dalam proses, mohon tunggu atau hubungi CS</p>
        </div>
      );
    }
    return <></>;
  };

  return (
    <article className="py-5 border-b grid gap-2">
      <h3 className="font-bold text-3xl">
        {detail.attributes &&
          detail.attributes.product_variant.data.attributes.title}
      </h3>
      <p>Transaction ID: {detail.id}</p>
      {detail.attributes.paymentReceiptImage.data && (
        <div>
          <p className="font-bold">Bukti Pembayaran</p>
          <Image
            customClass="w-full h-[280px] object-none "
            src={detail.attributes.paymentReceiptImage.data.attributes.url}
          />
        </div>
      )}
      <p>
        Status Pembayaran:{" "}
        <span
          className={`p-1 inline-block mt-5 rounded-xl ${
            detail.attributes.payment.statusPayment === "paid"
              ? "bg-green-500"
              : "bg-yellow-500"
          }`}
        >
          {detail.attributes.payment.statusPayment}
        </span>
      </p>
      <p>
        Dibuat pada tanggal:{" "}
        {new Date(detail.attributes.createdAt).toDateString()}
      </p>
      <p>Total Pesanan: {formatRupiah(detail.attributes.payment.totalPrice)}</p>
      {<Catatan />}
      {detail.attributes.payment.statusPayment === "paid" ? (
        <p
          className="py-5 bg-gray-300 rounded-md px-2"
          dangerouslySetInnerHTML={{
            __html: detail.attributes.product_variant.data.attributes.access,
          }}
        ></p>
      ) : (
        <Button
          action={() => {
            setOpen(true);
          }}
        >
          Upload Bukti
        </Button>
      )}
      <ModalSection
        detail={detail}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        transactionId={String(detail.id)}
      />
    </article>
  );
};

export default HistoryCard;
