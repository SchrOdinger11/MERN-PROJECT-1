import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';
export default function CreateStudent() {
  //UseState 
  const [student,setstudent]=React.useState({
    Uid: 0,
    studentName: '',
    branch: '',
    Year: ''

  })
  return (
    <>
    <h2> Create Student</h2>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { marginTop:120000, m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Uid" variant="outlined" />
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Branch" variant="outlined" />
      <TextField id="outlined-basic" label="Year" variant="outlined" />

      
      
      <Button variant="contained" color="success">
  Create
</Button>
    </Box>
    </>
  );
}