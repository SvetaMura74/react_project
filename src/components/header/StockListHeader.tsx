import "./StockListHeader.module.scss";

const StockListHeader = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-4 p-4 display-5">
        The Most Followed Stocks List
      </h3>
      <div className="container">
        <div id="list_header" className="row mt-3 mb-3 ">
          <p className="col-2 fs-5 fw-bold text-center ">SymbolName</p>
          <p className="col text-center fs-5 fw-bold">Company name</p>
          <p className="col-1 fs-5 fw-bold">More details</p>
          <p className="col-1 fs-5 fw-bold">Edit </p>
          <p className="col-1 fs-5 fw-bold">Delete</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default StockListHeader;
