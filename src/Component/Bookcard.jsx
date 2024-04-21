

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const Bookcard = ({ book }) => {


    const { image, bookName, author, tags, rating , bookId} = book;



    return (
        <Link to={`/books/${bookId}`} className="max-w-full space-y-6  overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">

            <div className="card flex flex-col justify-between bg-base-100 p-6 shadow-xl">
                <div className="">
                    <img className="h-80 w-full" src={image} />
                </div>

                <div className="card-body">
                    <div className="card-actions justify-start">
                        <div className="flex justify-around items-center gap-2">
                            <small className=" text-green-500 px-2 border-2 border-green-500 rounded-lg ">{tags[0]}</small>
                            <small className=" text-green-500 px-2 border-2 border-green-500 rounded-lg">{tags[1]}</small>
                        </div>

                    </div>
                    <h2 className="card-title">
                        {bookName}

                    </h2>
                    <p>By:{author}</p>
                    <hr />
                    <div className="flex justify-between">
                        <p>Fiction</p>
                        <div className="flex justify-between items-center">
                            {rating} <FaRegStar></FaRegStar>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
};

Bookcard.propTypes = {
    book: PropTypes.object.isRequired
}

export default Bookcard;