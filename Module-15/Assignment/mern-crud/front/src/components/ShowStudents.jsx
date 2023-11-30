import React, {useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, styled, Button} from "@mui/material";
import {getUsers} from '../service/api';
import {Link} from 'react-router-dom';

const StyledTable = styled(Table)({
    width: "90%",
    margin: "50px auto 0 auto"
})

const THead = styled(TableRow)({
    background: "#2C3E50",
    '& > th': {
        color: '#fff',
        fontSize: '20px'
    }
});

const TBody = styled(TableRow)({
    '& > td' : {
        fontSize: '18px'
    }
})


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
            <StyledTable>
                <TableHead>
                    <THead>
                        <TableCell> Id</TableCell>
                        <TableCell> Frist Name</TableCell>
                        <TableCell> Last Name</TableCell>
                        <TableCell> Gender</TableCell>
                        <TableCell> Date Of Birth</TableCell>
                        <TableCell> Nationality</TableCell>
                        <TableCell> Address</TableCell>
                        <TableCell> Email</TableCell>
                        <TableCell> Mobile Number</TableCell>
                        <TableCell></TableCell>
                    </THead>
                </TableHead>
                <TableBody>
                    {
                        users.map((user, keys) =>(
                            <TBody  key={keys}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.fName}</TableCell>
                                <TableCell>{user.lName}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                                <TableCell>{user.dOB}</TableCell>
                                <TableCell>{user.nationality}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                    <Button variant="contained" color="secondary">Delete </Button>
                                </TableCell>
                            </TBody>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </div>
    );
};

export default ShowStudents;