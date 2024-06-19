import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
      { id: 4, name: 'Robert Brown' },
    ];

    setUsers(users);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className="filterContainer">
      <input
        type="text"
        placeholder="Szűrés név szerint..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filterInput"
      />
      <ul className="resultsContainer">
        {filteredUsers.map((user) => (
          <li key={user.id} className="resultItem">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
