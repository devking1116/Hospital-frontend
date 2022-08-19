import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar }from '@mui/material'
import { useSelector } from 'react-redux'



export const ITEMS_PER_PAGE = 10


function createData(
  avatar: string,
  name: string,
  birthday: string,
  phonenumber: string,
  email: string,
  address: string,
) {
  return { avatar, name, birthday, phonenumber, email, address };
}

// const rows = [
//   createData('./assets/img/avatar.png', 'Dante', '2002-10-22', '20394345', 'ydante1022@gmail.com', 'fjiejid'),
//   createData('./assets/img/avatar.png', 'Dante', '2002-10-22', '20394345', 'ydante1022@gmail.com', 'fjiejid'),
//   createData('./assets/img/avatar.png', 'Dante', '2002-10-22', '20394345', 'ydante1022@gmail.com', 'fjiejid'),
//   createData('./assets/img/avatar.png', 'Dante', '2002-10-22', '20394345', 'ydante1022@gmail.com', 'fjiejid'),
//   createData('./assets/img/avatar.png', 'Dante', '2002-10-22', '20394345', 'ydante1022@gmail.com', 'fjiejid'),
//   createData('./assets/img/avatar.png', 'Dante', '2002-10-22', '20394345', 'ydante1022@gmail.com', 'fjiejid'),
//   createData('./assets/img/avatar.png', 'Dante', '2002-10-22', '20394345', 'ydante1022@gmail.com', 'fjiejid'),
// ];

export default function HospitalTable() {
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>();
  const menulist = useSelector((list: any) => list.hospital.patientList);
  console.log("menulist:::", menulist);
  return (
    <TableContainer sx={{width:"70%", margin:'50px auto', height:'80vh'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontSize:'18px'}}>Avatar</TableCell>
            <TableCell sx={{fontSize:'18px'}} align="right">Name</TableCell>
            <TableCell sx={{fontSize:'18px'}} align="right">Birthday</TableCell>
            <TableCell sx={{fontSize:'18px'}} align="right">Phone Number</TableCell>
            <TableCell sx={{fontSize:'18px'}} align="right">Email</TableCell>
            <TableCell sx={{fontSize:'18px'}} align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            menulist.map((row: any, index: number) => (
              <TableRow
                key={row.index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">
                  <Avatar src={row.avatar}/>
                </TableCell>
                <TableCell sx={{fontSize:'Inter !important'}} align="right">{row.name}</TableCell>
                <TableCell align="right">{row.birthday}</TableCell>
                <TableCell align="right">{row.phonenumber}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
              </TableRow>
          )).slice(ITEMS_PER_PAGE * (page - 1), page * ITEMS_PER_PAGE)
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
