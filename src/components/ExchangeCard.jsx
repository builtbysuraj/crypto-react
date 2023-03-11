import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <a href={url} title={name} target={"blank"}>
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
          {rank}
        </Heading>
        <Text noOfLines={1}>{name}</Text>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
