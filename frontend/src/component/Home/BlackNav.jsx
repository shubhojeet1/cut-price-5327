import React from "react";
import {Container,Box,Text,HStack,ChakraProvider,Button,color} from '@chakra-ui/react'

import style from "./nav.module.css";





 export default function Topnav(){
  return(
    <><ChakraProvider>
 <Container maxW="10xl" backgroundColor="#333333 "  centerContent>
 
  
  <HStack>
    <Box id="blacknav">
    <Button bg="none" color="white" fontSize="11px" fontWeight="500"  _hover={{  color: "#CCCCCC" }} >NEW ARRIVALS</Button>
    <Button bg="none" color="white" fontSize="11px" fontWeight="500"  _hover={{  color: "#CCCCCC" }} >DESIGNERS</Button>
    <Button bg="none" color="white" fontSize="11px" fontWeight="500"  _hover={{  color: "#CCCCCC" }} >CLOTHING</Button>
    <Button bg="none" color="white" fontSize="11px" fontWeight="500" _hover={{  color: "#CCCCCC" }} >SHOES</Button>
    <Button bg="none" color="white" fontSize="11px" fontWeight="500" _hover={{  color: "#CCCCCC" }} >ACCESSORIES & BAGS</Button>
    <Button bg="none" color="white" fontSize="11px" fontWeight="500" _hover={{  color: "#CCCCCC" }} >8 BY YOOX</Button>
    <Button bg="none" color="white" fontSize="11px" fontWeight="500"  _hover={{  color: "#CCCCCC" }}>YOOXYGEN</Button>
    <Button bg="none" color="white" fontSize="11px" fontWeight="500"  _hover={{  color: "#CCCCCC" }} >COLLABORATION</Button>
    <Button bg="none" color="white" fontSize="11px" fontWeight="500" _hover={{  color: "#CCCCCC" }} >BEST DEALS</Button>
    <Button bg="pink.500" color="white" fontSize="11px" fontWeight="500" _hover={{  bg:"red"}} >GIFT GUIDE</Button>

    </Box>
   
   

  </HStack>
        
    </Container>

  
    </ChakraProvider>
   
    </>
  )
  

 }
  
    
 
