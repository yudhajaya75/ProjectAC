import { useEffect, useState } from "react";

function useBannerHome() {
  const [banner, setBanner] = useState<any[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/banner-homes?populate=*`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBanner(data.data);
        setTimeout(() => setLoading(false), 500);
      });
  }, []);

  return {
    banner,
    loading,
  };
}

export default useBannerHome;
