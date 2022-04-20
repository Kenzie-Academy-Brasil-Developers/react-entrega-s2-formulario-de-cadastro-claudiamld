import { useState } from 'react';
import './App.css';
import FormComponent from './components/FormComponent';
import HomePage from './components/HomePage';
import {Switch, Route} from 'react-router-dom';

function App() {

  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <FormComponent setUsers={setUsers} users={users} />
        </Route>        
        <Route exact path="/homepage/:user">
          <HomePage users={users} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
