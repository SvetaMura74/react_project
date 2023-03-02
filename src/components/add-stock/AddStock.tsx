import { useState } from "react";
import Modal from "react-modal";

const AddStock = () => {
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
      <button onClick={openModal} className="btn btn-primary">
        Add Stock
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        Modal
      </Modal>
    </>
  );
};

export default AddStock;
