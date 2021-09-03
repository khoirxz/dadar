// Button;
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Link as ReactRouter } from "react-router-dom";

import HomeIco from "../../../assets/svg/EggLogo.svg";
// "home", "masuk";
const item = ["about us"];

const Navbar = () => {
  return (
    <Box as="nav" fontFamily="Montserrat" bgColor="#FFE9E9">
      <Flex
        maxW="1450"
        w="78%"
        margin="auto"
        justifyContent="space-between"
        alignItems="center"
        py={3}
      >
        <Flex
          as={ReactRouter}
          to="/"
          className="Title"
          alignItems="center"
          _hover={{
            cursor: "pointer",
          }}
        >
          <Img src={HomeIco} alt="Logo" w="32px" h="32px" pr="1" />
          <Text as="h1" fontWeight="semibold" fontSize="30" letterSpacing="2px">
            Dadar
          </Text>
        </Flex>
        <Flex
          as="ul"
          alignItems="center"
          sx={{
            listStyle: "none",
          }}
        >
          {item.map((items, i) => (
            <Text
              key={i}
              px={3}
              as="li"
              _hover={{
                cursor: "pointer",
              }}
            >
              {items}
            </Text>
          ))}
          {/* <Text as="li">
            <Button
              bgColor="#FF5B5B"
              color="white"
              _hover={{
                bgColor: "#FF7979",
              }}
              _active={{
                bgColor: "#DF4040",
              }}
            >
              Daftar
            </Button>
          </Text> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
