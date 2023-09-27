import axios, {Axios, AxiosRequestConfig} from "axios";

const PublicChatApi:Axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/chats`,
    headers:{
        "Content-Type" : "application/json",
    }
});

const chatApi = {
    getChat : async(userData : any|null, aptId : number) =>{
        if(!userData) return;
        let res = PublicChatApi.get("",{
            params : {
                apt_num:aptId
            },
            headers : {
                Authorization : `Bearer ${userData?.accessToken}`
            }
        });

        return res;
    }
}

export default chatApi;