import { RoomSearchResult } from "@/types/Room";
import axios, {Axios, AxiosRequestConfig} from "axios";

interface RealEstateSearchTerm{
    type:String,
    room_type:String,
    deposit_min ?: Number,
    deposit_max ?: Number,
    deal_price? : Number,
    rent_price? : Number,
    maintenance_fee? : Number,
    room_size? :Number,
    use_approve_y? :Number,
    holding_asset? :Number,
    additional_asset? :Number,
    credit_rating? :Number,
    monthly_availableAsset? : Number,
};

// 비로그인 시 가능한 로직
const publicEstateApi:Axios = axios.create({
    baseURL: `${process.env.API_BASE_URL}/realestates`,
    headers:{
        "Content-Type" : "application/json",
    }
});

// 로그인 시 가능한 로직
const privateEstateApi:Axios = axios.create({
    baseURL: `${process.env.API_BASE_URL}/realestates`,
    headers:{
        "Content-Type" : "application/json",
    }
});

const realEstateApi = {
    // getEstate : async()=>{
    //     // let res = publicEstateApi.get();
    //     return "getEstate result";
    // },

    // likeEstate : async(token:String)=>{
    //     // let res = publicEstateApi.get();
    //     return "getEstate result";
    // },
    search : async(searchTerm : RealEstateSearchTerm) =>{
        let res = await privateEstateApi.get(`/search`, {
            params : {
                ...searchTerm
            }
        });

        return res;
    }
}

export default realEstateApi;