import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


export function Login() {
    const history=useHistory();
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
  return (
    <div className='password'>
        <Card>
        <CardContent>
        <Typography sx={{ fontSize: 14 }}  gutterBottom>
          create account <br/>
          <TextField onChange={(e)=>setemail(e.target.value)} 
           type="email" id="email" label="email" variant="standard" /><br/>
        <TextField onChange={(e)=>setpassword(e.target.value)} 
        type="password" id="password" label="password" variant="standard" />
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>history.push("/")}
        variant="text">Forgot Password</Button>
        <Button onClick={()=>console.log({email:email,password:password})}
        variant="text">Login</Button>
      </CardActions>

        </Card>
    </div>
  );
}
