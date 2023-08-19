// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { RootState } from "../stores/types/RootState";
// import { Flex, Heading, Stack, useColorModeValue, Text, Box, FormControl, Input, InputRightElement, Button } from "@chakra-ui/react";
// import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
// import { authLogin } from "../slice/authSlice"; // Assuming you've exported your authLogin action
// import { IUserLogin } from "../interface/users";
// import API from "../lib/api";

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const auth = useSelector((state: RootState) => state.auth);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [form, setForm] = useState<IUserLogin>({
//     email: "",
//     password: "",
//   });

//   function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     const { name, value } = event.target;
//     setForm({
//       ...form,
//       [name]: value,
//     });
//   }

//   async function handleLogin() {
//     try {
//       const response = await API.post('/auth/login', form);
//       dispatch(authLogin(response.data)); 
//       console.log("login success", response);
//       localStorage.setItem("token", response.data.token);  
//       navigate('/ThreadCard');
//     } catch (err) {
//       console.log("error");
//     }
//   }

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}>
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width={'800px'}>
//         <Stack align={'center'}>
//           <Heading fontSize={'6xl'} textAlign={'center'} color={'green'}>
//             Form Login
//           </Heading>
//           <Text fontSize={'4xl'} textAlign={'center'}>
//             Login In Your Account
//           </Text>
//         </Stack>
//         <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'}>
//           <Stack spacing={4}>
//             <FormControl id="email">
//               <Input type="email" placeholder='Email' name="email" onChange={handleChange}></Input>
//               <InputRightElement h={'full'}>
//                 <Button variant={'ghost'} onClick={() => setShowPassword((showPassword) => !showPassword)}>
//                   {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                 </Button>
//               </InputRightElement>
//             </FormControl>
//             <Stack
//               direction={{ base: 'column', sm: 'row' }}
//               align={'start'}
//               justify={'space-between'}>
//               <Text color={'green'}> Forgot Password?</Text>
//             </Stack>
//             <Button type="button" 
//               onClick={handleLogin}
//               bg={'green'}
//               color={'white'}
//               _hover={{
//                 bg: 'green.500',
//               }}>Sign in
//             </Button>
//           </Stack>
//           <Stack pt={1}>
//             <Text textAlign={'center'}>
//               Don't Have an account yet? <Link to={"/register"}><Text color={'green'}>Create Account</Text></Link>
//             </Text>
//           </Stack>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }
