import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  Box,
  Flex,
  Input,
  InputLeftElement,
  InputGroup,
  Select,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import InsuranceItem from './InsuranceItem';

const InsuranceList = ({ type }: { type: string }) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [typeSearch, setTypeSearch] = useState('name');
  const allChecked = checkedItems.every(Boolean);
  const isCheckedItem = checkedItems.some(Boolean);
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setCheckedItems([1, 2, 3, 4, 5].map(e => false));
  }, []);

  const handleAllChecked = (e: any) => {
    setCheckedItems(checkedItems.map(() => e.target.checked));
  };

  const handleSearch = () => {
    let content: string;
    if (input.current) {
      content = input.current.value;
      input.current.value = '';
    }
  };

  return (
    <Box mt={'12px'}>
      <Flex>
        <InputGroup flex={4}>
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input
            ref={input}
            onKeyDown={e => {
              if (e.key === 'Enter') handleSearch();
            }}
            type="text"
            placeholder="Tìm kiếm"
          />
        </InputGroup>
        <Select
          flex={1}
          ml={'8px'}
          borderRadius={'5px'}
          onChange={e => setTypeSearch(e.target.value)}
        >
          <option value="name">Tên</option>
          <option value="address">Địa chỉ</option>
        </Select>
      </Flex>
      <TableContainer>
        <Table variant={'striped'} colorScheme={'teal'}>
          <Thead>
            <Tr fontWeight={800}>
              <Th>Số Serial</Th>
              <Th>Tên sản phẩm</Th>
              <Th>Ngày phân phối</Th>
              <Th>Ngày tiếp nhận bảo hành</Th>
              <Th>Thời gian bảo hành</Th>
              <Th>Trung tâm bảo hành</Th>
              <Th>Đại lý phân phối</Th>
              <Th>Loại lỗi</Th>
              <Th>Trạng thái</Th>
              <Th>Xử lý</Th>
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3, 4, 5].map((e, index) => {
              return <InsuranceItem index={index} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InsuranceList;
