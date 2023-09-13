"use client";

import AppBar from "@/components/AppBar";
import Footer from "@/components/Footer";
import styled from "styled-components";
import colors from "@/constants/colors";

const Modify = () => {
  return (
    <Container>
      <AppBar backgroundColor="transparent" color="#334835" user={null}/>
      <CenterDiv>
        <MiddleDiv>
          <TitleDiv>
            <TitleP>추가 정보 수정</TitleP>
            <SubDiv>
              <SubP>
                더 정확한 추천을 위해 최대한 많은 정보를 입력해주세요 :)
              </SubP>
            </SubDiv>
          </TitleDiv>
          <InputDiv>
            <InputTitleP>필수</InputTitleP>
            <StyledInput type="number" placeholder="나이" required />
            <StyledSelect required>
              <option value="">-- 주택 수를 선택하세요 --</option>
              <option value="none">무주택</option>
              <option value="one">1주택</option>
              <option value="two">2주택</option>
              <option value="more">3주택 이상</option>
            </StyledSelect>
            <StyledInput
              type="number"
              required
              placeholder="부동산 거래 예산"
            />
            <SubTitleP>
              <InputTitleP>선택</InputTitleP>
              <GrayP>(월세 매물 추천 시 활용됩니다.)</GrayP>
            </SubTitleP>
            <StyledInput type="number" placeholder="월 가용자산" />
            <StyledInput type="number" placeholder="신용도" />
          </InputDiv>
          <YellowBtn>수정</YellowBtn>
          <YellowBtn>취소</YellowBtn>
        </MiddleDiv>
      </CenterDiv>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  margin: 3rem;
  width: 30rem;
  border: solid 1px lightgray;
`;

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleDiv = styled.div`
  text-align: center;
  gap: 1rem;
`;

const TitleP = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;

const SubP = styled.p`
  line-height: 1.3rem;
  color: gray;
  font-size: 0.9rem;
  font-weight: 600;
`;

const SubDiv = styled.div`
  margin: 0.8rem 0 2rem 0;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 0.5rem;
`;

const InputTitleP = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${colors.darkgray};
`;

const StyledInput = styled.input`
  height: 2rem;
  padding: 0.3rem 0.7rem;
  border-radius: 0.4rem;
  border: solid 1px #334835;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    outline-color: transparent;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledSelect = styled.select`
  height: 2.7rem;
  padding: 0.3rem 0.5rem;
  border-radius: 0.4rem;
  border: solid 1px #334835;
`;

const SubTitleP = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const GrayP = styled.p`
  font-size: 0.8rem;
  color: gray;
`;

const YellowBtn = styled.button`
  background-color: ${colors.yellow};
  border: solid 2px ${colors.yellow};
  padding: 0.7rem 0;
  width: 20rem;
  border-radius: 0.4rem;
  margin-top: 0.3rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`;

export default Modify;
