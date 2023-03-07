import { useState } from "react";
import { followed_stocks } from "../../mock-data/stocks";
import StockItem from "../../pages/stock-item/StockItem";
import './Search.scss'

const Search = () => {
  const [query, setQuery] = useState(" ");
  

  return (
    <div className="container">
      <div className=" d-flex justify-content-center m-4 p-1">
        <input
          type="text"
          placeholder="Search by ticker"
          className="search"
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </div>
      <div className=" d-flex justify-content-center m-4 p-1">
        <input
          type="text"
          placeholder="Search by name"
          className="search"
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </div>

      <div className="list">
        {followed_stocks
          .filter((stock) => stock.ticker.toLowerCase().includes(query))
          .map((stock) => (
            <StockItem {...stock} key={stock.id} />
          ))}
      </div>
      <div className="list">
        {followed_stocks
          .filter((stock) => stock.name.toLowerCase().includes(query))
          .map((stock) => (
            <StockItem {...stock} key={stock.id} />
          ))}
      </div>
    </div>
  );
};

export default Search;
