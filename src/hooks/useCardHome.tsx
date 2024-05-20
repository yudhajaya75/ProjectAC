import { useEffect, useState } from "react";
import { CardHome } from "../@types/CardHome";

function useCardHome() {
  const [cardhome, setCardHome] = useState<CardHome[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/slider-section-infos?populate=*`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCardHome(data.data);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return {
    cardhome,
    loading,
  };
}

export default useCardHome;
