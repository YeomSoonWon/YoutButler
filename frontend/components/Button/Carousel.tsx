import React, { useState } from "react";
import styled from "styled-components";

const ListDiv = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  width: 95%;
  display: flex;
  gap: 1rem;
`;

const ItemEach = styled.div`
  height: ${(props) => props.height || "200px"};
  width: ${(props) => props.width || "200px"};
  background-color: #ccc;
  margin: 0 5px;
`;

const NextSvgDiv = styled.div`
  height: 100%;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  &.prev {
    left: 0px; // 왼쪽 버튼 위치 조정
  }

  &.next {
    right: 0px; // 오른쪽 버튼 위치 조정
  }
`;

const NextSvg = styled.svg`
  fill: #333;
`;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <>
      <NextSvgDiv className="prev" onClick={handlePrevClick}>
        <NextSvg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </NextSvg>
      </NextSvgDiv>
      <ListDiv style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
        {items.map((item, index) => (
          <ItemEach key={index} height={item.height} width={item.width} />
        ))}
      </ListDiv>
      <NextSvgDiv className="next" onClick={handleNextClick}>
        <NextSvg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </NextSvg>
      </NextSvgDiv>
    </>
  );
};

export default Carousel;
