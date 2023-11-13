import React, {useRef} from 'react';
import styled from 'styled-components';
import Friend from './Friend';
export default function InviteTripModal({onClick}: any) {
  const modalRef = useRef(null);
  const modalOutClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      onClick(false);
    }
  };
  const addTravel = () => {
    onClick(false);
  };
  return (
    <Wrapper
      ref={modalRef}
      onClick={(e) => {
        modalOutClick(e);
      }}
    >
      <ContentWrapper>
        <AddTripTitle>여행 초대</AddTripTitle>
        <FriendListWrapper>
          <Friend src="/images/sample.png" email="clcc001@naver.com" />
          <Friend src="/images/sample2.png" email="westofsky159@gmail.com" />
          <Friend src="/images/sample3.png" email="limj99@naver.com" />
          <Friend src="/images/sample4.png" email="hongildong@naver.com" />
        </FriendListWrapper>
        <AddButton onClick={() => addTravel()}>여행 초대 완료</AddButton>
      </ContentWrapper>
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
`;
const ContentWrapper = styled.div`
  background: #fff;
  width: 80%;
  height: 80%;
  border-radius: 1rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const AddTripTitle = styled.p`
  font-family: Pretendard-Bold;
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
`;
const AddButton = styled.div`
  padding: 10px;
  background: #3e4c7a;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin-top: auto;
  cursor: pointer;
`;

const FriendListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
