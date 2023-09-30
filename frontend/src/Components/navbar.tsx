// Navbar.tsx
import React from 'react';
import { Box, Flex, Text, Button,Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Navbar: React.FC = () => {
  const countData=useSelector((state:any)=>state.count)
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="#FFE475"
      padding={4}
      height="100px"
    >
      <Text fontSize="3xl" fontWeight="bold">
       E-commerce
      </Text>
      <Flex align="center">
        <Link to="/">
        <Button background="white" color="grey" borderRadius="20px" mr={2}>
          <Flex gap="5px">
          <Image src="https://www.linkpicture.com/q/Frame_1.svg"></Image>
          <Text>Share Logs</Text>
          </Flex>
        </Button>
        </Link>
        
        <Link to="/cart">
        <Button background="white" color="black" borderRadius="20px" >
          <Flex gap="5px">
          <Image src="https://www.linkpicture.com/q/Group-2.svg"></Image>
          <Text> {countData}</Text>
          </Flex>
         

        </Button>
        </Link>
       
      </Flex>
    </Flex>
  );
};

export default Navbar;
