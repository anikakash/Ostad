import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import {getUsers} from '../service/api';

const ShowStudents = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async ()=>{
      let response =  await getUsers();
      setUsers(response.data);
    }
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Id</TableCell>
                        <TableCell> Frist Name</TableCell>
                        <TableCell> Last Name</TableCell>
                        <TableCell> Gender</TableCell>
                        <TableCell> Date Of Birth</TableCell>
                        <TableCell> Nationality</TableCell>
                        <TableCell> Address</TableCell>
                        <TableCell> Email</TableCell>
                        <TableCell> Mobile Number</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user =>(
                            <TableRow>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.fName}</TableCell>
                                <TableCell>{user.lName}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                                <TableCell>{user.dOB}</TableCell>
                                <TableCell>{user.nationality}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default ShowStudents;