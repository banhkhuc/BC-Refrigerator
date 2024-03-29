import { Flex, Heading, Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import EditFactory from "components/EditFactory";

const InsuranceManagementTopBar = () => {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Heading fontSize={"1.5rem"}>Quản lý sản phẩm bảo hành</Heading>
    </Flex>
  );
};

export default InsuranceManagementTopBar;
