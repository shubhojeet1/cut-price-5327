import React from "react";
import {Container,Box,Text,HStack,ChakraProvider,Button,Image} from '@chakra-ui/react'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineHeart} from 'react-icons/ai'
import {SlHandbag} from 'react-icons/sl'
import { SMARTPOINT } from "../../assets";




 export default function Topnav(){
  return(
    <><ChakraProvider>
 <Container maxW="10xl" p='4'  centerContent>
  <HStack spacing="90"   >
 
       <Text fontfamily="Montserrat, sans-serif" textDecoration="underline" fontSize="10px" fontWeight="700" cursor="pointer">INDIA</Text>
       <Text textDecoration="underline" fontSize="10px" fontWeight="700" cursor="pointer">CUSTOMER CARE</Text>
       <Text fontSize="10px" fontWeight="700" >WANT TO RECEIVE YOUR GIFT IN TIME? | DISCOVER MORE  </Text>
       <Text textDecoration="underline" fontSize="10px" fontWeight="700" cursor="pointer">REGISTER</Text>
       <Text  textDecoration="underline" mr="200px" fontSize="10px" fontWeight="700" cursor="pointer">LOGIN</Text>
 
  </HStack>
  <HStack bg="#F4F4F4" h="0.2vh" w="2000px" mt="1">

  </HStack>
  <HStack>
    <Box id="womenbtn">
    <Button bg="none" fontSize="12px" fontWeight="700" >WOMEN</Button>
    <Button bg="none" fontSize="12px" fontWeight="700" >MEN</Button>
    <Button bg="none" fontSize="12px" fontWeight="700"  >KIDS</Button>
    <Button bg="none" fontSize="12px" fontWeight="700" >DESIGN+ART</Button>
    </Box>
    <Box id="navimg">
    <Image  w="100px" h="11vh" backgroundColor="white" borderRadius="50%" src={SMARTPOINT}/>
    </Box>
    <Box id="cartbag" >
    <Button ml="200px" bg="none" fontSize="17px" fontWeight="700" ><FiSearch/></Button>
    <Button bg="none" fontSize="17px" fontWeight="700" ><AiOutlineHeart/></Button>
    <Button bg="none" fontSize="16px" fontWeight="700"  ><SlHandbag/></Button>
  
    </Box>
   

  </HStack>
        
    </Container>

  
    </ChakraProvider>
   
    </>
  )
  

 }
  
    
 
