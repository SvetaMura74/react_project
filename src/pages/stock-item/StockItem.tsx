import { deleteStock, Stock } from "../../features/stocks/stocksSlice";
import { BsPencil, BsTrash, BsInfoCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import Swal from "sweetalert2";

const StockItem = (props: Stock) => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="container ">
        <div className="row m-auto">
          <p className="col-2 text-center">{props.ticker}</p>
          <p className="col text-center">{props.name}</p>

          <button
            className="btn btn-secondary col-1 m-1"
            onClick={() => {
              nav(`/stocks/details/${props.id}`);
            }}
          >
            <BsInfoCircleFill />
          </button>
          <button
            className="btn btn-info col-1 m-1"
            onClick={() => {
              nav(`/stocks/edit/${props.id}`);
            }}
          >
            <BsPencil />
          </button>

          <button
            className="btn btn-danger col-1 m-1"
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
        <hr />
      </div>
    </div>
  );
};

export default StockItem;
