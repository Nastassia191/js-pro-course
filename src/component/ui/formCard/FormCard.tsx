import React from 'react';

import "./FormCard.scss";

type PropsType = {
  header?: string
}

const FormCard: React.FC<PropsType> = ({ header, children }) => {

  return (
    <form className='form-card-conteiner'>
      {header &&
        <div className="header"> {header} </div>
      }
      {children}
    </form>
  )
}


export default FormCard;