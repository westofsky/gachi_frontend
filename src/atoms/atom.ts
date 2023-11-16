import {atom} from 'recoil';

export const isAddTripState = atom({
  key: 'isAddTripState',
  default: false,
});

export const selectedTravelItemState = atom({
  key: 'selectedTravelItemState',
  default: {
    date: '',
    title: '',
  },
});

export const userInfoState = atom({
  key: 'userInfoState',
  default: {
    email: '',
  },
});
