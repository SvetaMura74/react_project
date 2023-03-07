import {Stock} from './../features/stocks/stocksSlice'
export type StockListProps = {
  stocks: Stock[];
};

export type Intraday = {
  date: string;
  ticker: string;
  data: {
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    is_extended_hours: boolean;
  };
};
export type Interval =
  | "minute"
  | "hour"
  | "day"
  | "week"
  | "month"
  | "quarter"
  | "year";

  export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
