import axios from "axios";

const userApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/user`,
    headers:{
        "Content-Type" : "application/json",
    }
})

export default userApi;