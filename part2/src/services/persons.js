import axios from "axios";

const baseUrl = "http://localhost:3001/api/persons";

const get = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const post = (newPerson) => {
  const req = axios.post(baseUrl, newPerson);
  return req.then((res) => res.data);
};

const put = (id, updatedPerson) => {
  const req = axios.put(`${baseUrl}/${id}`, updatedPerson);
  return req.then((res) => res.data);
};

const remove = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then((res) => res.data);
};

export default {
  get,
  post,
  put,
  remove,
};
