import React, { useState } from "react";
import { HTTPAruna } from "../../../services/handlerApi";
import Swal from "sweetalert2";

const UploadBukti = ({
  strapiRef,
  field,
  transectionId,
  accept,
  btnText,
  complete,
}: {
  strapiRef: string;
  field: string;
  transectionId: string;
  accept?: string;
  btnText?: string;
  complete: () => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const formData = new FormData();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const postPayment = async () => {
    try {
      if (!file) return setError("File tidak boleh kosong");
      if (!transectionId)
        return console.log("transectionId tidak boleh kosong");

      if (file && transectionId) {
        formData.append("ref", strapiRef);
        formData.append("refId", transectionId);
        formData.append("field", field);
        formData.append("files", file);
        setError("");

        await HTTPAruna.post(`/api/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setFile(null);
        Swal.fire("Good job!", "File berhasil diunggah.", "success");
        window.location.reload();
        complete();
      }
    } catch (error) {
      Swal.fire("Oops...", "Terjadi kesalahan", "error");
    }
  };

  return (
    <div className="">
      <input
        accept={accept}
        type="file"
        name="file"
        id="file"
        onChange={handleFileChange}
      />
      <div className="my-5">
        <button onClick={postPayment} className="btn text-base">
          {btnText ? btnText : "Kirim"}
        </button>
        <button onClick={() => setFile(null)} className="ml-8 btn text-base">
          Clear
        </button>
        {error && <p className="text-red-400">{error}</p>}
      </div>
    </div>
  );
};

export default UploadBukti;
