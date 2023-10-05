import { RoomSearchResult } from "@/types/Room";
import axios, { Axios, AxiosRequestConfig } from "axios";

// interface RealEstateSearchTerm {
//     type: String,
//     room_type: String,
//     deposit_min?: Number,
//     deposit_max?: Number,
//     deal_price?: Number,
//     rent_price?: Number,
//     maintenance_fee?: Number,
//     room_size?: Number,
//     use_approve_y?: Number,
//     holding_asset?: Number,
//     additional_asset?: Number,
//     credit_rating?: Number,
//     monthly_availableAsset?: Number,
// };

const publicEstateApi: Axios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/realestates`,
    headers: {
        "Content-Type": "application/json",
    }
});

const realEstateApi = {
    // search: async (searchTerm: RealEstateSearchTerm) => {
    //     let res = await publicEstateApi.get(`/search`, {
    //         params: {
    //             ...searchTerm
    //         }
    //     });
    //     return res;
    // },

    detailSearch: async (userData: any | null, realestateId: number) => {
        let config = {headers : {}};
        if(userData){
            config = {
                headers : {
                    Authorization: `Bearer ${userData?.accessToken}`
                }
            }
        }
        let res = await publicEstateApi.get(`/${realestateId}`,config);
        return res;
    },

    check:async(userData:any|null, aptId:number)=>{
        if(!userData) return;
        let res = await publicEstateApi.post(`/${aptId}/check`,null,{
            headers:{
                Authorization: `Bearer ${userData?.accessToken}`
            }
        });
        return res;
    },

    unCheck:async(userData:any|null, aptId:number)=>{
        let res = await publicEstateApi.delete(`/${aptId}/uncheck`,{
            headers:{
                Authorization: `Bearer ${userData?.accessToken}`
            }
        });
        return res;
    },

    getLikes:async(userData:any|null)=>{
        if(!userData) return;
        let res = await publicEstateApi.get("/bookmarks",{
            headers : {
                Authorization: `Bearer ${userData?.accessToken}`
            }
        });
        return res;
    }
}

export default realEstateApi;