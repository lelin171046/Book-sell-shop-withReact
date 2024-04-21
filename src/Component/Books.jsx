

import { useEffect, useState } from "react";
import Bookcard from "./Bookcard";
import Loader from './Loader'
import { useLoaderData, useNavigation } from "react-router-dom";



const Books = () => {
    
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('bookList.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    
    
    const navigation = useNavigation();
    if (navigation.state === 'loading') return <Loader></Loader>
    
    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
                books?.slice(0,6)?.map((book)=><Bookcard book={book} key={book?.id}></Bookcard>)
            }
        </div>
    );
};

Books.propType ={
    
}
export default Books;