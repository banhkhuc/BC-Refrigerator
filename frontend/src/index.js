import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import AccountManagement from "./pages/AccountManagement";
import ProductManagement from "./pages/ProductManagement";
import StoreManagement from "./pages/factory/StoreManagement";
import CreateAccount from "./pages/CreateAccount";
import CreateProduct from "./pages/factory/CreateProduct";
import Login from "./login/Login";
import DefectProductManagement from "./pages/factory/DefectProductManagement";
import EditProduct from "pages/factory/EditProduct";
import { FactoryManagementPage } from "pages/FactoryManagementPage";
import { InsuranceManagementPage } from "pages/InsuranceManagementPage";
import SidebarWithHeader from "components/SidebarWithHeader";
import { ChakraProvider, theme } from "@chakra-ui/react";
import EditFactory from "components/EditFactory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<App />} />
          <Route path="/manage-accounts" element={<AccountManagement />} />
          <Route path="/manage-products" element={<ProductManagement />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/factory/manage-store" element={<StoreManagement />} />
          <Route path="/factory/create-product" element={<CreateProduct />} />
          <Route
            path="/factory/manage-error-prod"
            element={<DefectProductManagement />}
          />
          <Route path="/manage-factory" element={<FactoryManagementPage />} />
          <Route path="/insurance" element={<InsuranceManagementPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
