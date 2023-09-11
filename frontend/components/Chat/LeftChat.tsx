import styled from "styled-components";
import colors from "@/constants/colors";

const LeftChat = ({ message }) => {
  return (
    <LeftBubble>
      <span>{message}</span>
    </LeftBubble>
  );
};

const LeftBubble = styled.div`
  padding: 1rem 1.5rem;
  width: fit-content;
  max-width: 13rem;
  border-radius: 0 2rem 2rem 2rem;
  background-color: #e8e8e8;
  line-height: 1.2rem;
`;

export default LeftChat;
