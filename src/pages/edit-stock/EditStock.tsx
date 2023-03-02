import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Stock, editStock } from "../../features/stocks/stocksSlice";

const EditStock = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const stocks = useAppSelector((state) => state.stocks.stocks);
  const dispatch = useAppDispatch();
  
  const stockToEdit = stocks.find((s) => s.id === id);
  const [ticker, setTicker] = useState(stockToEdit?.ticker ?? "");
  const [name, setName] = useState(stockToEdit?.name ?? "");
  const [currency, setCurrency] = useState(stockToEdit?.currency ?? "");
  const [exchange_long, setExchange_long] = useState(
    stockToEdit?.exchange_long ?? ""
  );

  if (stockToEdit === undefined) {
    return <Navigate to="/" />;
  }
  return (
    <div className="card d-flex p-3 m-3">
      <h3>Edit Stock Details</h3>

      <label htmlFor="ticker">Symbol ticker:</label>
      <input
        id="ticker"
        value={ticker}
        onChange={(e) => {
          setTicker(e.currentTarget.value);
        }}
        placeholder="Symbol ticker"
      />

      <hr />
      <label htmlFor="name">Company name:</label>
      <input
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
        placeholder="Company name"
      />
      <hr />
      <label htmlFor="currency">Currency:</label>
      <input
        id="currency"
        value={currency}
        onChange={(e) => {
          setCurrency(e.currentTarget.value);
        }}
        placeholder="Currency"
      />
      <hr />
      <label htmlFor="exchange">Stock Exchange Name:</label>
      <input
        id="exchange"
        value={exchange_long}
        onChange={(e) => {
          setExchange_long(e.currentTarget.value);
        }}
        placeholder=" Stock Exchange Name"
      />
      <button
        className="btn btn-success"
        onClick={() => {
          const stock: Stock = {
            id: stockToEdit.id,
            ticker: ticker,
            name: name,
            exchange_long: exchange_long,
            currency: currency,
          };
          dispatch(editStock(stock));
          nav(-1);
        }}
      >
        Save the changes
      </button>
    </div>
  );
};

export default EditStock;
