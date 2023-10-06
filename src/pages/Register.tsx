import React from 'react';
import Logo from '../components/Main/Logo';
import styled from 'styled-components';
import Button from '../components/Main/Button';
import {useNavigate} from 'react-router-dom';
export default function Register() {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/registerInfo');
  };
  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Title>회원가입</Title>
      <Form.Wrapper>
        <Form.Content>
          <Form.Title>이메일 주소</Form.Title>
          <Form.Input placeholder="예) gachi@gachi.com"></Form.Input>
        </Form.Content>
        <Form.Content>
          <Form.Title>비밀번호</Form.Title>
          <Form.Input type="password"></Form.Input>
        </Form.Content>
        <Form.Content>
          <Form.Title>비밀번호확인</Form.Title>
          <Form.Input type="password"></Form.Input>
        </Form.Content>
      </Form.Wrapper>
      <LoginButtonWrapper onClick={handleNext}>
        <Button state={false} text="다음" />
      </LoginButtonWrapper>
    </>
  );
}

const LogoWrapper = styled.div`
  margin-top: 23px;
  margin-bottom: 40px;
`;
const Title = styled.p`
  margin-left: 26px;
  margin-bottom: 40px;
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
`;
const Form = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.p`
    padding-left: 23px;
    font-family: Pretendard-Regular;
  `,
  Input: styled.input`
    width: 333px;
    padding: 11px 16px 11px 0px;
    margin: 0px 8px 0px 24px;
    border: none;
    outline: none;
    border-bottom: 2px solid #d1d1d4;
  `,
};
const LoginButtonWrapper = styled.div`
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
