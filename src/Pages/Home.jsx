import { Link } from "react-router-dom";
import Bookcard from "../Component/Bookcard";
import Books from "../Component/Books";


const Home = () => {
  return (
    <div className="  gap-4 mx-auto rounded-lg max-h-fit  bg-slate-100 ">
      <div className="flex py-14 items-start gap-6 justify-center rounded-lg bg-slate-300 lg:flex-row-reverse ">
        <img src="https://i.ibb.co/F04HzhP/Capture1.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div className=" items-center  py-20 justify-center  ">
          <h1 className="text-4xl font-bold">Books to freshen up <br />
            your bookshelf!</h1>

          <Link to='/booklist' className="btn font-bold mt-8 bg-green-500">View The List</Link>
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