import axios, {Axios, AxiosRequestConfig} from "axios";
import User from "@/types/User";

// 비로그인 시 가능한 로직
const PublicUserApi:Axios = axios.create({
    baseURL: `${process.env.API_BASE_URL}/api/users`,
    headers:{
        "Content-Type" : "application/json",
    }
});

// 로그인 시 가능한 로직
const PrivateUserApi:Axios = axios.create({
    baseURL: `${process.env.API_BASE_URL}/api/users`,
    headers:{
        "Content-Type" : "application/json",
    }
});

const authApi = {
    modify : async(userId:Number, modifyData:any) =>{
        // TODO : accessToken과 변경 데이터(자산, 월급, 나이, 성별,)를 이용한 유저 정보 수정 로직
        let res = await PrivateUserApi.patch(`/modify/${userId}`,{
            ...modifyData
        });
        return res;
    }
}

export default authApi;