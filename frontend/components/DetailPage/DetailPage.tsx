"use client";

import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 3rem;
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 88%;
  gap: 1rem;
  overflow-x: hidden;
`;

export const BottomDiv = styled.div`
  display: flex;
  padding: 1rem 5rem;
`;

export const LeftDiv = styled.div`
  width: 50%;
`;

export const RightDiv = styled.div`
  width: 50%;
`;

export const StyledImg = styled(Image)`
  height: 19rem;
  width: 19rem;
  border-radius: 1rem;
  object-fit: cover;
`;

export const TitleP = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

export const ContainerP = styled.div``;

export const SubP = styled.p`
  color: gray;
  font-weight: 600;
  margin-top: 0.5rem;
`;

export const AboutDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const AboutP = styled.p`
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
`;

export const AboutEachDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutTitleP = styled.p`
  font-weight: 600;
  color: gray;
`;

export const AboutDetailDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  border-bottom: solid 1px lightgray;
  padding: 0.7rem 0;
`;

export const PriceP = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  height: 16rem;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const BlueP = styled.p`
  color: #436fe9;
  font-weight: 600;
  font-size: 1.8rem;
`;

export const InfoDetailDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

export const LightP = styled.p`
  color: lightgray;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const LightPDiv = styled.div`
  text-align: center;
  line-height: 1.2rem;
`;

export const LineHr = styled.hr`
  border: solid 1px #f6f6f6;
`;

export const ChatBotDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 5rem;
  background-color: #ffc436;
  cursor: pointer;
`;

export const ChatSvg = styled.svg`
  height: 2rem;
  width: 2rem;
`;

export const ChatDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 0.6rem;
  position: sticky;
  top: 1px;
`;

export const AskP = styled.p``;

export const AskDiv = styled.div<{ expanded: Boolean }>`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 0 2rem 2rem 2rem;
  padding: 1.2rem;
  width: ${{ expanded: Boolean } ? "24rem" : "9.8rem"};
  height: ${{ expanded: Boolean } ? "30rem" : "auto"};
  transition: all 0.3s ease-in-out;
`;

export const NextSvgDiv = styled.div`
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

export const NextSvg = styled.svg`
  fill: #333;
`;

export const Popup = styled.div`
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

export const CloseButton = styled.svg`
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

export const PopupImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;
