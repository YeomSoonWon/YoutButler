import { getProviders, signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import authOptions from '@/Oauth/AuthOption'
import SocialSigninButton from '@/components/SocialSigninBtn/SocialSigninButton';

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    return { redirect: { destination: '/' } }
  }

  const providers = await getProviders();

  return (
    <>
      <SocialSigninButton providers={providers}></SocialSigninButton>
    </>
  )
}