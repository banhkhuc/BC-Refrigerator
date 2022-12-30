import { Box } from "@chakra-ui/react";
import InsuranceList from "./InsuranceList";

const InsuranceManagement = () => {
  return (
    <Box bgColor={"white"} p={["16px"]} mt={["16px"]}>
      <InsuranceList type="123" />
    </Box>
  );
};

export default InsuranceManagement;
