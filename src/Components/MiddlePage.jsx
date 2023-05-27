import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import digitaze from "../images/digitaze.png";
import track from "../images/track.png";
import vector from "../images/Vector.png"

const MiddlePage = () => {
  return (
    <Box w={"95%"} m={"auto"}>
      <Flex gap={"80px"} p={8}>
        <Box
          bgColor={"#004F95"}
          w={"45%"}
          height={"auto"}
          borderRadius={"20px"}
        >
          <p className="features">Features</p>

          <Flex gap={8} width={"75%"} margin={"auto"} mt={4} alignItems={"center"}>
            <Box id="img_box">
              <Image p={2} src={digitaze} />
            </Box>
            <Flex flexDirection={"column"} gap={2} justifyContent={"center"}>
              <p className="category_name">Digitaze</p>
              <p className="description">
                A Bird eye view of the entire Biomedical Operations.
              </p>
            </Flex>
          </Flex>

          <Flex gap={8} width={"75%"} margin={"auto"} mt={8} alignItems={"center"}>
            <Box id="img_box">
              <Image p={2} src={track} />
            </Box>
            <Flex flexDirection={"column"} gap={2} justifyContent={"center"}>
              <p className="category_name">Track</p>
              <p className="description">
              Track the product life cycle and service history.
              </p>
            </Flex>
          </Flex>

          <Flex gap={8} width={"75%"} margin={"auto"} mt={8} pb={8} alignItems={"center"}>
            <Box id="img_box">
              <Image p={2} src={vector} />
            </Box>
            <Flex flexDirection={"column"} gap={2} justifyContent={"center"}>
              <p className="category_name">Biomedical Budget</p>
              <p className="description">
              Regulate and save budget through analysed data and informed</p>
            </Flex>
          </Flex>
        </Box>

        <Box
          bgColor={"#F0F8FF"}
          w={"50%"}
          height={"auto"}
          borderRadius={"20px"}
        >
          <p className="sign-in">Sign in</p>
          <div className="line"></div>
          <Box width={"65%"} margin = "auto" mt={4}>
          <p className="form_text">Sign in to your account</p>
          <form>
            <Text className="label_text" mt={2}>Email Id</Text>
            <Input mt={2} type="email" placeholder="xxxxxxxxx" variant={"none"} boxShadow={"2px 2px 8px -2px rgba(0, 79, 149, 0.1)"} borderRadius={"5px"}/>

            <Text className="label_text" mt={4}>Password</Text>
            <Input mt={2} type="password" placeholder="xxxxxxxxx" variant={"none"} boxShadow={"2px 2px 8px -2px rgba(0, 79, 149, 0.1)"} borderRadius={"5px"}/>
            <Text className="label_text forgot" mt={4}>Forgot Password</Text>
            <Input mt={2} type="submit" color={"white"} value={"Sign in"} id="submit" variant={"none"}/>
            <Flex gap={8} justifyContent={"center"} mt={2} pb={4}>
            <p className="new_account">New to vajra</p>
            <p className="new_account sign_up">Sign UP Now</p>
            </Flex>
           
          </form>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MiddlePage;
