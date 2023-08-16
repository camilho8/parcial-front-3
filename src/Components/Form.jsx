import React, { useState } from 'react';

export const Form = ({onSubmit}) => {

const [input1, setInput1] = useState('');
const [input2, setInput2] = useState('');
const [errorMessage, setErrorMessage] = useState('');



 const handleSubmit = (e) => { 
    e.preventDefault();

    if (input1.length < 3 || input1.trim() !== input1 || input2.length < 6) {
        setErrorMessage('Por favor chequea que la información sea correcta');
        return;
      }

      setErrorMessage('');
      onSubmit(input1, input2);
      setInput1('');
      setInput2('');

 };
 
 
    return (
    <form onSubmit={handleSubmit}>


        
        <label >Tu nombre es: </label>
        <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)}/>
        <br />

        <label >Tu animal favorito es: </label>
        <input  type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        <br />

        <div  >
        <button style={{backgroundColor:'lightgreen', borderBlockColor :'white'}} type="submit">Enviar</button>
        </div>

        {errorMessage && <p >{errorMessage}</p>}
        
    </form>
  )
}


