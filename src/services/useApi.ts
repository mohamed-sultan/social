export const Fetch = async ({
  url = '',
  method = '',
  body,
  params = undefined,
}: any) => {
  const config = {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(
      url,
      config,
    );
   
    return response.json();
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
