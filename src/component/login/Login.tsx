
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
import { setValue } from '../../store/clicker/actionCreators';
import { getEmailError, getPasswordError } from '../../helpers/validation';




const Login: React.FC = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, _setValues] = useState<FormValuesType>({});
  const [validathionsError, setValidationsError] = useState("");


  const { t } = useTranslete();
  const { createTokens, setAuthError } = useActions();
  const loading = false; //useSelector(state => state.auth.loading);
  const serverError = useSelector(state => state.auth.error);
  const error: string = validathionsError || (serverError ? "   Error" : "");


  const handleSubmint = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const validationError = getEmailError(values.email) || getPasswordError(values.password);
    if (validationError) {
      setValidationsError(validationError);
    } else {
      createTokens(values);
    }
  }





  const setValues = (callback: (prevValue: FormValuesType) => FormValuesType) => {
    _setValues(callback);
    setValidationsError("");
    setAuthError(false);
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
            {error}
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