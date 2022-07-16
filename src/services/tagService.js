/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
const baseUrl = "https://dummyapi.io/data/v1/" + "tag";
const getAllTags = () => {
  const config = {
    headers: {
      "app-id": "62d2b9d46bf35195d497fe3c",
    },
  };
  const request = axios.get(`${baseUrl}`, config);
  return request.then((response) => response.data);
};

const getByTag = (tag, numberPage = 0) => {
  const config = {
    headers: {
      "app-id": "62d2b9d46bf35195d497fe3c",
    },
  };
  const request = axios.get(
    `${baseUrl}/${tag}/post?limit=20&page=${numberPage}`,
    config
  );
  return request.then((response) => response.data);
};

export default { getAllTags, getByTag };
