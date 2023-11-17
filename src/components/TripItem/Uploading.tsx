import React from 'react';
import styled from 'styled-components';
export default function Uploading({text}: {text: string}) {
  return (
    <Wrapper>
      <img src="/images/Spinner.gif" width={'100px'} />
      <Text>{text}</Text>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(73, 72, 72, 0.8);
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.h2`
  color: white;
`;
