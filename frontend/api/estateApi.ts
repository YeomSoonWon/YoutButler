import {Axios, AxiosRequestConfig} from "axios";

// 비로그인 시 가능한 로직
const publicEstateApi:Axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/estate`,
    headers:{
        "Content-Type" : "application/json",
    }
});

// 로그인 시 가능한 로직
const privateEstateApi:Axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/estate`,
    headers:{
        "Content-Type" : "application/json",
    }
});

const estateApi = {
    getEstate : async()=>{
        // let res = publicEstateApi.get();
        return "getEstate result";
    },

    likeEstate : async(token:String)=>{
        // let res = publicEstateApi.get();
        return "getEstate result";
    },
}

export default estateApi;