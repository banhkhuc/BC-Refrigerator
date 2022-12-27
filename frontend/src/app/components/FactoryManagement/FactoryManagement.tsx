import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import FactoryList from './FactoryList';

const FactoryManagement = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Cơ sở sản xuất</Tab>
        <Tab>Đại lý phân phối</Tab>
        <Tab>Trung tâm bảo hành</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <FactoryList type={'produce'} />
        </TabPanel>
        <TabPanel>
          <FactoryList type={'distributary'} />
        </TabPanel>
        <TabPanel>
          <FactoryList type={'insurance'} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FactoryManagement;
