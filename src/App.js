import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password:'',
    },
    onSubmit: values => {
      console.log('Form submited');
      alert('Login Succesful');
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = "Field Required";
      if (!values.password) errors.password = "Field Required";
      let expr = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!expr.test(values.email)) errors.email = "Username should be an email";
      return errors;
    }
  });

  return (
    <div>
      <p>Welcome to Formik Login Form</p>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email} type="text"/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        
        <div>Password</div>
        <input id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password} type="password"/>
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
    
  );
}

export default App;
