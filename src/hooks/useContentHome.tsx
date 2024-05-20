import { useEffect, useState } from "react";
import { GalleryTentangKonseling } from "../@types/GalleryTentangKonseling";

function useContentHome() {
  const [tentangkonseling, setTentangKonseling] =
    useState<GalleryTentangKonseling[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/gallery-tentang-konselings?populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTentangKonseling(data.data);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return {
    tentangkonseling,
    loading,
  };
}

export default useContentHome;
