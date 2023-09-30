// Navbar.tsx
import React from 'react';
import { Box, Flex, Text, Button,Image } from '@chakra-ui/react';


// interface NavbarProps {
//   title: string;
// }

const Navbar: React.FC = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="yellow.400"
      padding={4}
    >
      <Text fontSize="lg" fontWeight="bold">
        Your Logo
      </Text>
      <Flex align="center">
        <Button background="white" color="grey" borderRadius="20px" mr={2}>
          <Flex gap="5px">
          <Image src="https://www.linkpicture.com/q/Frame_1.svg"></Image>
          <Text>Share Logs</Text>
          </Flex>
     
          
        </Button>
        <Button background="white" color="black">
          <Flex gap="5px">
          <Image src="https://www.linkpicture.com/q/Group-2.svg"></Image>
          <Text> 1</Text>
          </Flex>
         

        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
