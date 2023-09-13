import styled from "styled-components";
import colors from "@/constants/colors";

const ColorBox = styled.div<{backgroundColor?:string}>`
  background-color: ${({backgroundColor}) => backgroundColor || colors.blue};
  box-shadow: 0 0 3px 3px ${({backgroundColor}) => backgroundColor || colors.blue};
  border-radius: 5rem;
  width: 10px;
  height: 10px;
`;

const ColorDot = ({ color }) => {
  return <ColorBox backgroundColor={color}></ColorBox>;
  // return <ColorBox></ColorBox>;
};

export default ColorDot;
