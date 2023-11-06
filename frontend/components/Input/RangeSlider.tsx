import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';

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
  const [value, setValue] = useState([]); // 값
  const [min, setMin] = useState<any>();
  const [max, setMax] = useState<any>();
  const [data, setData] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/realestates/search')
      .then((res) => res.json())
      .then((res) => {
        const maxValues = {
          매매: Math.max(
            ...res.data.map((item) => parseFloat(item.dealOrWarrantPrc.replace(/[^0-9.-]+/g, '')))
          ),
          전세: Math.max(
            ...res.data.map((item) => (item.realEstateTypeName === "전세" ? parseFloat(item.dealOrWarrantPrc.replace(/[^0-9.-]+/g, '')) : 0))
          ),
          월세: Math.max(
            ...res.data.map((item) => (item.realEstateTypeName === "월세" ? parseFloat(item.rentPrc.replace(/[^0-9.-]+/g, '')) : 0))
          )
        };
  
        const minValues = {
          매매: Math.min(
            ...res.data.map((item) => parseFloat(item.dealOrWarrantPrc.replace(/[^0-9.-]+/g, '')))
          ),
          전세: Math.min(
            ...res.data.map((item) => (item.realEstateTypeName === "전세" ? parseFloat(item.dealOrWarrantPrc.replace(/[^0-9.-]+/g, '')) : maxValues.전세))
          ),
          월세: Math.min(
            ...res.data.map((item) => (item.realEstateTypeName === "월세" ? parseFloat(item.rentPrc.replace(/[^0-9.-]+/g, '')) : maxValues.월세))
          )
        };
  
        const defaultValue = [minValues.매매, maxValues.매매];
        const min = minValues.매매;
        const max = maxValues.매매;
  
        setData(res.data);
        setValue(defaultValue);
        setMin(min);
        setMax(max);
      });
  }, []);

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num > 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return '0';
    }
  };

  // 슬라이더를 변화시킬 때 마다 value 값 조정
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{ marginTop: '2.5rem' }}>
      <TitleDiv>
        <SubtitleP>{title}</SubtitleP>
        <ToP>
          {numberFormat(value[0])} ~ {numberFormat(value[1])}만원
        </ToP>
      </TitleDiv>
      <Slider
        value={value} // 가격 슬라이더의 값
        defaultValue={[min, max]} //가격 슬라이더 최초 범위
        onChange={handleChange} // 슬라이더가 변할 때마다 value값을 조정하는 함수
        valueLabelDisplay='auto'
        aria-labelledby='range-slider' // 슬라이더 형태
        // getAriaValueText={valuetext}
        max={max}
        min={min}
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
