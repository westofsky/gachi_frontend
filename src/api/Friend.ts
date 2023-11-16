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
