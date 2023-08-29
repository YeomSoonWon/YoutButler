import { NextAuthOptions } from "next-auth"
import NaverProvider from "next-auth/providers/naver"

const authOptions : NextAuthOptions = {
    providers: [
        NaverProvider({
          clientId: process.env.NAVER_ID || "",
          clientSecret: process.env.NAVER_SECRET || "",
        }),
      ],
      pages:{
        signIn:"/"
      }
};

export default authOptions;