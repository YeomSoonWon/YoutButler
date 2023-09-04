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
          return true
        },

        async redirect({ url, baseUrl }) {
          return baseUrl
        },

        async jwt({ token, user, account, profile, isNewUser }) {
          console.log("jwt user : ", user);
          console.log("jwt account : ", account)
          console.log("jwt token : ", token);
          console.log("jwt profile : ", profile);
          console.log("jwt isnewUser : ", isNewUser);
          
          // if(profile){
            //   token = profile;
            // }
            
            console.log("after token : ", token);
            return token
          },

          async session({ session, user, token }) {
            console.log("session user : ", user);
            console.log("session token : ", token)
            session.user = token;
            return session
          },
      },
      pages:{
        signIn:"/auth/signin"
      },
};

export default authOptions;