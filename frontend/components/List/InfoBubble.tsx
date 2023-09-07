import React, { useState } from "react";
import styled from "styled-components";

const InfoBubble = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      {children}
      <Bubble visible={isVisible}>
        여기에 구입 가능, 불가능, 조금 부족 기준 작성하기
      </Bubble>
    </div>
  );
};

// 말풍선 스타일
const Bubble = styled.div`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  z-index: 1; /* 다른 요소 위에 표시되도록 설정 */
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transition: opacity 0.3s;
  width: 19rem;
  height: 19rem;
`;

export default InfoBubble;
