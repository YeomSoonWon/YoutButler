"use client";

// Nextjs 13 부터는 app directory 기반 라우팅 진행 - 이번 버전부터 베타로 진행하는 만큼
import AppBar from "@/components/AppBar";
import Chart from "@/components/Chart";
import NaverLoginBtn from "@/components/NaverLoginBtn";
import NaverLogoutBtn from "@/components/NaverLogoutBtn";
import styled from "styled-components";
import Image from "next/image";
import mainImg from "../assets/mainImg.png";
import ItemEach from "@/components/List/ItemEach";
import { IBM_Plex_Sans_KR, Noto_Sans_KR } from "next/font/google";
import Footer from "@/components/Footer";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  weight: ["500"],
  subsets: ["latin"],
});

// 어렵거나 아니다싶으면 언제든 Next12로 돌아갈 수 있어야(다행히도 하위호환 지원)
const Home = () => {
  return (
    <ContainerDiv>
      <AppBar />
      <UpperDiv>
        <MainImg src={mainImg} layout="fill" alt="Main Picture" />
        <PDiv className={notoSansKr.className}>
          <FirstP>어떤 집을 원하시나요?</FirstP>
          <SecondP>당신의 집사가 찾아드립니다!</SecondP>
          <InputDiv>
            <StyledInput
              type="text"
              placeholder="원하시는 지역 또는 단지명을 입력해주세요"
            />
            <SearchBtn>
              <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </StyledSvg>
            </SearchBtn>
          </InputDiv>
        </PDiv>
      </UpperDiv>
      <MiddleDiv className={ibmPlexSansKR.className}>
        <ListAboutDiv>
          <FirstP>우리동네 인기 매물</FirstP>
          <ViewMoreDiv>
            <p>더 많은 매물 보러가기</p>
            <NextSvgDiv>
              <NextSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </NextSvg>
            </NextSvgDiv>
          </ViewMoreDiv>
        </ListAboutDiv>
        <ListContainerDiv>
          <NextSvgDiv>
            <NextSvg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </NextSvg>
          </NextSvgDiv>
          <ListDiv>
            <ItemEach />
            <ItemEach />
            <ItemEach />
            <ItemEach />
          </ListDiv>
          <NextSvgDiv>
            <NextSvg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </NextSvg>
          </NextSvgDiv>
        </ListContainerDiv>
      </MiddleDiv>
      <LowerDiv className={ibmPlexSansKR.className}>
        <TitleP>미래를 위한 첫 걸음을 함께하세요</TitleP>
        <ContentP>
          우리는 새로운 사회 초년생들이 부동산 시장에서 더 나은 <br /> 결정을
          내리고 미래를 계획하는 데 도움을 드리기 위해 <br />
          노력하고 있습니다. 부동산 구매는 중요한 선택 중 하나입니다. 우리의
          서비스는 다음과 같은 장점을 제공합니다.
        </ContentP>
        <ContentDiv>
          <FirstDiv>
            <CircleDiv>
              <AboutSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
              </AboutSvg>
            </CircleDiv>
            <AboutTitleP>맞춤형 부동산 추천</AboutTitleP>
            <AboutContentP>
              소득 수준과 대출 가능 금액을 기반으로, 우리는 당신에게 딱 맞는
              부동산 매물을 추천해드립니다. 이로써 예산 내에서 가장 적합한
              선택을 할 수 있습니다.
            </AboutContentP>
          </FirstDiv>
          <SecondDiv>
            <CircleSecondDiv>
              <AboutSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
              </AboutSvg>
            </CircleSecondDiv>
            <AboutTitleP>다양한 대출 상품 비교</AboutTitleP>
            <AboutContentP>
              다양한 금융 기관의 대출 상품을 모아 비교해드립니다. 이를 통해
              최적의 조건과 이자율을 선택할 수 있게 도와드립니다. 당신의 재정
              상황에 맞는 최적의 대출을 찾아보세요.
            </AboutContentP>
          </SecondDiv>
          <FirstDiv>
            <CircleDiv>
              <AboutSvg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
              </AboutSvg>
            </CircleDiv>
            <AboutTitleP>챗 집사의 실시간 상담</AboutTitleP>
            <AboutContentP>
              저희는 상담원 챗 집사를 통해 부동산에 관한 궁금증을 해결하고,
              여러분의 소득과 대출 가능 금액을 고려하여 실제로 구매 가능한 매물
              및 대출 상품을 소개해드립니다.
            </AboutContentP>
          </FirstDiv>
        </ContentDiv>
      </LowerDiv>
      <Footer />
    </ContainerDiv>
  );
};

const ContainerDiv = styled.main`
  margin: 0;
`;

const UpperDiv = styled.div`
  height: 40rem;
  position: relative;
`;

const FirstP = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: 0.1rem;
`;

const SecondP = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: 0.2rem;
`;

const StyledInput = styled.input`
  padding: 1rem 1.5rem;
  width: 38rem;
  border-radius: 5rem;
  border: none;
  font-size: 1rem;
`;

const MainImg = styled(Image)`
  vertical-align: middle;
`;

const PDiv = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const InputDiv = styled.div`
  align-items: center;
  display: flex;
  height: 5rem;
`;

const StyledSvg = styled.svg`
  height: 1.5rem;
  width: 1.5rem;
`;

const MiddleDiv = styled.div`
  height: 30rem;
  background-color: #e8f9e9;
  display: flex;
  flex-direction: column;
  padding: 5rem 10rem;
`;

const LowerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 1rem;
  padding: 5rem 5rem 10rem 5rem;
`;

const TitleP = styled.p`
  font-weight: 600;
  font-size: 2rem;
  color: #312d2d;
`;

const ContentP = styled.p`
  font-size: 1.2rem;
  width: 30rem;
  line-height: 1.5rem;
  color: #5d5d5d;
`;

const ContentDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 2rem;
`;

const FirstDiv = styled.div`
  width: 20rem;
  height: 24rem;
  background-color: #e8f9e9;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const SecondDiv = styled.div`
  width: 20rem;
  height: 24rem;
  border: solid 2px #e8f9e9;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const CircleDiv = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 10rem;
  box-shadow: 0 5px 5px 2px #a6baa7 inset;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleSecondDiv = styled.div`
  height: 8rem;
  width: 8rem;
  border-radius: 10rem;
  box-shadow: 0 5px 5px 2px #a6baa7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AboutTitleP = styled.p`
  color: #312d2d;
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 500;
`;

const AboutContentP = styled.p`
  width: 14rem;
  color: #5d5d5d;
  line-height: 1.3rem;
`;

const AboutSvg = styled.svg`
  height: 4rem;
  width: 4rem;
  fill: #334835;
`;

const ListContainerDiv = styled.div`
  height: 23rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem;
`;

const ListAboutDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NextSvg = styled.svg`
  cursor: pointer;
  fill: #3f3d3d;
`;

const ViewMoreDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NextSvgDiv = styled.div`
  height: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
`;

const ListDiv = styled.div`
  width: 95%;
  display: flex;
  gap: 1rem;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const SearchBtn = styled.button`
  background: none;
  border: none;
  position: relative;
  left: -3.1rem;
  cursor: pointer;
`;
export default Home;
