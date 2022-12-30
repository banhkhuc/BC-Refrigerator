import axios from "axios";
import { FACTORY_URL } from "../config/apis";

const token = localStorage.getItem("token");
const options = {
  headers: { Authorization: `Bearer ${token}` },
};

export const getFactoriesAPI = async () => {
  const response = axios
    .get(FACTORY_URL, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return response;
};

export const deleteFactoryAPI = async (id) => {
  const response = axios
    .delete(`${FACTORY_URL}/${id}`, options)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return response;
};
