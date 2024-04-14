import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav'
import Home from "../Pages/Home";



const MainLayOuts = () => {
    return (
        <div>
           <div className="h-16">
            <Nav></Nav>
           </div>
          <Outlet></Outlet>
        </div>
    );
};

export default MainLayOuts;