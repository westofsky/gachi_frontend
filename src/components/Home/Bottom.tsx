import React, {useState} from 'react';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {isAddTripState} from '../../atoms/atom';
import {useNavigate} from 'react-router-dom';
import AddFriendModal from '../Bottom/AddFriendModal';

export default function Bottom() {
  const [isAdd, setIsAdd] = useRecoilState(isAddTripState);
  const [showFriend, setShowFriend] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {showFriend && <AddFriendModal onClick={setShowFriend} />}
      <BottomWrapper>
        <MenuWrapper>
          <IconWrapper onClick={() => navigate('/home')}>
            <MenuIcon src={'/images/home.svg'} />
            <MenuName>홈화면</MenuName>
          </IconWrapper>
          <IconWrapper onClick={() => setShowFriend(true)}>
            <MenuIcon src={'/images/person.svg'} />
            <MenuName>친구목록</MenuName>
          </IconWrapper>
          <IconWrapper>
            <MenuIcon src={'/images/setting.svg'} />
            <MenuName>마이페이지</MenuName>
          </IconWrapper>
        </MenuWrapper>
        <OutCircle>
          <InCircle onClick={() => setIsAdd(true)}>
            <AddTrip src={'/images/airplane-ticket.svg'} />
          </InCircle>
        </OutCircle>
      </BottomWrapper>
    </>
  );
}
const BottomWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: #71c9ce;
  border-bottom-right-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
`;
const MenuWrapper = styled.div`
  display: flex;
  gap: 48px;
  padding: 24px;
  padding-left: 40px;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;
const MenuIcon = styled.img`
  width: 28px;
  height: 28px;
`;
const MenuName = styled.p`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 107.692% */
  letter-spacing: -0.5px;
`;
const OutCircle = styled.div`
  display: flex;
  background-color: #71c9ce;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  position: absolute;
  right: 10px;
  bottom: 45px;
`;
const InCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  cursor: pointer;
`;
const AddTrip = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;
