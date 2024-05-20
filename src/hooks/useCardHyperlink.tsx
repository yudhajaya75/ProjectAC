import { useEffect, useState } from "react";
import { HyperLink } from "../@types/HyperLink";

function useCardHyperlink() {
  const [hyperlink, setHyperLinks] = useState<HyperLink[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/hyperlinks?populate=*`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHyperLinks(data.data);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    hyperlink,
    loading,
  };
}

export default useCardHyperlink;
