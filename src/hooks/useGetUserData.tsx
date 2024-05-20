import { useEffect, useState } from "react";
import { HTTPAruna } from "../services/handlerApi";

const useGetUserData = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await HTTPAruna.get(`api/users`);
      setEmail(response.data.email);
      setIsLoading(false);
      setIsLoggedIn(true);
      setIsFetchingData(false);
    } catch (error) {
      console.error("Error:", error);
      setIsFetchingData(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return {
    email,
    setEmail,
    isFetchingData,
    isLoggedIn,
    isLoading,
  };
};

export default useGetUserData;
