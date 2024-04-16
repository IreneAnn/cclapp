import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material//Search";
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import RectangleTwoToneIcon from '@mui/icons-material/RectangleTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
   
    color: theme.palette.common.black,
    fontWeight: 700
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

function createData(
  id:number,
  storageAccount: string,
  version: string,
  accountKey: string,
  bucketCount: number,
  size: number,
  action:string
) {
  return { storageAccount, version, accountKey, bucketCount, size,action };
}

const rows = [
  createData(1,'01_alpha_', 'Vault v2', "(multiple)", 0, 0.00),
  createData(2,'AccNov16', 'Vault v2', "", 2, 3.54),
  createData(3,'account002', 'Vault v2',"", 1, 0.00),
  createData(4,'AccountLuke_356', 'Vault v2', "", 0, 0.00),
  createData(5,'apptest', 'Vault v1', "", 1, 0.00),
  createData(6,'Customertest', 'Vault v2', "(multiple)", 1, 1.02),
];


export default function CustomizedTables() {
    
    const [vault, setVault] = React.useState('');
    const [search,setSearch]=React.useState('');
    console.log(search);

       const handleVaultChange = (event) => {
        setVault(event.target.value);
       }
 

  return (
    <>
    <div>
   
   
 <Box sx={{ '& > :not(style)': { m: 1 } }}>
 <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
 <InputLabel id="demo-simple-select-standard-label">Vault</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={vault}
          onChange={handleVaultChange}
        >
        <MenuItem value="v1">v1</MenuItem>
        <MenuItem value="v2">v2</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >   
          <OutlinedInput
            id="outlined-adornment-search"          
            startAdornment={<InputAdornment position="start"> <SearchIcon /></InputAdornment>}
            aria-describedby="outlined-search-helper-text"
            placeholder="Search.."
            onChange={(e)=>{setSearch(e.target.value)}}
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>

      

        <Button variant="contained" endIcon={<LaunchIcon />}  style={{
        borderRadius: 35,
        backgroundColor: "#5DBA40",
        padding: "5px 15px",
        fontSize: "18px"
    }}>
  Billing Trend
</Button>
<Button variant="contained" endIcon={<LaunchIcon />}style={{
        borderRadius: 35,
        backgroundColor: "#5DBA40",
        padding: "5px 15px",
        fontSize: "18px"
    }}>
  Quantity Trend
</Button>
<Button variant="contained" endIcon={<LaunchIcon />}  style={{
        borderRadius: 35,
        backgroundColor: "#5DBA40",
        padding: "5px 15px",
        fontSize: "18px"
    }}>
  Create Storage Account
</Button>

    </Box>
 
    </div>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Storage Account</StyledTableCell>
            <StyledTableCell align="right">Version</StyledTableCell>
            <StyledTableCell align="right">Account Key</StyledTableCell>
            <StyledTableCell align="right">Bucket count</StyledTableCell>
            <StyledTableCell align="right">Size&nbsp;(GB)</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.filter((item)=>
           search.toLowerCase()==''?item:item.storageAccount.toLowerCase().includes(search)).map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.storageAccount}
              </StyledTableCell>
              <StyledTableCell align="right">{row.version}</StyledTableCell>
              <StyledTableCell align="right">{row.accountKey=="(multiple)"?row.accountKey:<RectangleTwoToneIcon style={{padding: "5px 15px" , width: "25px"}}/>}</StyledTableCell>
              <StyledTableCell align="right">{row.bucketCount}</StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">
             <SellOutlinedIcon style={{paddingRight: '10px'}}/>
              {row.bucketCount==0?<SearchIcon style={{paddingRight: '10px'}} color="disabled"/>:<SearchIcon style={{paddingRight: '10px'}} />}
              &nbsp;
              <VpnKeyIcon style={{paddingRight: '10px'}} />&nbsp;
              {row.storageAccount!="AccountLuke_356"?<DeleteIcon color="disabled"/>:<DeleteIcon />}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </>
  );
}