import { useState, useEffect } from "react";
import axios from "axios";

const apiAddress = "https://api.github.com/users/";

export const useUserDetailsApi = (username) => {
    const [apiObject, setApiObject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apiSuccess, setApiSuccess] = useState(true);

    useEffect(() => {
        const callingApi = async () => {
            try {
                const response = await axios.get(
                    apiAddress + username
                );
                setApiObject(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(true);
                setApiSuccess(false);
            }
        };

        callingApi();
    }, [username]);

    return { apiObject, loading, apiSuccess };
};