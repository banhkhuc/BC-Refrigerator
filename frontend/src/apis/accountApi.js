import axios from "axios";
import { CREATE_ACCOUNT_URL, GET_ME_URL, GET_USERS } from "../config/apis";

export const getUsersApi = (token, setAccounts) => {
//     const options = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//   const response = axios
//     .get(GET_USERS, options)
//     .then((res) => {
//       console.log("RES==", res);
//       setAccounts(res.data.rows);
//       return res.data;
//     })
//     .catch((err) => {
//       console.log("ERROR==", err);
//       return err;
//     });
//   return response;

var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(GET_USERS, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setAccounts(data.data.rows);
      return data;
    });
};

export const getMeApi = (token) => {
    // console.log('get me api');
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = axios
    .get(GET_ME_URL, options)
    .then((res) => {
      console.log("RES==", res);
      return res.data;
    })
    .catch((err) => {
      console.log("ERROR==", err);
      return err;
    });
  return response;
};

export const createAccountApi = (data, tokenStr) => {
  const options = {
    headers: {
      Authorization: `Bearer ${tokenStr}`,
    },
  };
  const response = axios
    .post(CREATE_ACCOUNT_URL, data, options)
    .then((res) => {
      console.log("RESPONSE ==== : ", res);
      return res.data;
    })
    .catch((err) => {
      console.log("ERROR: ====", err);
      return err.response;
    });

  return response;
};