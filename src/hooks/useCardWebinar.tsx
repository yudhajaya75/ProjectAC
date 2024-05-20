import { useEffect, useState } from "react";
import { HTTPAruna } from "../services/handlerApi";
import { WebinarResponse } from "../@types/Webinar";

function useCardWebinar(page?: number, limit?: number) {
  const [content, setContent] = useState<WebinarResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(page || 1);
  const [paginationMeta, setPaginationMeta] = useState<{
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  } | null>(null);

  useEffect(() => {
    HTTPAruna.get(
      `api/products?populate=*&filters[category][$eq]=Webinar&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    ).then((res) => {
      setContent(res.data);
      setPaginationMeta(res.data.meta.pagination);
      setLoading(false);
    });
  }, [currentPage, limit]);

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
}

export default useCardWebinar;
