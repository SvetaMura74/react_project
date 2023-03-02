import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditStock from "./pages/edit-stock/EditStock";
import StockDetails from "./pages/stock-details/StockDetails";
import StockList from "./pages/stock-list/StockList";
import Modal from "react-modal";

function App() {
  Modal.setAppElement("#root");
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Nav */}
      <button onClick={() => setOpen(true)} className="btn btn-primary">
        Add Stock
      </button>
      <Modal
        isOpen={open}
        onRequestClose={() => {
          setOpen(false);
        }}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          close
        </button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="/stocks" element={<StockList />} />
        <Route path="/stocks/edit/:id" element={<EditStock />} />
        <Route path="/stocks/details/:id" element={<StockDetails />} />
      </Routes>
    </>
  );
}

export default App;
