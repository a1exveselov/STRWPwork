import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <UserForm addUser={addUser} />
      <UserTable users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
