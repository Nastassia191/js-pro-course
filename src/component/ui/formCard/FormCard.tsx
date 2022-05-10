import React from 'react';

import "./FormCard.scss";

type PropsType = {
  header?: string,
  loading?: boolean,
}

const FormCard: React.FC<PropsType> = ({ header, loading, children }) => {

  return (
    <form className={`form-card-conteiner`}>
      {header &&
        <div className="header"> {header} </div>
      }
      {children}
      {loading && <div className="loader">...</div>}
    </form>
  )
}


export default FormCard;