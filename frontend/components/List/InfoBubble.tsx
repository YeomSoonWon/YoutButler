import React, { useState, PropsWithChildren } from "react";
import styled from "styled-components";
import ColorDot from "./ColorDot";

interface Props {
  visible: Boolean;
  contentId?: string | null;
}

const InfoBubble = ({ children, contentId }: PropsWithChildren) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  let content = "";

  if (contentId === "월세") {
    content = "월세에 대한 내용..";
  } else if (contentId === "전세") {
    content = "전세에 대한 내용.. 다음줄..";
  } else if (contentId === "매매") {
    content =
      "🏠 당신의 집사 매매 계산방법 안내 🏠 \
      현재 자산이 매매가 보다 같거나 많은 경우: 구입가능";
    // content = content.replace(/(?:\r\n|\r|\n)/g, "<br />");
  }
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      {children}
      <Bubble visible={isVisible}>{content}</Bubble>
    </div>
  );
};

// 말풍선 스타일
const Bubble = styled.div<Props>`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  z-index: 1; /* 다른 요소 위에 표시되도록 설정 */
  visibility: ${(props: Props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props: Props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s;
  width: 19rem;
  height: 19rem;
  text-align: center;
`;

export default InfoBubble;
