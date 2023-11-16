import {getImage} from '../api/Image';

export const getUserImage = async (email: string) => {
  const response = await getImage(email);
  return response.image;
};
