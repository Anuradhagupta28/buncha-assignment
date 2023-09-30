import { Flex, Button, Box, Image, VStack, Text } from "@chakra-ui/react";
import Scroll from "./scroll";
import { useQuery } from "react-query";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useBreakpointValue } from "@chakra-ui/react";
// import plus from "../icons/plusicon.svg"
// import minus from "../icons/minusicon.svg"
import { isPlusToken } from "typescript";
import { useState } from "react";

const retrievePosts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const Product = () => {
  const [showImage1, setShowImage1] = useState(true);

  const toggleImage = () => {
    setShowImage1(!showImage1);
  };
  const imageSrc = showImage1
    ? "https://www.linkpicture.com/q/plusicon.svg"
    : "https://www.linkpicture.com/q/minusicon.svg";

  const {
    data: products,
    error,
    isLoading,
  } = useQuery("postsData", retrievePosts);

  if (isLoading) return <Box>Fetching posts...</Box>;
  // if (error) return <Box>An error occurred: {error}</Box>;
  console.log(products);

  const containerStyle: object = {
    width: "100%", // Set your desired width
    height: "500px", // Set your desired height
    overflowX: "hidden", // Hide the horizontal scrollbar
    overflowY: "scroll", // Enable vertical scrolling
    direction: "rtl",
  };

  const settings: object = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Flex border="solid red">
        <VStack border="solid black" margin="30px">
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Produce
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Prepare Foods
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Canned Foods & soups
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Bakery
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Diary & Eggs
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Frozen
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Meat
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Burger
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Pizza
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Produce
          </Button>
          <Button
            width="200px"
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
          >
            Prepare Foods
          </Button>
        </VStack>
        {/* <Scroll /> */}

        <Box margin="30px">
         
               
          <Box textAlign="start" marginTop="25px">
            <Text fontSize='3xl'>Title</Text>
          </Box>

          <Flex>
            {products.map((el: any) => {
              return (
                <Box
                  w="300px"
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  gap="8px"
                 
                >
                  <Flex>
                    <Image boxSize="150px" src={el.image} alt="Dan Abramov" />
                    <Image
                      height="55px"
                      src={imageSrc}
                      marginLeft="-20px"
                      marginTop="90px"
                      onClick={toggleImage}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    ></Image>
                  </Flex>{" "}
                  <Text  fontSize='xl' >₹: {el.price}</Text>
                  {/* <Text fontSize='xl'>{el.title}</Text> */}
                  <Text fontSize='xl'>{el.category}</Text>
                  <Text fontSize='l' color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>

          <Box textAlign="start" marginTop="25px">
            <Text fontSize='3xl'>Title</Text>
          </Box>

          <Flex>
            {products.map((el: any) => {
              return (
                <Box
                  w="300px"
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  gap="8px"
                 
                >
                  <Flex>
                    <Image boxSize="150px" src={el.image} alt="Dan Abramov" />
                    <Image
                      height="55px"
                      src={imageSrc}
                      marginLeft="-20px"
                      marginTop="90px"
                      onClick={toggleImage}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    ></Image>
                  </Flex>{" "}
                  <Text  fontSize='xl' >₹: {el.price}</Text>
                  {/* <Text fontSize='xl'>{el.title}</Text> */}
                  <Text fontSize='xl'>{el.category}</Text>
                  <Text fontSize='l' color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>

          
          <Box textAlign="start" marginTop="25px">
            <Text fontSize='3xl'>Title</Text>
          </Box>

          <Flex>
            {products.map((el: any) => {
              return (
                <Box
                  w="300px"
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  gap="8px"
                 
                >
                  <Flex>
                    <Image boxSize="150px" src={el.image} alt="Dan Abramov" />
                    <Image
                      height="55px"
                      src={imageSrc}
                      marginLeft="-20px"
                      marginTop="90px"
                      onClick={toggleImage}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    ></Image>
                  </Flex>{" "}
                  <Text  fontSize='xl' >₹: {el.price}</Text>
                  {/* <Text fontSize='xl'>{el.title}</Text> */}
                  <Text fontSize='xl'>{el.category}</Text>
                  <Text fontSize='l' color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>

         
          <Box textAlign="start" marginTop="25px">
            <Text fontSize='3xl'>Title</Text>
          </Box>

          <Flex>
            {products.map((el: any) => {
              return (
                <Box
                  w="300px"
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  gap="8px"
                 
                >
                  <Flex>
                    <Image boxSize="150px" src={el.image} alt="Dan Abramov" />
                    <Image
                      height="55px"
                      src={imageSrc}
                      marginLeft="-20px"
                      marginTop="90px"
                      onClick={toggleImage}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    ></Image>
                  </Flex>{" "}
                  <Text  fontSize='xl' >₹: {el.price}</Text>
                  {/* <Text fontSize='xl'>{el.title}</Text> */}
                  <Text fontSize='xl'>{el.category}</Text>
                  <Text fontSize='l' color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>

          <Box textAlign="start">
            <Text>Title</Text>
          </Box>
          <Flex>
            {products.map((el: any) => {
              return (
                <Box
                  w="300px"
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                >
                  <Flex>
                    <Image boxSize="150px" src={el.image} alt="Dan Abramov" />
                    <Image
                      height="55px"
                      src={imageSrc}
                      marginLeft="-20px"
                      marginTop="90px"
                      onClick={toggleImage}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    ></Image>
                  </Flex>{" "}
                  <Text>{el.price}</Text>
                  <Text>{el.title}</Text>
                  <Text>{el.category}</Text>
                </Box>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default Product;
