
import { useEffect, useState } from "react";

import Data from "./Data";
import { getBooks } from "..";
const Readbooks = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks('books')
        setBooks(storedBooks)
    },[]);

    
    if(books.length < 1 ) return <div className="flex flex-col justify-center items-center  min-h-[calc(100vh-116px)]">No Wishlist found</div>  

    

    
    return (
        
       <div>
       {
        books?.map((book) =><Data book={book} key={book?.bookId}></Data>)
       }
       </div>
    );
};



export default Readbooks;