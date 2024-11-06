import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import UserForm from './UserForm';
import UserTable from './UserTable';
import UserCard from './UserCard';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/Actions/UserActions';
import { addUser, deleteUser } from '../redux/Actions/UserActions';

function HomePage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.loggedInUser);
  const users = useSelector((state) => state.users.users);
  const [view, setView] = React.useState('table'); // 'table' or 'cards'

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Welcome, {user.username}!
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 2 }}>
        <UserForm addUser={(user) => dispatch(addUser(user))} />
        <Box my={2}>
          <Button variant="contained" color="primary" onClick={() => setView('table')}>
            Table View
          </Button>
          <Button variant="contained" color="secondary" onClick={() => setView('cards')} style={{ marginLeft: '12px' }}>
            Card View
          </Button>
        </Box>
        {view === 'table' ? (
          <UserTable users={users} deleteUser={(id) => dispatch(deleteUser(id))} />
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {users.map((user, index) => (
              <UserCard key={index} user={user} deleteUser={(id) => dispatch(deleteUser(id))} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default HomePage;