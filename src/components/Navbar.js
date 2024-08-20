
import React, { useState } from 'react';
import axios from 'axios';  

const Navbar = ({ setBooks }) => {
// State to store the user's search query
  const [query, setQuery] = useState('');  

  // Function to handle the search operation
  const handleSearch = async () => {
    try {
      // Fetch books based on the user's query
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      // Update the books state in the App component with the search results
      setBooks(response.data.items);  
    } catch (error) {
      console.error('Error fetching search data', error);  
    }
  };

  return (
   <>
   <h3>Book-store-Applications</h3>
    <nav>
      
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}  
      />
     
      <button onClick={handleSearch}>Search</button>
    </nav>
    </>
  );
};

export default Navbar;
