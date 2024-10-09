import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function UserCard({ user }) {
  return (
    <Card style={{ margin: '10px', width: '300px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
