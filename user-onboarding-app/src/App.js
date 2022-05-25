import { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/schema';
import Form from './components/Form';
import logo from './logo.svg';
import './App.css';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
  pass: '',
  tosCheck: false,
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
  const [isDisabled, setIsDisabled] = useState(initialDisabled);

  useEffect(() => {
    schema.isValid(values).then(valid => setIsDisabled(!valid))
  }, [values])
  
  const validate = (name, value) =>{
    yup.reach(schema, name).validate(value)
      .then(() => setErrors({...errors, [name]: ''}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const formUpdater = evt =>{
    const {name, value, checked, type} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    validate(name, valueToUse);
    setValues(name, valueToUse);
  }

  const formSubmitter = evt =>{
    evt.preventDefault();
    const newFriend = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      pass: values.pass
    }
    axios.post(`https://reqres.in/api/users`, newFriend)
      .then(res =>console.log(res))
      .catch(err =>console.log(err))
  }

  return (
    <div className="App">
      <Form values={values} update={formUpdater} submit={formSubmitter} errors={errors} disabled={isDisabled}/>
    </div>
  );
}

export default App;
