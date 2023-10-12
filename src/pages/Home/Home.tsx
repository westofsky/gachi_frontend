import React from 'react';
import Logo from '../../components/Main/Logo';
import styled from 'styled-components';
import Bottom from '../../components/Home/Bottom';

export default function Home() {
  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <TripItemGallery>
        <TripItemWrapper>
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
          <TripItem>
            <Travel.Date>2023.5.2 - 5.12</Travel.Date>
            <Travel.Title>도쿄 여행</Travel.Title>
            <Travel.DDay>D-4</Travel.DDay>
            <Travel.TodoBox>
              <Travel.Todo>여행가서 할거 1</Travel.Todo>
              <Travel.Todo>여행가서 할거 1</Travel.Todo>
              <Travel.Todo>여행가서 할거 1</Travel.Todo>
            </Travel.TodoBox>
            <NotYet.Split>
              <NotYet.SplitWrapper>
                <NotYet.Circle />
                <NotYet.Line src={'/images/line.svg'} />
                <NotYet.Circle />
              </NotYet.SplitWrapper>
            </NotYet.Split>
            <Travel.CloudBox>
              <Travel.PayCloud>장부 클라우드</Travel.PayCloud>
              <Travel.PhotoCloud>사진 클라우드</Travel.PhotoCloud>
            </Travel.CloudBox>
          </TripItem>
          <TripItem></TripItem>
        </TripItemWrapper>
      </TripItemGallery>
      <Bottom />
    </>
  );
}
const LogoWrapper = styled.div`
  margin-top: 23px;
  margin-bottom: 40px;
`;

const TripItemGallery = styled.div`
  width: 100%;
  height: 382px;
  overflow: hidden;
`;
const TripItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transform: translate(-27%, 0%);
  width: 216%;
`;
const TripItem = styled.div`
  width: 270px;
  height: 382px;
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

const Travel = {
  Date: styled.p`
    color: #000;
    margin: 24px 24px 12px 24px;
    font-family: Pretendard-Regular;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.408px;
  `,
  Title: styled.p`
    margin-left: 24px;
    margin-bottom: 12px;
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 91.667% */
    letter-spacing: -0.408px;
  `,
  DDay: styled.div`
    margin-left: 24px;
    display: inline-flex;
    padding: 2px 8px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 12px;
    border: 0.25px solid rgba(20, 34, 81, 0.06);
    background: #b1b1b1;
    color: white;
  `,
  TodoBox: styled.div`
    width: 197px;
    height: 125px;
    padding: 12px;
    margin: 0 auto;
    margin-top: 24px;
    flex-shrink: 0;
    border-radius: 13px;
    background: #ededed;
    display: flex;
    flex-direction: column;
  `,
  Todo: styled.p`
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.408px;
  `,
  CloudBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  `,
  PayCloud: styled.div`
    display: inline-flex;
    padding: 16px 19px 17px 19px;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    background: #efefef;
  `,
  PhotoCloud: styled.div`
    display: inline-flex;
    padding: 16px 12px 17px 12px;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    background: #efefef;
  `,
};
