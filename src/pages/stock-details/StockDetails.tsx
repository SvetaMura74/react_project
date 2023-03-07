import { useNavigate, useParams } from 'react-router-dom';
import {  useAppSelector } from '../../app/hooks';
import NotFound from '../../components/not-found/NotFound';


const StockDetails = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const stocks = useAppSelector((state) => state.stocks.stocks);
  const stockDetails = stocks.find((s) => s.id === id);

  
  if (stockDetails === undefined) {
    return <NotFound/>;
  }
 
  
  return (
    <>
      <div className=" container w-75 shadow-lg my-5  border-light border-5 rounded  p-3 d-flex flex-column align-items-center">
        <h3>The details </h3>
        <p>Ticker: {stockDetails.ticker}</p>
        <p>Name: {stockDetails.name}</p>
        <p>Currency: {stockDetails.currency}</p>
        <p>Stock Exchange: {stockDetails.exchange_long}</p>
      </div>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          nav(-1);
        }}
      >
        Go Back
      </button>
    </>
  );
}

export default StockDetails