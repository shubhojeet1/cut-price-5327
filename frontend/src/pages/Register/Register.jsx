import React, { useState } from "react";
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
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios"

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

  const handleRegisterData = async (val) => {
    try {
      const res = await axios(`http://localhost:8080/api/v1/register`, {
        method: "post",
        data: val,
      });
      console.log(res)
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(value);
    handleRegisterData(value);
  };

  return (
    <>
      <Container>
        <Center>
          <Stack spacing={"2"}>
            <Box bg="lightgray" border="1px solid black">
              <Text>MYOOX</Text>
              <Text>REGISTRATION</Text>
              <Text>Take advantage of a faster checkout and enjoy promotions for registered customers only</Text>
              <Text><Link path={"/"} style={{textDecoration:"underline"}}>Discover all the benefits</Link></Text>
            </Box>
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
                  placeholder="FIRST NAME"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  name="first_name"
                />
                <Input
                  placeholder="LAST NAME"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  name="last_name"
                />
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
                <Text fontSize="xs">Personalize your shopping experience.</Text>
                <RadioGroup
                  onChange={(e) => setValue({ ...value, gender: e })}
                  //value={value.gender}
                >
                  <Stack direction="row">
                    <Radio value="female">Female</Radio>
                    <Radio value="male">Male</Radio>
                  </Stack>
                </RadioGroup>
                <Text fontSize="xs">
                  If you are over 18 years old, celebrate your birthday with us:
                  We have a surprise for you.
                </Text>
                <Input
                  placeholder="DATE OF BIRTH"
                  type="date"
                  onChange={(e) =>
                    setValue({ ...value, [e.target.name]: e.target.value })
                  }
                  name="dateOfBirth"
                />
                <em>
                  <Text
                    fontSize="xs"
                    bg="lightgray"
                    m="1"
                    p="1"
                    textAlign="center"
                  >
                    I declare that I have read and accept the{" "}
                    <Link path={"/"} style={{ textDecoration: "underline" }}>
                      MYOOX Terms and Conditions of Use
                    </Link>
                  </Text>
                </em>
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
