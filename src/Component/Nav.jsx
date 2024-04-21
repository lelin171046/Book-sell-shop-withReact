
import { Link, NavLink } from 'react-router-dom';

const nav = () => {
    // 
    return (
        <div className="navbar flex fixed z-50 drop-shadow-lg right-3 bg-base-100">
  <Link to='/' className="navbar-start text-orange-500 btn btn-ghost text-xl font-bold ">
   Book Buy
  </Link>
  <div className="navbar-center  lg:flex">
    <ul className="menu gap-5 text-xl font-semibold  menu-horizontal px-1">
      <NavLink to='/' className={({isActive})=> isActive ? 'text-green-500 border-2 p-1 rounded-lg border-green-500': 'font-bold'}>
        Home
      </NavLink>
      <NavLink to='/booklist'  className={({isActive})=> isActive ? 'text-green-500 border-2 p-1 rounded-lg border-green-500': 'font-bold'}>
      Listed Book
      </NavLink>
      <NavLink to='/readpage'  className={({isActive})=> isActive ? 'text-green-500 border-2 p-1 rounded-lg border-green-500': 'font-bold'}>Pages to read</NavLink>
      
      <NavLink to='/about'  className={({isActive})=> isActive ? 'text-green-500 border-2 p-1 rounded-lg border-green-500': 'font-bold'}>About</NavLink>
      <NavLink to='/contact'  className={({isActive})=> isActive ? 'text-green-500 border-2 p-1 rounded-lg border-green-500': 'font-bold'}>Contact us</NavLink>
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