"use client";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Noto_Sans_KR, Sunflower } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const sunFlower = Sunflower({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

const AppBar = () => {
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) return;
    console.log(session);
  }, [session]);

  const ultSignOut = () => {
    signOut();
  }

  return (
    <ContainerDiv>
      <Logo href={"/"}>당신의집사</Logo>
      <NavDiv className={notoSansKr.className}>
        <StyledLink href="">지도</StyledLink>
        <StyledLink href="">마이페이지</StyledLink>
        <StyledLink href="">알림</StyledLink>
        {session?.user ? (
          <>
            <img src={session.user.image || ""} />
            <p> {session.user.name}</p>
            <YellowBtn onClick={() => signOut()}>로그아웃</YellowBtn>
          </>
        ) : (
          <>
            <StyledLink href="">회원가입</StyledLink>
            <YellowBtn onClick={() => signIn("naver")}>로그인</YellowBtn>
          </>
        )}
      </NavDiv>
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: #334835;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: white;
  text-decoration-line: none;
  ${({ theme }) => theme.logoFont || ""};
`;

const YellowBtn = styled.button`
  background-color: #ffc436;
  border: solid 2px #ffc436;
  padding: 0.4rem 0.7rem;
  font-weight: 500;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #ffc436;
  }
`;

const NavDiv = styled.div`
  width: 24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration-line: none;
`;

export default AppBar;
