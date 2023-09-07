'use client';

import { useSearchParams } from 'next/navigation'
import { ClientSafeProvider, signIn } from 'next-auth/react';
import styled from "styled-components";

type IProps = {
    providers: Record<string, ClientSafeProvider>
  }

const Wrapper = styled.div`
  width: 500px;
  height : fit-content;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border : solid 2px #AAAAAA;
  border-radius: 0.5rem;
  margin : auto;
`;

const ButtonsWrapper = styled.div`
  /* margin : auto; */
`;

const ButtonWrapper = styled.div`
  margin : auto auto;
  padding : 1rem;
`;

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
  
    return (
    // 이친구를 y축기준으로 중앙에 박아넣고 싶은데 마음대로 안돼요ㅠㅠ 스타일드컴포 어렵ㅠㅠ
    <Wrapper>
      <ButtonsWrapper>
      당신의집사
      {Object.values(providers).map(provider => (
        <ButtonWrapper key={provider.name}>
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
        </ButtonWrapper>
      ))}
      </ButtonsWrapper>
    </Wrapper>
  );
}