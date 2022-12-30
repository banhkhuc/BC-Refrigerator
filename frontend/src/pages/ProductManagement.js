import {
    ChakraProvider,
    Box,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Checkbox,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputLeftAddon,
    Divider,
    Stack,
    useControllableProp,
    useControllableState,
    useDisclosure,
    theme,
    Grid,
    GridItem,
    Image,
    Center,
    Flex,
    Container,
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
    TableCaption,
    Select,
    TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    PhoneIcon,
    AddIcon,
    WarningIcon,
    SearchIcon,
    ChevronDownIcon,
} from "@chakra-ui/icons";
import SidebarWithHeader from "../components/SidebarWithHeader";
import { useNavigate } from "react-router-dom";

const productData = [
    {
        imageURL: "http://anhchinh.vn/media/product/14962_tu_lanh_samsung__2_.jpg",
        code: "RS64R53012C",
        name: "Tủ lạnh Samsung inverter 617L",
        alt: "RS64R53012C",
    },
    {
        imageURL: "http://anhchinh.vn/media/product/15146_nr_yw590ymmv.jpg",
        code: "NR-YW590YMMV",
        name: "Tủ lạnh 4 cánh cao cấp Panasonic 540L",
        alt: "NR-YW590YMMV",
    },
    {
        imageURL: "http://anhchinh.vn/media/product/12734_1234_01.png",
        code: "TLPABC360QKVN",
        name: "Tủ lạnh Panasonic 322 lít Inverter",
        alt: "TLPABC360QKVN",
    },
    {
        imageURL: "http://anhchinh.vn/media/product/12722_panasonic_bv280qsvn.jpg",
        code: "NR-BV280QSVN",
        name: "Tủ lạnh Panasonic inverter 255 lít",
        alt: "NR-BV280QSVN",
    },
    {
        imageURL: "http://anhchinh.vn/media/product/8109_fr_125cl_01.png",
        code: "TLFU125",
        name: "Tủ lạnh Funiki 125L",
        alt: "TLFU125",
    },
    {
        imageURL:
            "http://anhchinh.vn/media/product/13176_t____l___nh_aqua_t249mapb__1_.png",
        code: "TLAQT249MAPB",
        name: "Tủ lạnh ngăn đá trên Aqua inverter 235 lít",
        alt: "TLAQT249MAPB",
    },
    {
        imageURL: "http://anhchinh.vn/media/product/15567_",
        code: "GRRT325WEPMV06M",
        name: "Tủ lạnh Toshiba Inverter 249L GR-RT325WE-PMV(06)-MG",
        alt: "GRRT325WEPMV06M",
    },
    {
        imageURL:
            "http://anhchinh.vn/media/product/13953_t____l___nh_samsung_rt22m4040dx__1_.jpg",
        code: "RT22M4040DX/SV",
        name: "Tủ lạnh Samsung inverter 243 lít",
        alt: "RT22M4040DX/SV",
    },
];

const ProductManagement = () => {
    // using for checked Item
    const [checkedItems, setCheckedItems] = React.useState([false, false]);
    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    // define Style for each
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: "#ffffff",
        },
        header: {
            color: "#20232a",
            textAlign: "left",
            fontSize: 20,
            fontWeight: "bold",
        },
        title: {
            color: "#20232a",
            textAlign: "left",
            fontSize: 16,
            fontWeight: "bold",
        },
        backgroundColorTitle: {
            backgroundColor: "2B53A3",
        },
        textNormal: {
            fontSize: 15,
            textAlign: "left",
        },
        blueDivider: {},
    });

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/factory/create-product`);
    };

    const handleClickEdit = () => {
        navigate(`/factory/edit-product`);
    };

    return (
        <div className="">
            <h1
                style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "36px",
                }}
            >
                Manage Products
            </h1>
            <ChakraProvider>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2
                        style={{
                            fontWeight: "600",
                            fontSize: "24px",
                            marginLeft: "20px",
                        }}
                    >
                        Danh sách sản phẩm
                    </h2>
                    <Button
                        leftIcon={<AddIcon />}
                        colorScheme="blue"
                        variant="solid"
                        style={{ marginRight: "20px" }}
                        onClick={handleClick}
                    >
                        Tạo sản phẩm
                    </Button>
                </div>
                <Box
                    p={4}
                    style={{
                        backgroundColor: "white",
                        marginBottom: "10px",
                        marginTop: "10px",
                        borderRadius: "10px",
                    }}
                >
                    <form className="input-form">
                        <Stack direction="row" spacing={4}>
                            <Select
                                placeholder="Thêm điều kiện lọc"
                                style={{
                                    marginRight: "20px",
                                }}
                                p={1}
                            >
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>

                            <InputGroup className="input-comp">
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<SearchIcon color="gray.300" className="icon" />}
                                />
                                <Input
                                    type="text"
                                    placeholder="Tìm kiếm"
                                    style={{ marginTop: "4px", marginBottom: "2px" }}
                                />
                            </InputGroup>
                        </Stack>
                    </form>

                    <TableContainer className="table">
                        <Table size="lg" variant="striped" colorScheme="blue">
                            <TableCaption>Imperial to metric conversion factors</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>
                                        <Checkbox defaultChecked></Checkbox>
                                    </Th>
                                    <Th>
                                        <Text style={styles.title}>Ảnh</Text>
                                    </Th>
                                    <Th>
                                        <Text style={styles.title}>Code</Text>
                                    </Th>
                                    <Th>
                                        <Text style={styles.title}>Tên sản phẩm</Text>
                                    </Th>
                                    <Th>
                                        <Text style={styles.title}>Thao tác</Text>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {productData.map((product, index) => (
                                    <Tr key={index}>
                                        <Td>
                                            <GridItem>
                                                <Checkbox defaultChecked></Checkbox>
                                            </GridItem>
                                        </Td>
                                        <Td>
                                            <Image
                                                boxSize="100px"
                                                objectFit="cover"
                                                src={product.imageURL}
                                                alt={product.alt}
                                            />
                                        </Td>
                                        <Td>{product.code}</Td>
                                        <Td>{product.name}</Td>
                                        <Td>
                                            <Button
                                                size="md"
                                                height="27"
                                                width="99"
                                                borderColor="000000"
                                                onClick={handleClickEdit}
                                            >
                                                Sửa thông tin
                                            </Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </ChakraProvider>
        </div>
    );
};

export default ProductManagement;
