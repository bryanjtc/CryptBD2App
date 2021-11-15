import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Head from 'next/head';

export default function Home() {
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
    console.log(tDesencriptadoFinal);
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
      <Head>
        <html lang="en" />
        <title>Create Next App</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>CryptBD2App</title>
        <meta name="description" content="Testing encryption using dll" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="mask-icon" href="/favicon.svg" color="#FFFFFF" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <h2>Tarea</h2>
      <Form onSubmit={(e) => handleSubmitTlibre(e)}>
        <Form.Group className="mb-3" controlId="tLibre">
          <Form.Label>Texto libre:</Form.Label>
          <Form.Control name="tLibre" value={tLibre} onChange={(e) => tlibreChange(e)} />
        </Form.Group>
        <Button className="mb-5" as="input" type="submit" value="Encriptar" />
      </Form>
      <Form>
        <Form.Group className="mb-3" controlId="tEncriptado">
          <Form.Label>Texto encriptado:</Form.Label>
          <Form.Control name="tLibre" value={tEncriptado} readOnly placeholder={tEncriptado} />
        </Form.Group>
        <Button className="mb-5" type="button" onClick={(e) => handleSubmitTencriptado(e)}>
          Desencriptar
        </Button>
        <Form.Group className="mb-3" controlId="tDesencriptado">
          <Form.Label>Texto desencriptado:</Form.Label>
          <Form.Control
            name="tDesencriptado"
            value={tDesencriptadoFinal}
            readOnly
            placeholder={tDesencriptadoFinal}
          />
        </Form.Group>
      </Form>
    </div>
  );
}
