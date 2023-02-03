import Link from 'next/link';
import Head from 'next/head';
import Layout from "../../components/layout";
import { useState } from 'react';
import { useRef } from 'react';

export function Form() {
    const [encryptValue, setEnc] = useState("The encrypted text will appear here.");

    const textRef = useRef(null);
    const keyRef = useRef(null);


    const buttonHandle = (e) => {
        e.preventDefault();
        //Reference.current.value is the syntax to get the value of an input field
        const textValue = textRef.current.value;
        const keyValue = parseInt(keyRef.current.value);
        // console.log(value);
        // alert(`${textValue}, ${keyValue}`);

        let encrypted = "";

        for (let i in textValue) {
            let charCode = textValue.charCodeAt(i);
            let newCharCode = (charCode + keyValue);
            
            encrypted += String.fromCharCode(newCharCode);
        }
        // alert(encrypted);
        setEnc(encrypted);
    }

    return (
      <form>
        <label htmlFor="plaintext">Enter text to encrypt </label>
        <input type="text" id="plaintext" name="plaintext" ref={textRef} required />
        <br></br>
  
        <label htmlFor="keyshift">Number of keys to shift </label>
        <input type="number" id="keyshift" name="keyshift" ref={keyRef} required />
  

        <br></br>
        <button onClick={buttonHandle}>Submit</button>

        <p id="encrypted-text">{encryptValue}</p>
      </form>
    )
  }

export default function Caesar() {
  return (
    <Layout>
      <Head>
        <title>Caesar Cipher</title>
      </Head>
      

      <h1>Caesar Cipher</h1>
      
    <Form />
      

    </Layout>
  );
}