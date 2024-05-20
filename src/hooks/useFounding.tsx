import { useEffect, useState } from "react";

function useFounding() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/founder-cards?populate=*`, {
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data.data);
        setTimeout(() => setLoading(false), 500);
      });
  }, []);

  return {
    content,
    loading,
  };
}

export default useFounding;
