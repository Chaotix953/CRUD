import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredUsers = props.usersData.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher un utilisateur par son nom"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
