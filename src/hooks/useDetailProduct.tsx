import { useState, useEffect } from "react";
import { IPelatihan } from "../@types/Pelatihan";
import { HTTPAruna } from "../services/handlerApi";

const useDetailProduct = (
  slug: string,
  contentType:
    | "Pelatihan"
    | "Layanan"
    | "Konsultasi"
    | "Webinar"
    | "Paket"
    | "Konseling"
) => {
  const [content, setContent] = useState<IPelatihan | null>(null);
  const [loading, setLoading] = useState(false);

  if (!slug) console.log("Please provide a slug");

  useEffect(() => {
    HTTPAruna.get(
      `/api/products?populate[0]=image&populate[1]=product_variants.features&populate[2]=webinar&filters[slug][$eq]=${slug}`
    ).then((response) => {
      const datas: IPelatihan = response.data.data[0];
      if (datas) {
        setContent(datas);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("ERROR", __dirname);
      }
    });
  }, [slug]);

  return { content, contentType, loading };
};

export default useDetailProduct;
