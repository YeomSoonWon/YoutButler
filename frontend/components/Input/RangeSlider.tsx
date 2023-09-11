import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    width: 285,
  },
});

function valuetext(value) {
  return `${value}원`;
}

export default function RangeSlider({ title, end }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 62]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ marginTop: "2.5rem" }}>
      <TitleDiv>
        <SubtitleP>{title}</SubtitleP>
        <ToP>{end}</ToP>
      </TitleDiv>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin: 1rem 0;
`;

const SubtitleP = styled.p`
  font-weight: 500;
  color: gray;
`;

const ToP = styled.p`
  font-weight: 500;
  color: #3f51b5;
`;
