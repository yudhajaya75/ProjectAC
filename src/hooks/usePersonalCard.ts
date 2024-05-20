import { useEffect, useState } from "react";
import { PersonalCard } from "../@types/PersonalCard";

const usePersonalCard = () => {
  const [personalcard, setPersonalCard] = useState<PersonalCard[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/personal-cards?populate=*`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPersonalCard(data.data);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return { personalcard, loading };
};

export default usePersonalCard;
