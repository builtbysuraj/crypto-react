import { Container, HStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { server } from "../App";
import ErrorCompo from "./ErrorCompo";
import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) {
    return <ErrorCompo msg={"Error while fetching exchanges"} />;
  }

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <HStack wrap={"wrap"} justifyContent={"center"}>
          {data?.map((e, i) => {
            return (
              <ExchangeCard
                key={i}
                name={e.name}
                img={e.image}
                rank={e.trust_score_rank}
                url={e.url}
              />
            );
          })}
        </HStack>
      )}
    </Container>
  );
};

export default Exchanges;
