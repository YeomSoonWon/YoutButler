"use client";

import { useState } from "react";
import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import Image from "next/image";
import Img1 from "@/public/assets/estate1.png";
import butler from "@/public/assets/butler.png";
import { IBM_Plex_Sans_KR } from "next/font/google";
import Chart from "@/components/Chart";
import Carousel from "@/components/Button/Carousel";
import InfoBubble from "@/components/List/InfoBubble";
import Button from "@/components/Button/Button";
import Chatting from "@/components/Chat/Chatting";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Detail = () => {
  // 사진 캐러셀 기능
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = [Img1, Img1, Img1, Img1, Img1];

  const prevImage = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx === 0 ? images.length - 1 : prevIdx - 1
    );
  };

  const nextImage = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx === images.length - 1 ? 0 : prevIdx + 1
    );
  };

  // 사진 눌렀을 때 사진 원본 보여주는 모달창
  const [popupVisible, setPopupVisible] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(0);

  const openPopup = (index) => {
    console.log("사진 인덱스:", index);
    setClickedImageIndex(index);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  // 챗봇 open
  const [isChatOpen, setIsChatOpen] = useState(false);

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

  return (
    <main>
      <AppBar backgroundColor="transparent" color="#334835" user={null} />
      <Container className={ibmPlexSansKR.className}>
        <TopDiv>
          <NextSvgDiv className="prev" onClick={prevImage}>
            <NextSvg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </NextSvg>
          </NextSvgDiv>
          <ImgDiv>
            {images.map((image, index) => (
              <StyledImg
                key={index}
                src={image}
                alt="estate"
                onClick={() => openPopup(index)}
                style={{
                  transform: `translateX(-${currentIdx * 75}%)`,
                  cursor: "pointer",
                }}
              />
            ))}
          </ImgDiv>
          {popupVisible && (
            <Popup>
              <CloseButton
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
                onClick={closePopup}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </CloseButton>
              <PopupImage src={images[clickedImageIndex].src} alt="estate" />
            </Popup>
          )}
          <NextSvgDiv className="next" onClick={nextImage}>
            <NextSvg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </NextSvg>
          </NextSvgDiv>
        </TopDiv>
        <BottomDiv className={ibmPlexSansKR.className}>
          <LeftDiv>
            <ContainerP>
              <TitleP>송파아이파크 107동 · 중층</TitleP>
              <SubP>서울특별시 송파구 삼전동 93-13</SubP>
            </ContainerP>
            <AboutDiv>
              <AboutP>가격정보</AboutP>
              <AboutEachDiv>
                <AboutDetailDiv>
                  <AboutTitleP>전세</AboutTitleP>
                  <p>7억 5000</p>
                </AboutDetailDiv>
                <AboutDetailDiv>
                  <AboutTitleP>관리비</AboutTitleP>
                  <p>매월 9만원</p>
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
                  <p>61.32m²/75.61m²</p>
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
                  <MessageInput
                    type="text"
                    placeholder="메시지를 입력해주세요.."
                  />
                  <SvgBtn>
                    <SendSvg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 3rem;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 88%;
  gap: 1rem;
  overflow-x: hidden;
`;

const BottomDiv = styled.div`
  display: flex;
  padding: 1rem 5rem;
`;

const LeftDiv = styled.div`
  width: 50%;
`;

const RightDiv = styled.div`
  width: 50%;
`;

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

const ChatMiddleDiv = styled.div`
  height: 80%;
  padding: 0.5rem 0;
  display: ${(props) => (props.isVisible ? "block" : "none")};
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #e8e2d9;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #acb4a8;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #818a7e;
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: #656c62;
  }
`;

const ChatBottomDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

const MessageInput = styled.input`
  padding: 0.2rem 0.6rem;
  height: 1.7rem;
  width: 85%;
  border: solid 1px #f1f1f1;
  background-color: #f1f1f1;
  border-radius: 0.4rem;
  /* float: left; */

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline-color: #f1f1f1;
  }
`;

const ContainerP = styled.div``;

const SubP = styled.p`
  color: gray;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
`;

const AboutP = styled.p`
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
`;

const AboutEachDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AboutTitleP = styled.p`
  font-weight: 600;
  color: gray;
`;

const AboutDetailDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  border-bottom: solid 1px lightgray;
  padding: 0.7rem 0;
`;

const PriceP = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
`;

const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  height: 16rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const BlueP = styled.p`
  color: #436fe9;
  font-weight: 600;
  font-size: 1.8rem;
`;

const InfoDetailDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

const LightP = styled.p`
  color: lightgray;
  font-weight: 600;
  font-size: 0.8rem;
`;

const LightPDiv = styled.div`
  text-align: center;
  line-height: 1.2rem;
`;

const LineHr = styled.hr`
  border: solid 1px #f6f6f6;
`;

const ChatBotDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.8rem;
  width: 3.8rem;
  border-radius: 5rem;
  background-color: #ffc436;
  cursor: pointer;
  box-shadow: rgba(27, 15, 3, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(23, 17, 2, 0.35) 0px -2px 6px 0px inset;
`;

const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 0.6rem;
  position: sticky;
  top: 1px;
`;

const AskP = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.3rem;
  padding-bottom: ${(props) => (props.isVisible ? "1rem" : "none")};
  border-bottom: ${(props) =>
    props.isVisible ? "solid 1px lightgray" : "none"};
`;

const AskDiv = styled.div<{ expanded?: Boolean }>`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 0 2rem 2rem 2rem;
  padding: 1.2rem;
  width: ${{ expanded: Boolean } ? "24rem" : "12rem"};
  height: ${{ expanded: Boolean } ? "33rem" : "auto"};
  transition: all 0.3s ease-in-out;
  margin-left: 3rem;
`;

const NextSvgDiv = styled.div`
  cursor: pointer;
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  &.prev {
    left: 10px; // 왼쪽 버튼 위치 조정
  }

  &.next {
    right: 10px; // 오른쪽 버튼 위치 조정
  }
`;

const NextSvg = styled.svg`
  fill: #333;
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const CloseButton = styled.svg`
  position: absolute;
  top: 30px;
  right: 30px;
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
`;

const PopupImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const StyledSvg = styled.svg`
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
`;

const SendSvg = styled.svg`
  height: 1.3rem;
  width: 1.3rem;
  fill: #ffc436;
  align-items: center;
  display: flex;
`;

const SvgBtn = styled.button`
  background-color: transparent;
  border: transparent;
  cursor: pointer;
  align-items: center;
`;

const AboutInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default Detail;
