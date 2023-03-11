import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../App";
import CoinCard from "./CoinCard";
import ErrorCompo from "./ErrorCompo";
import Loader from "./Loader";

const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [curr, setCurr] = useState("inr");
  const [page, setPage] = useState(1);

  const currentcySymbol = curr === "inr" ? "₹" : curr === "eur" ? "€" : "$";

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${curr}&page=${page}`
        );
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [curr, page]);
  if (error) return <ErrorCompo msg={"Error while fetching coins"} />;

  const changePage = (index) => {
    if (index !== page) {
      setPage(index);
      setLoading(true);
    }
  };

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={curr} onChange={setCurr} p={8}>
            <HStack spacing={6}>
              <Radio value="inr">INR</Radio>
              <Radio value="eur">EUR</Radio>
              <Radio value="usd">USD</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"center"} >
            {data?.map((e, i) => {
              return (
                <CoinCard
                  key={i}
                  name={e.name}
                  img={e.image}
                  id={e.id}
                  price={e.current_price}
                  symbol={e.symbol}
                  currentcySymbol={currentcySymbol}
                />
              );
            })}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((e, i) => (
              <Button
                key={i}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(i + 1)}
              >
                {i + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
