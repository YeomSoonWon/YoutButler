import axios, {Axios, AxiosRequestConfig} from "axios";

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
    getUser : async()=>{
        return "getuser result";
    },

    signUp : async()=>{
        return "signup result";
    },

    signIn : async() => {
        return "signin result";
    },

    modify : async() =>{
        return "modify result";
    }
}

export default userApi;