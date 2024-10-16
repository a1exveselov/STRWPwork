import React, { useState } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';
import UserCard from './UserCard';
import { Container, Button, Box } from '@mui/material';

function App() {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('table'); // 'table' or 'cards'

  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Container>
      <UserForm addUser={addUser} />
      <Box my={2}>
        <Button variant="contained" color="primary" onClick={() => setView('table')}>
          Table View
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setView('cards')} style={{ marginLeft: '12px' }}>
          Card View
        </Button>
      </Box>
      {view === 'table' ? (
        <UserTable users={users} deleteUser={deleteUser} />
      ) : (
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {users.map((user, index) => (
            <UserCard key={index} user={user} deleteUser={deleteUser} />
          ))}
        </Box>
      )}
    </Container>
  );
}

export default App;
