import axios, {Axios, AxiosRequestConfig} from "axios";
import User from "@/types/User";

// interface User{
//     name:String,
//     email:String,
//     age:String,
//     gender:String,
//     account:Number,
//     salary:Number
// };

const PublicUserApi:Axios = axios.create({
    baseURL: `${process.env.API_BASE_URL}/api/user`,
    headers:{
        "Content-Type" : "application/json",
    }
});

const PrivateUserApi:Axios = axios.create({
    baseURL: `${process.env.API_BASE_URL}/api/user`,
    headers:{
        "Content-Type" : "application/json",
    }
});

const userApi = {
    getUser : async(accessToken:String, provider:String)=>{
        console.log("accessToken : "+accessToken+"provider : "+provider);
        // TODO : accessToken과 provider를 이용한 당신의집사 서버에서 유저 가져오기/유저 추가 로직
        // 리턴 형식 User로 변경 필요
        return {
            "provider" : provider,
            "accessToken" : accessToken,
        }
    },

    signUp : async()=>{
        return "signup result";
    },

    modify : async(user:User, access_token:String) =>{
        // TODO : accessToken과 변경 데이터(자산, 월급, 나이, 성별)를 이용한 유저 정보 수정 로직
        let res = await PrivateUserApi.patch("/modify",user);
        return res;
    }
}

export default userApi;