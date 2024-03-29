import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import {useRecoilState} from 'recoil';
import {isAddTripState} from '../../atoms/atom';
export default function AddTripComponent() {
  const [isAdd, setIsAdd] = useRecoilState(isAddTripState);
  const datePickerFormat = 'YYYY-MM-DD';
  const [startDate, setStartDate] = useState('');
  const startDateChange = (date) => {
    const formattedDate = dayjs(date).format(datePickerFormat);
    setStartDate(() => formattedDate);
  };
  const [endDate, setEndDate] = useState('');
  const endDateChange = (date) => {
    const formattedDate = dayjs(date).format(datePickerFormat);
    setEndDate(() => formattedDate);
  };
  const modalRef = useRef(null);
  const modalOutClick = (e) => {
    if (modalRef.current === e.target) {
      setIsAdd(false);
    }
  };
  const addTravel = () => {
    setIsAdd(false);
  };
  return (
    <Wrapper
      ref={modalRef}
      onClick={(e) => {
        modalOutClick(e);
      }}
    >
      <ContentWrapper>
        <AddTripTitle>여행 추가</AddTripTitle>
        <DatePick>
          <DateSelectBox>
            <DateSelectName>출발</DateSelectName>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="출발 날짜를 선택해주세요"
                  slotProps={{
                    textField: {
                      size: 'small',
                    },
                  }}
                  format="YYYY / MM / DD"
                  value={startDate}
                  onChange={(newValue) => {
                    startDateChange(newValue);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </DateSelectBox>
          <DateSelectBox>
            <DateSelectName>도착</DateSelectName>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="도착 날짜를 선택해주세요"
                  slotProps={{
                    textField: {
                      size: 'small',
                    },
                  }}
                  format="YYYY / MM / DD"
                  value={endDate}
                  onChange={(newValue) => {
                    endDateChange(newValue);
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </DateSelectBox>
          <DateSelectBox>
            <DateSelectName>장소</DateSelectName>
            <LocationInput placeholder="여행지를 입력해주세요" />
          </DateSelectBox>
        </DatePick>
        <AddButton onClick={() => addTravel()}>여행 추가 완료</AddButton>
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
  margin-bottom: 100px;
`;
const DatePick = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DateSelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;
const DateSelectName = styled.p`
  font-family: Pretendard-Bold;
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

const LocationInput = styled.input`
  width: 240px;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;
