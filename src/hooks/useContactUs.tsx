import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { HTTPAruna } from "../services/handlerApi";
import { ContactResponse } from "../@types/Contact";

function useContactUs() {
  const [content, setContent] = useState<ContactResponse>();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const contact = {
      firstName: values.firstname,
      lastName: values.lastname,
      email: values.email,
      phone: values.phonenumber,
      message: values.message,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/contact-uses`, {
        data: contact,
      })
      .catch((e) => console.log(e));

    Swal.fire({
      icon: "success",
      title: "Terima Kasih atas saran dan masukannya!",
    });

    return setValues({
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      message: "",
    });
  };

  useEffect(() => {
    HTTPAruna.get(
      `${process.env.REACT_APP_API_URL}/contact-information?populate=*`
    ).then((data) => {
      const response: ContactResponse = data.data;
      setContent(response);
    });
  }, []);

  return {
    content,
    handleChange,
    handleSubmit,
    values,
  };
}

export default useContactUs;
