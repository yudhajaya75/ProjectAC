import { useEffect, useState } from "react";

import { HTTPAruna } from "../services/handlerApi";
import { CompanySliderResponse } from "../@types/CompanySlider";

function useCompanySlide() {
    const [content, setContent] = useState<CompanySliderResponse | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        HTTPAruna.get("/api/gallery-companies?populate=*")
        .then((response) => {
            const data: CompanySliderResponse = response.data;
            setContent(data);
            setLoading(false);
        })
        .catch((error: any) => {
            console.log(error, __dirname);
            setLoading(false);
            setContent(null);
        });
    }, []);

    return {
        content,
        loading,
    };
}

export default useCompanySlide;
