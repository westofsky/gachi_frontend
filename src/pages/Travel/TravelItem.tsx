import React from 'react';
import Logo from '../../components/Main/Logo';
import styled from 'styled-components';
import Bottom from '../../components/Home/Bottom';
import {useRecoilState} from 'recoil';
import {selectedTravelItemState} from '../../atoms/atom';
import {WiDirectionLeft} from 'react-icons/wi';
export default function TravelItem() {
  const [tripItem, setTripItem] = useRecoilState(selectedTravelItemState);
  return (
    <>
      <LogoWrapper>
        <GoToBefore>
          <WiDirectionLeft color="#718fce" />
        </GoToBefore>
        <Logo title={tripItem.title} />
        <TripDate>2023.03.20 ~ 2023.03.29</TripDate>
        <InviteTrip>+</InviteTrip>
      </LogoWrapper>
      <Profile.Wrapper>
        <Profile.Item src="/images/sample.png" />
        <Profile.Item src="/images/sample.png" />
        <Profile.Item src="/images/sample.png" />
      </Profile.Wrapper>
      <Image.Wrapper></Image.Wrapper>
      <Image.AddButton>이미지 추가</Image.AddButton>
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
    width: 80%;
    height: 50%;
    border-radius: 20px;
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
  `,
};
