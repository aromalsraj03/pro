import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import './Donarlist.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(BloodType, Donate, Recieve) {
    return { BloodType, Donate, Recieve };
  }
  
  const rows = [
    createData('A+', 'A+ AB+',	'A+ A- O+ O-'),
    createData('O+', 'O+ A+ B+ AB+',	'O+ O-'),
    createData('B+', 'B+ AB+',	'B+ B- O+ O-'),
    createData('AB+', 'AB+',	'Everyone'),
    createData('A-', 'A+ A- AB+ AB-',	'A- O-'),
    createData('O-', 'Everyone',	'O-'),
    createData('B-', 'B+ B- AB+ AB-',	'B- O-'),
    createData('AB-', 'AB+ AB-',	'AB- A- B- O-')
  ];
  

const Donarlist = () => {
  return (
    <div className='Donation'>
        <TableContainer style={{margin: "15px", borderRadius: "10px" }} component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">NAME</StyledTableCell>
                <StyledTableCell align="center">BLOOD GROUP</StyledTableCell>
                <StyledTableCell align="center">EMAIL</StyledTableCell>
                <StyledTableCell align="center">MOBILE NUMBER</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.BloodType}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {row.BloodType}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.Donate}</StyledTableCell>
                  <StyledTableCell align="center">{row.Recieve}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
    </div>
  )
}

export default Donarlist