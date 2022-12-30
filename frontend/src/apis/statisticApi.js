import axios from "axios";
import {
    // STATISTIC_PRODUCE_ID,
    // STATISTIC_DISTRIBUTE_ID,
    // STATISTIC_WARRANTY_ID,
    STATISTIC_FACILITY,
    STATISTIC_PRODUCE,
    STATISTIC_DISTRIBUTE,
    STATISTIC_WARRANTY,
    // STATISTIC_PRODUCE_PRODUCTLINE,
    // STATISTIC_DISTRIBUTE_PRODUCTLINE,
    // STATISTIC_WARRANTY_PRODUCTLINE,
    // STATISTIC_PRODUCE_PRODUCTLINE_ID,
    // STATISTIC_DISTRIBUTE_PRODUCTLINE_ID,
} from '../config/apis';

// export const getProduceIdData = async (setProductIdData) => {
    
//     const response = axios
//       .get(STATISTIC_PRODUCE_ID)
//       .then((res) => {
//         console.log("res", res.data.data);
//         setProductIdData(res.data.data);
//         return res.data;
//       })
//       .catch((err) => {
//         return err.response;
//       });
//     return response;
// };

// export const getDistributeIdData = async (setDistributetIdData) => {
    
//     const response = axios
//       .get(STATISTIC_DISTRIBUTE_ID)
//       .then((res) => {
//         console.log("res", res.data.data);
//         setDistributetIdData(res.data.data);
//         return res.data;
//       })
//       .catch((err) => {
//         return err.response;
//       });
//     return response;
// };

// export const getWarrantyIdData = async (setWarrantyIdData) => {
    
//     const response = axios
//       .get(STATISTIC_WARRANTY_ID)
//       .then((res) => {
//         console.log("res", res.data.data);
//         setWarrantyIdData(res.data.data);
//         return res.data;
//       })
//       .catch((err) => {
//         return err.response;
//       });
//     return response;
// };

export const getProduceData = async (setProduceData) => {
    
    const response = axios
      .get(STATISTIC_PRODUCE)
      .then((res) => {
        console.log("res", res.data.data);
        setProduceData(res.data.data);
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
    return response;
};

export const getDistributeData = async (setDistributeData) => {
    
    const response = axios
      .get(STATISTIC_DISTRIBUTE)
      .then((res) => {
        console.log("res", res.data.data);
        setDistributeData(res.data.data);
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
    return response;
};

export const getWarrantyData = async (setWarrantyData) => {
    
    const response = axios
      .get(STATISTIC_WARRANTY)
      .then((res) => {
        console.log("res", res.data.data);
        setWarrantyData(res.data.data);
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
    return response;
};

export const getFacilityData = async (getFacilityData) => {
    
    const response = axios
      .get(STATISTIC_FACILITY)
      .then((res) => {
        console.log("res", res.data.data);
        getFacilityData(res.data.data);
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
    return response;
};

// export const getProduceProductlineData = async (setProduceProductlineData) => {
    
//     const response = axios
//       .get(STATISTIC_PRODUCE_PRODUCTLINE)
//       .then((res) => {
//         console.log("res", res.data.data);
//         setProduceProductlineData(res.data.data);
//         return res.data;
//       })
//       .catch((err) => {
//         return err.response;
//       });
//     return response;
// };

// export const getDistributeProductlineData = async (setDistributeProductlineData) => {
    
//     const response = axios
//       .get(STATISTIC_DISTRIBUTE_PRODUCTLINE)
//       .then((res) => {
//         console.log("res", res.data.data);
//         setDistributeProductlineData(res.data.data);
//         return res.data;
//       })
//       .catch((err) => {
//         return err.response;
//       });
//     return response;
// };

// export const getWarrantyProductlineData = async (setWarrantyProductlineData) => {
    
//     const response = axios
//       .get(STATISTIC_WARRANTY_PRODUCTLINE)
//       .then((res) => {
//         console.log("res", res.data.data);
//         setWarrantyProductlineData(res.data.data);
//         return res.data;
//       })
//       .catch((err) => {
//         return err.response;
//       });
//     return response;
// };

// export const getProduceProductlineIdData = async (setProduceProductlineIdData) => {
    
//     const response = axios
//       .get(STATISTIC_PRODUCE_PRODUCTLINE_ID)
//       .then((res) => {
//         console.log("res", res.data.data);
//         setProduceProductlineIdData(res.data.data);
//         return res.data;
//       })
//       .catch((err) => {
//         return err.response;
//       });
//     return response;
// };

// export const getDistributeProductlineIdData = async (setDistributeProductlineIdData) => {
    
//     const response = axios
//       .get(STATISTIC_DISTRIBUTE_PRODUCTLINE_ID)
//       .then((res) => {
//         console.log("res", res.data.data);
//         setDistributeProductlineIdData(res.data.data);
//         return res.data;
//       })
//       .catch((err) => {
//         return err.response;
//       });
//     return response;
// };