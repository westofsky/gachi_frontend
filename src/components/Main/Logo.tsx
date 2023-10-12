import React from 'react';
import styled from 'styled-components';

export default function Logo({title}: {title: string}) {
  return <LogoWrapper>{title}</LogoWrapper>;
}

const LogoWrapper = styled.div`
  margin-top: 23px;
  margin-left: 33px;
  color: #4b4b4b;
  font-family: Pretendard-Bold;
  font-size: 24px;
`;
