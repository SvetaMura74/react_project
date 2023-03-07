import { useState } from "react";
import Modal from "react-modal";
import{GrClose} from "react-icons/gr"
import { useAppDispatch } from "../../app/hooks";
import { addStock, Stock } from "../../features/stocks/stocksSlice";
import { v4 } from "uuid";
import Swal from "sweetalert2";

const AddStock = () => {
  const [ticker, setTicker] = useState("");
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [exchange_long, setExchange_long] = useState("");
  const dispatch = useAppDispatch();

  const [isOpen, setOpen] = useState(false);
  Modal.setAppElement("#root");
  const closeModal = () => {
    setOpen(false);
  };
  const openModal = () => {
    setOpen(true);
  };

  return (
    <>
      <div className=" d-flex justify-content-center">
        <button onClick={openModal} className="btn btn-success">
          Add Stock
        </button>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Add a Stock</h2>
        <button onClick={closeModal}><GrClose/></button>
        <hr />
        <div className="container">
          <label htmlFor="ticker" className="text-danger">
            *Symbol ticker:
          </label>
          <br />
          <input
            id="ticker"
            value={ticker}
            onChange={(e) => {
              setTicker(e.currentTarget.value);
            }}
            placeholder="Symbol ticker"
          />
          <br />
          <label htmlFor="name" className="text-danger">
            *Company name:
          </label>
          <br />
          <input
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            placeholder="Company name"
          />
          <br />
          <label htmlFor="currency" className="text-danger">
            *Currency:
          </label>
          <br />
          <input
            id="currency"
            value={currency}
            onChange={(e) => {
              setCurrency(e.currentTarget.value);
            }}
            placeholder="Currency"
          />
          <br />
          <label htmlFor="exchange" className="text-danger">
            *Stock Exchange Name:
          </label>
          <br />
          <input
            id="exchange"
            value={exchange_long}
            onChange={(e) => {
              setExchange_long(e.currentTarget.value);
            }}
            placeholder=" Stock Exchange Name"
          />
          <hr />
          <button
            className="btn btn-success"
            onClick={() => {
              const stock: Stock = {
                id: v4(),
                ticker: ticker,
                name: name,
                exchange_long: exchange_long,
                currency: currency,
              };
              dispatch(addStock(stock));
              Swal.fire("success", " ", "success");
              closeModal();
            }}
          >
            Save the changes
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AddStock;
