import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack, // Import HStack for horizontal layout
} from "@chakra-ui/react";

const UploadForm = () => {
  
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    console.log("Form Data:", formData);

    setDescription("");
    setSelectedFile(null);
  };

  return (
     <Box>
      <Box flex="1" p="20px">
        <form  onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel color="white" height={"30px"}>Description</FormLabel>
            <Textarea
              value={description}
              color={'white'}
              onChange={handleDescriptionChange}
              required
            />
          </FormControl>
          <HStack spacing="4" alignItems="flex-end"> 
            <FormControl>
              <FormLabel color="white" >Image</FormLabel>
              <Input height={"30px"}  type="file" color={'white'} onChange={handleFileChange} required />
            </FormControl>
            <Button type="submit" colorScheme="blue" height={"30px"} color={'white'} bg={"green"}>
              Upload
            </Button>
          </HStack>
        </form>
      </Box>
      <Box>
  {selectedFile && (
    <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" width="500px" />
  )}
</Box>

    </Box>

  );
};

export default UploadForm;
