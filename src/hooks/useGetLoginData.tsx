import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useGetLoginData = (props: { setEmail: (email: string) => void }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    // const response = await fetch(`${process.env.REACT_APP_LOGIN_URL}`, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     credentials: 'include',
    //     body: JSON.stringify({
    //         email,
    //         password
    //     })
    // });
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/local`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    console.log(`${process.env.REACT_APP_API_URL}/auth/local`);

    setIsSubmitting(false);

    if (response.status === 400) {
      Swal.fire({
        icon: "error",
        title: "Email atau Password salah",
      });
      setShowAlert(true);
      return;
    } else if (response.status === 201) {
      router("/home");
    }

    let body = await response.json();
    props.setEmail(email);
    localStorage.setItem("token", body.token);
  };

  return {
    passwordVisible,
    handleTogglePassword,
    email,
    setEmail,
    password,
    setPassword,
    showAlert,
    setShowAlert,
    isSubmitting,
    submit,
  };
};

export default useGetLoginData;
