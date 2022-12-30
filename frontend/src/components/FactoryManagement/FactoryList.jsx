import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Checkbox,
  Box,
  Flex,
  Button,
  Input,
  InputLeftElement,
  InputGroup,
  Select,
  useToast,
} from "@chakra-ui/react";
import { deleteFactoryAPI } from "apis/factoryApi";
import FactoryItem from "components/FactoryItem";
import { useState, useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

const FactoryList = (props) => {
  const [data, setData] = useState(props.data);
  const [checkedItems, setCheckedItems] = useState([]);
  const [typeSearch, setTypeSearch] = useState("name");
  const allChecked = checkedItems.every(Boolean);
  const isCheckedItem = checkedItems.some(Boolean);
  const input = useRef(null);
  const toast = useToast();

  useEffect(() => {
    setCheckedItems(data.map(() => false));
  }, []);

  const handleAllChecked = (e) => {
    setCheckedItems(checkedItems.map(() => e.target.checked));
  };

  const handleSearch = () => {
    let content;
    if (input.current) {
      content = input.current.value;
      input.current.value = "";
    }
  };

  const handleDelete = async () => {
    let newData = data;
    let newCheckedItems = checkedItems;
    const deleteFactory = async (id) => {
      const res = await deleteFactoryAPI(id);
      return res.status === 200;
    };

    await data.forEach((factory, i) => {
      if (checkedItems[i]) {
        if (deleteFactory(factory.id)) {
          setCheckedItems(newCheckedItems.splice(i, 1));
          setData(newData.splice(i, 1));
        }
      }
    });
  };

  const debounce = (callback, timeout) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback.apply(this, args);
      }, timeout);
    };
  };

  return (
    <Box mt={"12px"}>
      <Flex mb={"12px"} wrap={"wrap"}>
        <InputGroup flex={["100%", 4]}>
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input
            ref={input}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            type="text"
            placeholder="Tìm kiếm"
          />
        </InputGroup>
        <Select
          flex={["100%", 4, 2, 1]}
          ml={[0, "8px"]}
          mt={["8px", 0]}
          borderRadius={"5px"}
          // maxW={'100px'}
          onChange={(e) => setTypeSearch(e.target.value)}
        >
          <option value="name">Tên</option>
          <option value="address">Địa chỉ</option>
        </Select>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th p={"0 0 0 24px"}>
                <Flex minH={"32px"}>
                  <Checkbox
                    isChecked={allChecked}
                    onChange={(e) => handleAllChecked(e)}
                  />
                  <Button
                    visibility={isCheckedItem ? "visible" : "hidden"}
                    colorScheme={"red"}
                    size={"sm"}
                    ml={"12px"}
                    onClick={debounce(handleDelete, 2000)}
                  >
                    Xóa
                  </Button>
                </Flex>
              </Th>
              <Th fontWeight={800}>Hình ảnh</Th>
              <Th fontWeight={800}>Tên cơ sở</Th>
              <Th fontWeight={800}>Địa chỉ</Th>
              <Th fontWeight={800}>Thao tác</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.map((factory, index) => {
                return (
                  <FactoryItem
                    {...{ checkedItems, setCheckedItems }}
                    index={index}
                    {...factory}
                  />
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FactoryList;
