import {
  Tr,
  Th,
  Checkbox,
  Flex,
  Image,
  AspectRatio,
  Box,
  Icon,
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { useState } from 'react';
import EditFactory from '../EditFactory';

interface FactoryItemProps {
  checkedItems: boolean[];
  setCheckedItems: any;
  index: number;
}

const FactoryItem = ({
  checkedItems,
  setCheckedItems,
  index,
}: FactoryItemProps) => {
  const [isEditFactory, setIsEditFactory] = useState(false);

  const handleChecked = () => {
    checkedItems[index] = !checkedItems[index];
    setCheckedItems([...checkedItems]);
  };

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
      <Th pr={0} pl={'24px'}>
        <Checkbox isChecked={checkedItems[index]} onChange={handleChecked} />
      </Th>
      <Th pl={0} pr={0}>
        <Box whiteSpace={'normal'}>Cơ sở sản xuất tủ lạnh toshiba</Box>
      </Th>
      <Th>
        <Box whiteSpace={'normal'}>Cầu giấy, Hà nội</Box>
      </Th>
      <Th pl={0} pr={'12px'}>
        <FaEdit
          style={{ marginRight: 0, cursor: 'pointer' }}
          fontSize={'1.2rem'}
          onClick={() => setIsEditFactory(true)}
        />
      </Th>
    </Tr>
  );
};

export default FactoryItem;
