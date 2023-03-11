import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack
      p={4}
      gap={10}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      w="100%"
      align="center"
      justify="center"
    >
      <Button fontSize={17} color={"white"} variant={"unstyled"}>
        <Link to={"/"}>Home</Link>
      </Button>
      <Button fontSize={17} color={"white"} variant={"unstyled"}>
        <Link to={"/coins"}>Coins</Link>
      </Button>
      <Button fontSize={17} color={"white"} variant={"unstyled"}>
        <Link to={"/exchanges"}>Exchanges</Link>
      </Button>
    </HStack>
  );
};

export default Header;
