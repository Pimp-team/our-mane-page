import React, { useState } from "react";
import emailjs from 'emailjs-com';
import styles from './form.module.scss'
import FormInput from "../../UI/FormInput";
import FORM_VARS from "../../vars/form_vars";
import telegram_logo from '../../assets/form_btn_logo.png'

const Form = () => {
  const [formValues, setFormValues] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formValues)
    emailjs.sendForm('service_9z9y57r', 'template_zzudiak', event.target, 'JbUprumzEUN9eAs7x')
      .then((result) => {
        console.log(result)
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value

    });
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {FORM_VARS.map((item, index)=> {
        return (
          <label key={index}>
            <FormInput type={'text'} text={item.text} name={item.name} placeholder={item.placeholder} handler={handleChange} />
          </label>
        )
      })}

      <label>
        <p> Addiotional information/Any questions you have:</p>
        <textarea  type="text" name="other_information" placeholder='Please list any questions or concerns.' onChange={handleChange} />
      </label>

      <br />
      <button type="submit"><span>Submit</span> <img src={telegram_logo}></img></button>
    </form>
  )
}

export default Form