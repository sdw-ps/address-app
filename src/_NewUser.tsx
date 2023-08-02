import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Button, TextField, Paper } from '@mui/material';

interface NewUser {
  name: string;
  phoneNumber: string;
}

export const NewUser: React.FC = () => {
  const [newUser, setNewUser] = useState<NewUser>({ name: '', phoneNumber: '' });
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5005/users', newUser);
      navigate('/users');
    } catch (error) {
      console.error('Failed to create user', error);
    }
  };

  return (
    <Paper style={{ padding: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={newUser.name}
          onChange={handleInputChange}
          style={{ marginBottom: '1rem' }}
          fullWidth
        />
        <TextField
          name="phoneNumber"
          label="Phone Number"
          value={newUser.phoneNumber}
          onChange={handleInputChange}
          style={{ marginBottom: '1rem' }}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Save
        </Button>
      </form>
    </Paper>
  );
};
