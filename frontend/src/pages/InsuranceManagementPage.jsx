import { Box } from "@chakra-ui/react";
import InsuranceManagement from "components/InsuranceManagement";
import InsuranceManagementTopBar from "components/InsuranceManagementTopBar";

const InsuranceManagementPage = () => {
  return (
    <Box bgColor={"white"} minH={"100vh"} m={["32px"]}>
      <InsuranceManagementTopBar />
      <InsuranceManagement />
    </Box>
  );
};

export { InsuranceManagementPage };
