import styled from "styled-components";
import estate1 from "../../assets/estate1.png";
import Image from "next/image";

export default function ItemEach() {
  return (
    <EstateDiv>
      <ImageDiv>
        <EstateImage src={estate1} />
      </ImageDiv>
      <AboutEstateDiv>
        <RoomP>쓰리룸 이상</RoomP>
        <PriceP>월세 3000/415</PriceP>
        <DetailP>4층, 29.79㎡, 관리비 10만</DetailP>
        <DetailP>
          하이앤드 주거공간 신축첫입주 고급빌라 즉시입주sdfsdfadf/askfajwelfjlek
        </DetailP>
      </AboutEstateDiv>
    </EstateDiv>
  );
}

const EstateDiv = styled.div`
  height: 19rem;
  width: 18rem;
  padding: 0 1rem 1.8rem 1rem;
  border: solid 1px lightgray;
  border-radius: 1rem;
  cursor: pointer;
`;

const ImageDiv = styled.div`
  width: 100%;
  height: 13rem;
  overflow: hidden;
`;

const EstateImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const AboutEstateDiv = styled.div`
  line-height: 1.3rem;
`;

const DetailP = styled.p`
  font-size: 0.9rem;
  color: darkgray;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RoomP = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin-bottom: 0.4rem;
`;

const PriceP = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
