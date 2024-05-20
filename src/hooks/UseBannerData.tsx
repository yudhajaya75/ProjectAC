import { useEffect, useState } from "react";

function useBannerData() {
  const [content, setContent] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/konseling?populate=*`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
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

export default useBannerData;
