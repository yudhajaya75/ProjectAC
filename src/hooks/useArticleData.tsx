import { useEffect, useState } from "react";
import { Article } from "../@types/Article";

function useArticleData() {
  const [article, setArticle] = useState<Article[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/articel-cards?populate=*&sort[0]=createdAt:desc`, {
      method: "GET",
      headers: {
        Authorization: "bearer " + process.env.REACT_APP_ADMIN_TOKEN,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setArticle(data.data);
        setTimeout(() => setLoading(false), 500);
      });
  }, []);

  return {
    article,
    loading,
  };
}

export default useArticleData;
