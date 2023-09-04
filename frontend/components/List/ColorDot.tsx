import styled from "styled-components";
import colors from "@/constants/colors";

const ColorBox = styled.div`
  background-color: ${(props) => props.backgroundColor || colors.blue};
  border-radius: 5rem;
  width: 10px;
  height: 10px;
  box-shadow: 0 0 3px 3px ${(props) => props.backgroundColor || colors.blue};
`;

const ColorDot = ({ color }) => {
  return <ColorBox backgroundColor={color}></ColorBox>;
};

export default ColorDot;
