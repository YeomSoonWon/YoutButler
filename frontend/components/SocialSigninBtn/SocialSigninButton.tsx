'use client';

import { useSearchParams } from 'next/navigation'
import { ClientSafeProvider, signIn } from 'next-auth/react';
import styled from "styled-components";

type IProps = {
    providers: Record<string, ClientSafeProvider>
  }

const NaverSigninBtn = styled.button`
  background-color: #03C75A;
  border: solid 2px #03C75A;
  color:#ffffff;
  padding: 0.4rem 0.7rem;
  font-weight: 500;
  border-radius: 0.2rem;
  cursor: pointer;
`;

const KakaoSigninBtn = styled.button`
  background-color: #FEE500;
  border: solid 2px #FEE500;
  color:#000000;
  padding: 0.4rem 0.7rem;
  font-weight: 500;
  border-radius: 0.2rem;
  cursor: pointer;
`;

const GoogleSigninBtn = styled.button`
  background-color: #ffffff;
  border: solid 2px #000000;
  padding: 0.4rem 0.7rem;
  font-weight: 500;
  border-radius: 0.2rem;
  cursor: pointer;
`;

export default function SocialSigninButton({ providers }: IProps) {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl')
    console.log(providers);
  
    return (
    <div>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
        {provider.name === 'Naver' &&
          <NaverSigninBtn onClick={() => signIn(provider.id,{ callbackUrl })}>
            Sign in with {provider.name}
          </NaverSigninBtn>
        }
        {provider.name === 'Kakao' &&
          <KakaoSigninBtn onClick={() => signIn(provider.id,{ callbackUrl })}>
            Sign in with {provider.name}
          </KakaoSigninBtn>
        }
        {provider.name === 'Google' && 
          <GoogleSigninBtn onClick={() => signIn(provider.id,{ callbackUrl })}>
            Sign in with {provider.name}
          </GoogleSigninBtn>
        }
        </div>
      ))}
    </div>
  );
}