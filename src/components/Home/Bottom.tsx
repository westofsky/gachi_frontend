import React from 'react';
import styled from 'styled-components';

export default function Bottom() {
  return (
    <BottomWrapper>
      <MenuWrapper>
        <IconWrapper>
          <MenuIcon src={'/images/home.svg'} />
          <MenuName>홈화면</MenuName>
        </IconWrapper>
        <IconWrapper>
          <MenuIcon src={'/images/travel.svg'} />
          <MenuName>관광지</MenuName>
        </IconWrapper>
        <IconWrapper>
          <MenuIcon src={'/images/person.svg'} />
          <MenuName>마이페이지</MenuName>
        </IconWrapper>
      </MenuWrapper>
    </BottomWrapper>
  );
}
const BottomWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: #a7a7a7;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
`;
const MenuWrapper = styled.div`
  display: flex;
  gap: 48px;
  padding: 24px;
  padding-left: 40px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;
const MenuIcon = styled.img`
  width: 28px;
  height: 28px;
`;
const MenuName = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 107.692% */
  letter-spacing: -0.5px;
`;
