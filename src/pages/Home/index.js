import { useState, useEffect } from "react";
import { Box, Button, Input, Flex, Grid, Text } from "@chakra-ui/react";
import { Navbar, Hero, Card } from "../../components/molecules";

import Footer from "../../components/molecules/Footer";
import * as api from "../../apis/index";

const handleSubmit = (e) => {
  e.preventDefault();
};

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const { data } = await api.fetchRecipes();

      setData(data);
    };

    getItems();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Box maxW="1450" w="78%" margin="auto" py="28" fontFamily="Montserrat">
        {/* FORM SEARCH */}
        <Flex
          onSubmit={handleSubmit}
          as="form"
          maxW="500px"
          margin="auto"
          p={1}
          bgColor="#ffffff"
          sx={{
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#9F8282",
            borderRadius: "7px",
          }}
        >
          <Input
            name="name"
            placeholder="Cari disini"
            width="80%"
            _focus={{
              outline: "none",
            }}
            sx={{
              borderStyle: "none",
              borderWidth: "0",
            }}
            _placeholder={{
              color: "#a8a3a3",
            }}
          />
          <Button
            type="submit"
            bgColor="#FF5B5B"
            color="white"
            _hover={{
              bgColor: "#FF7979",
            }}
            _active={{
              bgColor: "#DF4040",
            }}
            width="20%"
          >
            Cari
          </Button>
        </Flex>
        <Grid
          mt="3rem"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          rowGap="30px"
        >
          {data ? (
            data.map((item, i) => (
              <Card
                key={i}
                id={item.key}
                title={item.title}
                thumb={item.thumb}
                times={item.times}
                portion={item.portion}
                dificulty={item.dificulty}
              />
            ))
          ) : (
            <Text textAlign="center">Loading</Text>
          )}
        </Grid>
        <Flex mt="5rem" justifyContent="center">
          <Button
            type="submit"
            bgColor="#FF5B5B"
            color="white"
            _hover={{
              bgColor: "#FF7979",
            }}
            _active={{
              bgColor: "#DF4040",
            }}
          >
            Memuat Lagi
          </Button>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
