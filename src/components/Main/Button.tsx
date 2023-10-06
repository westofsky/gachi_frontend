import React from 'react';
import styled from 'styled-components';

// 컴포넌트의 props 타입을 정의합니다.
interface ButtonProps {
  state: boolean;
  text: string;
}

export default function Button({state, text}: ButtonProps) {
  return <LoginButton $state={state}>{text}</LoginButton>;
}

const LoginButton = styled.div<{$state: boolean}>`
  width: 333px;
  margin: 0 auto;
  padding: 18px 16px;
  border-radius: 43px;
  background: ${(props) => (props.$state ? '#2d3ba8' : '#f8f8f8')};
  color: ${(props) => (props.$state ? '#fff' : 'black')};
  backdrop-filter: blur(40px);
  cursor: pointer;
`;
