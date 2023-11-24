import {getImage} from '../api/Image';

export const getUserImage = async (email: string) => {
  const response = await getImage(email);

  return `http://13.211.81.176:80${response}`;
};
