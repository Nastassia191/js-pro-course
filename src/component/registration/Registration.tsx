
import React, { useState } from 'react';

import FormValuesType from '../../types/formValuesType';
import useTranslete from '../hooks/useTranslete';
import Button from '../ui/button/Button';
import FormCard from '../ui/formCard/FormCard';
import FormTextField from '../ui/formTextField/FormTextField';




const Registration: React.FC = () => {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [values, setValues] = useState<FormValuesType>({});
  const { t } = useTranslete();



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
    <div className="centre__content">
      <FormCard header="Registration">

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
          Registration
        </Button>
        {/* <button onClick={handleSubmint}>
        Submit
      </button> */}
      </FormCard>
    </div>
  )
}

export default Registration;