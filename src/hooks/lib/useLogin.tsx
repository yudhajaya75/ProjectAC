import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const useLogin = (props: { setEmail: (email: string) => void }) => {
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

    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Password harus lebih dari 6 karakter",
      });
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/local`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            identifier: email,
            password,
          }),
        }
      );

      setIsSubmitting(false);

      if (response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Email atau Password salah",
        });
        setShowAlert(true);
        return;
      } else if (response.status === 200) {
        const data = await response.json();
        props.setEmail(data.user.email);

        localStorage.setItem("token", data.jwt);
        localStorage.setItem("user", data.user.username);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("id", data.user.id);

        router("/home");
      } else if (response.status === 403) {
        Swal.fire({
          icon: "error",
          title: "Email tidak terdaftar",
        });
        setShowAlert(true);
        return;
      }
    } catch (error) {
      console.error("Login failed:", error);
      setIsSubmitting(false);
    }
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

export default useLogin;
