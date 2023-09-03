import axios from "axios";

const financeApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/map`,
    headers:{
        "Content-Type" : "application/json",
    }
});

export default financeApi;