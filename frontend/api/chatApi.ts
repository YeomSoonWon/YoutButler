import axios from "axios";

const chatApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat`,
    headers:{
        "Content-Type" : "application/json",
    }
})

export default chatApi;