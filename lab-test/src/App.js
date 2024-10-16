import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [view, setView] = useState('table'); // 'table' or 'cards'

  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<LoginPage setLoggedInUser={setLoggedInUser} />} />
          <Route
            path="/home"
            element={
              loggedInUser ? (
                <HomePage
                  user={loggedInUser}
                  users={users}
                  addUser={addUser}
                  deleteUser={deleteUser}
                  view={view}
                  setView={setView}
                />
              ) : (
                <LoginPage setLoggedInUser={setLoggedInUser} />
              )
            }
          />
          <Route path="*" element={<LoginPage setLoggedInUser={setLoggedInUser} />} /> {/* Redirect to login if no match */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
