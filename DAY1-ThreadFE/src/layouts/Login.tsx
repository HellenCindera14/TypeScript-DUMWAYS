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
import API from "../lib/api";
import IUserLogin from "../interface/users";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const [form, setForm] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const navigate = useNavigate();

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault(); // Prevent default form submission
    console.log("data login", form);
    try {
      const response = await API.post("/auth/login", form);
      console.log("login berhasil", response);
      localStorage.setItem("token", response.data.token);
      navigate("/ThreadCard");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ChakraProvider>
      <Box textAlign="center" p={8}>
        <Text fontSize="2xl" color="white">
          Login Form
        </Text>
        <Box maxW="md" mx="auto" mt={4} p={4} borderWidth={1} borderRadius="md">
          <form onSubmit={handleLogin}>
            <FormControl id="email">
              <FormLabel color="white">email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel color="white">password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={form.password}
                name="password"
                onChange={handleChange}
              />
            </FormControl>
            <Button mt={6} colorScheme="teal" type="submit">
              Log in
            </Button>
          </form>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
