
import { useAppSelector } from "../../app/hooks";
import StockItem from "../stock-item/StockItem";

const StockList = () => {
  const stocks = useAppSelector((state) => state.stocks.stocks);
  return (
     <div>{stocks.map((stock) => (<StockItem {...stock} key={stock.id} />))}
     </div>)
      
    

};
export default StockList;
