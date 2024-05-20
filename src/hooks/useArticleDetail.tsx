import { useState, useEffect } from "react";
import { HTTPAruna } from "../services/handlerApi";
import { Article } from "../@types/Article";

const useArticleDetail = (slug: string) => {
  const [content, setContent] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);

  if (!slug) console.log("Please provide a slug");

  useEffect(() => {
    HTTPAruna.get(
      `/api/articel-cards?populate=*&filters[slug][$eq]=${slug}`
    ).then((response) => {
      const datas: Article = response.data.data[0];
      if (datas) {
        HTTPAruna.put(`/api/articel-cards/${datas.id}`, {
          data: {
            eye: datas.attributes.eye
              ? String(Number(datas.attributes.eye) + 1)
              : String(1),
          },
        });
        setContent(datas);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("ERROR", __dirname);
      }
    });
  }, [slug]);

  return { content, loading };
};

export default useArticleDetail;
