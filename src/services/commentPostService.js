import axios from "axios";
const baseUrl = "https://dummyapi.io/data/v1/" + "post";
const getComments = (id) => {
  const config = {
    headers: {
      "app-id": "62d2b9d46bf35195d497fe3c",
    },
  };
  const request = axios.get(`${baseUrl}/${id}/comment`, config);
  return request.then((response) => response.data);
};

export default { getComments };
