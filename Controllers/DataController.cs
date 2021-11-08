using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Cryptography;
using ClassLibraryCryptoBD2;
using System.Linq;
using System.IO;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CryptBD2App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        readonly Aes myAes = Aes.Create();
        readonly Data data = new();

        public class TextoPredeterminado
        {
            public string TextoIngresado = "hi";

        }

        // GET: <DataController>
        [HttpGet]
        public string[] Get()
        {
            string values;
            if (data.TextoEncriptado == null || data.TextoDesencriptado == null)
            {
                TextoPredeterminado texto = new();
                Post(texto);
                values = Convert.ToBase64String(data.TextoEncriptado).ToString() + "," + data.TextoDesencriptado;
            }
            else
                values = Convert.ToBase64String(data.TextoEncriptado).ToString() + "," + data.TextoDesencriptado;
            return values.Split(",");
        }

        [HttpPost]
        public void Post([FromBody] TextoPredeterminado text)
        {
            string value = text.TextoIngresado ?? "hi";
            Console.WriteLine(value);
            data.TextoIngresado = value;
            byte[] encrypted = Crypt.EncryptStringToBytes_Aes(value, myAes.Key, myAes.IV);
            data.TextoEncriptado = encrypted;
            data.TextoDesencriptado = Crypt.DecryptStringFromBytes_Aes(encrypted, myAes.Key, myAes.IV);
        }

        // PUT <DataController>/
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE <DataController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
