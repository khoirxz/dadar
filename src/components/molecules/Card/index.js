import { Box, GridItem, Img, Text, Flex } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

import { IoIosTimer } from "react-icons/io";
import { BiGroup } from "react-icons/bi";
import { AiFillSignal } from "react-icons/ai";

const Card = ({ title, thumb, times, portion, dificulty, id }) => {
  return (
    <GridItem
      as={ReactLink}
      to={`/details/${id}`}
      className="Card"
      maxW="250px"
      maxh="300px"
      margin="auto"
      title={title}
      sx={{
        flexDir: "column",
        bgColor: "#fff",
        h: "100%",
        w: "100%",
        borderRadius: "7px",
        shadow: "sm",
        display: "flex",
        cursor: "pointer",
        transition: "box-shadow 0.8s",
      }}
      _hover={{
        transition: "box-shadow 0.8s",
        shadow: "xl",
      }}
    >
      <Img src={thumb} alt={title} borderTopRadius="7px" />
      <Box className="card-header">
        <Text as="h1" m={2} fontWeight="semibold">
          {title.slice(0, 23) + " ..."}
        </Text>
      </Box>
      <Flex m={2} fontSize="12px" justifyContent="space-between">
        <Text as="span" display="flex" flexDir="column" alignItems="center">
          <IoIosTimer size="24" /> {times}
        </Text>
        <Text as="span" display="flex" flexDir="column" alignItems="center">
          <BiGroup size="24" /> {portion}
        </Text>
        <Text
          as="span"
          display="flex"
          flexDir="column"
          alignItems="center"
          color={
            dificulty.toLowerCase() === "cukup rumit" ? "red.600" : "green.600"
          }
        >
          <AiFillSignal size="24" /> {dificulty}
        </Text>
      </Flex>
    </GridItem>
  );
};

export default Card;
