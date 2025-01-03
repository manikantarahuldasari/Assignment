import React, { useState } from 'react';

const SearchBar = ({ names }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    
  }

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <input
        type="text"
        placeholder="Search names..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      />
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                borderBottom: '1px solid #eee',
                textAlign: 'left',
              }}
            >
              {name}
            </li>
          ))
        ) : (
          <li style={{ padding: '10px', color: 'gray', textAlign: 'center' }}>
            No names found
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
