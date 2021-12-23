import './App.css';
import Button from '@mui/material/Button';
import { Route, Switch, useHistory } from 'react-router-dom';
import { PasswordReset } from './PasswordReset';
import { Login } from './Login';

function App() {
  const history=useHistory()
  return (
    <div className="App">
      {/* <Button 
       onClick={history.push("/")}
       variant="text">Reset Password
      </Button>

      <Button 
       onClick={history.push("/login")}
       variant="text">Login
      </Button> */}

      <Switch>
        <Route exact path="/"><PasswordReset/></Route>
        <Route path="/login"><Login/></Route>
      </Switch>
    </div>
  );
}

export default App;


