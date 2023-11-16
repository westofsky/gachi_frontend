import React, {ChangeEvent, useEffect, useState} from 'react';
import Logo from '../../components/Main/Logo';
import styled from 'styled-components';
import Bottom from '../../components/Home/Bottom';
import {useRecoilState} from 'recoil';
import {isAddTripState, selectedTravelItemState} from '../../atoms/atom';
import {WiDirectionLeft} from 'react-icons/wi';
import AddTripComponent from '../../components/Bottom/AddTripComponent';
import InviteTripModal from '../../components/TripItem/InviteTrip/InviteTripModal';
import shortid from 'https://cdn.skypack.dev/shortid@2.2.16';
import {useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {getTripInfo} from '../../api/Trip';
import {getUserImage} from '../../utils/getUserImage';
interface FileData {
  id: string;
  filename: string;
  filetype: string;
  fileimage: string;
  datetime: string;
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
  const [tripItem, setTripItem] = useRecoilState(selectedTravelItemState);
  const [Files, setFiles] = useState<FileData[]>([]);
  const {travelNumber} = useParams();
  const [tripInfo, setTripInfo] = useState<TripInfoProps>();
  const [inTripUser, setInTripUser] = useState<InTripUserProps>();
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const images: File[] = [];

    files.forEach((file) => {
      if (!file.name.match(/.(jpg|jpeg|png)$/i)) {
        alert('jpg,jpeg,png만 넣어주세요.');
        return;
      }
      images.push(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFiles((preValue) => [
          ...preValue,
          {
            id: shortid.generate(),
            filename: file.name,
            filetype: file.type,
            fileimage: reader.result as string,
            datetime: file.lastModified.toLocaleString('ko-KR'),
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
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

  if (!tripInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
              const {id, filename, filetype, fileimage, datetime, filesize} =
                data;
              return (
                <FileAtcBox key={index}>
                  <FileImage>
                    {' '}
                    <FileImageImage src={fileimage} alt="" />
                  </FileImage>
                  {/* <FileDetail>{filename.substring(0, 4) + '...'}</FileDetail> */}
                </FileAtcBox>
              );
            })}
            <GetMine>내가 나온 사진 보기</GetMine>
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
  width: 70px;
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
