"use client";

import React, { useState } from "react";
import styled from "styled-components";
import estate1 from "@/public/assets/estate1.png";
import Image from "next/image";
import YeokSam from "@/public/json/역삼동_매매_아파트.json";

interface IItem {
  complexNo: number; // 주택번호: 1165010700
  complexName: string; // 주택이름: 아크로리버파크
  address: string; // 주소: 서울시 강남구 역삼동
  realEstateTypeName: string; // 방종류: 아파트
  tradeTypeName: string; // 거래방식: 매매
  floorInfo: string; // 층수: 4/15
  supplyArea: number; // 공급면적: 112.74 (제곱미터)
  exclusiveArea: number; // 전용면적: 84.97 (제곱미터)
  maintenanceFee: string; // 관리비: 10만
  rentPrc: string; // 월세: 32만
  dealOrWarrantPrc: string; // 매매가 혹은 전월세 보증금: 3억 7000
}

interface IProps {
  item: IItem;
}

export default function ItemEach({ width, height }, { item }: IProps) {
  // 하트 아이콘 클릭 시 색상 변경
  const [isFilled, setIsFilled] = useState(false);

  const handleHeartClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsFilled(!isFilled);
  };

  // const EstateDiv = styled.div`
  //   height: ${height};
  //   width: ${width};
  //   padding: 0 1rem 1.8rem 1rem;
  //   border: solid 1px lightgray;
  //   border-radius: 1rem;
  //   position: relative;

  //   p {
  //     display: block;
  //     white-space: nowrap;
  //     overflow: hidden;
  //     text-overflow: ellipsis;
  //   }`;

  return (
    <EstateDiv
      onClick={() => {
        window.location.href = "/detail/2340033913";
      }}
    >
      <div onClick={(e: React.MouseEvent<HTMLElement>) => handleHeartClick(e)}>
        {!isFilled ? (
          <HeartSvg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </HeartSvg>
        ) : (
          <HeartSvg
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
          </HeartSvg>
        )}
      </div>
      <ImageDiv>
        <EstateImage src={estate1} alt="image" />
      </ImageDiv>
      <AboutEstateDiv>
        <RoomP>강남구 역삼동 아파트</RoomP>
        <PriceP>{YeokSam.realEstateTypeName} 3000/415</PriceP>
        <DetailP>4층, 29.79㎡, 관리비 10만</DetailP>
        <DetailP>하이앤드 주거공간 신축첫입주 고급빌라 즉시입주sdfsdfadf/askfajwelfjlek</DetailP>
      </AboutEstateDiv>
    </EstateDiv>
  );
}

interface EstateDivProps {
  height?: string;
  width?: string;
}

const EstateDiv = styled.div<EstateDivProps>`
  height: ${(props) => props.height || "19rem"};
  width: ${(props) => props.width || "18rem"};
  padding: 0 1rem 1.8rem 1rem;
  border: solid 1px lightgray;
  border-radius: 1rem;
  position: relative;

  p {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 65%;
  overflow: hidden;
`;

const EstateImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const AboutEstateDiv = styled.div`
  line-height: 1.3rem;
  cursor: pointer;
`;

const DetailP = styled.p`
  font-size: 0.9rem;
  color: darkgray;
`;

const RoomP = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin-bottom: 0.4rem;
`;

const PriceP = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;

const HeartSvg = styled.svg`
  position: absolute;
  top: 30px;
  right: 30px;
  height: 1.5rem;
  width: 1.5rem;
  /* z-index: 9999; */
  cursor: pointer;
`;
