import { deleteStock, Stock } from "../../features/stocks/stocksSlice"
import {BsPencil,BsTrash} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import Swal from "sweetalert2";

const StockItem = (props:Stock) => {
  const nav=useNavigate()
  const dispatch= useAppDispatch()
  return (
    <div>
      <div
        className="card d-flex
      p-5 m-2"
      >
        <p>{props.ticker}</p>
        <p>{props.name}</p>
        <button
          className="btn btn-secondary"
          onClick={() => {
            nav(`/stocks/details/${props.id}`);
          }}
        >
          More details
        </button>
        <button
          className="btn btn-info"
          onClick={() => {
            nav(`/stocks/edit/${props.id}`);
          }}
        >
          <BsPencil />
        </button>

        <button
          className="btn btn-danger"
          onClick={() => {
            /*  dispatch(deleteStock(props.id)) */
            Swal.fire({
              title: "Do you want to save the changes?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Save",
              denyButtonText: `Don't save`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */ if (
                result.isConfirmed
              ) {
                dispatch(deleteStock(props.id));
                Swal.fire("Saved!", "", "success");
              } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
              }
            });
          }}
        >
          <BsTrash />
        </button>
      </div>
    </div>
  );
}

export default StockItem