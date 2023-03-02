import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { followed_stocks } from "../../mock-data/stocks";

export type Stock = {
  id: string;
  ticker: string;
  name: string;
  exchange_long: string;
  currency: string;
};
export type StocksState = {
  stocks: Stock[];
};

const initialState: StocksState = {
  stocks: followed_stocks,
};

export const stockSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    addStock: (state, action: PayloadAction<Stock>) => {
      state.stocks.push(action.payload);
    },
    editStock: (state, action: PayloadAction<Stock>) => {
      const stockToEdit = action.payload;
      const index = state.stocks.findIndex((s) => s.id === action.payload.id);
      state.stocks[index] = stockToEdit;
    },
    deleteStock: (state, action: PayloadAction<string>) => {
      const index = state.stocks.findIndex((s) => s.id === action.payload);
      state.stocks.splice(index, 1);
    },
  },
});
export const { addStock, editStock, deleteStock } = stockSlice.actions;
export default stockSlice.reducer;
