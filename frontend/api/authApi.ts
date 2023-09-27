import axios, {Axios, AxiosRequestConfig} from "axios";

const PublicAuthApi:Axios = axios.create({
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

        console.log("userSearchAPI : ",`${process.env.NEXT_PUBLIC_API_BASE_URL}/members/signin`);

        let res = await PublicAuthApi.post("signin", {
            socialType : provider.toUpperCase(),
            token : accessToken
        });

        console.log("res data : ",res.data);
        return res;
    },

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
            numberOfHouses : houses.toUpperCase(),
            token : userData?.token
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
        },{
            headers:{
                Authorization : `Bearer ${userData?.accessToken}`
            }
        });

        return res;
    },

    modify : async(userData:any | null, age:Number|null, houses:String|null, budget:Number|null, jasan:Number|null, credit:Number|null)=>{
        console.log({
            identifier : userData?.identifier,
            socialType : userData?.socialType,
            email : userData?.email,
            nickname : userData?.nickname,
            age:age,
            holdingAsset:budget,
            creditRating : credit,
            monthlyAvailableAsset : jasan,
            numberOfHouses : houses.toUpperCase(),
            token : userData?.token
        });
        let res = await PublicAuthApi.put("",{
            age: age,
            holdingAsset:budget,
            creditRating : credit,
            monthlyAvailableAsset : jasan,
            numberOfHouses : houses.toUpperCase()
        },{
            headers:{
                Authorization : `Bearer ${userData?.accessToken}`
            }
        });
        return res;
    },

    deleteUser : async(userData:any) =>{
        let res = await PublicAuthApi.delete("",{
            headers : {
                Authorization : `Bearer ${userData?.accessToken}`
            }
        });
        return res;
    }
}

export default authApi;