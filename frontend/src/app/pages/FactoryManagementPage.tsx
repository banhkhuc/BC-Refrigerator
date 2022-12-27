import { Box, Flex } from '@chakra-ui/react';
import FactoryManagement from 'app/components/FactoryManagement';
import FactoryManagementTopBar from 'app/components/FactoryManagementTopBar';

const FactoryManagementPage = () => {
  return (
    <Box minH={'100vh'} m={['32px']}>
      <FactoryManagementTopBar />
      <FactoryManagement />
    </Box>
  );
};

export { FactoryManagementPage };
