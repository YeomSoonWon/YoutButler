import styled from "styled-components";
import colors from "@/constants/colors";

/* background-color: ${(props) => props.backgroundColor || colors.blue}; */
/* box-shadow: 0 0 3px 3px ${(props) => props.backgroundColor || colors.blue}; */
const ColorBox = styled.div`
  background-color: ${colors.blue};
  border-radius: 5rem;
  width: 10px;
  height: 10px;
  box-shadow: 0 0 3px 3px ${colors.blue};
`;

const ColorDot = ({ color }) => {
  // return <ColorBox backgroundColor={color}></ColorBox>;
  return <ColorBox></ColorBox>;
};

export default ColorDot;
