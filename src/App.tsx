
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddStock from "./components/add-stock/AddStock";
import EditStock from "./pages/edit-stock/EditStock";
import StockDetails from "./pages/stock-details/StockDetails";
import StockList from "./pages/stock-list/StockList";


function App() {
 

  return (
    <>
      {/* Nav */}
     <AddStock/>
      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/stocks" element={<StockList />} />
        <Route path="/stocks/edit/:id" element={<EditStock />} />
        <Route path="/stocks/details/:id" element={<StockDetails />} />
      </Routes>
    </>
  );
}

export default App;
