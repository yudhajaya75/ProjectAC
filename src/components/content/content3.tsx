import { useEffect, useState } from "react";
import { NavLinkData } from "../../assets";
import { BsEnvelopeCheck } from "react-icons/bs";
import { HTTPAruna } from "../../services/handlerApi";
import { User } from "../../@types/User";
import Button from "@mui/material/Button";
import Picture from "./profile/changePicture";

const ProfileCard = ({ accountEmail }: { accountEmail: string }) => {
  const userId = localStorage.getItem("id");
  const email = localStorage.getItem("email");
  const [data, setData] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getProfilePicture = async () => {
      try {
        const res = await HTTPAruna.get(`/api/users/${userId}?populate=*`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProfilePicture();
  }, [userId]);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="mt-10 mx-10 md:mx-20 pb-20 bg-white shadow-lg rounded-2xl">
      <img src={NavLinkData[1].img} alt={NavLinkData[1].img} />
      <div className="flex justify-center md:justify-start">
        <label htmlFor="profile-picture">
          <img
            src={
              data?.avatar
                ? `${process.env.REACT_APP_UPLOAD_URL}${data.avatar.url}`
                : NavLinkData[1].img
            }
            alt={NavLinkData[1].img}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#002157] -mt-14 md:-mt-24 ml-0 md:ml-16 cursor-pointer object-cover object-center"
          />
        </label>
      </div>
      <div className="ml-5 mt-2 leading-10">
        <Button onClick={() => handleOpenModal()}>Ganti Foto</Button>
        <BsEnvelopeCheck size={20} className="absolute mt-3" />
        <p className="ml-7">
          <span className="text-black font-[600]">Email: </span>
          <span className="text-[#6F6B7D]">{email}</span>
        </p>
      </div>
      <div className="flex gap-4 ml-5">
        <p className="text-black font-[600] text-['Montserrat'] text-[18px]">
          Member
        </p>
        <p className="w-[50px] h-[28px] rounded bg-slate-500 px-1 text-white">
          Active
        </p>
      </div>
      <Picture open={open} onClose={handleCloseModal} />
    </div>
  );
};

export default ProfileCard;
