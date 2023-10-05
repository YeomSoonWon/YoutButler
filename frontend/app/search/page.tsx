"use client";

import React, { useState } from "react";
import AppBar from "@/components/AppBar";
import styled from "styled-components";
import Button from "@/components/Button/Button";
import Map from "@/components/Map";
import ColorDot from "@/components/List/ColorDot";
import colors from "@/constants/colors";
import ItemEach from "@/components/List/ItemEach";
import Checkbox from "@/components/Input/Checkbox";
import Radio from "@/components/Input/Radio";
import RangeSlider from "@/components/Input/RangeSlider";
import Footer from "@/components/Footer";
import { IBM_Plex_Sans_KR } from "next/font/google";
import InfoBubble from "@/components/List/InfoBubble";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import authApi from "@/api/authApi";
import dummyData from "@/public/json/평창동_월세.json";

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Search = () => {
  console.log("dummyDataList",dummyData?.roomTypeList);
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [monthlyAvailableAsset, setMonthlyAvailableAsset] = useState<number | null>(null);

  // slider 최솟값, 최댓값
  const [dwData, setDwData] = useState([0, 1300000]);
  const [dpData, setDpData] = useState([0, 11500000]);
  const [rpData, setRpData] = useState([0, 1600000]);
  const [mfData, setMfData] = useState([0, 80000]);
  const [rsData, setRsData] = useState([0, 19978]);

  useEffect(() => {
    if (session) {
      setMonthlyAvailableAsset(user?.monthlyAvailableAsset);
    }
  }, [session, user]);
  const [holdingAsset, setHoldingAsset] = useState<number | null>(null);
  useEffect(() => {
    if (session) {
      setHoldingAsset(user?.holdingAsset);
    }
  }, [session, user]);

  // 방 거래 유형(월세, 전세, 매매)
  const [selectedType, setSelectedType] = useState(null);

  // 방 종류
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);

  useEffect(() => {
    if (session) {
      // @ts-ignore
      configureUser(session?.userData.token, session?.userData.socialType);
    }
  }, [session]);

  const handleMonthlyClick = () => {
    setSelectedType("월세");
  };

  const handleCharterClick = () => {
    setSelectedType("전세");
  };

  const handleSaleClick = () => {
    setSelectedType("매매");
  };

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

  // 사용승인일
  const [selectedOption, setSelectedOption] = useState<string | null>("전체기간");

  const options = [
    { label: "1년 이내", value: "1" },
    { label: "5년 이내", value: "5" },
    { label: "10년 이내", value: "10" },
    { label: "15년 이내", value: "15" },
    { label: "전체", value: "16" },
  ];

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
  };

  // 체크박스
  const handleCheckboxChange = (value) => {
    setSelectedRoomTypes((prevSelectedRoomTypes) => {
      if (prevSelectedRoomTypes.includes(value)) {
        return prevSelectedRoomTypes.filter((type) => type !== value);
      } else {
        return [...prevSelectedRoomTypes, value];
      }
    });
  };

  // 검색 조건
  const constructApiRequest = (searchParams) => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/realestates/search`;
    const queryString = Object.keys(searchParams)
      .map((key) => {
        if (searchParams[key] !== null && searchParams[key] !== undefined) {
          return `${encodeURIComponent(key)}=${encodeURIComponent(searchParams[key])}`;
        } else {
          return null;
        }
      })
      .filter((param) => param !== null)
      .join("&");

    return `${baseUrl}?${queryString}`;
  };

  const roomTypeParameter = selectedRoomTypes.join(",");

  console.log(roomTypeParameter);
  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearch = () => {
    const searchParams = {
      size: 5,
      from: 0,
      keyword: searchKeyword, // 검색어
      "realestate-asset": holdingAsset, // 부동산 거래 예산
      "trade-type": selectedType, // 거래유형 : 매매/전세/월세
      "room-type": roomTypeParameter, // 방종류 : 아파트/오피스텔/단독&다가구/원&투룸/빌라&연립/주택
      "monthly-asset": monthlyAvailableAsset, // 월 가용금액(월세)
      uay: selectedOption, // 사용승인일
      // "dw-min": valuesForDWSlider[0],
      // "dw-max": dwMaxSlider,
      // "dp-min": dpMinSlider,
      // "dp-max": dpMaxSlider,
      // "rp-min": rpMinSlider,
      // "rp-max": rpMaxSlider,
      // "mf-min": mfMinSlider,
      // "mf-max": mfMaxSlider,
      // "rs-min": rsMinSlider,
      // "rs-max": rsMaxSlider,
    };

    const apiUrl = constructApiRequest(searchParams);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
      })
      .catch((error) => console.error("API error:", error));
  };

  return (
    <main>
      <AppBar backgroundColor="transparent" logo="greenlogo" color="#334835" user={user} />
      <Container className={ibmPlexSansKR.className}>
        <LeftContainer>
          <Upper>
            <TitleP>매물 찾기</TitleP>
            <InputDiv>
              {selectedType === "월세" ? (
                <StyledInput type="number" placeholder={session ? "월세 가용 자산" : undefined} value={monthlyAvailableAsset} onChange={(e) => setMonthlyAvailableAsset(Number(e.target.value))} />
              ) : (
                <NoneDiv></NoneDiv>
              )}
              <StyledInput type="number" placeholder={session ? "부동산 거래 예산" : undefined} value={holdingAsset} onChange={(e) => setHoldingAsset(Number(e.target.value))} />
              <Button Kind="extraSmall" Variant="yellowTonal" Rounded="square">
                설정
              </Button>
            </InputDiv>
          </Upper>
          <Middle>
            <Map items={dummyData}/>
          </Middle>
          <Lower>
            <TitleDiv>
              <TitleP>검색 조건에 맞는 집</TitleP>
              <AboutDiv>
                <p>현재 자금으로 </p>
                <ColorDot color="green" />
                <p>구입 가능 / </p>
                <ColorDot color={colors.red} />
                <p>불가능 / </p>
                <ColorDot color={colors.yellow} />
                <p>조금 부족</p>
                <InfoBubble contentId={selectedType}>
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
              {/* <ItemEach width="18rem" height="19rem" item={} colordot={green} /> */}
              {/* <ItemEach width="18rem" height="19rem" colordot={colors.red} />
              <ItemEach width="18rem" height="19rem" colordot={colors.yellow} /> */}
              {dummyData?.roomTypeList.map((item)=>{
                let data = {
                  realestateId: item.realestateId,
                  complexNo: 0, // 주택번호: 1165010700
                  complexName: item.complexName, // 주택이름: 아크로리버파크
                  address: item.address, // 주소: 서울시 강남구 역삼동
                  realEstateTypeName: item.roomType, // 방종류: 아파트
                  tradeTypeName: item.realEstateTypeName, // 거래방식: 매매
                  floorInfo: item.floorInfo, // 층수: 4/15
                  supplyArea: item.supplyArea, // 공급면적: 112.74 (제곱미터)
                  exclusiveArea: item.exclusiveArea, // 전용면적: 84.97 (제곱미터)
                  maintenanceFee: item.maintenanceFee+"", // 관리비: 10만
                  rentPrc: item.rentPrc,// 월세: 32만
                  dealOrWarrantPrc:item.dealOrWarrantPrc,// 매매가 혹은 전월세 보증금: 3억 7000
                  imageSrc:item.imageSrc,
                }
                return <ItemEach width="18rem" height="19rem" colordot={colors.yellow} item={data}/>
              })}
            </ItemDiv>
          </Lower>
        </LeftContainer>
        <RightContainer>
          <SearchDiv>
            <SearchInput
              type="text"
              placeholder="지역, 아파트명 검색"
              value={searchKeyword}
              onChange={handleSearchInputChange}
            />
            <Button Kind="extraSmall" Rounded="square" Variant="yellowTonal">
              검색
            </Button>
          </SearchDiv>
          <ContentDiv>
            <SubtitleP>거래 유형</SubtitleP>
            <ButtonDiv>
              <Button
                Kind="small"
                Variant="grayOutline"
                Rounded="square"
                onClick={handleMonthlyClick}
                customStyle={{
                  backgroundColor: selectedType === "월세" ? "darkgray" : "transparent",
                }}
              >
                월세
              </Button>
              <Button
                Kind="small"
                Variant="grayOutline"
                Rounded="square"
                onClick={handleCharterClick}
                customStyle={{
                  backgroundColor: selectedType === "전세" ? "darkgray" : "transparent",
                }}
              >
                전세
              </Button>
              <Button
                Kind="small"
                Variant="grayOutline"
                Rounded="square"
                onClick={handleSaleClick}
                customStyle={{
                  backgroundColor: selectedType === "매매" ? "darkgray" : "transparent",
                }}
              >
                매매
              </Button>
            </ButtonDiv>
          </ContentDiv>
          <ContentDiv>
            <SubtitleP>방 종류</SubtitleP>
            <CheckboxDiv>
              <Checkbox
                label="아파트"
                value="APT"
                isChecked={selectedRoomTypes.includes("APT")}
                onChange={() => handleCheckboxChange("APT")}
              />
              <Checkbox
                label="오피스텔"
                value="OPST"
                isChecked={selectedRoomTypes.includes("OPST")}
                onChange={() => handleCheckboxChange("OPST")}
              />
              <Checkbox
                label="단독·다가구"
                value="DDDGG"
                isChecked={selectedRoomTypes.includes("DDDGG")}
                onChange={() => handleCheckboxChange("DDDGG")}
              />
              <Checkbox
                label="원·투룸"
                value="OTROOM"
                isChecked={selectedRoomTypes.includes("OTROOM")}
                onChange={() => handleCheckboxChange("OTROOM")}
              />
              <Checkbox
                label="빌라·연립"
                value="VL"
                isChecked={selectedRoomTypes.includes("VL")}
                onChange={() => handleCheckboxChange("VL")}
              />
              <Checkbox
                label="주택"
                value="JT"
                isChecked={selectedRoomTypes.includes("JT")}
                onChange={() => handleCheckboxChange("JT")}
              />
            </CheckboxDiv>
          </ContentDiv>
          <ContentDiv>
            <SubtitleP>가격</SubtitleP>
            <RangeDiv>
              {selectedType === "월세" && (
                <RangeSlider title="보증금" unit="만원" minValue={0} maxValue={50000} />
              )}
              {selectedType === "월세" && (
                <RangeSlider title="월세" unit="만원" minValue={0} maxValue={1600000} />
              )}
              {selectedType === "전세" && (
                <RangeSlider title="전세가" unit="만원" minValue={0} maxValue={1300000} />
              )}
              {selectedType === "매매" && (
                <RangeSlider title="매매가" unit="만원" minValue={0} maxValue={11500000} />
              )}
              <RangeSlider title="관리비" unit="만원" minValue={0} maxValue={80000} />
              <RangeSlider title="방크기(전용면적)" unit="㎡" minValue={0} maxValue={19978} />
            </RangeDiv>
          </ContentDiv>
          <ContentDiv>
            <SubtitleP>사용승인일</SubtitleP>
            <RadioDiv>
              <Radio
                options={options}
                selectedValue={selectedOption}
                onSelectionChange={handleSelectOption}
              />
            </RadioDiv>
          </ContentDiv>
          <ButtonDiv style={{ paddingBottom: "1rem" }}>
            <Button Kind="small" Variant="yellowFilled" Rounded="square" onClick={handleSearch}>
              해당 조건으로 검색하기
            </Button>
          </ButtonDiv>
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

  ::selection {
    background-color: #afffe3;
  }
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

const NoneDiv = styled.div`
  width: 10.5rem;
  padding: 0 0.7rem;
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
  gap: 1rem;
  flex-wrap: wrap;
  overflow-x: hidden;
  padding: 0 3rem;
`;

const SearchInput = styled.input`
  height: 2.3rem;
  border-radius: 0.2rem;
  border: solid 1px #d9d9d9;
  width: 65%;
  padding: 0 0.7rem;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline-color: transparent;
  }
`;

const SearchDiv = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 18rem;
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

const RangeDiv = styled.div`
  width: 17rem;
`;

const SubtitleP = styled.p`
  font-weight: 500;
`;

const Lower = styled.div``;

const RadioDiv = styled.div`
  padding: 1rem 0;
`;

export default Search;
