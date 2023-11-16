import {getImage} from '../api/Image';

export const getUserImage = async (email: string) => {
  const response = await getImage(email);

  return `http://123.108.168.190:8000${response}`;
};
