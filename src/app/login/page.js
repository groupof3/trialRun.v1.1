"use client";

import React, { useState } from "react";
import styles from './styles.module.css';
import Image from "next/image";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  let person = [username, password];
  

    const login=(e)=>{
      if(username!="" && password!=""){
      console.log(person)
      alert('Success')

      setUsername('');
      setPassword('');
      // Find a better way 
    }  else{
      alert('All fields are mandatory')
    }
  }
   

  return (
    <div className={styles.body} >

      <div className={styles.wrapper}>
      <input
      className={styles.field}
        type="text"
        placeholder="Username here"
        onChange={handleUsername}
        value={username}
      ></input>

      <input
            className={styles.field}
        type="password"
        placeholder="Password"
        onChange={handlePassword}
        value={password}
      ></input>
      <a>
      <button className={styles.button} 
      type="submit" 
      onClick={login}>Login</button>

      </a>
      
      </div>
      
    </div>
  );
};

export default Page;
