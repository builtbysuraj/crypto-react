import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>
  );
};
export const server = `https://api.coingecko.com/api/v3`;

export default App;
