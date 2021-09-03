import { Box, Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      bgColor="#FFE9E9"
      fontFamily="Playfair Display"
      sx={{
        borderBottomRadius: "15px",
      }}
    >
      <Box
        maxW="1450"
        w="78%"
        margin="auto"
        height={[
          "calc(100vh - 5.3rem)",
          "calc(100vh - 10.3rem)",
          "calc(100vh - 15.3rem)",
        ]}
      >
        <Flex
          flexDir="column"
          height="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="25px" letterSpacing="0.05rem" fontWeight="normal">
            cari semua resep masakan di
          </Text>
          <Text fontSize="81px" letterSpacing="0.025rem" fontWeight="900">
            Data Dapur
          </Text>
          <Text fontSize="25px" letterSpacing="0.05rem" fontWeight="normal">
            buat masakanmu berkesan setiap waktu
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
