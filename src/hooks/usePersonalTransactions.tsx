import { useEffect, useState } from "react";
import { HTTPAruna } from "../services/handlerApi";
import { TransactionResponse } from "../@types/Transaction";

const usePersonalTransactions = (
  userEmail: string,
  currentPage: number = 1,
  limit: number = 25
) => {
  const [content, setContent] = useState<TransactionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    HTTPAruna.get(
      `api/transactions?sort=createdAt:desc&filters[users][email][$eq]=${userEmail}&pagination[page]=${currentPage}&pagination[pageSize]=${limit}&populate[0]=product_variant.features&populate[1]=payment.payment&populate[2]=paymentReceiptImage`
    )
      .then((res) => {
        const datas: TransactionResponse = res.data;
        if (datas.meta.pagination.total === 0)
          setError(`No transaction found for ${userEmail}`);
        setContent(datas);
      })
      .catch((err) => {
        setError("Error getting transactions: " + err);
      });
  }, [userEmail, currentPage, limit]);

  return { content, error };
};

export default usePersonalTransactions;
