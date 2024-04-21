import { Link } from "react-router-dom";
import Bookcard from "../Component/Bookcard";
import Books from "../Component/Books";


const Home = () => {
  return (
    <div className=" flex flex-col gap-4 justify-between items-center rounded-lg  bg-slate-100 p-5">
      <div className="flex  flex-col p-6 rounded-lg bg-slate-300 lg:flex-row-reverse ">
        <img src="https://i.ibb.co/F04HzhP/Capture1.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="  justify-center  items-center p-16 gap-6 border-2 border-red-500 ">
          <h1 className="text-3xl font-bold">Books to freshen up
            your bookshelf!</h1>

          <Link to='/booklist' className="btn bg-green-500">View The List</Link>
        </div>
      </div>
      <div className="container mx-auto ">
        <Books></Books>
        {/* <Bookcard></Bookcard> */}
      </div>

    </div>

  );
};

export default Home;