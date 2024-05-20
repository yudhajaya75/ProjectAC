import axios from "axios";
import { useEffect, useState } from "react";
import { Questions } from "../@types/Questions";

function useQuestions() {
  const [questions, setQuestions] = useState<Questions[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/questions?populate=*`, {
        method: "GET",
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setQuestions(response.data.data);
        setTimeout(() => setLoading(false), 500);
      });
  }, []);
  return {
    questions,
    loading,
  };
}

export default useQuestions;
