import { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/schema';
import Form from './components/Form';
import UserCard from './components/UserCard';
import logo from './logo.svg';
import './App.css';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  pass: '',
  tos: false,
}
const initialErrors = {
  email: '',
  tos: '',
}
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);

  useEffect(()=>{
    axios.get(`https://reqres.in/api/users`)
      .then(res => {setUsers(res.data.data)})
  }, [])
  
  const validate = (name, value) =>{
    yup.reach(schema, name).validate(value)
      .then(() => setErrors({...errors, [name]: ''}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const formUpdater = evt =>{
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    setValues({...values, [name]: valueToUse});
    console.log(values);
    validate(name, valueToUse);
  }

  const formSubmitter = evt =>{
    evt.preventDefault();
    const newFriend = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      pass: values.pass
    }
    console.log(newFriend);
    axios.post(`https://reqres.in/api/users`, newFriend)
      .then(res =>setUsers([...users, res.data]))
      .catch(err =>console.log(`the error was: ${err}`))
      .finally(() => console.log(users))
  }

  return (
    <div className="App">
      <Form values={values} update={formUpdater} submit={formSubmitter} errors={errors}/>
      {users.map(user => {return <UserCard email={user.email} first_name={user.first_name} last_name={user.last_name}/>})}
    </div>
  );
}

export default App;
