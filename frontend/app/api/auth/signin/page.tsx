"use client";

import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import authOptions from "@/Oauth/AuthOption";
import SocialSigninButton from "@/components/SocialSigninBtn/SocialSigninButton";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();

  return (
    // <SocialSigninPage>
    <>
      <AppBar backgroundColor="transparent" color="#334835" />
      <SocialSigninButton providers={providers}></SocialSigninButton>
      <Footer />
    </>
    // </SocialSigninPage>
  );
}
