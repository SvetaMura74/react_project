
import { useAppSelector } from "../../app/hooks";
import AddStock from "../../components/add-stock/AddStock";
import StockListHeader from "../../components/header/StockListHeader";
import StockItem from "../stock-item/StockItem";

const StockList = () => {
  const stocks = useAppSelector((state) => state.stocks.stocks);
  return (
    <>
      <AddStock />
      <StockListHeader/>
      <div>
        {stocks.map((stock) => (
          <StockItem {...stock} key={stock.id} />
        ))}
      </div>
    </>
  );
      
    

};
export default StockList;
