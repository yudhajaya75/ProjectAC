import { useEffect, useState } from "react";
import { Paket } from "../@types/Paket";
import { HTTPAruna } from "../services/handlerApi";

function usePaket() {
  const [paket, setPaket] = useState<Paket[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    HTTPAruna.get("api/product-variants/?populate=*")
      .then((response) => {
        setPaket(response.data.data);
        setLoading(false);
      })
      .catch((error: any) => {
        console.log(error, __dirname);
      });
  }, []);

  return {
    paket,
    loading,
  };
}

export default usePaket;