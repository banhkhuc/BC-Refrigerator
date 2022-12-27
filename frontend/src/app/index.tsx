import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import RootLayout from './layouts/rootLayout';
import theme from './theme';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RootLayout />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
