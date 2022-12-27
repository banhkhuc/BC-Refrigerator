import {
  Tr,
  Th,
  Flex,
  Box,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Input,
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { IoIosOptions } from 'react-icons/io';
import { useState, useRef } from 'react';
import EditFactory from '../EditFactory';
import PopoverTriggerCustom from '../PopoverTriggerCustom';

interface FactoryItemProps {
  index: number;
}

const InsuranceItem = ({ index }: FactoryItemProps) => {
  const [isEditFactory, setIsEditFactory] = useState(false);

  return (
    <Tr>
      <EditFactory
        {...{
          isEditFactory,
          setIsEditFactory,
          typeEdit: 'edit',
          id: 123,
          name: 'cơ sở sản xuất',
          address: 'hà nội',
        }}
      />
      <Th>
        <Box whiteSpace={'normal'}>123456</Box>
      </Th>
      <Th>
        <Box whiteSpace={'normal'}>Tủ lạnh toshiba</Box>
      </Th>
      <Th>
        <Box whiteSpace={'normal'}>24/12/2020</Box>
      </Th>
      <Th>
        <Box whiteSpace={'normal'}>21/05/2021</Box>
      </Th>
      <Th>
        <Box whiteSpace={'normal'}>12 tháng</Box>
      </Th>
      <Th>
        <Box whiteSpace={'normal'}>Nhà máy Hà nội</Box>
      </Th>
      <Th>
        <Box whiteSpace={'normal'}>FPT Shop</Box>
      </Th>
      <Th>
        <ErrorType />
      </Th>
      <Th>
        <ProductStatus />
      </Th>
      <Th>
        <Menu>
          <MenuButton
            as={IconButton}
            fontSize={'1.2rem'}
            icon={<IoIosOptions />}
            variant={'outline'}
          />
          <MenuList>
            <MenuItem>Trả về đại lý</MenuItem>
            <MenuItem>Chuyển về cơ sở sản xuất</MenuItem>
          </MenuList>
        </Menu>
      </Th>
    </Tr>
  );
};

const ErrorType = () => {
  const [newErrorType, setNewErrorType] = useState<string>('hỏng cảm biến');
  const [oldErrorType, setOldErrorType] = useState<string>('hỏng cảm biến');

  const handleSaveErrorType = () => {
    if (newErrorType !== oldErrorType) {
      console.log('re-render error');
      setOldErrorType(newErrorType);
    }
  };

  return (
    <PopoverTriggerCustom nameBtn={oldErrorType} saveFunc={handleSaveErrorType}>
      <Input
        type={'text'}
        value={newErrorType}
        onChange={e => {
          setNewErrorType(e.target.value);
        }}
      />
    </PopoverTriggerCustom>
  );
};

const ProductStatus = () => {
  const [status, setStatus] = useState<string>('đang sửa chữa bảo hành');
  const selectStatus = useRef<HTMLSelectElement>(null);
  const options = [
    'Đang sửa chữa bảo hành',
    'Đã bảo hành xong',
    'Đã trả lại bảo hành cho khách hàng',
    'Lỗi, cần trả về nhà máy',
    'Lỗi, đã đưa về cơ sở sản xuất',
  ];

  const handleSaveStatus = () => {
    if (selectStatus.current) {
      setStatus(options[parseInt(selectStatus.current.value)]);
    }
  };

  return (
    <PopoverTriggerCustom nameBtn={status} saveFunc={handleSaveStatus}>
      <Select ref={selectStatus} size={'sm'} flex={1} borderRadius={'5px'}>
        {options.map((e, i) => (
          <option value={i}>{e}</option>
        ))}
      </Select>
    </PopoverTriggerCustom>
  );
};

export default InsuranceItem;
