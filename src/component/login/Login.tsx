
import React, { useState, useContext } from 'react';


//import TextField from '../ui/textField/TextField';
//import "./Registration.scss";
import FormValuesType from '../../types/formValuesType';
import Button from '../ui/button/Button';
import FormCard from '../ui/formCard/FormCard';

import useTranslete from "../hooks/useTranslete";
import FormTextField from '../ui/formTextField/FormTextField';



const Login: React.FC = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState<FormValuesType>({});


  const { t } = useTranslete();


  const handleSubmint = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
    <div className='centre__content'>
      <FormCard header="Login">

        <FormTextField
          autofocus={true}
          label={t("login.name")}
          name='name'
          values={values}
          setValues={setValues}
        />

        <FormTextField
          label={t("login.email")}
          type='email'
          name='email'
          values={values}
          setValues={setValues}
        />

        <FormTextField
          label={t("login.password")}
          type='password'
          name='password'
          values={values}
          setValues={setValues}
        />
        <FormTextField
          label={t("login.confirmPassword")}
          type='password'
          name='confirmPassword'
          values={values}
          setValues={setValues}
        />



        <Button onClick={handleSubmint}>
          {t("login.submit")}
        </Button>
      </FormCard>
    </div>
  )
}

export default Login;