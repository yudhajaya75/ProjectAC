import { useEffect, useState } from "react";
import { ArticleResponse } from "../@types/Article";
import { HTTPAruna } from "../services/handlerApi";

const useArticle = (
  query?: "Popular" | "Newest",
  page?: number,
  limit?: number
) => {
  const [content, setContent] = useState<ArticleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page || 1);
  const [paginationMeta, setPaginationMeta] = useState<{
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  } | null>(null);

  useEffect(() => {
    let strapiQuery: string;

    switch (query) {
      case "Newest":
        strapiQuery = `/articel-cards?sort=createdAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}&populate=*&sort[0]=id:desc`;
        break;
      case "Popular":
        strapiQuery = `/articel-cards?sort=eye:desc&pagination[page]=${currentPage}&pagination[pageSize]=${limit}&populate=*&sort[0]=id:desc`;
        break;
      default:
        strapiQuery = "/articel-cards?populate=*";
        break;
    }

    setLoading(true);

    HTTPAruna.get("api" + strapiQuery).then((response) => {
      const datas: ArticleResponse = response.data;
      if (datas) {
        setContent(datas);
        setLoading(false);
        setPaginationMeta(response.data.meta.pagination);
      } else {
        setLoading(false);
        console.log("ERROR", __dirname);
      }
    });
  }, [query, currentPage, limit]);

  useEffect(() => {
    if (page !== undefined) {
      setCurrentPage(page);
    }
  }, [page]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (paginationMeta && currentPage < paginationMeta.pageCount) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return {
    content,
    loading,
    currentPage,
    paginationMeta,
    handlePrevClick,
    handleNextClick,
  };
};

export default useArticle;
