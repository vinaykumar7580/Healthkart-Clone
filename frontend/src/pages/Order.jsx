import {
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from "@chakra-ui/react";
  
  import {
    Box,
    Button,
    Flex,
    Table,
    Tbody,
    Th,
    Thead,
    Tr,
    useToast,
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
import Footer from "../component/Footer/Footer";
import MobNav3 from "../component/Navbar/MobNav3";
import Nav from "../component/Navbar/Nav";
import Nev2 from "../component/Navbar/Nev2";
  //import Footer from "../components/Footer";
  
  export default function Orderpage() {
    const [data, setData] = useState([]);
    const [check, setCheck] = useState(false)
    function makeTrue() {
      console.log("true")
      setCheck(true)
    }
    function makeFalse() {
      console.log("false")
      setCheck(false)
    }
  
    useEffect(() => {
      hadleGetOrderData();
    }, []);
  
    const hadleGetOrderData = () => {
      fetch(`https://weak-ruby-bull-wear.cyclic.app/order/${JSON.parse(localStorage.getItem("userId"))}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${JSON.parse(localStorage.getItem("token"))}`
        },
      })
        .then((res) => res.json())
        .then((res) => {
            console.log("order",res.orderData)
          setData(res.orderData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const deleteProduct = () => {};
  
    console.log(data);
  
    return (
      <div style={{ margin: "auto" }}>
        {check ? <MobNav3 makeFalse={makeFalse} /> :
          <Box><Nav makeTrue={makeTrue} />
            <Nev2 />
        <br />
        <br />
        <Heading textAlign={"center"}>My Order</Heading>
        <br />
  
        {/* /////////////////////////////////////// */}
  
        <Box
          margin="auto"
          width={{ base: "80vw", lg: "80vw", sm: "95vw" }}
          marginTop="18px"
          // marginLeft={"14%"}
        >
          <Table variant="simple" width="100%">
            <Thead>
              <Tr w={"7vh"}>
                <Th w={"7vw"}>Image</Th>
                <Th width="42vw">title</Th>
                <Th>Price</Th>
                <Th width={"12vw"}>Date & Time</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((el) => {
                return (
                  <Tr key={el._id}>
                    <Th>
                      {" "}
                      <Image width={"254px"} src={el.image[0]?.img} alt={el.title} />{" "}
                    </Th>
                    <Th> {el.title} </Th>
                    <Th>₹{el.price}</Th>
                    <Th>{el.dateTime}</Th>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </Box>
        </Box>}
  
        <br />
        <Footer />
      </div>
    );
  }