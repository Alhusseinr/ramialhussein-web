import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  Fieldset
} from "@chakra-ui/react";

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const toast = useToast();

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example: Sending data (replace with your actual logic)
    console.log("Form submitted:", formData);

    // // Show success notification
    // toast({
    //   title: "Message sent.",
    //   description: "Thank you for reaching out! We'll get back to you soon.",
    //   status: "success",
    //   duration: 3000,
    //   isClosable: true,
    // });

    // Clear the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Box maxW="500px" mx="auto" p={6} bg="gray.800" borderRadius="md" boxShadow="lg">
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <Fieldset.Root>
          <Fieldset.Legend>Contact Me</Fieldset.Legend>
          <Fieldset.Content>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
          </Fieldset.Content>
        </Fieldset.Root>

        {/* Submit Button */}
        <Button type="submit" colorScheme="blue" width="100%">
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;