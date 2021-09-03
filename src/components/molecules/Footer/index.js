import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bgColor="#FFE9E9" fontFamily="Montserrat">
      <Box maxW="1450" w="78%" margin="auto" pt="4rem" pb="2rem">
        <Text as="h1" fontSize="20px" fontWeight="semibold">
          Dadar
        </Text>
        <Text as="h1" fontSize="18px">
          kamus resep masakan lengkap
        </Text>
      </Box>
      <Box bgColor="#ff5252" color="white">
        <Box maxW="1450" w="78%" margin="auto" py={2}>
          <Text as="h3" textAlign="center" fontSize="12px">
            Dada 2021 Rizqi k
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
