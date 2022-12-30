import React from "react";
import './formInput.scss'

const FormInput = ({text, name, type, handler, placeholder}) => {
    return(
      <>
      <p>{text}</p>
        <input type={type} name={name} placeholder={placeholder} onChange={handler} />

      </>
      
    )
}

export default FormInput