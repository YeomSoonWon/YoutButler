import axios from "axios";

// 채팅 기능은 사용자 로그인 상태에서만 이용 가능
const privateChatApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/api/chat`,
    headers:{
        "Content-Type" : "application/json",
    }
})

const chatApi = {
}


export default chatApi;