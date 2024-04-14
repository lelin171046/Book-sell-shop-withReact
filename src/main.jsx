import React from 'react'

import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx'
import BookList from './Pages/BookList.jsx';
import MainLayOuts from './Component/MainLayOuts.jsx';
import ReadPage from './Pages/ReadPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOuts></MainLayOuts>,
    children:[
      {
        path:'/' ,
        element: <Home></Home>
      },
      {
        path:'/booklist',
        element: <BookList></BookList>
      },
      {
        path: '/readpage',
        element: <ReadPage></ReadPage>
      }
    
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
