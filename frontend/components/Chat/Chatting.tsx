import styled from "styled-components";

const Chatting = ({ messages }) => {
  return (
    <ChatMiddleDiv>
      {messages.map((message, index) => (
        <MessageContainer key={index} isRight={message.isRight}>
          <Message isRight={message.isRight}>{message.text}</Message>
        </MessageContainer>
      ))}
    </ChatMiddleDiv>
  );
};

const ChatMiddleDiv = styled.div`
  height: 80%;
  padding: 0.5rem 0;
  display: block;
  flex-direction: column; /* column 방향으로 변경 */
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.isRight
      ? "row-reverse"
      : "row"}; /* 메시지 오른쪽 정렬을 위해 reverse */
  margin-top: 0.5rem;
  padding-right: 0.5rem;
`;

const Message = styled.div`
  padding: 1rem 1.5rem;
  width: fit-content;
  max-width: 13rem;
  border-radius: ${(props) =>
    props.isRight ? "2rem 2rem 0 2rem" : "2rem 2rem 2rem 0"};
  background-color: ${(props) => (props.isRight ? "#a32fff" : "lightgray")};
  color: ${(props) => (props.isRight ? "white" : "black")};
  line-height: 1.2rem;
`;

export default Chatting;
