import { useState } from "react";

export const useSearch = () => {
    const [username, setUsername] = useState("");
    console.log(username);

    const handleInputChange = (event) => {
        setUsername(event.target.value);
    };

    return {
        username,
        handleInputChange
    };
};