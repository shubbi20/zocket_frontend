const apiUrl = "http://localhost:8000";

export default apiUrl;

export const getProductApi = async (token: string) => {
  try {
    const url = apiUrl + "/product";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      if (data.error) {
        return [null, data.error];
      } else {
        return [null, data.message];
      }
    }

    return [data, null];
  } catch (err: any) {
    return [
      null,
      {
        error: "Error,Failed to fetch data",
      },
    ];
  }
};
