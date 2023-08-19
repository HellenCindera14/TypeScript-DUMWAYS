import { useState, ChangeEvent } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Input,
  Button,
  Stack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { API } from "../lib/api";
import {IUserLogin} from "../interface/users";
import { Link, useNavigate } from "react-router-dom";
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
    event.preventDefault();
    console.log("data login", form);
    try {
      const response = await API.post("/auth/login", form);
      console.log("login berhasil", response);
      localStorage.setItem("token", response.data.token);
      navigate("/ ");
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
                color={'white'}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password" mt={4}>
              <FormLabel color="white">password</FormLabel>
              <Input
                type="password"
                color={'white'}
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
          <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
            </Stack>
          <Stack pt={1}>
            <Text textAlign={'center'} color={"white"}>
              Don't Have an account yet? <Link to={"/FormRegister"}><Text color={'green'}>Create Account</Text></Link>
            </Text>
          </Stack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
