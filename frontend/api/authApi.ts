import axios, {Axios, AxiosRequestConfig} from "axios";
import User from "@/types/User";

// 비로그인 시 가능한 로직
const PublicAuthApi:Axios = axios.create({
    baseURL: `${process.env.API_BASE_URL}/members`,
    headers:{
        "Content-Type" : "application/json",
    }
});

// 로그인 시 가능한 로직
const PrivateAuthApi:Axios = axios.create({
    baseURL: `${process.env.API_BASE_URL}/members`,
    headers:{
        "Content-Type" : "application/json",
    }
});

const authApi = {
    getUser : async(accessToken:String, provider:String)=>{
        console.log("accessToken : "+accessToken+" /provider : "+provider.toUpperCase());
        // TODO : accessToken과 provider를 이용한 당신의집사 서버에서 유저 가져오기/유저 추가 로직
        // 리턴 형식 User로 변경 필요

        let res = await PublicAuthApi.post("signin", {
            socialType : provider.toUpperCase(),
            token : accessToken
        });

        // console.log("res data : ",res.data);
        return res;
    },

    signUp : async()=>{
        return "signup result";
    },
}

export default authApi;