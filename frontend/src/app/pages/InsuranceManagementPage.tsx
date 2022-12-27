import { Box, Flex } from '@chakra-ui/react';
import InsuranceManagement from 'app/components/InsuranceManagement';
import InsuranceManagementTopBar from 'app/components/InsuranceManagementTopBar';

const InsuranceManagementPage = () => {
  return (
    <Box minH={'100vh'} m={['32px']}>
      <InsuranceManagementTopBar />
      <InsuranceManagement />
    </Box>
  );
};

export { InsuranceManagementPage };
