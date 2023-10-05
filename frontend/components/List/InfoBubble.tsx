import React, { useState, PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import ColorDot from './ColorDot';

// interface Props {
//   // visible?: Boolean;
//   contentId: any;
//   children: React.ReactNode;
// }

const InfoBubble = ({
  children,
  contentId,
}: {
  children: React.ReactNode;
  contentId: string;
}) => {
  const [isVisible, setIsVisible] = useState<string>('hidden');

  const handleMouseEnter = () => {
    setIsVisible('visible');
  };

  const handleMouseLeave = () => {
    setIsVisible('hidden');
  };

  // let content = "";

  const [content, setContent] = useState(<InnerBubble></InnerBubble>);

  useEffect(() => {
    console.log(contentId);
    if (contentId === 'RENT') {
      setContent(
        <InnerBubble>
          <div>🏠 당신의 집사 월세 계산방법 안내 🏠</div>

        </InnerBubble>
      );
    } else if (contentId === 'LEASE') {
      setContent(
        <InnerBubble>
          <div>🏠 당신의 집사 전세 계산방법 안내 🏠</div>
        </InnerBubble>
      );
    } else if (contentId === 'DEAL') {
      setContent(
        <InnerBubble>
          <div>🏠 당신의 집사 매매 계산방법 안내 🏠</div>
          <div>❗현재 자산이 매매가 보다 같거나 많은 경우❗</div>
          <RowDiv><ColorDot color="yellowgreen" />구입 가능</RowDiv>
          <div>❗현재 자산이 매매가 보다 작은 경우❗</div>
          <div>LTV 적용 가격(대출 최대 가능 금액) + 현재 자산이 매매가 보다 같거나 많은 경우: </div>
          <RowDiv><ColorDot color="yellowgreen" />구입 가능</RowDiv>
        </InnerBubble>
      );
      // content = content.replace(/(?:\r\n|\r|\n)/g, "<br />");
    }
  }, [contentId]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      {children}
      <Bubble props={isVisible}>{content}</Bubble>
    </div>
  );
};

// 말풍선 스타일
const Bubble = styled.div<{ props: string }>`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  z-index: 1; /* 다른 요소 위에 표시되도록 설정 */
  visibility: ${(props) => props.props};
  transition: opacity 0.3s;
  width: 20rem;
  height: 19rem;
  text-align: center;
`;

const InnerBubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5rem;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

export default InfoBubble;
