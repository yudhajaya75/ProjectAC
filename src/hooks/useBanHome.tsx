import { useEffect, useState } from "react";
import { GalleryBanner } from "../@types/GalleryBanner";
import { BannerHome } from "../@types/BannerHome";

function useBanHome() {
  const [sliderhome, setSliderHome] = useState<GalleryBanner[] | null>(null);
  const [banner, setBanner] = useState<BannerHome | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(
        `${process.env.REACT_APP_API_URL}/gallery-banner-homepages?populate=*`,
        {
          method: "GET",
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
            "Content-Type": "application/json",
          },
        }
      ),
      fetch(`${process.env.REACT_APP_API_URL}/homepage?populate=*`, {
        method: "GET",
        headers: {
          Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
          "Content-Type": "application/json",
        },
      }),
    ])
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then(([galleryHome, HomePage]) => {
        setBanner(HomePage.data);
        setSliderHome(galleryHome.data);
        setTimeout(() => setLoading(false), 500);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTimeout(() => setLoading(false), 500);
      });
  }, []);

  return {
    sliderhome,
    banner,
    loading,
  };
}

export default useBanHome;
