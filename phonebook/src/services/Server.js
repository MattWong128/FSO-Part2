import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
const create = (personObj) => {
  return axios.post(baseUrl, personObj).then((res) => res.data);
};
const get = () => {
  return axios.get(baseUrl).then((res) => res.data);
};

const del = (id) => {
  axios.delete(`${baseUrl}/${id}`).then((res) => {
    console.log("deleting", res.data);
    return res.data;
  });
};
export default {
  create,
  get,
  del,
};
