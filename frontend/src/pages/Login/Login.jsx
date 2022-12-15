import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  gender: "",
  dateOfBirth: "",
  checkbox: false,
};

const Login = () => {
  const [value, setValue] = useState(initialState);

  const handleLoginData = async (val) => {
    try {
      const res = await axios(`http://localhost:8080/api/v2/login`, {
        method: "post",
        data: val,
      });
      console.log(res);
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
      <Container>
        <Center>
          <Stack spacing={"2"}>
            <Box m="1" p="1">
              <Text>REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</Text>
              <Flex direction={"column"} gap="2">
                <Button>Facebook</Button>
                <Button>Google</Button>
              </Flex>

              <Text>OR WITH YOUR EMAIL</Text>
            </Box>
            <Box m="1" p="1">
              <form onSubmit={handleSubmit}>
                <Input
                  placeholder="EMAIL"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  name="email"
                />
                <Input
                  placeholder="PASSWORD"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  name="password"
                />

                <Flex bg="lightgray">
                  <Checkbox
                    spacing="4"
                    p="2"
                    size="lg"
                    outline="black"
                    value={value.checkbox}
                    name="checkbox"
                    // onChange={"checkbox" ? true : false}
                  ></Checkbox>
                  <Text fontSize="xs">REMEMBER ME</Text>
                </Flex>
                <Text fontSize="xs">
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
                >
                  LOGIN
                </Button>
              </form>
            </Box>
          </Stack>
        </Center>
      </Container>
    </>
  );
};

export default Login;
