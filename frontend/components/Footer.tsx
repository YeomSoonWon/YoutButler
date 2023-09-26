"use client";

import styled from "styled-components";
import { IBM_Plex_Sans_KR } from "@next/font/google";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <Container className={ibmPlexSansKR.className}>
      <LeftDiv>
        <p>사이트소개</p>
        <p>이용약관</p>
        <p>개인정보처리방침</p>
      </LeftDiv>
      <RightDiv>
        <p>ⓒ 당신의집사</p>
      </RightDiv>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: gray;
  padding: 3rem 9rem;
`;

const RightDiv = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: lightgray;
`;

const LeftDiv = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 0.9rem;
`;
