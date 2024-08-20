import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';  

const BookDetail = ({ books }) => {
  const { id } = useParams();  // Get the ID of the book from the URL
  const navigate = useNavigate();  // Hook to navigate programmatically
  const book = books.find((b) => b.id === id);  // Find the book in the array by its ID

  if (!book) return <p>Book not found</p>; 

  return (
    <div className="book-detail">
      {/* Button to go back to the previous page */}
      <button onClick={() => navigate(-1)}>Back</button>  
      <h2>{book.volumeInfo.title}</h2>  
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />  
      <p>{book.volumeInfo.description}</p>  
      {/* Link to preview the book */}
      <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">  
        Read Now
      </a>
      {/* Link to more information about the book */}
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">  
        More Info
      </a>
    </div>
  );
};

export default BookDetail;
