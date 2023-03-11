import { Alert, AlertIcon } from "@chakra-ui/react";

const ErrorCompo = ({msg}) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      top={"24"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
    >
      <AlertIcon />
      {msg}
    </Alert>
  );
};

export default ErrorCompo;
