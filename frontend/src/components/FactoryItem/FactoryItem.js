import {
  Tr,
  Th,
  Checkbox,
  Center,
  Image,
  AspectRatio,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditFactory from "../EditFactory";

const FactoryItem = ({ checkedItems, setCheckedItems, index, ...props }) => {
  const { name, address, imageUrl, type } = props;
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
          typeEdit: "edit",
        }}
        {...props}
      />
      <Th>
        <Checkbox isChecked={checkedItems[index]} onChange={handleChecked} />
      </Th>
      <Th>
        <AspectRatio maxW={"60px"} ratio={1} mr={"8px"}>
          <Image
            objectFit={"cover"}
            borderRadius={"5px"}
            src={
              imageUrl ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStUA8ai6tKwZebp5iAZuNJo7_JFUblRVHzag&usqp=CAU"
            }
          />
        </AspectRatio>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{name}</Box>
      </Th>
      <Th>
        <Box whiteSpace={"normal"}>{address}</Box>
      </Th>
      <Th>
        <Button
          leftIcon={
            <FaEdit
              style={{ marginRight: 0, cursor: "pointer" }}
              fontSize={"1.2rem"}
            />
          }
          onClick={() => setIsEditFactory(true)}
        >
          Sửa thông tin
        </Button>
      </Th>
    </Tr>
  );
};

export default FactoryItem;
