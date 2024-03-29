import axios from "axios";
import { GET_ALL_ERROR_PRODUCTS, GET_ALL_PRODUCTS } from "../config/apis";

export const getAllProducts = async (token, setAllProducts) => {
  // var myHeaders = new Headers();
  // myHeaders.append("Authorization", `Bearer ${token}`);

  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = axios
    .get(GET_ALL_PRODUCTS, options)
    .then((res) => {
      console.log("res", res.data.data);
      setAllProducts(res.data.data.rows);
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  return response;
};

export const getAllErrorProducts = async (token, setAllProducts) => {
    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", `Bearer ${token}`);
  
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = axios
      .get(GET_ALL_ERROR_PRODUCTS, options)
      .then((res) => {
        console.log("res", res.data.data);
        setAllProducts(res.data.data.rows);
        return res.data;
      })
      .catch((err) => {
        return err.response.data;
      });
    return response;
  };
  
