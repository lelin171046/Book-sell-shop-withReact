import { useEffect, useState } from "react";
import { getBooks } from "../index";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
    const [detailBook, setDetailBook] = useState([])
    useEffect(()=>{
        const storedBooks = getBooks()
        setDetailBook(storedBooks)
    },[])

    

    if(detailBook.length < 1 ) return <div className="flex flex-col justify-center items-center  min-h-[calc(100vh-116px)]">No Wishlist found</div>  
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{
				detailBook.map(book => <WishlistCard book={book} key={book.bookId}></WishlistCard>)
			}
			
		</div>
        
    );
};


export default Wishlist;

