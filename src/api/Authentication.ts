export const registerUser = async (url: string) => {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log(response);
  } catch (error) {
    throw new Error('회원가입 오류');
  }
};
