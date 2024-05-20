import { useEffect, useState } from "react";

import { HTTPAruna } from "../services/handlerApi";
import { PelatihanResponse } from "../@types/Pelatihan";

function useCardPelatihan(
  category?: "Pelatihan" | "Konseling" | "Konsultasi" | "Webinar" | "Paket",
  page?: number,
  limit?: number
) {
  const [content, setContent] = useState<PelatihanResponse | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(page || 1);
  const [paginationMeta, setPaginationMeta] = useState<{
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  } | null>(null);

  useEffect(() => {
    HTTPAruna.get(
      `/api/products?populate[0]=image&populate[1]=product_variants.features&populate[2]=webinar&filters[category][$eq]=${
        category ? category : "Pelatihan"
      }&pagination[page]=${currentPage}&pagination[pageSize]=${limit}`
    ).then((response) => {
      const data: PelatihanResponse = response.data;
      if (data.data.length < 0) {
        setError("No Content");
      }
      setContent(data);
      setPaginationMeta(response.data.meta.pagination);
      setLoading(false);
    });
  }, [category, currentPage, limit]);

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
    error,
    currentPage,
    paginationMeta,
    handlePrevClick,
    handleNextClick,
  };
}

export default useCardPelatihan;
