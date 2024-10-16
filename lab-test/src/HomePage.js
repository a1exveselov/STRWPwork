import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import UserForm from './UserForm';
import UserTable from './UserTable';
import UserCard from './UserCard';

function HomePage({ user, users = [], addUser, deleteUser, view, setView }) {
  if (!user) {
    return <Typography variant="h5">Please log in first</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4">Welcome, {user.username}!</Typography>
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
    </Box>
  );
}

export default HomePage;
