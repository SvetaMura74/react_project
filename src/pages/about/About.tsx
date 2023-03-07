
const About = () => {
  return (
    <>
      <h2 className="text-center">About this project</h2>
      <div className="card container bg-light mt-5 p-5 ">
        <p className="fs-4">
          How does it work?
          <br />
          At the <b> Stocks List</b> page you can find the list of most followed
          stocks,for every stock there are options to get <b>more info</b>,
          <b>to edit</b> details and <b> to delete</b> the item.
          <br />
          To discover the <b>Intraday traiding details</b>, click the Intraday
          Rates button, then input the stock details into the form (all fields
          are required!) ,after clicking the Search button you can see the
          needed information-the data recieved throw the Rest API.
          <br /> To <b> add the stock</b> to the list,click the Add button,then
          input all the details and push "save the changes" button.After that
          you can see the added item in the list.
        </p>
      </div>
    </>
  );
};
export default About