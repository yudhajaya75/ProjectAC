import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useGetLogoutLogout = () => {
  const router = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("email");
      localStorage.removeItem("id");
      localStorage.removeItem("product_id");

      setIsLoggingOut(true);

      // const response = await fetch(`${process.env.REACT_APP_LOGOUT_URL}`, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     credentials: 'include',
      // });

      // if (response.ok) {
      router("/login");
      // } else {
      //     console.error('Logout failed:', response);
      // }
      setIsLoggingOut(false);
    } catch (error) {
      console.error("Logout error:", error);
      setIsLoggingOut(false);
    }
  };

  return {
    isLoggingOut,
    logout,
  };
};

export default useGetLogoutLogout;
