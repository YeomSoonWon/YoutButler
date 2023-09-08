"use client";

import styled from "styled-components";
import colors from "@/constants/colors";

const ChatTitleDiv = ({ title, color, weight }) => {
  const TitleNameDiv = styled.div`
    background-color: ${color};
    align-items: center;
    text-align: center;
    padding: 1.7rem 1rem;
    font-weight: ${weight};
    color: ${colors.darkgray};
    border-bottom: solid 1px ${colors.lightgray};
  `;

  return (
    <TitleNameDiv>
      <TitleP>{title}</TitleP>
    </TitleNameDiv>
  );
};

const TitleP = styled.p`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export default ChatTitleDiv;
