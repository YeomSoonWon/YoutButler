import { NextAuthOptions } from "next-auth"
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

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
      ],
      callbacks:{
        async signIn({ user, account, profile, email, credentials }) {
          // console.log("signIn user : ", user);
          // console.log("signIn profile : ", profile)
          // user = profile;
          // console.log("signIn user : ", user)
          return true
        },
        async redirect({ url, baseUrl }) {
          return baseUrl
        },
        async session({ session, user, token }) {
          console.log("session user : ", user);
          console.log("session token : ", token)
          // console.log("user : ", user)
          session.user = token;
          return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
          // console.log("user : ", user);
          // console.log("account : ", account);
          console.log("jwt account : ", account)
          console.log("jwt token : ", token);
          console.log("jwt profile : ", profile);
          // console.log("isnewUser : ", isNewUser);
          if(profile){
            token = profile.response;
          }
          console.log("after token : ", token);
          return token
        }
      },
      // pages:{
      //   signIn:"/"
      // }
};

export default authOptions;