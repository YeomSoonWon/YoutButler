"use client";

import { useState } from "react";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import colors from "@/constants/colors";
import UserInfoEach from "@/components/List/UserInfoEach";
import ChatTitleEach from "@/components/List/ChatTitleEach";
import ItemEach from "@/components/List/ItemEach";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Chatting from "@/components/Chat/Chatting";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import authApi from "@/api/authApi";
import { IBM_Plex_Sans_KR } from "next/font/google";
import realEstateApi from "@/api/realEstateApi";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Profile = () => {
  const [selectedTitleIndex, setSelectedTitleIndex] = useState(0);
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [bookMarkes, setBookMarkes] = useState(null);

  useEffect(() => {
    if (session) {
      // @ts-ignore
      configureUser(session?.userData.token, session?.userData.socialType);
    }
  }, [session]);

  useEffect(() => {
    if (status === "unauthenticated") {
      alert("잘못된 접근입니다.");
      window.location.href = "/";
    }
  }, [status]);

  useEffect(()=>{
    if(user){
      getLikes();
    }
  },[user]);

  useEffect(()=>{
    console.log(bookMarkes);
  },[bookMarkes])

  const configureUser = async (token: String, provider: String) => {
    try {
      let res = await authApi.getUser(token, provider);
      if (res.status === 200) {
        console.log(res.data);
        setUser(res.data.memberResponse);
      } else {
        alert("비정상적인 접근입니다.");
        window.location.href = "/";
      }
    } catch {
      alert("비정상적인 접근입니다.");
      window.location.href = "/";
    }
  };

  const getLikes = async()=>{
    let res = await realEstateApi.getLikes(session?.userData);
    setBookMarkes(res.data.boomarkList);
  }

  const handleTitleClick = (index) => {
    setSelectedTitleIndex(index);
    // todo : selectedTitleIndex의 값을 통해 유저의 채팅 목록 중 매물에 맞는 채팅 출력
  };

  const deleteUser = async () => {
    let realDelete = window.confirm("정말 탈퇴하시겠습니까?");
    if (realDelete) {
      // @ts-ignore
      let res = await authApi.deleteUser(session?.userData);
      console.log(res);
      if(res.data === "회원탈퇴 완료"){
        alert("탈퇴되었습니다.");
        // window.location.href="/";
        signOut();
      }else{
        alert("오류가 발생했습니다.");
      }
    }
  };

  const chatMessages = [
    { text: "당신의집사 챗봇입니다. 무엇을 도와드릴까요?", isRight: false },
    { text: "당신의집사 챗봇입니다. 무엇을 도와드릴까요?", isRight: false },
    { text: "어쩌고 .. 저쩌고...", isRight: true },
    { text: "어쩌고 .. 저쩌고...", isRight: true },
    { text: "어쩌고 .. 저쩌고...", isRight: true },
    { text: "어쩌고 .. 저쩌고...", isRight: true },
    {
      text: "당신의집사 챗봇입니다. 무엇을 도와드릴까요?ssssssssssssssssssssssss",
      isRight: false,
    },
  ];

  return (
    <main>
      <AppBar backgroundColor="transparent" logo="greenlogo" color="#334835" user={user} />
      <Container className={ibmPlexSansKR.className}>
        <TitleDiv>
          <NameP>{user?.nickname}님,</NameP>
          <p>당신의집사 마이페이지에 오신 것을 환영합니다.</p>
        </TitleDiv>
        <ContentDiv>
          <LeftDiv>
            <UserInfoEach title="아이디" value={user?.nickname} />
            <UserInfoEach title="이메일" value={user?.email} />
            <UserInfoEach title="나이" value={user?.age} />
            <UserInfoEach title="주택 수" value={user?.numberOfHouses} />
            <UserInfoEach title="부동산 거래 예산" value={user?.holdingAsset} />
            <UserInfoEach title="월세 가용자산" value={user?.monthlyAvailableAsset} />
            <UserInfoEach title="신용도" value={user?.creditRating} />
            <BtnDiv>
              <Link href="/modify">
                <Button Kind="small" Rounded="square" Variant="yellowFilled">
                  회원정보 수정
                </Button>
              </Link>
              <Button Kind="small" Rounded="square" Variant="redOutline" onClick={deleteUser}>
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
                  <Chatting messages={chatMessages} />
                </ChatDiv>
              </ChatListDiv>
            </RightUpperDiv>
            <LeftUpperDiv>
              <BoldP>찜한 매물</BoldP>
              <LikeListDiv>
                {bookMarkes && bookMarkes.map((item, index)=>{
                  <ItemEach height="15rem" width="13rem" item={item}/>
                })}
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

  ::selection {
    background-color: #afffe3;
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
  padding: 0 1rem;
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
