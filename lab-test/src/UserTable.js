import React from 'react';
import './App.css';

function UserTable({ users, deleteUser }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="th">Id</th>
          <th className="th">First Name</th>
          <th className="th">Last Name</th>
          <th className="th">Email</th>
          <th className="th">Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="td">{user.id}</td>
            <td className="td">{user.firstName}</td>
            <td className="td">{user.lastName}</td>
            <td className="td">{user.email}</td>
            <td className="td">
              <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
