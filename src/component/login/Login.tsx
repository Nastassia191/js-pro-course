
import React, { useState, useContext } from 'react';


//import TextField from '../ui/textField/TextField';
//import "./Registration.scss";
import FormValuesType from '../../types/formValuesType';
import Button from '../ui/button/Button';
import FormCard from '../ui/formCard/FormCard';

import useTranslete from "../hooks/useTranslete";
import FormTextField from '../ui/formTextField/FormTextField';
import { useActions } from '../hooks/useActions';
import { useSelector } from '../hooks/useSelector';




const Login: React.FC = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState<FormValuesType>({});


  const { t } = useTranslete();
  const { createTokens } = useActions();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);


  const handleSubmint = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    createTokens(values);
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
      <FormCard header="Login" loading={loading}>
        <FormTextField
          autofocus
          label='Email'
          type='email'
          name='email'
          values={values}
          setValues={setValues}
        />

        <FormTextField
          label='Password'
          type='password'
          name='password'
          values={values}
          setValues={setValues}
        />
        {error &&
          <div className='form-error'>
            Error
          </div>
        }







        <Button onClick={handleSubmint}>
          {t("login.submit")}
        </Button>
      </FormCard>
    </div>
  )
}

export default Login;