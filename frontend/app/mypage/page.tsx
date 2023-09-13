"use client";

import { useState } from "react";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import colors from "@/constants/colors";
import UserInfoEach from "@/components/List/UserInfoEach";
import ChatTitleEach from "@/components/List/ChatTitleEach";
import LeftChat from "@/components/Chat/LeftChat";
import RightChat from "@/components/Chat/RightChat";
import ItemEach from "@/components/List/ItemEach";
import Button from "@/components/Button/Button";
import Link from "next/link";

const Profile = () => {
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);

  const handleTitleClick = (index) => {
    setSelectedTitleIndex(index);
  };
  return (
    <main>
      <AppBar backgroundColor="transparent" color="#334835" user={null}/>
      <Container>
        <TitleDiv>
          <NameP>김싸피님,</NameP>
          <p>당신의집사 마이페이지에 오신 것을 환영합니다.</p>
        </TitleDiv>
        <ContentDiv>
          <LeftDiv>
            <UserInfoEach title="아이디" value="ssafy123" />
            <UserInfoEach title="이메일" value="ssafykim1@gmail.com" />
            <UserInfoEach title="나이" value="29세" />
            <UserInfoEach title="주택 수" value="무주택" />
            <UserInfoEach title="부동산 거래 예산" value="15700만원" />
            <UserInfoEach title="월 가용자산" value="120만원" />
            <UserInfoEach title="신용도" value="972" />
            <BtnDiv>
              <Link href="/modify">
                <Button Kind="small" Rounded="square" Variant="yellowFilled">
                  회원정보 수정
                </Button>
              </Link>
              <Button Kind="small" Rounded="square" Variant="redOutline">
                회원 탈퇴
              </Button>
            </BtnDiv>
          </LeftDiv>
          <RightDiv>
            <RightUpperDiv>
              <BoldP>상담 내역</BoldP>
              <ChatListDiv>
                <ChatTitleDiv>
                  <ChatTitleEach
                    title="송파아이파크 107동 · 중층"
                    isSelected={selectedTitleIndex === 0}
                    onClick={() => handleTitleClick(0)}
                  />
                  <ChatTitleEach
                    title="반포롯데캐슬오스카 1동 고층"
                    isSelected={selectedTitleIndex === 1}
                    onClick={() => handleTitleClick(1)}
                  />
                  <ChatTitleEach
                    title="더샵반포리버파크(도시형) 3동 저층"
                    isSelected={selectedTitleIndex === 2}
                    onClick={() => handleTitleClick(2)}
                  />
                  <ChatTitleEach
                    title="반포센트럴자이 107동 7층 아파트"
                    isSelected={selectedTitleIndex === 3}
                    onClick={() => handleTitleClick(3)}
                  />
                  <ChatTitleEach
                    title="아크로리버뷰신반포 103동 7층"
                    isSelected={selectedTitleIndex === 4}
                    onClick={() => handleTitleClick(4)}
                  />
                </ChatTitleDiv>
                <ChatDiv>
                  <LeftChat message="안녕하세요 당신의 집사입니다 :)" />
                  <LeftChat message="대출 상품 추천을 도와드릴까요?" />
                  <RightChat message="네 금리 가장 낮은 상품으로 찾아주세요...." />
                  <RightChat message="국민은행 대출 상품으로 찾아주세요!" />
                  <RightChat message="금리인하요구권은 언제부터 신청가능한가요??" />
                </ChatDiv>
              </ChatListDiv>
            </RightUpperDiv>
            <LeftUpperDiv>
              <BoldP>찜한 매물</BoldP>
              <LikeListDiv>
                <ItemEach height="17rem" width="15rem" />
                <ItemEach height="17rem" width="15rem" />
                <ItemEach height="17rem" width="15rem" />
                <ItemEach height="17rem" width="15rem" />
                <ItemEach height="17rem" width="15rem" />
              </LikeListDiv>
            </LeftUpperDiv>
          </RightDiv>
        </ContentDiv>
      </Container>
      <Footer />
    </main>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 7rem;

  p {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const TitleDiv = styled.div`
  height: 5rem;
  width: 100%;
  background-color: ${colors.lightgreen};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const NameP = styled.p`
  margin-left: 2rem;
  margin-right: 0.6rem;
  font-weight: 600;
  font-size: 1.4rem;
  color: ${colors.darkgreen};
`;

const LeftUpperDiv = styled.div`
  margin-top: 1.5rem;
`;

const RightUpperDiv = styled.div`
  height: 25rem;
`;

const RightDiv = styled.div`
  width: 70%;
  padding: 3rem 0 3rem 3rem;
`;

const LeftDiv = styled.div`
  border: solid 1px ${colors.lightgray};
  width: 30%;
  height: 53rem;
  position: sticky;
  top: 1rem;
`;

const BoldP = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ChatListDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 21rem;
  border: solid 1px ${colors.lightgray};
`;

const ChatDiv = styled.div`
  width: 65%;
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  /* 스크롤바의 스타일 지정 */
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
    background-color: #e8e2d9; /* 스크롤바의 배경색 */
  }

  /* 스크롤바의 thumb 스타일 지정 */
  &::-webkit-scrollbar-thumb {
    background-color: #acb4a8; /* 스크롤바 thumb 색상 */
    border-radius: 3px; /*스크롤바 thumb의 모서리 둥글기*/
  }

  /* 스크롤바의 thumb에 호버했을 때 스타일 지정 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #818a7e; /* 스크롤바 thumb 호버 색상 */
  }

  /* 스크롤바의 thumb에 클릭했을 때 스타일 지정 */
  &::-webkit-scrollbar-thumb:active {
    background-color: #656c62; /* 스크롤바 thumb 클릭 색상 */
  }
`;

const ChatTitleDiv = styled.div`
  width: 35%;
  overflow-y: scroll;

  /* 스크롤바의 스타일 지정 */
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
    background-color: #e8e2d9; /* 스크롤바의 배경색 */
  }

  /* 스크롤바의 thumb 스타일 지정 */
  &::-webkit-scrollbar-thumb {
    background-color: #acb4a8; /* 스크롤바 thumb 색상 */
    border-radius: 3px; /*스크롤바 thumb의 모서리 둥글기*/
  }

  /* 스크롤바의 thumb에 호버했을 때 스타일 지정 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #818a7e; /* 스크롤바 thumb 호버 색상 */
  }

  /* 스크롤바의 thumb에 클릭했을 때 스타일 지정 */
  &::-webkit-scrollbar-thumb:active {
    background-color: #656c62; /* 스크롤바 thumb 클릭 색상 */
  }
`;

const LikeListDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  flex-direction: row;
  gap: 1rem;
  overflow-y: scroll;
  height: 38.7rem;

  /* 스크롤바의 스타일 지정 */
  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
    background-color: #e8e2d9; /* 스크롤바의 배경색 */
  }

  /* 스크롤바의 thumb 스타일 지정 */
  &::-webkit-scrollbar-thumb {
    background-color: #acb4a8; /* 스크롤바 thumb 색상 */
    border-radius: 3px; /*스크롤바 thumb의 모서리 둥글기*/
  }

  /* 스크롤바의 thumb에 호버했을 때 스타일 지정 */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #818a7e; /* 스크롤바 thumb 호버 색상 */
  }

  /* 스크롤바의 thumb에 클릭했을 때 스타일 지정 */
  &::-webkit-scrollbar-thumb:active {
    background-color: #656c62; /* 스크롤바 thumb 클릭 색상 */
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  gap: 1rem;
`;

export default Profile;
