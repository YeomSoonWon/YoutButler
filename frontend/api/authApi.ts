import axios, {Axios, AxiosRequestConfig} from "axios";
import User from "@/types/User";

// 비로그인 시 가능한 로직
const PublicAuthApi:Axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/members`,
    headers:{
        "Content-Type" : "application/json",
    }
});

// 로그인 시 가능한 로직
const PrivateAuthApi:Axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/members`,
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

    // authorization 추가 필요 : 우리 서버에서 준 accessToken 사용
    signUp : async(userData:any | null, age:Number|null, houses:String|null, budget:Number|null, jasan:Number|null, credit:Number|null)=>{
        console.log({
            identifier : userData?.identifier,
            socialType : userData?.socialType,
            email : userData?.email,
            nickname : userData?.nickname,
            age:age,
            holdingAsset:budget,
            creditRating : credit,
            monthlyAvailableAsset : jasan,
            numberOfHouses : houses.toUpperCase()
        });
        let res = await PublicAuthApi.post("signup", {
            identifier : userData?.identifier,
            socialType : userData?.socialType,
            email : userData?.email,
            nickname : userData?.nickname,
            age: age,
            holdingAsset:budget,
            creditRating : credit,
            monthlyAvailableAsset : jasan,
            numberOfHouses : houses.toUpperCase()
        });

        return res;

        // console.log("res data : ",res.data);
        return res;
        return "signup result";
    },
}

export default authApi;