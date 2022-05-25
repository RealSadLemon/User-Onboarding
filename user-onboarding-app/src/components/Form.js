import React from 'react';
import ErrorBox from './Error';
import * as yup from 'yup';

const FormComponent = props => {
    const {values, update, submit, errors} = props;
    const allErrors = [errors.email, errors.tos];
    
    return (
        <div>
            <form onSubmit={submit}>
                <label> First Name 
                    <input name='first_name' type='text' value={values.first_name} onChange={update}/>
                </label>
                <label> Last Name 
                    <input name='last_name' type='text' value={values.last_name} onChange={update}/>
                </label>
                <br/>
                <label> Email
                    <input name='email' type='email' value={values.email} onChange={update}/>
                </label>
                <label> Password
                    <input name='pass' type='password' value={values.pass} onChange={update}/>
                </label>
                <br/>
                <label> I accept the Terms of Service
                    <input name='tos' type='checkbox' checked={values.tosCheck} onChange={update}/>
                </label>
                <br/>
                <button disabled={false}>Submit</button>
            </form>
            {allErrors.map(error => {return <ErrorBox error={error}/>})}
        </div>
    )
}

export default FormComponent;