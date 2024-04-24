import { useState, useEffect } from "react";
import axios from "axios";

export const useRepositoriesApi = (userRepos) => {
    const [apiObject, setApiObject] = useState([]);
    const [loading, setLoading] = useState(true);
    const [apiSuccess, setApiSuccess] = useState(true);

    useEffect(() => {
        if (!userRepos) {
            return;
        }

        const callingApi = async () => {
            try {
                const response = await axios.get(userRepos);
                setApiObject(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(true);
                setApiSuccess(false);
            }
        };

        callingApi();
    }, [userRepos]);

    return { apiObject, loading, apiSuccess };
};