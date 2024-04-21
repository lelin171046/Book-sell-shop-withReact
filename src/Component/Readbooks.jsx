
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFile } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Data from "./Data";
const Readbooks = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('bookList.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);

    
    console.log(books);

    

    
    return (
        
       <div>
       {
        books?.map((book) =><Data book={book} key={book?.bookId}></Data>)
       }
       </div>
    );
};



export default Readbooks;