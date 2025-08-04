import axios from "axios";

const baseUrl = "https://restcountries.com/v3.1/all";

const get = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

export default {
  get,
};
