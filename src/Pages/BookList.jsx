
import { Link, Outlet } from 'react-router-dom';

import Tabs from '../Component/Tabs';
import Readbooks from '../Component/Readbooks';

const BookList = () => {
  return (
    <div className='gap-5 p-5 py-9' >
      <Link className='btn mx-auto w-full font-bold text-xl items-center text-center'>Books</Link>
      <Link className=' p-5  items-center text-center mx-auto block '>
        <select className="select  bg-green-500  mx-auto text-white ">
          <option disabled selected>Short by</option>
          <option>Rating</option>
          <option> Number of pages </option>
          <option>Publisher year</option>

        </select>
      </Link>
    <Tabs></Tabs>
    <Outlet></Outlet>
    </div>
  );
};

export default BookList;