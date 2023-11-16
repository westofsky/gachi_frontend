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
