import { Link, useLoaderData, useParams } from "react-router-dom";
import { readBook, saveBooks } from ".";
import Readbooks from "./Component/Readbooks";


const Book = () => {
    const books = useLoaderData();
   
    const { detailId } = useParams();
   
    const deatilIdInNumber = parseInt(detailId)
   

    const detailBook = books.find(book => book.bookId === deatilIdInNumber);
   
    const { image, bookName, author, tags, rating, publisher, yearOfPublishing, review, totalPages } = detailBook;
    const handleReadBook = book =>{
        Readbooks(book)
    }
    const handleBook = detailBook =>{
        saveBooks(detailBook)
        console.log(detailBook);
    }
    return (
        <div className="card p-8 lg:card-side bg-base-100 shadow-xl">
            <figure className="max-w-screen-sm bg-slate-300"><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{bookName}</h2>
                <p>By: {author}</p>
                <hr />
                <p>Fiction</p>
                <hr />
                <p><span className="text-xl font-semibold">Review</span> {review}</p>
                <div className="card-actions justify-start">
                    <span className="text-xl font-semibold">Tag:</span>
                    <div className="flex justify-around items-center gap-5">
                        <small className=" text-green-500 text-xl  px-2 border-2  rounded-lg ">#{tags[0]}</small>
                        <small className=" text-green-500 text-xl  px-2 border-2  rounded-lg">#{tags[1]}</small>
                    </div>

                </div>
                <hr />
                <div className="flex justify-start gap-8">
                    <div className="">
                        <h2> Number of Pages:</h2>
                        <h2>Publisher:</h2>
                        <h2>Year of Publishing:</h2>
                        <h2>Rating:</h2>
                    </div>
                    <div className="font-bold">
                        <h2>{totalPages}</h2>
                        <h2>{publisher}</h2>
                        <h2>{yearOfPublishing}</h2>
                        <h2>{rating}</h2>
                    </div>
                </div>
                <div className="card-actions gap-6 ">
                    <button onClick={() => handleReadBook(books)} className="btn font-semibold text-xl ">Read</button>
                    <button onClick={() => handleBook(detailBook)} className="btn font-semibold text-xl  bg-blue-300">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default Book;