import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


export default function Register() {
  return (
    <div>
      <Paper elevation={20} style={{width:"550px",padding:"20px",margin:"50px auto"}}>
     <Typography variant='h3'>Register Page</Typography>
     <TextField variant='outlined' type='text' label='Name' fullWidth style={{marginBottom:"10px"}}/>
     <TextField variant='outlined' type='email' label='Email' fullWidth style={{marginBottom:"10px"}}/>
     <TextField variant='outlined' type='password' label='Password' fullWidth style={{marginBottom:"10px"}}/>
     <TextField variant='outlined' type='number'label='Phone' fullWidth style={{marginBottom:"10px"}}/>
     <TextField variant='outlined' multiline rows={5} label='Address' fullWidth style={{marginBottom:"10px"}}/>
    <Button variant='contained' fullWidth>Register</Button>
     </Paper>
      
    </div>
  )
}
