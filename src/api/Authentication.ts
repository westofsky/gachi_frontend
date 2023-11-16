export const refreshAccessToken = async (refresh: any) => {
  const response = await fetch(
    import.meta.env.VITE_API_URL + 'authentication/token/refresh/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({refresh: refresh}),
    },
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};
export const postRegisterUser = async (url: string, data: FormData) => {
  for (let value of data.values()) {
    console.log(value);
  }
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'authentication/' + url,
      {
        method: 'POST',
        body: data,
      },
    );
    const responsedData = await response.json();
    return responsedData;
  } catch (error) {
    throw new Error('회원가입 오류');
  }
};

export const getLoginUser = async (
  url: string,
  email: string,
  password: string,
) => {
  const data = {
    email: email,
    password: password,
  };
  try {
    const response = await fetch(
      import.meta.env.VITE_API_URL + 'authentication/' + url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error('로그인 오류');
  }
};
