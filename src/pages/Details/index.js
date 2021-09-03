import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import * as api from "../../apis/index";

import { Navbar, Footer } from "../../components/molecules";

import { IoIosTimer } from "react-icons/io";
import { BiGroup } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";
import ImgCover from "../../assets/img/food.jpg";
// import axios from "axios";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/api/masakan/details/" + id)
    //   .then((response) => {
    //     setDetails(response.data);
    //     setLoading(false);
    //   });

    const getDetails = async () => {
      const { data } = await api.fectDetails(id);

      setDetails(data);
      setLoading(false);
    };

    getDetails();
  }, [id]);

  if (loading) {
    return (
      <Box textAlign="center" margin="auto" height="100vh">
        <Spinner size="xl" />
        <Text>Loading</Text>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      {console.log(details)}
      <Box maxW="1450" w="78%" margin="auto" py="28" fontFamily="Montserrat">
        {!details.length === 0 ? (
          <Text textAlign="center">Recet Tidak ditemukan</Text>
        ) : (
          <Flex flexDir="column">
            <Image
              src={details.thumb}
              alt={details.title}
              w="100%"
              fallbackSrc={ImgCover}
            />
            <Box bgColor="#ffffff" p={3}>
              <Text
                className="title"
                as="h1"
                my={3}
                fontWeight="semibold"
                fontSize="5xl"
              >
                {details.title}
              </Text>

              <Box>
                <Text my={2}>Oleh : {details.author.user}</Text>
                <Text>{details.author.datePublished}</Text>
              </Box>

              <Flex m={2} fontSize="12px">
                <Text
                  as="span"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  mr={4}
                >
                  <IoIosTimer size="24" /> {details.times}
                </Text>
                <Text
                  as="span"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  mr={4}
                >
                  <BiGroup size="24" /> {details.servings}
                </Text>
                <Text
                  as="span"
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  mr={4}
                  color={
                    details.dificulty.toLowerCase() === "cukup rumit"
                      ? "red.600"
                      : "green.600"
                  }
                >
                  <AiFillSignal size="24" /> {details.dificulty}
                </Text>
              </Flex>

              <Box my={2}>
                <Text>{details.desc}</Text>
              </Box>

              <Grid
                templateColumns={["repeat(1, 200px)", "repeat(2, 200px)"]}
                width="60%"
                margin="auto"
                mt="1rem"
                justifyContent="center"
                gap="30"
                textAlign="center"
              >
                {details.needItem.map((item) => (
                  <GridItem>
                    <Image src={item.thumb_item} ml="auto" mr="auto" />
                    <Text my="1rem">{item.item_name}</Text>
                  </GridItem>
                ))}
              </Grid>

              <Box m={4}>
                <Text as="ul">
                  {details.ingredient.map((item) => (
                    <Text as="li">{item}</Text>
                  ))}
                </Text>
              </Box>

              <Box m={4}>
                <Text as="ul">
                  {details.step.map((item) => (
                    <Text as="li">{item}</Text>
                  ))}
                </Text>
              </Box>
            </Box>
          </Flex>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default Details;
