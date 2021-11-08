import React, { useState } from 'react';

const [tLibre, setTLibre] = useState("")
const [tEncriptado, setTEncriptado] = useState("")
const [tDesencriptado, setTDesencriptado] = useState("")
const [tDesencriptadoFinal, setTDesencriptadoFinal] = useState("")

const tlibreChange = event => {
    setTLibre(event.target.value)
}

const handleSubmitTlibre = event => {
    event.preventDefault();
    axiosPostCall(tLibre)
};

const handleSubmitTencriptado = event => {
    event.preventDefault();
    setTDesencriptadoFinal(tDesencriptado)
}

const axiosPostCall = async (postText) => {
    try {
        fetch("Data", {
            method: 'POST',
            headers: { "Content Type": "application.json" },
            body: JSON.stringify(tLibre)
        }).then(
            fetch("Data")
                .then(res => res.json())
                .then(
                    (result) => {
                        setTEncriptado(result.TextoEncriptado)
                        setTDesencriptado(result.TextoDesencriptado)
                    }
                )
        )
    } catch (error) {
        console.log(`error: `, error);
    }
};


export const Home = () => (
    <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
            <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
            <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
            <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
            <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
            <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
            <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
        <h2>Tarea</h2>
        <form action={handleSubmitTlibre}>
            <label htmlFor="tLibre">Texto libre:</label><br></br>
            <input type="text" id="tLibre" name="tLibre" value={tLibre} onChange={tlibreChange} /><br></br><br></br>
            <input type="submit" value="Encriptar" /><br></br><br></br>
        </form>
        <form action={handleSubmitTencriptado}>
            <label htmlFor="tEncriptado">Texto encriptado:</label><br></br>
            <p>{tEncriptado}</p><br></br><br></br>
            <input type="submit" value="Desencriptar" /><br></br><br></br>
            <label htmlFor="tDesencriptado">Texto desencriptado:</label><br></br>
            <p id="tDesencriptado">{tDesencriptadoFinal}</p>
        </form>
    </div>
);
