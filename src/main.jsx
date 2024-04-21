import React from 'react'

import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx'
import MainLayOuts from './Component/MainLayOuts.jsx';
import ReadPage from './Pages/ReadPage.jsx';
import Books from './Component/Books.jsx';

import Wishlist from './Component/Wishlist.jsx';
import BookList from './Pages/BookList.jsx'

import Chartdata from './Component/Charts/Chartdata.jsx';
import Readbooks from './Component/Readbooks.jsx';
import Book from './Book.jsx';
import Contact from './Component/Contact.jsx/Contact.jsx';
import About from './Component/About.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOuts></MainLayOuts>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Books></Books>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/booklist',
        element: <BookList></BookList>,
        children:[
          {
       

           index: true,
            element: <Readbooks></Readbooks>,
            loader: async () => fetch('bookList.json')
    
    
          },
          {
            path: '/booklist/wishlist',
            element: <Wishlist></Wishlist>
          },
        ]
    
      },
      


      {
        path: '/readpage',
        element: <ReadPage></ReadPage>,
        loader: () => fetch('bookList.json')
      },
      {
        path: 'chartdata',
        element: <Chartdata></Chartdata>,
        loader: () => fetch('bookList.json')
      },
      {
        path: `/books/:detailId`,
        element: <Book></Book>,
        loader: () => fetch('bookList.json')

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
