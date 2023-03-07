import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import About from "./pages/about/About";
import EditStock from "./pages/edit-stock/EditStock";
import IntradayRates from "./pages/intraday-rates/IntradayRates";
import StockDetails from "./pages/stock-details/StockDetails";
import StockList from "./pages/stock-list/StockList";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/stocks" element={<StockList />} />
        <Route path="/about" element={<About />} />
        <Route path="/intraday" element={<IntradayRates />} />
        <Route path="/stocks/edit/:id" element={<EditStock />} />
        <Route path="/stocks/details/:id" element={<StockDetails />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
