import React from 'react';
import * as yup from 'yup';

const FormComponent = props => {
    
    return (
        <div>
            <form>
                <label> First Name 
                    <input type='text'/>
                </label>
                <label> Last Name 
                    <input type='text'/>
                </label>
                <br/>
                <label> Email
                    <input type='email'/>
                </label>
                <label> Password
                    <input type='password'/>
                </label>
                <br/>
                <label> I accept the terms of Service
                    <input type='checkbox'/>
                </label>
                <br/>
                <button onClick={e=>e.preventDefault()}>Submit</button>
            </form>
        </div>
    )
}

export default FormComponent;