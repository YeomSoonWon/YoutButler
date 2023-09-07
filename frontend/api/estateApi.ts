import {Axios, AxiosRequestConfig} from "axios";

const publicEstateApi:Axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/house`,
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