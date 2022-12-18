import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Box,
  Text,
  Button,
  Center,
  Input,
  Stack,
  Radio,
  RadioGroup,
  Flex,
  Checkbox,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import googleLogo from "../../assets/GOOG.png";
import { userRegister } from "../../redux/auth.reduser";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  gender: "",
  dateOfBirth: "",
  checkbox: false,
};

const Register = () => {
  const [value, setValue] = useState(initialState);
  const navigate = useNavigate();
  const toast = useToast();

  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  if (storeState.authentication.isAuth) {
    // navigate to product or homepage
    return;
  }

  const handleRegisterData = async (val) => {
    dispatch(userRegister(val));

    // const res = await axios(`http://localhost:8080/api/v1/register`, {
    //   method: "post",
    //   data: val,
    // });
    // console.log(res);
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    handleRegisterData(value);
  };

  return (
    <>
      {/* <hr style={{backgroundImage: {url: "https://www.yoox.com/media/yoox16/myoox/border_dotted_big.png"}, marginTop:"10rem"}}/> */}
      <Container maxW="100%" m="0" p="0">
        <Box bg="#f3f3f3" textAlign="center" p="3rem">
          <Text as="b" fontSize="1.125rem" fontFamily="Montserrat,sans-serif">
            MYOOX
          </Text>
          <Text fontSize="0.875rem" marginBottom="10px">
            REGISTRATION
          </Text>
          <Text
            fontFamily="SourceSansPro,sans-serif"
            fontStyle="normal"
            fontSize="0.875rem"
          >
            Take advantage of a faster checkout and enjoy promotions for
            registered customers only
          </Text>
          <Text
            fontFamily="SourceSansProBold,sans-serif"
            fontWeight="700"
            fontStyle="normal"
            fontSize="0.875rem"
          >
            <Link path={"/"} style={{ textDecoration: "underline" }}>
              Discover all the benefits
            </Link>
          </Text>
        </Box>
        <Center marginBottom="5rem">
          <Stack
            spacing={"2"}
            maxW="30%"
            textAlign="center"
            // border="1px solid red"
          >
            <Box m="1" p="1">
              <Text
                fontSize="0.875rem"
                margin="46px 0px 12px 0px"
                fontWeight="600"
              >
                REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT
              </Text>
              <Flex direction={"column"} gap="2">
                <Button
                  textTransform="uppercase"
                  borderRadius="none"
                  h="3rem"
                  bg="#3b5998"
                  color="white"
                  fontSize="0.8rem"
                  _hover="none"
                >
                  Register with Facebook
                  <Image
                    src="https://freepngimg.com/thumb/facebook/62487-bluetie-icons-computer-facebook-login-icon-email.png"
                    w="2rem"
                    marginLeft="0.5rem"
                  />
                </Button>

                <Button
                  textTransform="uppercase"
                  borderRadius="none"
                  h="3rem"
                  bg="white"
                  color="black"
                  fontSize="0.8rem"
                  border="1px solid lightgray"
                  _hover="none"
                >
                  <a
                    href="http://localhost:8080/auth/google"
                    style={{
                      display: "inline-flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Register with Google
                    <Image src={googleLogo} w="1.5rem" marginLeft="0.5rem" />
                  </a>
                </Button>
              </Flex>

              <Text
                margin="46px 0px 12px 0px"
                fontSize="0.875rem"
                color="#333"
                fontWeight="600"
              >
                OR WITH YOUR EMAIL
              </Text>
            </Box>
            <Box m="1" p="1">
              <form
                onSubmit={handleSubmit}
                // onSubmit={() => {
                //    handleSubmit();
                //     toast({
                //       title: "Account created.",
                //       description: "We've created your account for you.",
                //       status: "success",
                //       duration: 9000,
                //       isClosable: true,
                //     })
                // }}
              >
                <Box lineHeight="5rem">
                  <Input
                    placeholder="FIRST NAME*"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    name="first_name"
                    required
                    bg="lightgray"
                    h="3rem"
                    _focus={{ outline: "none" }}
                    borderRadius="none"
                  />
                  <Input
                    placeholder="LAST NAME*"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    name="last_name"
                    required
                    bg="lightgray"
                    h="3rem"
                    _focus={{ outline: "none" }}
                    borderRadius="none"
                  />
                  <Input
                    placeholder="EMAIL*"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    name="email"
                    required
                    bg="lightgray"
                    h="3rem"
                    _focus={{ outline: "none" }}
                    borderRadius="none"
                  />
                  <Input
                    placeholder="PASSWORD*"
                    type="password"
                    onChange={(e) =>
                      setValue({ ...value, [e.target.name]: e.target.value })
                    }
                    name="password"
                    required
                    bg="lightgray"
                    h="3rem"
                    _focus={{ outline: "none" }}
                    borderRadius="none"
                  />
                </Box>
                <Text fontSize="xs" textAlign="left">
                  Personalize your shopping experience.
                </Text>
                <RadioGroup
                  onChange={(e) => setValue({ ...value, gender: e })}
                  //value={value.gender}
                >
                  <Stack
                    direction="row"
                    gap="6rem"
                    cursor="pointer"
                    marginTop="0.8rem"
                    fontStyle="italic"
                    // border="1px solid red"
                    p="2"
                  >
                    <Radio value="female">Female</Radio>
                    <Radio value="male">Male</Radio>
                  </Stack>
                </RadioGroup>
                <Text
                  fontSize="xs"
                  fontFamily="SourceSansPro,sans-serif"
                  margin="2rem 0 0.4rem 0"
                  textAlign="left"
                >
                  If you are over 18 years old, celebrate your birthday with us:
                  We have a surprise for you. (DATE OF BIRTH)
                </Text>
                <Input
                  placeholder="DATE OF BIRTH"
                  type="date"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  name="dateOfBirth"
                  marginBottom="1rem"
                />

                <em>
                  <Text
                    fontSize="xs"
                    bg="lightgray"
                    m="1"
                    p="1"
                    textAlign="center"
                    marginBottom="1.5rem"
                  >
                    I declare that I have read and accept the{" "}
                    <Link path={"/"} style={{ textDecoration: "underline" }}>
                      MYOOX Terms and Conditions of Use
                    </Link>
                  </Text>
                </em>
                <Flex bg="lightgray" marginBottom="2rem">
                  <Checkbox
                    spacing="4"
                    p="2"
                    size="lg"
                    outline="black"
                    value={value.checkbox}
                    name="checkbox"
                    // onChange={"checkbox" ? true : false}
                  ></Checkbox>
                  <Text fontSize="xs">
                    I agree to the use of my personal data in order to be
                    updated on new arrivals, informed about exclusive items and
                    contacted as part of targeted marketing initiatives related
                    to services offered by YOOX. By analyzing my personal data,
                    order history and browsing habits, YOOX can improve my
                    shopping experience with suggestions that correspond to my
                    interests. For further information, please consult the
                    Privacy Policy.
                  </Text>
                </Flex>
                <Button
                  type="submit"
                  w="100%"
                  color="white"
                  bg="black"
                  borderRadius="none"
                  _hover="none"
                  fontSize="0.8rem"
                >
                  REGISTER
                </Button>
              </form>
            </Box>
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default Register;
