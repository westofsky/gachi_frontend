import React, {ChangeEvent, useEffect, useState} from 'react';
import Logo from '../../components/Main/Logo';
import styled from 'styled-components';
import Bottom from '../../components/Home/Bottom';
import {useRecoilState, useRecoilValue} from 'recoil';
import {isAddTripState, userInfoState} from '../../atoms/atom';
import {WiDirectionLeft} from 'react-icons/wi';
import AddTripComponent from '../../components/Bottom/AddTripComponent';
import InviteTripModal from '../../components/TripItem/InviteTrip/InviteTripModal';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {getTripInfo} from '../../api/Trip';
import {
  deleteImage,
  getMyImages,
  getTripImages,
  uploadImage,
} from '../../api/Image';
import {getUserImage} from '../../utils/getUserImage';
import Uploading from '../../components/TripItem/Uploading';
interface FileData {
  id: number;
  trip: number;
  image: string;
  upload_date: string;
}
interface TripInfoProps {
  id: number;
  place: string;
  departing_date: string;
  arriving_date: string;
  users: Array<string>;
}
interface InTripUserProps {
  map(arg0: (user: any) => React.JSX.Element): React.ReactNode;
  email: string;
  imgSrc: string;
}
export default function TravelItem() {
  const navigate = useNavigate();
  const [isAdd, setIsAdd] = useRecoilState(isAddTripState);
  const [isInvite, setIsInvite] = useState(false);
  const [Files, setFiles] = useState<FileData[]>([]);
  const {travelNumber} = useParams();
  const [tripInfo, setTripInfo] = useState<TripInfoProps>();
  const [inTripUser, setInTripUser] = useState<InTripUserProps>();
  const [showUserImage, setShowUserImage] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const userEmail = useRecoilValue(userInfoState);
  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);

    setIsUpload(true);
    try {
      await Promise.all(
        files.map(async (file) => {
          if (!file.name.match(/.(jpg|jpeg|png)$/i)) {
            alert('jpg, jpeg, png만 넣어주세요.');
            return;
          }

          const date = new Date();
          const year = date.getFullYear();
          const month = ('0' + (date.getMonth() + 1)).slice(-2);
          const day = ('0' + date.getDate()).slice(-2);
          const dateStr = `${year}-${month}-${day}`;

          const sendData = new FormData();
          if (travelNumber) sendData.append('trip', travelNumber);
          sendData.append('image', file);
          sendData.append('upload_date', dateStr);

          const response = await uploadImage(sendData);
        }),
      );
    } catch (error) {
      console.error('File upload error:', error);
    }
    setIsUpload(false);
  };
  const handleShowMine = async () => {
    try {
      setIsUpload(true);
      const response = await getMyImages(travelNumber, userEmail.email);
      if (response.ok) {
        const data = await response.json();
        setFiles(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsUpload(false);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      const userConfirm = confirm('해당 사진을 삭제하시겠습니까?');
      if (userConfirm) {
        const response = await deleteImage(id.toString());
        if (response.ok) {
          alert('삭제되었습니다.');
        }
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  useEffect(() => {
    const getTrip = async () => {
      const response = await getTripInfo(travelNumber);
      setTripInfo(response);
      if (response && response.users) {
        const userImages = await Promise.all(
          response.users.map((user: string) => getUserImage(user)),
        );

        const inTripUsers = response.users.map(
          (user: string, index: number) => ({
            email: user,
            imgSrc: userImages[index],
          }),
        );

        setInTripUser(inTripUsers);
      }
    };
    getTrip();
  }, [travelNumber]);
  useEffect(() => {
    const getTripImage = async () => {
      if (showUserImage) {
      } else {
        const response = await getTripImages(travelNumber);
        console.log(response);
        setFiles(response);
      }
    };
    getTripImage();
  }, [showUserImage, travelNumber, isUpload]);
  if (!tripInfo) {
    return <Uploading text="여행 정보를 가져오는 중" />;
  }
  return (
    <>
      {isUpload && <Uploading text="업로드 중" />}
      {isAdd && <AddTripComponent />}
      {isInvite && <InviteTripModal onClick={setIsInvite} />}
      <LogoWrapper>
        <GoToBefore
          onClick={() => {
            navigate(-1);
          }}
        >
          <WiDirectionLeft color="#718fce" />
        </GoToBefore>
        <Logo title={tripInfo.place} />
        <TripDate>{`${tripInfo.departing_date} ~ ${tripInfo.arriving_date}`}</TripDate>
        <InviteTrip onClick={() => setIsInvite(true)}>+</InviteTrip>
      </LogoWrapper>
      <Profile.Wrapper>
        {inTripUser &&
          inTripUser.map((user) => (
            <Profile.Item key={user.email} src={user.imgSrc} />
          ))}
      </Profile.Wrapper>
      <Image.Wrapper>
        {Files.length > 0 ? (
          <FileWrapper>
            {Files.map((data, index) => {
              const {image} = data;
              return (
                <FileAtcBox key={index}>
                  <FileDeleteBtn onClick={() => handleDelete(data.id)}>
                    X
                  </FileDeleteBtn>
                  <FileImage>
                    {' '}
                    <FileImageImage src={image} alt="" />
                  </FileImage>
                  {/* <FileDetail>{filename.substring(0, 4) + '...'}</FileDetail> */}
                </FileAtcBox>
              );
            })}
            <GetMine onClick={handleShowMine}>내가 나온 사진 보기</GetMine>
          </FileWrapper>
        ) : (
          <Image.EmptyImage>이미지가 없습니다.</Image.EmptyImage>
        )}
      </Image.Wrapper>
      <Image.AddButton>
        <FileUploadInput
          type="file"
          id="fileupload"
          className="file-upload-input"
          multiple
          onChange={handleFileUpload}
        />
        이미지 추가
      </Image.AddButton>
      <Bottom />
    </>
  );
}
const GoToBefore = styled.div`
  font-size: 30px;
  margin: auto;
  margin-bottom: 0;
  cursor: pointer;
`;
const LogoWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 20px;
  display: flex;
  gap: 4px;
`;
const TripDate = styled.div`
  color: #8f8484;
  margin: auto 0;
`;

const InviteTrip = styled.div`
  margin: auto;
  margin-bottom: 0;
  color: #718fce;
  font-size: 30px;
  cursor: pointer;
`;

const Profile = {
  Wrapper: styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    padding-left: 24px;
  `,
  Item: styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
  `,
};

const Image = {
  Wrapper: styled.div`
    margin: 0 auto;
    margin-top: 12px;
    background: #cbf1f5;
    width: 85%;
    height: 50%;
    border-radius: 20px;
    overflow: auto;
  `,
  AddButton: styled.div`
    margin: 0 auto;
    margin-top: 24px;
    width: 50%;
    height: 48px;
    background: #a6e3e9;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  `,
  EmptyImage: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  `,
};

const FileWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 15px;
  padding-bottom: 100px;
  position: relative;
`;
const FileUploadInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

const FileAtcBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 70px;
`;

const FileDeleteBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  background: white;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 15px;
  width: 15px;
  font-size: 14px;
  cursor: pointer;
`;
const FileImage = styled.div`
  width: 70px;
  height: 70px;
  background-size: cover;
  border-radius: 5px;
  background-color: #eaecf1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #475f7b;
`;

const FileImageImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const GetMine = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background: #3e4c7a;
  color: white;
  position: fixed;
  bottom: 29%;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
