import React from 'react'
import { Box, Heading, Text, Link, HStack, Container, Image, VStack,  Flex } from "@chakra-ui/react"

import Sliderimage from '../component/Sliderone/Sliderimage'



const Menpage = () => {




    return (
        <div>
            <Box h="700px" w="100vw" position="relative" bgImage={`url("https://www.yoox.com/images/yoox80/banners/6895_1_Genz_WM_Main.png?634485886869569819&impolicy=cropDefault&width=960&height=510")`} bgPosition="center" bgSize="cover">

                <Container bg="white" w="fit-content" padding="25px" position="absolute" bottom="10px" left='10px'   >
                    <Heading fontSize="24px" fontFamily="'Playfair Display', serif" lineHeight="24px">HERES COMES THE NIGHT</Heading>

                    <Text fontFamily="Montserrat - 300" fontSize="14px">Rokes-Inspired Leaders Looks And Daring Details</Text>


                    <HStack w="fit-content" margin="auto" mt="5px" >

                        <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" >GET THE LOOK</Link>


                        <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" >DISCOVER MORE</Link>

                    </HStack>

                </Container>


            </Box>
            <br />
            <br />


            <Box maxW="6xl" mt="50px" position="relative" px="0" bgColor="#f3f3f3" margin="auto" >
                <HStack justifyContent="space-between" >
                    <Box  >
                        <Image src="https://www.yoox.com/images/yoox80/banners/6824_3_WinterChecklist_HL_M.jpg?634485886869569819#width=430&height=600" />
                        <Heading mt="15px" fontSize="24px" fontFamily="Playfair Display - 700" lineHeight="24px">ITS COLDS OUTSIDES</Heading>
                        <Text mt="15px" fontFamily="Montserrat - 300" fontSize="14px" >Everything You Need To stay Warm This Winter</Text>
                        <Link mt="15px" as="b" href='#' textDecoration="underline" fontSize='14px' color="#333333">SHOP NOW</Link>
                    </Box>
                    <Box w="sm" bgColor="#fff" position="absolute" top="-25px" left="33%" p={7}>
                        <VStack >
                            <br />
                            <Text as="b" fontSize="14px" lineHeight="18px" color="gray" fontFamily="Montserrat - 700">DESIGNERS</Text>
                            <br />
                            <br />
                            <Text as="b" fontSize="14px" lineHeight="18px" >DSQUARED2</Text>
                            <Text as="b" fontSize="14px" lineHeight="18px" >DOLCE & GABBANA</Text>
                            <Text as="b" fontSize="14px" lineHeight="18px" >ROBERTO CAVALLI</Text>
                            <Text as="b" fontSize="14px" lineHeight="18px" >MAISON MARGIELA</Text>
                            <Text as="b" fontSize="14px" lineHeight="18px" >BALENCIAGA</Text>
                            <Text as="b" fontSize="14px" lineHeight="18px" >PRADA</Text>
                            <Text as="b" fontSize="14px" lineHeight="18px" >GUCCI</Text>
                            <Text as="b" fontSize="14px" lineHeight="18px" >CALVIN KLEIN</Text>
                            <Text as="b" fontSize="14px" lineHeight="18px" >JIL SANDER</Text>
                            <br />
                            <Link href='#' lineHeight="18px" fontFamily="Montserrat - 600"  textDecoration="underline" fontSize='14px' color="#333333" >VIEW ALL</Link>
                            <br />
                        </VStack>

                    </Box>
                    <Box>
                        <Image src="https://www.yoox.com/images/yoox80/banners/6824_1_XmasGift_M_MainMob.jpg?634485886869569819#width=430&height=600" />
                        <Heading mt="15px" fontSize="24px" fontFamily="Playfair Display - 700" lineHeight="24px">ITS COLDS OUTSIDES</Heading>
                        <Text mt="15px" fontFamily="Montserrat - 300" fontSize="14px">Everything You Need To stay Warm This Winter</Text>
                        <HStack w="fit-content" margin="auto" >
                            <Link as="b" href='#' textDecoration="underline" fontSize='14px' color="#333333"  >SHOW THE MAGIC</Link>
                            <Link as="b" href='#' textDecoration="underline" fontSize='14px' color="#333333" >DISCOVER MORE</Link>
                        </HStack>
                    </Box>


                </HStack>
            </Box>


            {/* New Areavel Area */}

            <Heading fontSize="5xl" alignItems="center">NEW ARRIVALS</Heading>
            <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" >VIEW ALL</Link>
            <br />
            <br />
            <Sliderimage/>

            {/* Black dress  Area */}
            <br />
            <Box  p="30px" backgroundColor="white">
                <HStack gap="20px" justifyContent="center">
                    <Box>
                        <Image src="https://www.yoox.com/images/yoox80/banners/6825_3_BaumeMercier_Tris_M.png?634485886869569819#width=473&height=660" />
                        <Heading fontSize="24px" fontFamily="'Playfair Display', serif" lineHeight="37px" fontWeight="700" >BAUME & MERCIER</Heading>
                        <Text mt="10px" fontFamily="'Playfair Display', serif" fontSize="12px" color="gray" fontWeight="300" >The New Riviera Collection</Text>
                    </Box>
                    <Box w="2xl">
                        <Image src="https://www.yoox.com/images/yoox80/banners/6825_1_COS_Tris_M.png?634485886869569819#width=473&height=660" w="full"/>
                        <Heading fontSize="24px" fontFamily="'Playfair Display', serif" lineHeight="37px" fontWeight="700" >COS</Heading>
                        <Text mt="10px" fontFamily="'Playfair Display', serif" fontSize="12px" color="gray" fontWeight="300" >Bring style to the coldest season </Text>
                    </Box>
                    <Box gap="20px">
                        <Image src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_M_Tris.jpg?634485886869569819#width=473&height=660" />
                        <Heading fontSize="24px" fontFamily="'Playfair Display', serif" lineHeight="37px" fontWeight="700" >  MONTBLANC</Heading>
                        <Text mt="10px" fontFamily="'Playfair Display', serif" fontSize="12px" color="gray" fontWeight="300" >Father's Day: find the perfect present</Text>
                    </Box>
                </HStack>
            </Box>


            {/* One of a king Area */}


            <Text fontSize="2xl" lineHeight="25px" alignItems="center">ONE OF A KIND</Text>
            <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" >VIEW ALL</Link>
            <br />
            <br />
            
            <Sliderimage/>






            <Box  h="700px" w="70vw" mx="auto" position="relative" bgImage={`url("https://www.yoox.com/images/yoox80/banners/6833_3_8byYoox_Special_WM.png?634485886869569819#width=930&height=660")`} bgPosition="center" bgSize="cover" >

                <Container bg="white" w="fit-content" padding="25px" position="absolute" bottom="15px" left='35px'   >
                    <Heading fontSize="24px" fontFamily="'Playfair Display', serif" lineHeight="24px">IT'S PARTY TIME!</Heading>
                    <Text fontFamily="Montserrat - 300" fontSize="14px">8 by YOOX: Select this season's perfect party looks</Text>
                    <HStack w="fit-content" margin="auto" mt="10px" >

                        <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" >SHOP NOW</Link>
                        <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" >GET INSPIRED</Link>

                    </HStack>

                </Container>


            </Box>

            <br />
            <br />

            <Flex>
                <Box h="700px" w="100vw" position="relative" bgImage={`url("https://www.yoox.com/images/yoox80/banners/5460_1_OrangeFiber_BOTTOM_WM.jpg?634485886869569819#width=690&height=637")`} bgPosition="center" bgSize="cover" >

                    <Container bg="white" w="fit-content" padding="25px" position="absolute" bottom="15px" left='30px'   >
                        <Heading fontSize="24px" fontFamily="'Playfair Display', serif" lineHeight="24px"> 8 BY ORANGE FIVER</Heading>
                        <Text mt="10px" fontFamily="Montserrat - 300" fontSize="14px">Innovative And Responsible:Discover The HomeWare Collection</Text>
                        <HStack w="fit-content" margin="auto" mt="10px" >

                            <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" >DISCOVER MORE </Link>
                            <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" >SHOP NOW</Link>

                        </HStack>

                    </Container>


                </Box>
                <Box h="700px" w="100vw" position="relative" bgImage={`url("https://www.yoox.com/images/yoox80/banners/6824_1_Getaway_M_Half.jpg?634485886869569819#width=690&height=637")`} bgPosition="center" bgSize="cover" >

                    <Container bg="white" w="fit-content" padding="25px" position="absolute" bottom="15px" right='10px'   >
                        <Heading fontSize="24px" fontFamily="'Playfair Display', serif" lineHeight="24px">BIG CITY VIBES</Heading>
                        <Text mt="10px" fontFamily="Montserrat - 300" fontSize="14px">Innovative And Responsible:Discover The HomeWare Collection</Text>

                      
                       <Link href='#' textDecoration="underline" fontSize='14px' color="#333333" ml="-20px" >SHOP NOW</Link>
                     
                    </Container>


                </Box>
            </Flex>
















        </div>
    )
}

export default Menpage
