"use client";

// import { getServerSession } from "next-auth/next";
// import authOptions from "@/Oauth/AuthOption";
import Image from "next/image";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import { IBM_Plex_Sans_KR } from "next/font/google";
import Chart from "@/components/Chart";
import DetailCarousel from "@/components/DetailPage/DetailCarousel";
import butler from "@/public/assets/butler.png";
import { useState } from "react";
import Chatting from "@/components/Chat/Chatting";
import {
  TitleP,
  AboutTitleP,
  StyledSvg,
  Container,
  BottomDiv,
  LeftDiv,
  ContainerP,
  SubP,
  AboutDiv,
  AboutP,
  AboutEachDiv,
  AboutDetailDiv,
  AboutInfoDiv,
  PriceP,
  RightDiv,
  InfoDiv,
  InfoDetailDiv,
  BlueP,
  LineHr,
  LightPDiv,
  LightP,
  ChatDiv,
  ChatBotDiv,
  AskDiv,
  AskP,
  ChatMiddleDiv,
  ChatBottomDiv,
  MessageInput,
  SvgBtn,
  SendSvg,
  LikeButton,
  TitleLikeDiv,
} from "@/components/DetailPage/DetailPage";
import InfoBubble from "@/components/List/InfoBubble";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
// import {useRouter} from "next/router";
import authApi from "@/api/authApi";
import YeokSam from "@/public/json/역삼동_매매_아파트.json";
import axios from "axios";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

