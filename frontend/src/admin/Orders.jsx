import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
} from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { DeleteOrdersData } from "../redux/admin/admin.action";

const Orders = ({ orders }) => {
  // const [status, setStatus] = useState(true);
  const dispatch = useDispatch();
  const deleteOrder = (id) => {
    dispatch(DeleteOrdersData(id));

    toast.success("Product deleted successfully !", {
      style: {
        borderRadius: "50px",
        background: "#989898",
        color: "#ffffff",
        padding: "1rem 1.5rem",
        fontWeight: "600",
      },
    });
    // dispatch(getOrdersData);
  };

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Product</Th>
              <Th>Category</Th>
              <Th>Description</Th>
              <Th>Price</Th>
              <Th>Status</Th>
              <Th>Cancel</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((e, i) => (
              <Tr key={i + 1}>
                <Td>{i + 1}.</Td>
                <Td>
                  <Image w="60px" src={e.image[0]?.img} />
                </Td>
                <Td>{e.category}</Td>
                <Td>{e.title}</Td>
                <Td>{e.price}</Td>
                {/* <Td>{e.price.substring(0, 28).concat("...")}</Td> */}
                <Td cursor="pointer">Pending</Td>
                <Td cursor={"pointer"} onClick={() => deleteOrder(e._id)}>
                  <MdDeleteOutline />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Orders;
