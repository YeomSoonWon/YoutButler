"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Noto_Sans_KR } from "next/font/google";
import favicon from "@/app/favicon.ico";

const notoSansKr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const AppBar = ({ backgroundColor, color, user, logoLogout = false }) => {
  return (
    <ContainerDiv backgroundColor={backgroundColor}>
      {logoLogout ? (
        <LogoutLogo color={color} onClick={() => signOut()}>
          당신의집사
        </LogoutLogo>
      ) : (
        <Logo href={"/"} color={color}>
          당신의집사
        </Logo>
      )}
      <NavDiv className={notoSansKr.className}>
        <StyledLink href="/search" color={color}>
          매물검색
        </StyledLink>
        {/* <StyledLink href="" color={color}>알림</StyledLink> */}
        {user ? (
          <>
            <StyledLink href="/mypage" color={color}>
              마이페이지
            </StyledLink>
            <img
              src={user?.picture ? user?.picture : favicon.src}
              style={{ width: "30px", height: "30px", backgroundColor: "white" }}
            />
            <StyledUserName color={color}>{user?.nickname}</StyledUserName>
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

interface BgProp {
  backgroundColor?: string;
}

interface ColorProp {
  color?: string;
}

const ContainerDiv = styled.div<BgProp>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background-color: ${(props) => props.backgroundColor || "#334835"};
`;

const Logo = styled(Link)<ColorProp>`
  font-size: 1.5rem;
  color: ${(props) => props.color || "white"};
  text-decoration-line: none;
`;

const LogoutLogo = styled.div<ColorProp>`
  font-size: 1.5rem;
  color: ${(props) => props.color || "white"};
  text-decoration-line: none;
`;
/* ${({ theme }) => theme.logoFont || ""}; */

const StyledLink = styled(Link)<ColorProp>`
  color: ${(props) => props.color || "white"};
  text-decoration-line: none;
`;

const StyledUserName = styled.p<ColorProp>`
  color: ${(props) => props.color || "white"};
  text-decoration-line: none;
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
  /* width: 24rem; */
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: center;
`;

export default AppBar;
