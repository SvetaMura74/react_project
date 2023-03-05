import { useState } from "react";
import { Intraday, Interval } from "../../types/types";
import { searchUrl } from "../../mock-data/url-data";
const IntradayRates = () => {
  const [stocks, setStocks] = useState<Intraday[]>([]);
  const [symbol, setSymbol] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [interval, setInterval] = useState<Interval>("minute");
  const onChangeHandler = (e: any) => {
    let inUrl = `${searchUrl}&symbols=${symbol}&date_from=${fromDate}&date_to=${toDate}&interval=${interval}`;
    fetch(inUrl)
      .then((res) => res.json())
      .then((json) => {
        let stocks = json.data as Intraday[];
        setStocks(stocks);
      })
       .catch((e) => {
    console.log(e);
  })
};
  return (
    <div>
      <h2 className="text-center">Intraday Rates</h2>
      <div className=" container form-group">
        <label className="text-danger">*Enter the Symbol:</label>
        <input
          type="text"
          className="form-control"
          placeholder="the stock symbol"
          onChange={(e) => setSymbol(e.target.value)}
        />
        <label className="text-danger">*Enter From Date:</label>

        <input
          type="date"
          className="form-control"
          placeholder="from date"
          onChange={(e) => setFromDate(e.target.value)}
        />
        <label className="text-danger">*Enter To Date:</label>
        <input
          type="date"
          className="form-control"
          placeholder="to date"
          onChange={(e) => setToDate(e.target.value)}
        />
        <label className="text-danger">*Select Interval:</label>
        <select
          placeholder="interval"
          className="form-control"
          onChange={(e) => {
            const interval = e.currentTarget.value as Interval;
            setInterval(interval);
          }}
        >
          <option value="minute">minute</option>
          <option value="hour">hour</option>
          <option value="day">day</option>
          <option value="week">week</option>
          <option value="month">month</option>
          <option value="quarter">quarter</option>
          <option value="year">year</option>
        </select>

        <button
          className="btn btn-secondary mb-5 mt-5"
          onClick={onChangeHandler}
        >
          Search
        </button>
      </div>
      <table className=" container table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="text-center">
              Symbol Name
            </th>
            <th scope="col" className="text-center">
              Date and Interval
            </th>
            <th scope="col" className="text-center">
              Open price , $
            </th>
            <th scope="col" className="text-center">
              Close price , $
            </th>
            <th scope="col" className="text-center">
              {" "}
              Volume , number of stocks
            </th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((s) => {
            return (
              <tr key={s.date}>
                <td className="text-center">{s.ticker}</td>
                <td className="text-center">{s.date}</td>
                <td className="text-center">{s.data.open}</td>
                <td className="text-center">{s.data.close}</td>
                <td className="text-center">{s.data.volume}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IntradayRates;
