import { useEffect, useState } from "react";
import axios from "axios";
import { handlerApi } from "../services/handlerApi";

const useGetUserData = () => {
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isFetchingData, setIsFetchingData] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await handlerApi("/users");
            setEmail(res.email);
            setIsLoggedIn(true);
            setIsFetchingData(false);
        } catch (error) {
            console.error("Error:", error);
            setIsFetchingData(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(email);

    return {
        email,
        setEmail,
        isFetchingData,
        isLoggedIn,
        isLoading,
    };
};

export default useGetUserData;