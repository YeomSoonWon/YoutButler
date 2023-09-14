"use client";

import { useState } from "react";
import AppBar from "@/components/AppBar";
import styled from "styled-components";
import Button from "@/components/Button/Button";
import Map from "@/components/Map";
import ColorDot from "@/components/List/ColorDot";
import colors from "@/constants/colors";
import ItemEach from "@/components/List/ItemEach";
import Checkbox from "@/components/Input/Checkbox";
import RangeSlider from "@/components/Input/RangeSlider";
import Footer from "@/components/Footer";
import { IBM_Plex_Sans_KR } from "next/font/google";
import InfoBubble from "@/components/List/InfoBubble";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Search = () => {
  const [placeholder, setPlaceHolder] = useState("추가 가용 자산");
  const {data:session, status}  = useSession();
  const [user, setUser] = useState(null);

  useEffect(()=>{
    // @ts-ignore
    setUser(session?.userData);
  },[session]);

  useEffect(()=>{
    if(status === "unauthenticated"){
      // alert("잘못된 접근입니다.")
      // window.location.href="/";
    }
  },[status]);

  const handleMonthlyClick = () => {
    setPlaceHolder("월 여유자금 입력");
  };

  const handleCharterClick = () => {
    setPlaceHolder("추가 가용 자산");
  };

  return (
    <main>
      <AppBar backgroundColor="transparent" color="#334835" user={user}/>
      <Container className={ibmPlexSansKR.className}>
        <LeftContainer>
          <Upper>
            <TitleP>매물 찾기</TitleP>
            <InputDiv>
              <StyledInput type="number" placeholder="보유 자산" />
              <StyledInput type="number" placeholder={placeholder} />
              <Button Kind="extraSmall" Variant="yellowTonal" Rounded="square">
                설정
              </Button>
            </InputDiv>
          </Upper>
          <Middle>
            <Map />
          </Middle>
          <Lower>
            <TitleDiv>
              <TitleP>검색 조건에 맞는 집</TitleP>
              <AboutDiv>
                <p>현재 자금으로 </p>
                <ColorDot color={colors.blue} />
                <p>구입 가능 / </p>
                <ColorDot color={colors.red} />
                <p>불가능 / </p>
                <ColorDot color={colors.yellow} />
                <p>조금 부족</p>
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
              </AboutDiv>
            </TitleDiv>
            <ItemDiv>
              <ItemEach width="18rem" height="19rem" />
              <ItemEach width="18rem" height="19rem" />
              <ItemEach width="18rem" height="19rem" />
              <ItemEach width="18rem" height="19rem" />
              <ItemEach width="18rem" height="19rem" />
              <ItemEach width="18rem" height="19rem" />
            </ItemDiv>
          </Lower>
        </LeftContainer>
        <RightContainer>
          <SearchInput type="text" placeholder="지역, 학교, 지하철역 검색" />
          <ContentDiv>
            <SubtitleP>거래 유형</SubtitleP>
            <ButtonDiv>
              <Button
                Kind="small"
                Variant="grayOutline"
                Rounded="square"
                onClick={handleMonthlyClick}
              >
                월세
              </Button>
              <Button
                Kind="small"
                Variant="grayOutline"
                Rounded="square"
                onClick={handleCharterClick}
              >
                전세
              </Button>
              <Button
                Kind="small"
                Variant="grayOutline"
                Rounded="square"
                onClick={handleCharterClick}
              >
                매매
              </Button>
            </ButtonDiv>
          </ContentDiv>
          <ContentDiv>
            <SubtitleP>방 종류</SubtitleP>
            <CheckboxDiv>
              <Checkbox label="아파트" />
              <Checkbox label="오피스텔" />
              <Checkbox label="단독·다가구" />
              <Checkbox
                label="원·투룸"
                // isChecked={isChecked}
                // onChange={handleCheckboxChange}
              />
              <Checkbox label="빌라·연립" />
              <Checkbox label="주택" />
            </CheckboxDiv>
          </ContentDiv>
          <ContentDiv>
            <SubtitleP>가격</SubtitleP>
            <RangeDiv>
              <RangeSlider title="보증금 / 전세가" end="무제한" />
              <RangeSlider title="월세" end="무제한" />
              <RangeSlider title="매매가" end="2억 7천만" />
              <RangeSlider title="관리비" end="40만원" />
              <RangeSlider title="방크기(전용면적)" end="75㎡" />
            </RangeDiv>
          </ContentDiv>
          <ContentDiv>
            <SubtitleP>사용승인일</SubtitleP>
            <CheckboxSecondDiv>
              <Checkbox label="전체" />
              <Checkbox label="1년 이내" />
              <Checkbox label="5년 이내" />
              <Checkbox label="10년 이내" />
              <Checkbox label="15년 이내" />
              <Checkbox label="15년 이상" />
            </CheckboxSecondDiv>
          </ContentDiv>
        </RightContainer>
      </Container>
      <Footer />
    </main>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem 8rem 1rem;
`;

const TitleP = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Upper = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 29rem;
`;

const StyledInput = styled.input`
  width: 10.5rem;
  border-radius: 0.2rem;
  border: solid 1px #d9d9d9;
  padding: 0 0.7rem;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline-color: transparent;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const RightContainer = styled.div`
  width: 21rem;
  /* height: 28rem; */
  border: solid 1px #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 1rem;
`;

const LeftContainer = styled.div`
  width: 75%;
`;

const Middle = styled.div`
  height: 35rem;
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const AboutDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledSvg = styled.svg`
  height: 1.3rem;
  width: 1.3rem;
  cursor: pointer;
`;

const ItemDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  overflow-x: hidden;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 2.3rem;
  margin: 1rem;
  border-radius: 0.2rem;
  border: solid 1px #d9d9d9;
  padding: 0 0.7rem;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline-color: transparent;
  }
`;

const ContentDiv = styled.div`
  width: 18rem;
  padding-bottom: 1.4rem;
  margin-top: 1rem;
  justify-content: flex-start;
  border-bottom: solid 1px lightgray;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const CheckboxDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  justify-content: space-around;
`;

const CheckboxSecondDiv = styled.div`
  display: grid;
  flex-wrap: wrap;
  margin-top: 1rem;
  /* justify-content: space-around; */
  grid-template-columns: repeat(3, 0fr);
`;

const RangeDiv = styled.div`
  width: 17rem;
`;

const SubtitleP = styled.p`
  font-weight: 500;
`;

const Lower = styled.div``;

export default Search;
