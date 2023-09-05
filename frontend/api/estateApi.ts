import axios from "axios";

const estateApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/house`,
    headers:{
        "Content-Type" : "application/json",
    }
});

export default estateApi;