import toast, { Toaster } from 'react-hot-toast';
export const getBooks = (items) =>{
    let detailBooks = [];
const storeBooks = localStorage.getItem(items)
if(storeBooks){
    detailBooks = JSON.parse(storeBooks)
}
return detailBooks

}

// save function
 export const saveBooks = (detailBook) =>{
    let detailBooks = getBooks ("detailBooks")
    const isExist = detailBooks.find(b => b.bookId === detailBook.bookId)
    if(isExist){
        return toast.error('Already in Wishlist')
    }

    detailBooks.push(detailBook)
    localStorage.setItem('detailBooks', JSON.stringify(detailBooks))
    toast.success('Added wishlist')
 }

// export const getReadbook = () =>{
//     let books = [];
//     const storeReadBook = localStorage.getItem('books')
//     if(storeReadBook){
//         books = JSON
//     }
// }
//  readbook section 

export const readBook = book =>{
    let books = getBooks('books')
    console.log(books);
    const isExist = books.find(bk => bk.bookId === book.bookId )
    if(isExist) {
        return toast.error('You already Readd it ')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Successfully add to read list')
}