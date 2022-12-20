import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Box,
  Text,
  Button,
  Center,
  Input,
  Stack,
  Flex,
  Checkbox,
  Image,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import googleLogo from "../../assets/GOOG.png";
import { userLogin } from "../../redux/auth.reduser";

const data = JSON.parse(localStorage.getItem("user")) || "";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [value, setValue] = useState(initialState);
  const navigate = useNavigate();
  const toast = useToast();
  const [userData, setUserData] = useState(data);

  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [status, setStatus] = useState(true);

  const handleLoginData = async (val) => {
    try {
      //dispatch(userLogin(val));

      // const res = await axios(`https://shy-tan-coypu-garb.cyclic.app/api/v1/login`, {
      //   method: "post",
      //   data: val,
      // });
      // console.log(res);
      // localStorage.setItem("user", JSON.stringify(res));
      // setUserData(res);

      //setToken(storeState.authentication.token);

      // if (res.data.token) {
      //   navigate("/women");
      // }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    handleLoginData(value);
    
  };

  return (
    <>
      <Container w="350px" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
        <Center>
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
                    <Image src={googleLogo} w="1.5rem" marginLeft="0.5rem" />
                  </a>
                </Button>
              </Flex>

              <Text>or with your e-mail address</Text>
            </Box>
            <Box m="1" p="1">
              <form onSubmit={(e) => handleSubmit(e)}>
                <Input
                  m="1"
                  p="2"
                  marginBottom="1.5rem"
                  borderRadius="none"
                  bg="lightgray"
                  color="black"
                  fontWeight="700"
                  outline="none"
                  placeholder="EMAIL"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  name="email"
                  required
                />
                <Input
                  m="1"
                  p="2"
                  marginBottom="0.7rem"
                  borderRadius="none"
                  bg="lightgray"
                  color="black"
                  fontWeight="700"
                  outline="none"
                  placeholder="PASSWORD"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
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
                  <Link path={"/"} style={{ textDecoration: "underline" }}>
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
                <Link to={"/register"} style={{ textDecoration: "underline" }}>
                  REGISTER NOW
                </Link>{" "}
              </Text>
            </Box>
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default Login;