// const DetailWithID = async () => {
const DetailWithID = ({ params }) => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [house, setHouse] = useState<any | null>(null);

  // 찜
  const [like, setLike] = useState(false);

  const handleLike = async () => {
    setLike((prev) => !prev);

    if (!like) {
      try {
        await axios({
          method: "post",
          url: `realestates/${location.pathname.split("/")[1]}/check`,
        }).then((response: any) => console.log(response));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      try {
        await axios({
          method: "delete",
          url: `realestates/${location.pathname.split("/")[1]}/uncheck`,
        }).then((response: any) => console.log(response));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  // todo : url param을 이용한 매물 데이터 가져오기
  // todo : useEffect를 사용하여 페이지 로딩 시 채팅 인스턴스 생성
  // todo : 질문 입력 시 질문에 대한 답을 채팅으로 전송
  // todo : 페이지 unmount 시 지금까지 한 채팅 기록을 서버에 저장

  useEffect(() => {
    if (session) {
      // @ts-ignore
      configureUser(session?.userData.token, session?.userData.socialType);
    }
  }, [session]);

  useEffect(() => {
    console.log(params);
    if (params.id) {
      for (const item of YeokSam?.roomTypeList) {
        if (parseInt(params.id) === item.complexNo) {
          setHouse(item);
        }
      }
    }
  }, [params]);

  useEffect(() => {
    console.log(house);
  }, [house]);

  // 챗봇 open
  const [isChatOpen, setIsChatOpen] = useState<Boolean>(false);

  const handleChatClick = () => {
    setIsChatOpen(!isChatOpen);
    console.log("눌렸다!");
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

  const configureUser = async (token: String, provider: String) => {
    try {
      let res = await authApi.getUser(token, provider);
      if (res.status === 200) {
        setUser(res.data.memberResponse);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  };

  return (
    <main className={ibmPlexSansKR.className}>
      <AppBar backgroundColor="transparent" color="#334835" user={user} />
      <Container className={ibmPlexSansKR.className}>
        <DetailCarousel />
        <BottomDiv className={ibmPlexSansKR.className}>
          <LeftDiv>
            <TitleLikeDiv>
              <ContainerP>
                <TitleP>
                  {house?.complexName} · {house?.floor}층
                </TitleP>
                <SubP>
                  {house?.sidoName} {house?.guName} {house?.dongName}
                </SubP>
              </ContainerP>
              <div>
                <LikeButton onClick={handleLike}>
                  {!like ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="red"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="red"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  )}
                </LikeButton>
              </div>
            </TitleLikeDiv>
            <AboutDiv>
              <AboutP>가격정보</AboutP>
              <AboutEachDiv>
                <AboutDetailDiv>
                  <AboutTitleP>{YeokSam.realEstateTypeName}</AboutTitleP>
                  <p>3억</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>관리비</AboutTitleP>
                  <p>매월 {house?.maintenanceFee / 10000}만원</p>
                </AboutDetailDiv>
              </AboutEachDiv>
            </AboutDiv>
            <AboutDiv>
              <AboutP>상세정보</AboutP>
              <AboutEachDiv>
                <AboutDetailDiv>
                  <AboutTitleP>방 종류</AboutTitleP>
                  <p>쓰리룸 이상</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>해당층/건물층</AboutTitleP>
                  <p>중/15층</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>전용/공급면적</AboutTitleP>
                  <p>
                    {house?.exclusiveArea}m²/{house?.supplyArea}m² ({house?.pyeong}평)
                  </p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>방 수/욕실 수</AboutTitleP>
                  <p>3개/2개</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>방향</AboutTitleP>
                  <p>남향</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>건축물용도</AboutTitleP>
                  <p>공동주택</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>사용승인일</AboutTitleP>
                  <p>2023.04.11</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>최초등록일</AboutTitleP>
                  <p>2023.08.14</p>
                </AboutDetailDiv>
              </AboutEachDiv>
            </AboutDiv>
            <AboutDiv>
              <AboutP>중개사</AboutP>
              <AboutEachDiv>
                <AboutDetailDiv>
                  <AboutTitleP>지점명</AboutTitleP>
                  <p>주식회사우대빵부동산중개법인 강서지점</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>대표</AboutTitleP>
                  <p>이은정</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>주소</AboutTitleP>
                  <p>서울특별시 강서구 강서로 243, 2층 201호 202호 203호</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>전화번호</AboutTitleP>
                  <p>02-1661-9539, 010-1234-5667</p>
                </AboutDetailDiv>
              </AboutEachDiv>
            </AboutDiv>
            <AboutDiv>
              <AboutInfoDiv>
                <AboutP>시세(현재 + 예상)</AboutP>
                <InfoBubble>
                  <StyledSvg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="gray"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </StyledSvg>
                </InfoBubble>
              </AboutInfoDiv>
              <PriceP>매매 7억 3,000 ~ 17억 4,000</PriceP>
              <SubP>평균 4,866만/3.3㎡</SubP>
            </AboutDiv>
            <Chart />
          </LeftDiv>
          <RightDiv>
            <InfoDiv>
              <InfoDetailDiv>
                <TitleP>현재 자산으로는</TitleP>
                <BlueP>72,738,991원</BlueP>
                <TitleP>더 필요합니다.</TitleP>
              </InfoDetailDiv>
              <LineHr />
              <InfoDetailDiv>
                <TitleP>대출 시 예상되는 월 이자</TitleP>
                <BlueP>4.15%</BlueP>
                <LightPDiv>
                  <LightP>가입 시 입력한 신용도를 기반으로</LightP>
                  <LightP>산정된 예상 이자율 입니다.</LightP>
                </LightPDiv>
              </InfoDetailDiv>
            </InfoDiv>
            <ChatDiv>
              <ChatBotDiv>
                <Image
                  src={butler}
                  height="50"
                  width="50"
                  onClick={handleChatClick}
                  alt="이미지 없음"
                />
              </ChatBotDiv>
              <AskDiv expanded={isChatOpen}>
                <div>
                  <AskP isVisible={isChatOpen}>집사에게 물어보세요!</AskP>
                </div>
                <ChatMiddleDiv isVisible={isChatOpen}>
                  <Chatting messages={chatMessages} />
                </ChatMiddleDiv>
                <ChatBottomDiv isVisible={isChatOpen}>
                  <MessageInput type="text" placeholder="메시지를 입력해주세요.." />
                  <SvgBtn>
                    <SendSvg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                      <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                    </SendSvg>
                  </SvgBtn>
                </ChatBottomDiv>
              </AskDiv>
            </ChatDiv>
          </RightDiv>
        </BottomDiv>
      </Container>
      <Footer />
    </main>
  );
};

export default DetailWithID;
