export const getImage = async (email: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'image?email=' + email,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      },
    );
    const responsedData = await response.json();
    return responsedData.face_image;
  } catch (error) {
    throw new Error();
  }
};
export const getTripImages = async (id: string | undefined) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'image/' + id + '/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      },
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error('여행 이미지 가져오는 중 오류 발생');
  }
};
export const getMyImages = async (id: string | undefined, email: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'image/' + id + '/email=' + email,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      },
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error('여행 이미지 가져오는 중 오류 발생');
  }
};
export const uploadImage = async (data: FormData) => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + 'image/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
      body: data,
    });
    const responsedData = await response.json();
    return responsedData;
  } catch (error) {
    throw new Error('이미지 업로드 오류');
  }
};

export const deleteImage = async (id: string) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'image/' + id + '/',
      {
        method: 'Delete',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      },
    );
    return response;
  } catch (error) {
    throw new Error('여행 이미지 가져오는 중 오류 발생');
  }
};
