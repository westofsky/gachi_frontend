import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import Notice from './Notice';
import {getFriendRequest} from '../../api/Friend';
import {getTripRequest} from '../../api/Trip';
interface friendProps {
  id: number;
  sender: string;
  receiver: string;
}
interface tripProps {
  id: number;
  trip: number;
  sender: string;
  receiver: string;
}
export default function NotificationModal({onClick}: any) {
  const [noticeFriend, setNoticeFriend] = useState([]);
  const [noticeTrip, setNoticeTrip] = useState([]);
  const modalRef = useRef(null);
  const modalOutClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      onClick(false);
    }
  };
  const addTravel = () => {
    onClick(false);
  };
  useEffect(() => {
    const fetchNotice = async () => {
      const responseFriend = await getFriendRequest();
      setNoticeFriend(responseFriend);
      const responseTrip = await getTripRequest();
      setNoticeTrip(responseTrip);
    };
    fetchNotice();
  }, [noticeFriend, noticeTrip]);
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
          {noticeFriend.map((friend: friendProps) => (
            <Notice
              key={friend.id}
              src={friend.sender}
              id={friend.id}
              email={friend.sender}
              type="friend"
            />
          ))}
          {noticeTrip.map((tripItem: tripProps) => (
            <Notice
              key={tripItem.id}
              src={tripItem.sender}
              id={tripItem.id}
              tripId={tripItem.trip}
              email={tripItem.sender}
              type="invite"
            />
          ))}
          {/* <Notice
            src="/images/sample2.png"
            email="westofsky1591@gamil.com"
            type="friend"
          />
          <Notice
            src="/images/sample3.png"
            email="linjgg99@naver.com"
            type="friend"
          /> */}
          {/* <Notice
            src="/images/sample4.png"
            email="hongonh@naver.com"
            type="invite"
            inviteName="도쿄 여행"
          /> */}
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
