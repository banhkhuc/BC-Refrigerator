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
} from '@chakra-ui/react';
import FactoryItem from '../FactoryItem';
import { useState, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

const FactoryList = ({ type }: { type: string }) => {
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
    // input.current.focus();
    // const postComment = async () => {
    //     if (content === '') {
    //         return;
    //     }

    //     if (!user.id) {
    //         toast({
    //             position: 'top',
    //             title: 'You need to login to comment!',
    //             status: 'warning',
    //             duration: 2000,
    //             isClosable: true,
    //         });
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('content', content);
    //     try {
    //         const response = await fetchAPI(`/song/${songId}/comment`, {
    //             method: 'POST',
    //             body: JSON.stringify({ content, replyID: '' }),
    //         });
    //         setComments([response, ...comments]);
    //     } catch (error) {
    //         toast({
    //             position: 'top',
    //             title: error.message,
    //             status: 'error',
    //             duration: 2000,
    //             isClosable: true,
    //         });
    //     }
    // };
    // postComment();
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
          // maxW={'100px'}
          onChange={e => setTypeSearch(e.target.value)}
        >
          <option value="name">Tên</option>
          <option value="address">Địa chỉ</option>
        </Select>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th p={'0 0 0 24px'}>
                <Flex minW={'80px'} minH={'32px'}>
                  <Checkbox
                    isChecked={allChecked}
                    onChange={e => handleAllChecked(e)}
                  />
                  <Button
                    visibility={isCheckedItem ? 'visible' : 'hidden'}
                    colorScheme={'red'}
                    size={'sm'}
                    ml={'12px'}
                  >
                    Xóa
                  </Button>
                </Flex>
              </Th>
              <Th p={0} fontWeight={800}>
                Tên cơ sở
              </Th>
              <Th pr={0} pt={'12px'} pb={'12px'} fontWeight={800}>
                Địa chỉ
              </Th>
              <Th p={0} />
            </Tr>
          </Thead>
          <Tbody>
            {[1, 2, 3, 4, 5].map((e, index) => {
              return (
                <FactoryItem
                  {...{ checkedItems, setCheckedItems }}
                  index={index}
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
