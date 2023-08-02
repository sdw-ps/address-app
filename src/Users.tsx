import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { DeleteButton } from "./Shared/Buttons/DeleteButton";
import { UsersJson } from "./UsersJson";

interface User {
  id: number;
  name: string;
  phoneNumber: string;
  country: string;
}

interface UsersProps {
  displayCountry?: boolean;
}

export const Users: React.FC<UsersProps> = ({ displayCountry }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5005/users");
      setUsers(response.data);
    };
    getUsers();
  }, []);

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`http://localhost:5005/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  return (
    <Box>
      <TableContainer
        component={Paper}
        style={{ padding: "1rem", margin: "1rem 0" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              {displayCountry && <TableCell align="right">Country</TableCell>}
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.phoneNumber}</TableCell>
                {displayCountry && (
                  <TableCell align="right">{user.country}</TableCell>
                )}
                <TableCell align="right">
                  <DeleteButton callback={() => deleteUser(user.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UsersJson />
    </Box>
  );
};
