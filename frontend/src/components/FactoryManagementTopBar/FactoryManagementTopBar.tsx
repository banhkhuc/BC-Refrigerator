import { Flex, Heading, Button, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import EditFactory from "components/EditFactory";

const FactoryManagementTopBar = () => {
  const [isEditFactory, setIsEditFactory] = useState(false);

  return (
    <Flex justify={"space-between"} align={"center"}>
      <Heading fontSize={"1.5rem"}>Quản lý danh sách cơ sở</Heading>
      <Button
        leftIcon={<Icon color={"white"} as={HiPlus} fontSize={"1.5rem"} />}
        colorScheme={"blue"}
        color={"white"}
        variant={"solid"}
        onClick={() => setIsEditFactory(true)}
      >
        Thêm cơ sở
      </Button>
      <EditFactory
        {...{
          isEditFactory,
          setIsEditFactory,
          typeEdit: "add",
          id: -1,
          name: "",
          address: "",
        }}
      />
    </Flex>
  );
};

export default FactoryManagementTopBar;
