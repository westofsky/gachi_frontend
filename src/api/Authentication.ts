export const postRegisterUser = async (url: string, data: FormData) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'authentication/' + url,
      {
        method: 'POST',
        headers: {
          'Content-type': 'multipart/form-data',
        },
      },
    );
    console.log(response);
    return response;
  } catch (error) {
    throw new Error('회원가입 오류');
  }
};
