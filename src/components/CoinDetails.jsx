import { Box, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [curr, setCurr] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol = curr === "inr" ? "₹" : curr === "eur" ? "€" : "$";
  useEffect(() => {
    
  }, []);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box></Box>
        </>
      )}
    </Container>
  );
};

export default CoinDetails;
