import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import EmptyTripCard from './EmptyTripCard';
import {useNavigate} from 'react-router-dom';
import {setMemo} from '../../api/Trip';
interface TripCardProps {
  date: string;
  tripName: string;
  dday: string;
  id: number;
  memo: string;
  onClick: () => void;
}
export default function TripCard({
  date,
  tripName,
  dday,
  id,
  memo,
  onClick,
}: TripCardProps) {
  const navigate = useNavigate();
  const [memoMode, setMemoMode] = useState(false);
  const [memos, setMemos] = useState(memo);

  const reviseMemo = () => {
    const response = setMemo(id, memos);
    console.log(response);
  };
  return (
    <>
      {!tripName ? (
        <EmptyTripCard />
      ) : (
        <TripItem onClick={onClick}>
          <Travel.Date>{date}</Travel.Date>
          <Travel.Title>{tripName}</Travel.Title>
          <Travel.DDay>{`D ${dday}일`}</Travel.DDay>
          <Travel.TodoBox>
            {memoMode ? (
              <>
                <Travel.TextArea
                  value={memos}
                  onChange={(event) => setMemos(event.target.value)}
                />
                <div style={{display: 'flex', marginTop: '10px', gap: '4px'}}>
                  <Travel.MemoAccept onClick={() => reviseMemo()}>
                    메모수정
                  </Travel.MemoAccept>
                  <Travel.MemoReject onClick={() => setMemoMode(false)}>
                    취소
                  </Travel.MemoReject>
                </div>
              </>
            ) : (
              <>{memos}</>
            )}
          </Travel.TodoBox>
          <NotYet.Split>
            <NotYet.SplitWrapper>
              <NotYet.Circle />
              <NotYet.Line src={'/images/line.svg'} />
              <NotYet.Circle />
            </NotYet.SplitWrapper>
          </NotYet.Split>
          <Travel.CloudBox>
            <Travel.EditMemo onClick={() => setMemoMode(true)}>
              메모 수정
            </Travel.EditMemo>
            <Travel.PhotoCloud onClick={() => navigate('/travel-list/' + id)}>
              사진 보기
            </Travel.PhotoCloud>
          </Travel.CloudBox>
        </TripItem>
      )}
    </>
  );
}

const TripItem = styled.div`
  width: 270px;
  cursor: pointer;
  height: 415px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 21px 0px rgba(0, 0, 0, 0.08);
`;

const NotYet = {
  Wrapper: styled.div`
    height: 170px;
    position: relative;
  `,
  Cloud: styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  `,
  Plane: styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-2%, -23%);
  `,
  TextWrapper: styled.div`
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,
  TextBold: styled.p`
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 20px;
  `,
  TextRegular: styled.p`
    color: #000;
    font-family: Pretendard-Regular;
    font-size: 12px;
  `,
  Split: styled.div`
    width: 100%;
    overflow: hidden;
  `,
  SplitWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200%;
    transform: translate(-25%, 0%);
  `,
  Circle: styled.div`
    width: 28.893px;
    height: 28.924px;
    background: #f8f8f8;
    border-radius: 15px;
  `,
  Line: styled.img`
    width: 237.379px;
    height: 3px;
    flex-shrink: 0;
    stroke-width: 2px;
    stroke: #c0c0c0;
  `,
  Button: styled.div`
    margin: 0 auto;
    margin-top: 30px;
    width: 150px;
    padding: 8px 30px 8px 30px;
    border-radius: 60px;
    border: 1px solid #e4e4e4;
    background: #efefef;
    text-align: center;
    cursor: pointer;
  `,
};

const Travel = {
  Date: styled.p`
    color: #000;
    margin: 24px 24px 12px 24px;
    font-family: Pretendard-Regular;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.408px;
  `,
  Title: styled.p`
    margin-left: 24px;
    margin-bottom: 12px;
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px; /* 91.667% */
    letter-spacing: -0.408px;
  `,
  DDay: styled.div`
    margin-left: 24px;
    display: inline-flex;
    padding: 2px 8px;
    align-items: flex-start;
    gap: 8px;
    border-radius: 12px;
    border: 0.25px solid rgba(20, 34, 81, 0.06);
    background: #e3fdfd;
    color: black;
  `,
  TodoBox: styled.div`
    width: 197px;
    height: 125px;
    padding: 12px;
    margin: 0 auto;
    margin-top: 24px;
    flex-shrink: 0;
    border-radius: 13px;
    background: #e3fdfd;
    display: flex;
    flex-direction: column;
  `,
  TextArea: styled.textarea`
    width: 90%;
    height: 90%;
    padding: 10px;
  `,
  MemoAccept: styled.div`
    width: 48%;
    background-color: #71c9ce;
    color: white;
    border-radius: 10px;
    text-align: center;
    padding: 5px;
    cursor: pointer;
  `,
  MemoReject: styled.div`
    width: 48%;
    background-color: red;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
  `,
  Todo: styled.p`
    color: #000;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 183.333% */
    letter-spacing: -0.408px;
  `,
  CloudBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  `,
  EditMemo: styled.div`
    display: inline-flex;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    background: #e3fdfd;
    word-break: keep-all;
    text-align: center;
    cursor: pointer;
  `,
  PhotoCloud: styled.div`
    display: inline-flex;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #e4e4e4;
    background: #e3fdfd;
    word-break: keep-all;
    text-align: center;
    cursor: pointer;
  `,
};
