import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinCard = ({ name, img, symbol, id, price, currentcySymbol = "₹" }) => {
  return (
    <Link to={`/coins/${id}`} title={name}>
      <VStack
        w={"52"}
        shadow={"lg"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={4}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={img}
          w={"10"}
          h={"10"}
          objectFit={"contain"}
          alt={"Exchange_img"}
        />
        <Heading size={"md"} noOfLines={1}>
          {symbol}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
        <Text noOfLines={1}>{price ? `${currentcySymbol}${price}` : "NA"}</Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
