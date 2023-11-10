import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import Notice from './Notice';
export default function NotificationModal({onClick}) {
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
        <AddTripTitle>알람 관리</AddTripTitle>
        <NoticeListWrapper>
          <Notice
            src="/images/sample.png"
            email="clcc001@naver.com"
            type="friend"
          />
          <Notice
            src="/images/sample.png"
            email="westofsky1591@gamil.com"
            type="friend"
          />
          <Notice
            src="/images/sample.png"
            email="clcc001@naver.com"
            type="friend"
          />
          <Notice
            src="/images/sample.png"
            email="clcc001@naver.com"
            type="invite"
            inviteName="도쿄 여행"
          />
        </NoticeListWrapper>
        <AddButton onClick={() => addTravel()}>알람 관리 완료</AddButton>
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

const NoticeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
