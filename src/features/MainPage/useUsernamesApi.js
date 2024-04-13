import { useState, useEffect } from "react";
import axios from "axios";

const apiAddress = "https://api.github.com/search/users?q=";

export const useUsernamesApi = (username) => {
    const [usernamesData, setUsernamesData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [apiSuccess, setApiSuccess] = useState(undefined);
    const [apiError, setApiError] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (username) {
            setLoading(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(async () => {
                try {
                    const response = await axios.get(apiAddress + username);
                    setUsernamesData(response.data);
                    setLoading(false);
                    setApiSuccess(true);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                    setApiSuccess(false);
                    setApiError(true);
                }
            }, 1000);
        }
        return () => clearTimeout(timeoutId);
    }, [username]);

    return {
        usernamesData,
        loading,
        apiSuccess,
        apiError
    };
};
