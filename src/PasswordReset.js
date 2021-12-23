import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export function PasswordReset() {
    const [password,setpassword]=useState("")
    const history=useHistory()
  return (
      <div className='password'>
        <Card  sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }}  gutterBottom>
              Reset Password
        </Typography>
        <TextField onChange={(e)=>setpassword(e.target.value)}
          type="email" id="email" label="email" variant="standard" />

      </CardContent>
      <CardActions>
           <Button onClick={()=>console.log({password:password})}
             variant="text">Forgot Password</Button>
           <Button onClick={()=>history.push("/login")}
              variant="text">Login</Button>
         </CardActions>
        </Card>
      </div>
        
    
  );
}
