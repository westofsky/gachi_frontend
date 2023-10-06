import React from 'react';
import styled from 'styled-components';
export const Header = () => {
  return (
    <Wrapper>
      <Info.Wrapper>
        <Info.Time>9:41</Info.Time>
        <Info.Logo src={'/images/status-bar-right-side.svg'} />
      </Info.Wrapper>
      <NotchWrapper src={'/images/status-bar-notch.svg'} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 393px;
  height: 2.68rem;
  position: relative;
`;
const Info = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Time: styled.span`
    padding-left: 48px;
    font-size: 17px;
    line-height: 22px;
  `,
  Logo: styled.img`
    height: 13px;
    padding-right: 28px;
  `,
};

const NotchWrapper = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0%);
`;
