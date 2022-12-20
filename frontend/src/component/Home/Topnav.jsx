import React, { useState } from "react";
import {
  Container,
  Box,
  Text,
  HStack,
  ChakraProvider,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Stack,
  Input,
  Checkbox,
  useToast,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaUnlock } from "react-icons/fa";
import { BsHandbagFill, BsFillPencilFill } from "react-icons/bs";
import { SMARTPOINT } from "../../assets";
import { json, Link, NavLink, useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import googleLogo from "../../assets/GOOG.png";
import { userLogin, userLogout } from "../../redux/auth.reduser";
import Women from "../WomensPage/Women";
import axios from "axios";
const data = JSON.parse(localStorage.getItem("user")) || "";

export default function Topnav() {
  const [userData, setUserData] = useState(data);

  const initialState = {
    email: "",
    password: "",
  };

  const [value, setValue] = useState(initialState);
  const navigate = useNavigate();
  const toast = useToast();

  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [token, setToken] = useState("");
  const [status, setStatus] = useState(true);

  const handleLoginData = async (val) => {
    try {
      // dispatch(userLogin(val));

      const res = await axios(
        `https://shy-tan-coypu-garb.cyclic.app/api/v1/login`,
        {
          method: "post",
          data: val,
        }
      );
      // console.log(res);
      localStorage.setItem("user", JSON.stringify(res));
      setUserData(res);

      // setToken(storeState.authentication.token);

      if (res.data.token) {
        navigate("/women");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogoutData = () => {
    dispatch(userLogout());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    handleLoginData(value);
  };

  return (
    <>
      <ChakraProvider>
        <Container
          position="sticky"
          top="0"
          zIndex="99"
          maxW="10xl"
          p="4"
          bg="white"
          centerContent
        >
          <HStack spacing="90">
            <Text
              fontfamily="Montserrat, sans-serif"
              textDecoration="underline"
              fontSize="10px"
              fontWeight="700"
              cursor="pointer"
            >
              INDIA
            </Text>
            <Text
              textDecoration="underline"
              fontSize="10px"
              fontWeight="700"
              cursor="pointer"
            >
              CUSTOMER CARE
            </Text>
            <Text fontSize="10px" fontWeight="700">
              WANT TO RECEIVE YOUR GIFT IN TIME? | DISCOVER MORE{" "}
            </Text>
            <NavLink to="/register">
              <Text
                textDecoration="underline"
                fontSize="10px"
                fontWeight="700"
                cursor="pointer"
              >
                ✎ REGISTER
              </Text>
            </NavLink>

            <Menu>
              <MenuButton
                padding="0"
                bg="transparent"
                variant="none"
                as={Button}
              >
                {/* <Text
                  textDecoration="underline"
                  fontSize="10px"
                  fontWeight="700"
                  cursor="pointer"
                > */}
                {data ? (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap="1"
                  >
                    <Button onClick={handleLogoutData} fontSize="0.8rem" p="1">
                      LOGOUT
                    </Button>
                    <Text fontSize="1rem">{data.data.user.first_name}</Text>
                  </Box>
                ) : (
                  <Text
                    textDecoration="underline"
                    fontSize="10px"
                    fontWeight="700"
                    cursor="pointer"
                  >
                    LOGIN
                  </Text>
                )}
                {/* </Text> */}
              </MenuButton>
              <MenuList bg="white" w="321px" zIndex="9999">
                <Stack>
                  <Box m="1" p="1" textAlign="center">
                    <Text
                      fontWeight="bold"
                      fontSize="1.3rem"
                      borderBottom="2px dotted lightgray"
                      p="2"
                      marginBottom="1rem"
                    >
                      It’s great to see you again.
                    </Text>

                    <Text>Log in with</Text>
                    <Flex
                      direction={"row"}
                      gap="2"
                      m="2 auto 2 auto"
                      justifyContent="center"
                      borderBottom="2px dotted lightgray"
                      p="1rem"
                      marginBottom="1rem"
                    >
                      <Button
                        minW="8rem"
                        h="3.5rem"
                        borderRadius="none"
                        bg="#3b5998"
                        color="white"
                        _hover="none"
                      >
                        <Image
                          src="https://freepngimg.com/thumb/facebook/62487-bluetie-icons-computer-facebook-login-icon-email.png"
                          w="2rem"
                          marginLeft="0.5rem"
                        />
                      </Button>
                      <Button
                        minW="8rem"
                        h="3.5rem"
                        borderRadius="none"
                        bg="white"
                        color="black"
                        _hover="none"
                        border="1px solid lightgray"
                      >
                        <a
                          href="https://shy-tan-coypu-garb.cyclic.app/auth/google"
                          style={{
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src={googleLogo}
                            w="1.5rem"
                            marginLeft="0.5rem"
                          />
                        </a>
                      </Button>
                    </Flex>

                    <Text>or with your e-mail address</Text>
                  </Box>
                  <Box m="1" p="2">
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <Input
                        p="2"
                        marginBottom="1.5rem"
                        borderRadius="none"
                        bg="lightgray"
                        color="black"
                        fontWeight="700"
                        outline="none"
                        placeholder="EMAIL"
                        onChange={(e) =>
                          setValue({
                            ...value,
                            [e.target.name]: e.target.value,
                          })
                        }
                        name="email"
                        required
                      />
                      <Input
                        p="2"
                        marginBottom="0.7rem"
                        borderRadius="none"
                        bg="lightgray"
                        color="black"
                        fontWeight="700"
                        outline="none"
                        placeholder="PASSWORD"
                        onChange={(e) =>
                          setValue({
                            ...value,
                            [e.target.name]: e.target.value,
                          })
                        }
                        name="password"
                        type="password"
                        required
                      />

                      <Flex m="1" p="1">
                        <Checkbox
                          value={value.checkbox}
                          name="checkbox"

                          // onChange={"checkbox" ? true : false}
                        ></Checkbox>
                        <Text
                          fontSize="1rem"
                          m="1"
                          p="1"
                          color="gray"
                          fontStyle="italic"
                        >
                          REMEMBER ME
                        </Text>
                      </Flex>
                      <Text
                        fontSize="xs"
                        m="1"
                        p="1"
                        textAlign="right"
                        fontWeight="500"
                      >
                        <Link
                          path={"/"}
                          style={{ textDecoration: "underline" }}
                        >
                          Forgot your password?
                        </Link>
                      </Text>
                      <Button
                        type="submit"
                        w="100%"
                        color="white"
                        bg="black"
                        borderRadius="none"
                        m="1"
                        p="1"
                        fontSize="0.875rem"
                        _hover="none"
                        onClick={() => {
                          toast({
                            position: "top",
                            title: "You have been Login Successfully",
                            width: "800px",
                            maxWidth: "100%",
                          });
                        }}
                      >
                        LOG IN
                      </Button>
                    </form>
                    <Text
                      marginTop=".5rem"
                      marginBottom="0.5rem"
                      textAlign="center"
                      fontSize="xs"
                      color="gray"
                      p="0.5rem"
                      borderBottom="1px dotted lightgray"
                    >
                      For more information, please consult the{" "}
                      <Link to={"/pp"} style={{ textDecoration: "underline" }}>
                        Privacy Policy
                      </Link>
                    </Text>
                    <Text
                      fontSize="xs"
                      textAlign="center"
                      fontWeight="500"
                      marginBottom="1rem"
                    >
                      ARE YOU NEW TO YOOX?{" "}
                      <Link
                        to={"/register"}
                        style={{ textDecoration: "underline" }}
                      >
                        REGISTER NOW
                      </Link>{" "}
                    </Text>
                  </Box>
                </Stack>
              </MenuList>
            </Menu>
          </HStack>
          <HStack bg="#F4F4F4" h="0.2vh" w="2000px" mt="1"></HStack>
          <HStack>
            <Box id="womenbtn">
              <NavLink to="/women">
                <Button bg="none" fontSize="12px" fontWeight="700">
                  WOMEN
                </Button>
              </NavLink>
              <NavLink to="/men">
                <Button bg="none" fontSize="12px" fontWeight="700">
                  MEN
                </Button>
              </NavLink>

              <NavLink to="/kids">
                <Button bg="none" fontSize="12px" fontWeight="700">
                  KIDS
                </Button>
              </NavLink>
              <NavLink to="/art">
                <Button bg="none" fontSize="12px" fontWeight="700">
                  DESIGN+ART
                </Button>
              </NavLink>
            </Box>
            <Box marginLeft="50px" id="navimg">
              <a href="Women">
                <Image
                  ml="50px"
                  w="100px"
                  h="8vh"
                  p=".5rem"
                  backgroundColor="white"
                  borderRadius="50%"
                  src={SMARTPOINT}
                />
              </a>
            </Box>
            <Box id="cartbag">
              <Button ml="200px" bg="none" fontSize="17px" fontWeight="700">
                <FiSearch />
              </Button>
              <Button bg="none" fontSize="17px" fontWeight="700">
                <AiOutlineHeart />
              </Button>
              <Button bg="none" fontSize="16px" fontWeight="700">
                <BsHandbagFill />
              </Button>
            </Box>
          </HStack>
        </Container>
      </ChakraProvider>
    </>
  );
}
