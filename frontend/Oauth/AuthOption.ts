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
        async signIn({ user, account, profile, email, credentials }) {
          return true
        },

        async redirect({ url, baseUrl }) {
          return baseUrl
        },

        async jwt({ token, user, account, profile, isNewUser }) {
            return {...token, ...account}
          },

          async session({ session, user, token }) {
            // console.log("session user : ", user);
            // console.log("session token : ", token);
            // let userData = await authApi.getUser(token.access_token, token.provider);
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