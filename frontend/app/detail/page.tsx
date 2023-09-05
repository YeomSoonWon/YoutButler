"use client";

import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";
import Img1 from "@/assets/estate1.png";

const Detail = () => {
  return (
    <main>
      <AppBar backgroundColor="transparent" color="#334835" />
      <Container>
        <TopDiv>
          <StyledImg src={Img1} />
          <StyledImg src={Img1} layout="contain" />
          <StyledImg src={Img1} layout="contain" />
        </TopDiv>
        <BottomDiv>
          <LeftDiv>
            <div>
              <TitleP>송파아이파크 107동 · 중층</TitleP>
              <p>서울특별시 송파구 삼전동 93-13</p>
            </div>
          </LeftDiv>
          <RightDiv></RightDiv>
        </BottomDiv>
      </Container>
      <Footer />
    </main>
  );
};

const Container = styled.div`
  padding: 3rem;
`;
const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const BottomDiv = styled.div``;
const LeftDiv = styled.div``;
const RightDiv = styled.div``;
const StyledImg = styled(Image)`
  height: 19rem;
  width: 19rem;
  border-radius: 1rem;
  object-fit: cover;
`;

const TitleP = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export default Detail;
