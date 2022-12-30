import logo from './logo.svg';
import './App.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';
import Login from './login/Login';
import SidebarWithHeader from './components/SidebarWithHeader'; 
import { getMeApi, getUsersApi } from './apis/accountApi';
import Statistical_Admin from './charts/Statistical_Admin';
import Statistical_Agent from './charts/Statistical_Agent';
import Statistical_Facility from './charts/Statistical_Facility';
import Statistical_Warranty from './charts/Statistical_Warranty';

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Login /> */}
      <SidebarWithHeader children={<Statistical_Admin />}/>
      {/* <SidebarWithHeader children={<Statistical_Agent />}/> */}
      {/* <SidebarWithHeader children={<Statistical_Facility />}/> */}
      {/* <SidebarWithHeader children={<Statistical_Warranty />}/> */}
    </ChakraProvider>
  );
}

export default App;
