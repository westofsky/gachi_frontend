import React, {useEffect, useState} from 'react';
import {styled} from 'styled-components';
import {GrAdd} from 'react-icons/gr';
import {getUserImage} from '../../utils/getUserImage';
import {processFriendRequest} from '../../api/Friend';
import {processTripRequest} from '../../api/Trip';

interface NoticeInfoProps {
  src: string;
  email: string;
  type: string;
  inviteName?: string;
  id: number;
  tripId?: number;
}
export default function Notice({
  src,
  email,
  type,
  inviteName,
  id,
  tripId,
}: NoticeInfoProps) {
  const [userImage, setUserImage] = useState();
  const handleAccept = async () => {
    if (type === 'friend') {
      const response = await processFriendRequest(id, 'accept');
      alert(response);
    } else {
      const response = await processTripRequest(id, 'accept');
      alert(response);
    }
  };
  const handleReject = async () => {
    if (type === 'friend') {
      const response = await processFriendRequest(id, 'reject');
      alert(response);
    } else {
      const response = await processTripRequest(id, 'reject');
      alert(response);
    }
  };
  useEffect(() => {
    const getImage = async () => {
      const imageSrc = await getUserImage(src);
      console.log(imageSrc);
      setUserImage(imageSrc);
    };
    getImage();
  }, [src]);
  return (
    <NoticeWrapper>
      <NoticeInfo>
        <NoticeProfile src={userImage} />
        <NoticeEmail>
          {email}으로부터
          {type === 'friend'
            ? ' 친구 요청이 왔습니다.'
            : ` ${inviteName} 초대 받았습니다.`}
        </NoticeEmail>
        <ButtonWrapper>
          <Accept onClick={handleAccept}>수락</Accept>
          <Reject onClick={handleReject}>거절</Reject>
        </ButtonWrapper>
      </NoticeInfo>
    </NoticeWrapper>
  );
}

const NoticeWrapper = styled.div`
  width: 320px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
`;

const NoticeInfo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 0.9em;
`;

const NoticeProfile = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;

const NoticeEmail = styled.div`
  margin-left: 10px;

  word-break: break-all;
  width: 158px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const Accept = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 22px;
  background: #242290;
  color: white;
  cursor: pointer;
`;
const Reject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 22px;
  background: #db4e4e;
  color: white;
  cursor: pointer;
`;
