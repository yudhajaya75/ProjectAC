import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useGetLogout = () => {
  const router = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const logout = async () => {
    setIsLoggingOut(true);

    // Send a request to the logout endpoint

    // Clear the JWT token from local storage
    localStorage.removeItem("token");
    router("/login");

    // Redirect to the login page

    setIsLoggingOut(false);
  };

  return {
    isLoggingOut,
    logout,
  };
};

export default useGetLogout;