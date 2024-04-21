import { useEffect, useState } from "react";
import Readbooks from "./Readbooks";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";
import { CiLocationOn } from "react-icons/ci";
import { MdPeople } from "react-icons/md";
import { FaFile } from "react-icons/fa";


const Data = ({book}) => {

        const { image, bookName, author, tags, rating, yearOfPublishing, publisher, category, totalPages } = book;
        console.log(book);

    return (
        <div className=" flex border-2 rounded-lg p-5 m-5 border-green-500 w-full bg-base-100 shadow-xl">
        <figure className="py-4 lg:max-w-96 px-2">
            <img src={image} />
        </figure>
        <div className="card-body items-start gap-5 py-10">
            <h2 className="card-title text-3xl font-bold">{bookName}</h2>
            <p className="text-xl">By: {author}</p>
            <div className="lg:flex gap-2 justify-around">
                Tag: {
                    tags.map(tag => <a key={book?.bookId} className="px-3 py-1 rounded-full text-green-600 bg-gray-100  hover:underline dark:bg-violet-600 dark:text-gray-50"> #{tag}</a>)
                }


                <p className="flex text-xl justify-between gap-1"> <CiLocationOn className="flex items-center" />Year of publishing:{yearOfPublishing}</p>
            </div>
            <div className="flex gap-5 justify-start">
                <p className="flex items-center"><MdPeople />  Publisher: {publisher}</p>
                <p className="flex items-center"><FaFile></FaFile>  Page: {totalPages}</p>
            </div>
            <hr className="border-b-2 w-full border-black" />
            <div className="flex gap-5 justify-around">
                <button className=" bg-blue-100 p-2 px-4 rounded-full text-blue-600">Catagory:{category}</button>
                <button className="text-orange-600 bg-orange-100 rounded-full p-2 px-4 " >Rating:{rating}</button>
                <button className="text-xl bg-green-600 text-white rounded-full py-2 px-4">View Details</button>
            </div>

        </div>
    </div>
    );
};

export default Data;