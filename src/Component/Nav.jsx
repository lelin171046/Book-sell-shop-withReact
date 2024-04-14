
import { Link, NavLink } from 'react-router-dom';

const nav = () => {
    // 
    return (
        <div className="navbar flex fixed drop-shadow-lg right-3 bg-base-100">
  <Link to='/' className="navbar-start text-orange-500 btn btn-ghost text-xl font-bold ">
   Book Buy
  </Link>
  <div className="navbar-center  lg:flex">
    <ul className="menu gap-3 font-semibold  menu-horizontal px-1">
      <NavLink>
        Home
      </NavLink>
      <NavLink to='/booklist'>
      Listed Book
      </NavLink>
      <NavLink to='/readpage'>Pages to read</NavLink>
    </ul>
  </div>
  <div className="navbar-end gap-5">
    <a className="btn bg-green-600">Sign In</a>
    <a className="btn bg-blue-400">Sign Up</a>
  </div>
</div>
    );
};

export default nav;