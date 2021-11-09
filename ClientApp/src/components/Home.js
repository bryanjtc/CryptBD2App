import React, { useState } from 'react';
import axios from 'axios';

export const Home = () => {
  const [tLibre, setTLibre] = useState('');
  const [tEncriptado, setTEncriptado] = useState('');
  const [tDesencriptado, setTDesencriptado] = useState('');
  const [tDesencriptadoFinal, setTDesencriptadoFinal] = useState('');

  const tlibreChange = (event) => {
    setTLibre(event.target.value);
  };

  const handleSubmitTlibre = (event) => {
    event.preventDefault();
    axiosPostCall(tLibre);
  };

  const handleSubmitTencriptado = (event) => {
    event.preventDefault();
      setTDesencriptadoFinal(tDesencriptado);
      console.log(tDesencriptadoFinal)
  };

  const axiosPostCall = async (postText) => {
    const bodyText = {
      TextoIngresado: postText,
    };
    console.log(bodyText);
    try {
      await axios.post('data', bodyText);
      await axios.get('data').then((res) => {
        console.log(res);
        setTEncriptado(res.data[0]);
        setTDesencriptado(res.data[1]);
      });
    } catch (error) {
      console.log(`error: `, error);
    }
  };

  return (
    <div>
      <h2>Tarea</h2>
      <form onSubmit={(e) => handleSubmitTlibre(e)}>
        <label htmlFor="tLibre">Texto libre:</label>
        <br></br>
        <input
          type="text"
          id="tLibre"
          name="tLibre"
          value={tLibre}
          onChange={(e) => tlibreChange(e)}
        />
        <br></br>
        <br></br>
        <input type="submit" value="Encriptar" />
        <br></br>
        <br></br>
      </form>
      <label htmlFor="tEncriptado">Texto encriptado: </label>
      <br></br>
      <p>{tEncriptado}</p>
      <button type="button" onClick={(e) => handleSubmitTencriptado(e)}>
        Desencriptar
      </button>
      <br></br>
      <br></br>
      <label htmlFor="tDesencriptado">Texto desencriptado: </label>
      <p id="tDesencriptado">{tDesencriptadoFinal}</p>
    </div>
  );
};
