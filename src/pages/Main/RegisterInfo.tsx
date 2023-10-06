import React from 'react';
import Logo from '../../components/Main/Logo';
import styled from 'styled-components';
import Button from '../../components/Main/Button';
import {useNavigate} from 'react-router-dom';
export default function RegisterInfo() {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/');
  };
  return (
    <>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Title>회원가입</Title>
      <Form.Wrapper>
        <Form.Content>
          <Form.Title>이름/닉네임</Form.Title>
          <Form.Input />
        </Form.Content>
        <Form.Content>
          <Form.Title>성별</Form.Title>
          <Form.GenderWrapper>
            <Form.Gender>남자</Form.Gender>
            <Form.Gender>여자</Form.Gender>
          </Form.GenderWrapper>
        </Form.Content>
        <Form.Content>
          <Form.Title>생년월일</Form.Title>
          <Form.DateWrapper>
            <Form.InputDate placeholder="YYYY" />
            <Form.InputDate placeholder="MM" />
            <Form.InputDate placeholder="DD" />
          </Form.DateWrapper>
        </Form.Content>
      </Form.Wrapper>
      <LoginButtonWrapper onClick={handleRegister}>
        <Button state={false} text="회원가입" />
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
  GenderWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    margin-top: 16px;
  `,
  Gender: styled.div`
    display: flex;
    width: 150px;
    height: 8px;
    padding: 18px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 43px;
    background: #f8f8f8;
    backdrop-filter: blur(40px);
    cursor: pointer;
  `,
  DateWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  InputDate: styled.input`
    width: 60px;
    padding: 11px;
    margin: 16px 8px 0px 24px;
    border: none;
    outline: none;
    border-bottom: 2px solid #d1d1d4;
    text-align: center;
  `,
};
const LoginButtonWrapper = styled.div`
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
`;
