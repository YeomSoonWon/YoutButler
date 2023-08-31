import { NextAuthOptions } from "next-auth"
import NaverProvider from "next-auth/providers/naver"

const authOptions : NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [
        NaverProvider({
          clientId: process.env.NEXT_PUBLIC_NAVER_ID || "",
          clientSecret: process.env.NEXT_PUBLIC_NAVER_SECRET || "",
        }),
      ],
      pages:{
        signIn:"/"
      }
};

export default authOptions;