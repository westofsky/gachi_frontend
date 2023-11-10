import React from 'react';
import styled from 'styled-components';

export default function Logo({title}: {title: string}) {
  return <LogoWrapper>{title}</LogoWrapper>;
}

const LogoWrapper = styled.div`
  color: #71c9ce;
  font-family: Pretendard-Bold;
  font-size: 24px;
`;
