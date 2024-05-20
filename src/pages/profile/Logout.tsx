import { useEffect } from "react";
import { useNavigate } from "react-router";

import useGetLogoutLogout from "../../hooks/useGetLogoutData";

const Logout = () => {
  const { logout } = useGetLogoutLogout();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  });

  return <div>Logout...</div>;
};

export default Logout;
