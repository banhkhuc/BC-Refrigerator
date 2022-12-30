import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import FactoryList from "./FactoryList";

const FactoryManagement = ({ data }) => {
  const filterData = (type) => {
    let newData = data.filter((factory) => {
      return factory.type === type;
    });
    return newData;
  };

  return (
    <Tabs bgColor={"white"} p={["16px"]} mt={["16px"]}>
      <TabList>
        <Tab>Cơ sở sản xuất</Tab>
        <Tab>Đại lý phân phối</Tab>
        <Tab>Trung tâm bảo hành</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <FactoryList data={filterData("produce")} />
        </TabPanel>
        <TabPanel>
          <FactoryList data={filterData("distribute")} />
        </TabPanel>
        <TabPanel>
          <FactoryList data={filterData("guarantee")} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default FactoryManagement;
