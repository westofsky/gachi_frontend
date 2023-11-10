import React from 'react';
import styled from 'styled-components';

export default function EmptyTripCard() {
  return (
    <TripItem>
      <NotYet.Wrapper>
        <NotYet.Cloud src={'/images/cloud.png'} />
        <NotYet.Plane src={'/images/plane.png'} />
      </NotYet.Wrapper>
      <NotYet.TextWrapper>
        <NotYet.TextBold>아직 여행 계획이 없습니다</NotYet.TextBold>
        <NotYet.TextRegular>
          아래를 눌러 신나는 여행 계획을 세워주세요
        </NotYet.TextRegular>
      </NotYet.TextWrapper>
      <NotYet.Split>
        <NotYet.SplitWrapper>
          <NotYet.Circle />
          <NotYet.Line src={'/images/line.svg'} />
          <NotYet.Circle />
        </NotYet.SplitWrapper>
      </NotYet.Split>
      <NotYet.Button>여행 계획 세우기</NotYet.Button>
    </TripItem>
  );
}

const TripItem = styled.div`
  width: 270px;
  height: 415px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
`;

const NotYet = {
  Wrapper: styled.div`
    height: 170px;
    position: relative;
  `,
  Cloud: styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  `,
  Plane: styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-2%, -23%);
  `,
  TextWrapper: styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,
  TextBold: styled.p`
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 20px;
  `,
  TextRegular: styled.p`
    color: #000;
    font-family: Pretendard-Regular;
    font-size: 12px;
  `,
  Split: styled.div`
    width: 100%;
    overflow: hidden;
  `,
  SplitWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200%;
    transform: translate(-25%, 0%);
  `,
  Circle: styled.div`
    width: 28.893px;
    height: 28.924px;
    background: #f8f8f8;
    border-radius: 15px;
  `,
  Line: styled.img`
    width: 237.379px;
    height: 3px;
    flex-shrink: 0;
    stroke-width: 2px;
    stroke: #c0c0c0;
  `,
  Button: styled.div`
    margin: 0 auto;
    margin-top: 30px;
    width: 150px;
    padding: 8px 30px 8px 30px;
    border-radius: 60px;
    border: 1px solid #e4e4e4;
    background: #efefef;
    text-align: center;
    cursor: pointer;
  `,
};
