import { useNavigate } from "react-router-dom";

import GlobalLayout from "../../layouts/GlobalLayout";
import { getTokenAuth } from "../../helper/helper";
import Swal from "sweetalert2";
import FormPayment from "../../components/payment/payment-v2/formPayment";

const Payment2 = (props: { email: string }) => {
  const loggedIn = getTokenAuth();
  const navigation = useNavigate();

  if (!loggedIn) {
    Swal.fire({
      title: "Please login!",
      icon: "info",
    });
    navigation("/login");
    window.location.reload()
  }

  return (
    <>
      <GlobalLayout>
        <FormPayment />
      </GlobalLayout>
    </>
  );
};

export default Payment2;
