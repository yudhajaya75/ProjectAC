import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { getTokenAuth } from "../helper/helper";

const useTransaction = (useremail: string = "yudha@gmail.com") => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const navigate = useState;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  console.log(process.env);

  const fetchUserData = async (accessToken: string) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/transactions?populate=*&filters[users][email][$eq]=${useremail}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.REACT_APP_ADMIN_TOKEN,
          },
          withCredentials: true,
        }
      );
      console.log("USETRANSACTION", response.data);
      setData(response.data);
      setEmail(response.data.email);
      setIsLoggedIn(true);
      setIsFetchingData(false);
    } catch (error) {
      console.error("Error:", error);
      setIsFetchingData(false);
    }
  };

  const handleNext = () => {
    Swal.fire({
      icon: "info",
      title: "Proses Pembayaran Sedang Ditindak Lanjuti, Mohon Di Tunggu",
    });

    navigate("/home");
  };

  useEffect(() => {
    const accessToken = getTokenAuth();
    if (accessToken) {
      fetchUserData(accessToken);
    } else {
      setIsFetchingData(false);
    }
    console.info("logged ", isLoggedIn);
  }, [!isLoggedIn]);

  return {
    email,
    setEmail,
    data,
    isFetchingData,
    isLoggedIn,
    isLoading,
    handleNext,
  };
};

export default useTransaction;
