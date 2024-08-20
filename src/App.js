import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import BookList from './components/BookList';  
import BookDetail from './components/BookDetail';  

function App() {
  // State to store the fetched books data
  const [books, setBooks] = useState([]);  

  // Fetch data from Google Books API when the component mounts
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Fetch books related to "Harry Potter" and "Sherlock Holmes"
        const response1 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=harry+potter');
        const response2 = await axios.get('https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes');
        // Combine the results from both API calls into one array
        setBooks([...response1.data.items, ...response2.data.items]);
      } catch (error) {
        console.error('Error fetching data', error); 
      }
    };
    fetchBooks();  // Invoke the function to fetch books data
  }, []);  // Empty dependency array means this useEffect runs only once when the component mounts

  return (
    <Router>
      {/* Render the Navbar component and pass the setBooks function to handle search results */}
      <Navbar setBooks={setBooks} />
      <Routes>
        {/* Route to render the BookList component on the home page ("/") */}
        <Route path="/" element={<BookList books={books} />} />
        {/* Route to render the BookDetail component for a specific book based on its id */}
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </Router>
  );
}

export default App;
