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
