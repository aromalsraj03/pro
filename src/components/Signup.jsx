

import './Signup.css'
import { Button, Checkbox, FormControl,FormGroup, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  var [result,setResult]=useState({});
  const onSubmit = (val) => 
axios.post('http://localhost:15000/acc/Signup',val).then((response)=>{
        console.log(response.data);
        alert("registration completed");
        setResult(result=response.data);
  console.log(errors);
})

  return (
    <div className='Signup'>
         
         
    
      <h1> Signup </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField 
         required 
         id="name" 
         
         label="Name" 
         variant="outlined"
         {...register("name", { required: "First Name is required." })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
         helperText="Please enter your name"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <TextField
         required
         id="email"
        
         label="Email"
         variant="outlined"
         {...register("email", { required: "email is required." })}
         error={Boolean(errors.email)}
         helperText={errors.email?.message}
         helperText="Please enter your email"
         style={{ margin: "0px 5px 0px 1px" }}
        />
        <TextField
         required
         id="PhoneNumber"
         
         label="Phone Number"
         variant="outlined"
         {...register("phoneNumber", { required: "phone number is required." })}
         error={Boolean(errors.phoneNumber)}
         helperText={errors.PhoneNumber?.message}
         helperText="Please enter your phone number"
        />
        <br></br><br></br>
        <TextField
         required
         id="re_password"
         
         label="Password"
         type="password"
         variant="outlined"
         {...register("re_password", { required: "re_password is required." })}
         error={Boolean(errors.re_password)}
         helperText={errors.re_password?.message}
         helperText="Please enter your password"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <TextField
          required
          id="password"
         
          label="Password"
          type="password"
          variant="outlined"
          {...register("password", { required: "password is required." })}
         error={Boolean(errors.password)}
         helperText={errors.password?.message}
              helperText="Please confirm your password"
        />
        <br></br><br></br>
        <TextField
         required
         id="Age"
    
         label="Age"
         variant="outlined"
         {...register("Age", { required: "Age is required." })}
         error={Boolean(errors.Age)}
         helperText={errors.Age?.message}
         helperText="Please enter your age"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <TextField
         required
         id="Height"
         
         label="Height"
         variant="outlined"
         {...register("Height", { required: "Height is required." })}
         error={Boolean(errors.Height)}
         helperText={errors.Height?.message}
         helperText="Please enter your height"
         style={{ margin: "0px 5px 0px 10px" }}
        />
        <TextField
         required
         id="Weight"
         
         label="Weight"
         variant="outlined"
         helperText="Please enter your weight"
         
         {...register("Weight", { required: "Weight is required." })}
         error={Boolean(errors.Weight)}
         helperText={errors.Weight?.message}

         style={{ margin: "0px 5px 0px 10px" }}
        />
        <br></br><br></br>
        <Button variant="contained" color="error" type="submit" className="btns">
            create new account
          </Button>
      </form>
    </div>
     )
    }
  export default Signup 