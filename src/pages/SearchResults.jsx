import React, { useState } from 'react';

function SearchResults() {
  const [pincode, setPincode] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Replace with backend search API call
    setResults([
      { location: 'Virudhunagar', price: '₹1200/sqft' },
      { location: 'Sattur', price: '₹950/sqft' },
    ]);
  };

  return (
    <div>
      <h2>Search Property</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)} required
        />
        <button type="submit">Search</button>
      </form>

      <h3>Results:</h3>
      <ul>
        {results.map((r, index) => (
          <li key={index}>
            {r.location} - {r.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
