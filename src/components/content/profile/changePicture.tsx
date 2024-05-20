import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { style } from "./style";
import UploadBukti from "../../payment/payment-v2/UploadBukti";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Picture: React.FC<Props> = ({ open, onClose }) => {
  const userId = localStorage.getItem("id");
  const handleUploadComplete = () => {
    onClose();
  };
  return (
    <Modal
      className="-z-10"
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className="">
            <div className="my-6">
              <UploadBukti
                complete={handleUploadComplete}
                accept="image/*"
                strapiRef={"plugin::users-permissions.user"}
                field={"avatar"}
                transectionId={userId || ""}
                btnText="Ganti Foto Profil"
              />
            </div>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
      </Box>
    </Modal>
  );
};

export default Picture;
