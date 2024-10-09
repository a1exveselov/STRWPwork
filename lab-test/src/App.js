import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';
import UserCard from './UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('table'); // 'table' or 'cards'

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm addUser={addUser} />
      <div>
        <button style={{margin: '12px'}} onClick={() => setView('table')}>Table View</button>
        <button style={{margin: '12px'}} onClick={() => setView('cards')}>Card View</button>
      </div>
      {view === 'table' ? (
        <UserTable users={users} />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
