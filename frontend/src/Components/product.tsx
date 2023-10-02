import { Flex, Button, Box, Image, VStack, Stack, Text } from "@chakra-ui/react";
import Scroll from "./scroll";
import { useQuery } from "react-query";
import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countAction, setDataSave } from "../Redux/receipeAction";


const retrievePosts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};


const Product = () => {
  const [cart, setCart] = useState<any>([]);
  const dispatch=useDispatch();
 
  const productRef = useRef(null);
  const jewelryRef = useRef(null);
  

  const scrollToDiv = (ref:any) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const toggleImage = (el: any) => {
   
    const itemIndex = cart.findIndex((item:any) => item.id === el.id);
  
    if (itemIndex === -1) {
      // If not in the cart, add it
      setCart([...cart, el]);
   
      
    } else {
      // If in the cart, remove it
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1);
      setCart(updatedCart);
      
    }
 
  
   
  };
   const count = cart.length;
   console.log("count",count);
   dispatch(countAction(count))
  dispatch(setDataSave(cart))
  
 const {
    data: products,
    error,
    isLoading,
  } = useQuery("postsData", retrievePosts);

  if (isLoading) return <Box>Fetching posts...</Box>;
 
 


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
  const isMobile = window.innerWidth <= 768; 
  return (
    <Box>
      <Stack direction={["column","row", "row"]} >
        <Stack direction={["row","column", "column"]} margin="30px" >
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
            onClick={() => scrollToDiv(productRef)}
          >
           Product
          </Button>
          <Button
            width={["200px"]}
            height="45px"
            font-size="16px"
            backgroundColor="white"
            display="flex"
            flexDirection="column"
            alignItems="start"
            color="grey"
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
            onClick={() => scrollToDiv(jewelryRef)}
          >
           Jewelry
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
        </Stack>
        {/* <Scroll /> */}

      
         
              
        <Box margin="30px">
           {/*  1----------------------------*/}
           <Box ref={productRef}>
          <Box textAlign="start" marginTop="25px">
            <Text fontSize="3xl"> Product</Text>
          </Box>
          <Flex>
            {products.map((el: any) => {
              return (
                <Box w={isMobile ? "100%" : "300px"} display="flex" flexDirection="column" alignItems="start" gap="8px">
                  <Flex>
                    <Image boxSize={isMobile ? "100px" : "150px"} src={el.image} alt={el.title} />
                    <Image
                      height="55px"
                      src={
                        cart.find((item: any) => item.id === el.id)
                          ? 'https://www.linkpicture.com/q/minusicon.svg'
                          : 'https://www.linkpicture.com/q/plusicon.svg'
                      }
                      marginLeft="-20px"
                      marginTop="90px"
                      onClick={() => {
                        toggleImage(el);
                      }}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    />
                  </Flex>
                  <Text fontSize="xl">₹: {el.price}</Text>
                  <Text fontSize="xl">{el.category}</Text>
                  <Text fontSize="l" color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>
          </Box>

              {/*  2----------------------------*/}

          <Box ref={jewelryRef}>
          <Box textAlign="start" marginTop="25px">
            <Text fontSize="3xl">Jewelry</Text>
          </Box>
          <Flex>
            {products.map((el: any) => {
              return (
                <Box w="300px" display="flex" flexDirection="column" alignItems="start" gap="8px">
                  <Flex>
                    <Image boxSize="150px" src={el.image} alt={el.title} />
                    <Image
                      height="55px"
                      src={
                        cart.find((item: any) => item.id === el.id)
                          ? 'https://www.linkpicture.com/q/minusicon.svg'
                          : 'https://www.linkpicture.com/q/plusicon.svg'
                      }
                      marginLeft="-20px"
                      marginTop="90px"
                      onClick={() => {
                        toggleImage(el);
                      }}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    />
                  </Flex>
                  <Text fontSize="xl">₹: {el.price}</Text>
                  <Text fontSize="xl">{el.category}</Text>
                  <Text fontSize="l" color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>
          </Box>
           

       

            

         
         

        

         
          </Box>
      </Stack>
    </Box>
  );
};
export default Product;
