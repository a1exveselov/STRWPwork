import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function UserCard({ user, deleteUser }) {
  return (
    <Card sx={{ margin: 2, width: 300 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
      <IconButton aria-label="delete" onClick={() => deleteUser(user.id)}>
        <DeleteIcon />
      </IconButton>
    </Card>
  );
}

export default UserCard;
