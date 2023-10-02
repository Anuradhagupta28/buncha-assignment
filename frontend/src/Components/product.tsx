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
  const shoeRef = useRef(null);
  const tshirtRef = useRef(null);
  const bagRef = useRef(null);
 
  

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
 
 


  
  const isMobile = window.innerWidth <= 768; 
  return (
    <Box>
      <Stack direction={["column","row", "row"]} >
        <Stack direction={["row","column", "column"]} margin="30px" w={["50%","75%","100%"]} >
          <Button
            width={["80px","200px","200px"]}
            height={["60px","45px","45px"]}
            font-size="16px"
            backgroundColor={["#EDEDED","white","white"]}
            display="flex"
            flexDirection="column"
            alignItems="start"
            color={["grey","blue","grey"]}
            _hover={{ backgroundColor: "#5DA9E9", color: "white" }}
            onClick={() => scrollToDiv(productRef)}
          >
           Product
          </Button>
          <Button
            width={["200px"]}
            height="45px"
            font-size={["1px","5px","16px"]}
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
            onClick={() => scrollToDiv(shoeRef)}
          >
           Shoes
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
            onClick={() => scrollToDiv(tshirtRef)}
          >
           Tshirt
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
            onClick={() => scrollToDiv(bagRef)}
          >
           Bags
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
            onClick={() => scrollToDiv(productRef)}
          >
           product
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
            onClick={() => scrollToDiv(shoeRef)}
          >
            Shoes
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
            onClick={() => scrollToDiv(tshirtRef)}
          >
          Tshirt
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
            onClick={() => scrollToDiv(bagRef)}
          >
          Bags
          </Button>
        </Stack>
        {/* <Scroll /> */}

      
         
              
        <Box margin="30px">
           {/*  1----------------------------*/}
           <Box ref={productRef}>
          <Box textAlign="start" marginTop="25px">
            <Text fontSize="3xl"> Product</Text>
          </Box>
          <Flex  gap={["30px","0px","0px"]} height={["270px","270px","270px"]}>
            {products.map((el: any) => {
              return (
                <Box width={["400px","300px","300px"]}display="flex" flexDirection="column" alignItems="start" gap={["5px","8px","8px"]}>
                  <Flex>
                    
                    <Image boxSize="150px" src={el.image} alt={el.title} height={["100px","150px","152px"]}/>
                    <Image
                      height={["45px","55px","55px"]}
                      src={
                        cart.find((item: any) => item.id === el.id)
                          ? 'https://www.linkpicture.com/q/minusicon.svg'
                          : 'https://www.linkpicture.com/q/plusicon.svg'
                      }
                      marginLeft="-20px"
                      marginTop={["70px","90px","90px"]}
                      onClick={() => {
                        toggleImage(el);
                      }}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    />
                  </Flex>
                  <Text fontSize={["md","xl","xl"]}>₹: {el.price}</Text>
                  <Text fontSize={["md","xl","xl"]}>{el.category}</Text>
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
          <Flex  gap={["30px","0px","0px"]} height={["270px","270px","270px"]}>
            {products.map((el: any) => {
              return (
                <Box width={["400px","300px","300px"]}display="flex" flexDirection="column" alignItems="start" gap={["5px","8px","8px"]}>
                  <Flex>
                    
                    <Image boxSize="150px" src={el.image} alt={el.title} height={["100px","150px","152px"]}/>
                    <Image
                      height={["45px","55px","55px"]}
                      src={
                        cart.find((item: any) => item.id === el.id)
                          ? 'https://www.linkpicture.com/q/minusicon.svg'
                          : 'https://www.linkpicture.com/q/plusicon.svg'
                      }
                      marginLeft="-20px"
                      marginTop={["70px","90px","90px"]}
                      onClick={() => {
                        toggleImage(el);
                      }}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    />
                  </Flex>
                  <Text fontSize={["md","xl","xl"]}>₹: {el.price}</Text>
                  <Text fontSize={["md","xl","xl"]}>{el.category}</Text>
                  <Text fontSize="l" color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>
          </Box>


          {/* 3------------------------ */}

          <Box ref={shoeRef}>
          <Box textAlign="start" marginTop="25px">
            <Text fontSize="3xl"> Shoes</Text>
          </Box>
          <Flex  gap={["30px","0px","0px"]} height={["270px","270px","270px"]}>
            {products.map((el: any) => {
              return (
                <Box width={["400px","300px","300px"]}display="flex" flexDirection="column" alignItems="start" gap={["5px","8px","8px"]}>
                  <Flex>
                    
                    <Image boxSize="150px" src={el.image} alt={el.title} height={["100px","150px","152px"]}/>
                    <Image
                      height={["45px","55px","55px"]}
                      src={
                        cart.find((item: any) => item.id === el.id)
                          ? 'https://www.linkpicture.com/q/minusicon.svg'
                          : 'https://www.linkpicture.com/q/plusicon.svg'
                      }
                      marginLeft="-20px"
                      marginTop={["70px","90px","90px"]}
                      onClick={() => {
                        toggleImage(el);
                      }}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    />
                  </Flex>
                  <Text fontSize={["md","xl","xl"]}>₹: {el.price}</Text>
                  <Text fontSize={["md","xl","xl"]}>{el.category}</Text>
                  <Text fontSize="l" color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>
          </Box>
           
           {/* 4------------------------------ */}
           <Box ref={tshirtRef}>
          <Box textAlign="start" marginTop="25px">
            <Text fontSize="3xl"> Tshirt</Text>
          </Box>
          <Flex  gap={["30px","0px","0px"]} height={["270px","270px","270px"]}>
            {products.map((el: any) => {
              return (
                <Box width={["400px","300px","300px"]}display="flex" flexDirection="column" alignItems="start" gap={["5px","8px","8px"]}>
                  <Flex>
                    
                    <Image boxSize="150px" src={el.image} alt={el.title} height={["100px","150px","152px"]}/>
                    <Image
                      height={["45px","55px","55px"]}
                      src={
                        cart.find((item: any) => item.id === el.id)
                          ? 'https://www.linkpicture.com/q/minusicon.svg'
                          : 'https://www.linkpicture.com/q/plusicon.svg'
                      }
                      marginLeft="-20px"
                      marginTop={["70px","90px","90px"]}
                      onClick={() => {
                        toggleImage(el);
                      }}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    />
                  </Flex>
                  <Text fontSize={["md","xl","xl"]}>₹: {el.price}</Text>
                  <Text fontSize={["md","xl","xl"]}>{el.category}</Text>
                  <Text fontSize="l" color="grey">{el.rating.rate}</Text>
                </Box>
              );
            })}
          </Flex>
          </Box>

          {/* 5---------------------- */}
          <Box ref={bagRef}>
          <Box textAlign="start" marginTop="25px">
            <Text fontSize="3xl"> Bags</Text>
          </Box>
          <Flex  gap={["30px","0px","0px"]} height={["270px","270px","270px"]}>
            {products.map((el: any) => {
              return (
                <Box width={["400px","300px","300px"]}display="flex" flexDirection="column" alignItems="start" gap={["5px","8px","8px"]}>
                  <Flex>
                    
                    <Image boxSize="150px" src={el.image} alt={el.title} height={["100px","150px","152px"]}/>
                    <Image
                      height={["45px","55px","55px"]}
                      src={
                        cart.find((item: any) => item.id === el.id)
                          ? 'https://www.linkpicture.com/q/minusicon.svg'
                          : 'https://www.linkpicture.com/q/plusicon.svg'
                      }
                      marginLeft="-20px"
                      marginTop={["70px","90px","90px"]}
                      onClick={() => {
                        toggleImage(el);
                      }}
                      alt="Toggle Image"
                      style={{ cursor: "pointer" }}
                    />
                  </Flex>
                  <Text fontSize={["md","xl","xl"]}>₹: {el.price}</Text>
                  <Text fontSize={["md","xl","xl"]}>{el.category}</Text>
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
