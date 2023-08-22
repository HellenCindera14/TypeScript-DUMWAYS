import { useState, ChangeEvent } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import IUserRegister from "../interface/Register";
import { API } from "../lib/api";

function FormRegister() {
  const [form, setForm] = useState<IUserRegister>({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
const navigate = useNavigate()
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleRegister() {
    console.log("data Register", form); 
    try {
      const response = await API.post("/register", form);
      console.log("Registration successful"); 
      navigate("/FormLogin"); //
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }
  

  return (
    <ChakraProvider>
      <Box textAlign="center" p={8} color="white">
        <Text fontSize="2xl">Registration Form</Text>
        <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="md">
          <form>
            <FormControl id="fullname" color="white">
              <FormLabel>Fullname</FormLabel>
              <Input
                type="text"
                placeholder="Enter your fullname"
                name="fullname" 
                value={form.fullname} 
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="username" mt={4} color="white">
              <FormLabel>UserName</FormLabel>
              <Input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={form.username}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="email" mt={4} color="white">
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" mt={4} color="white">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              mt={6}
              colorScheme="teal"
              type="button" 
              color="white"
              bg={"green"}
              onClick={handleRegister}
            >
              Register
            </Button>
          </form>
        </Box>
        
        <Text fontSize="lg" color="white" size="15px" display={"flex"}ml={"40%"}>
          Already have an account? {" "}
          <Link to={"/FormLogin"} ><Text color={'green'} ml={"5px"}>login</Text></Link>
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default FormRegister;
