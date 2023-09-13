import { NextAuthOptions } from "next-auth"
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import GoogleProvider from "next-auth/providers/google";
import authApi from "@/api/authApi";

const authOptions : NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [
        NaverProvider({
          clientId: process.env.NAVER_ID || "",
          clientSecret: process.env.NAVER_SECRET || "",
        }),
        KakaoProvider({
          clientId: process.env.KAKAO_ID || "",
          clientSecret: process.env.KAKAO_SECRET || "",
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_ID || "",
          clientSecret : process.env.GOOGLE_SECRET || "",
        })
      ],
      callbacks:{
        async signIn({ user, account, profile, email }) {
          console.log("account : ", account);
          // account의 엑세스토큰과 provider 정보를 서버에 통신하여 있는 사용자인지 확인.

          //있는 유저면 true반환하고 계속 진행
          // 없는 유저면 create return하여 추가입력 페이지로 전송
          
          // return `http://localhost:3000/create`;
          return true;
          // true/false 반환 시 로그인 가능/불가능 여부만,
          // 문자열 반환 시 리다이렉트 url 반환으로 인식되어 redirect 함수의 url 인자로 전달
        },

        //redirect 핸들링으로 추가 정보 입력 페이지로 보내자.
        async redirect({url, baseUrl}) {
          console.log("url : ",url);
          console.log("baseUrl : ",baseUrl);
          // console.log("baseurl : ",baseUrl);
          // API통신을 통해 첫 로그인 유저 여부 판단 후
          const parsedUrl = new URL(url);
          console.log("parsedUrl : ",parsedUrl);

          const parsedBaseUrl = new URL(baseUrl);
          console.log("pardedBaseUrl : ",parsedBaseUrl);
          // const isNew = parsedUrl.searchParams.get("isNewUser");
          // console.log("isNew : ", isNew);
          // if(isNew){
          //   return "localhost:3000/create";
          // }

          return baseUrl;
        },

        async jwt({ token, user, account, profile, isNewUser }) {
            // console.log("isNewUser : ", isNewUser);
            return {...token, ...account}
          },

        async session({ session, user, token }) {
          // console.log("session user : ", user);
          // console.log("session token : ", token);
          session.user = {...token};
          // TODO : 백엔드에서 유저토큰 가져오는 로직 완성되면 session.user를 userData로 완전 대체 가능
          return session;
        },
      },
      pages:{
        signIn:"/auth/signin"
      },
};

export default authOptions;