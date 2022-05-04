
import React, { useState } from 'react';

import FormValuesType from '../../types/formValuesType';
import Button from '../ui/button/Button';
import FormCard from '../ui/formCard/FormCard';
import FormTextField from '../ui/formTextField/FormTextField';




const Registration: React.FC = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState<FormValuesType>({});


  const handleSubmint = () => {
    console.log(values);
  }
  // const setEmail = (value: string) => {
  //   setValue("email", value);
  // setValues((prevValues) => ({
  //   ...prevValues,
  //   email,
  // }))
  // }

  // const setPassword = (value: string) => {
  //   setValue("password", value);
  // setValues((prevValues) => ({
  //   ...prevValues,
  //   password,
  // }))
  // }
  // 
  return (
    <FormCard header="Registration">

      <FormTextField
        autofocus
        label='Email'
        type='email'
        name='email'
        values={values}
        setValues={setValues}
      // value={values["email"]}
      // setValue={setValue}
      />

      <FormTextField
        label='Password'
        type='password'
        name='password'
        values={values}
        setValues={setValues}
      />

      {/* <TextField
        label='Age'
        name='age'
        values={values}
        setValues={setValues}
      /> */}

      <Button onClick={handleSubmint}>
        Registration
      </Button>
      {/* <button onClick={handleSubmint}>
        Submit
      </button> */}
    </FormCard>
  )
}

export default Registration;