import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    const usersData = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
      { id: 4, name: 'Robert Brown' },
    ];

    setUsers(usersData);
  }, []);

  const handleSelectionChange = (selected: any) => {
    setSelection(selected);
  };

  return (
    <div className="filterContainer">
      <Typeahead
        id="filteredUsers"
        labelKey="name"
        onChange={handleSelectionChange}
        options={users}
        placeholder="Start typing the name..."
        selected={selection}
      />
    </div>
  );
};

export default UserList;
