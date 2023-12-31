import React, { useState } from "react";
import styles from "../Styles/form.module.css";
import styles2 from "../Styles/app.module.css";


const Form = () => {
  const [inputName, setName] = useState("")
  const [inputEmail, setEmail] = useState("")
  const [error, setError] = useState(false)
  const [submit, setSubmit] = useState(false)
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  function handleSubmit(event){
      event.preventDefault();
      if((inputName.length < 5) || !validEmail.test(inputEmail)){
          setError(true);
          setSubmit(false);
          return;
      }
      setError(false);
      setSubmit(true);
    
  }

  function handleOnChangeName(event){
      setName(event.target.value)
  }

  function handleOnChangeEmail(event){
      setEmail(event.target.value)
  }


return (
  <div className={styles.div}>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" placeholder="Enter your name" onChange={handleOnChangeName} value={inputName}/>
      <label>Email:</label>
      <input type="text" placeholder="Enter your email" onChange={handleOnChangeEmail} value={inputEmail}/>
      <button type="submit" className={styles2.fav}>Send</button>
    </form>
    <div>
    {error ? <p className={styles.msg}>***Please check your information again***</p>: undefined}  
    {(!error && submit) ? <p className={styles.msg}>{`***Thank you ${inputName} we will contact you as soon as possible via email***`}</p>: undefined}   
    </div>
    
  </div>
);
};

export default Form;