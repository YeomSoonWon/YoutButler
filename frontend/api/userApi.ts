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
    getUser : async(token:String)=>{
        console.log(token);
        return "getuser result";
    },

    signUp : async()=>{
        return "signup result";
    },

    signIn : async() => {
        return "signin result";
    },

    modify : async(user:User) =>{
        let res = await PrivateUserApi.patch("/modify",user);
        return res;
    }
}

export default userApi;