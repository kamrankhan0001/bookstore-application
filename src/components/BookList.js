import React from 'react';
// Link is used to navigate to the book detail page
import { Link } from 'react-router-dom';  

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {/* Map through the books array and render each book as a link to its detail page */}
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <Link to={`/book/${book.id}`}>  {/* Link to the book's detail page */}
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />  
            <h3>{book.volumeInfo.title}</h3>  
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
