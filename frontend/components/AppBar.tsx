"use client";

import { signIn, signOut, } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Noto_Sans_KR, Sunflower } from "next/font/google";
import favicon from "@/app/favicon.ico";

const notoSansKr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const sunFlower = Sunflower({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
});

const AppBar = ({ backgroundColor, color, user }) => {
  // useEffect(()=>{
  //   console.log(user);
  // },[user]);

  const ContainerDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 4rem;
    background-color: ${backgroundColor || "#334835"};
  `;

  const Logo = styled(Link)`
    font-size: 1.5rem;
    color: ${color || "white"};
    text-decoration-line: none;
    `;
    /* ${({ theme }) => theme.logoFont || ""}; */

  const StyledLink = styled(Link)`
    color: ${color || "white"};
    text-decoration-line: none;
  `;

  const StyledUserName = styled.p`
  color: ${color || "white"};
  text-decoration-line: none;
  `;

  return (
    <ContainerDiv>
      <Logo href={"/"}>당신의집사</Logo>
      <NavDiv className={notoSansKr.className}>
        <StyledLink href="/search">지도</StyledLink>
        <StyledLink href="/mypage">마이페이지</StyledLink>
        <StyledLink href="">알림</StyledLink>
        {user ? (
          <>
            <img
            // src={user?.picture || ""}
            src={user?.picture ? user?.picture: favicon.src}
            style={{width:"30px", height:"30px", backgroundColor:"white"}}/>
            <StyledUserName>{user?.name}</StyledUserName>
            <YellowBtn onClick={() => signOut()}>로그아웃</YellowBtn>
          </>
        ) : (
          <>
            <YellowBtn onClick={() => signIn()}>로그인</YellowBtn>
          </>
        )}
      </NavDiv>
    </ContainerDiv>
  );
};

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

export default AppBar;
