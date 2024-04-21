import { Outlet } from 'react-router-dom';
import Nav from '../Component/Nav'
import Home from "../Pages/Home";
import Footer from '../Footer';



const MainLayOuts = () => {
    return (
        <div>
           <div className="h-16">
            <Nav></Nav>
           </div>
          <div className="">
            <Outlet></Outlet>
            </div>
            <div className=""><Footer></Footer></div>
        </div>
    );
};

export default MainLayOuts;