import React from 'react';
import styled from 'styled-components';

// 컴포넌트의 props 타입을 정의합니다.
interface ButtonProps {
  state: boolean;
  text: string;
  size: number;
}

export default function Button({state, text, size}: ButtonProps) {
  return (
    <LoginButton $state={state} $size={size}>
      {text}
    </LoginButton>
  );
}

const LoginButton = styled.div<{$state: boolean; $size: number}>`
  width: ${(props) => `${props.$size}px`};
  margin: 0 auto;
  padding: 18px 16px;
  border-radius: 43px;
  background: ${(props) => (props.$state ? '#2d3ba8' : '#f8f8f8')};
  color: ${(props) => (props.$state ? '#fff' : 'black')};
  backdrop-filter: blur(40px);
  cursor: pointer;
`;
