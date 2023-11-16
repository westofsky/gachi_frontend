export const getFriends = async () => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + 'friend/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access')}`,
      },
    });

    if (response.ok) {
      const responsedData = await response.json();
      return responsedData;
    } else {
      console.error('친구 가져오기 요청 실패:', response);
      throw new Error('친구 가져오기 요청 실패');
    }
  } catch (error) {
    console.error('친구 가져오기 중 오류 발생:', error);
    throw new Error('친구 가져오기 중 오류 발생');
  }
};
export const getFriendRequest = async () => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'friend/request/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      },
    );

    if (response.ok) {
      const responsedData = await response.json();
      return responsedData;
    } else {
      console.error('친구요청 가져오기 요청 실패:', response);
      throw new Error('친구요청 가져오기 요청 실패');
    }
  } catch (error) {
    console.error('친구요청 가져오기 중 오류 발생:', error);
    throw new Error('친구요청 가져오기 중 오류 발생');
  }
};
export const addFriend = async (sender: string, receiver: string) => {
  const data = {
    sender: sender,
    receiver: receiver,
  };
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'friend/request/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
        body: JSON.stringify(data),
      },
    );
    return response;
  } catch (error) {
    throw new Error('친구요청 가져오기 중 오류 발생');
  }
};
