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
      <h1>Hello, world!</h1>
      <p>Welcome to your new single-page application, built with:</p>
      <ul>
        <li>
          <a href="https://get.asp.net/">ASP.NET Core</a> and{' '}
          <a href="https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx">C#</a> for cross-platform
          server-side code
        </li>
        <li>
          <a href="https://facebook.github.io/react/">React</a> for client-side code
        </li>
        <li>
          <a href="http://getbootstrap.com/">Bootstrap</a> for layout and styling
        </li>
      </ul>
      <p>To help you get started, we have also set up:</p>
      <ul>
        <li>
          <strong>Client-side navigation</strong>. For example, click <em>Counter</em> then{' '}
          <em>Back</em> to return here.
        </li>
        <li>
          <strong>Development server integration</strong>. In development mode, the development
          server from <code>create-react-app</code> runs in the background automatically, so your
          client-side resources are dynamically built on demand and the page refreshes when you
          modify any file.
        </li>
        <li>
          <strong>Efficient production builds</strong>. In production mode, development-time
          features are disabled, and your <code>dotnet publish</code> configuration produces
          minified, efficiently bundled JavaScript files.
        </li>
      </ul>
      <p>
        The <code>ClientApp</code> subdirectory is a standard React application based on the{' '}
        <code>create-react-app</code> template. If you open a command prompt in that directory, you
        can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.
      </p>
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
