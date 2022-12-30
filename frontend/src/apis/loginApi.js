import axios from "axios";
import { LOGIN_URL } from "../config/apis";

export const loginApi = async (data) => {
  const options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const response = axios
    .post(LOGIN_URL, data, options)
    .then((res) => {
      console.log("Response ==", res);
      return res.data;
    })
    .catch((err) => {
      console.log("Error ==", err);
      return err.response.data;
    });
  return response;
};
