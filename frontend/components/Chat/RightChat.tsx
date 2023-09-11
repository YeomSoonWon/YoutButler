import styled from "styled-components";

const RightChat = ({ message }) => {
  return (
    <div>
      <RightBubble>
        <span>{message}</span>
      </RightBubble>
    </div>
  );
};

const RightBubble = styled.div`
  padding: 1rem 1.5rem;
  width: fit-content;
  max-width: 13rem;
  border-radius: 2rem 2rem 0 2rem;
  background-color: #a32fff;
  color: white;
  float: right;
  line-height: 1.2rem;
`;

export default RightChat;
