using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Cryptography;
using ClassLibraryCryptoBD2;
using System.Linq;
using System.IO;
using System;
using System.Diagnostics;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CryptBD2App.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DataController : ControllerBase
    {
        readonly Aes myAes = Aes.Create();
        static Data data = new();

        // GET: <DataController>
        [HttpGet]
        public string[] Get()
        {
            Debug.WriteLine(data.TextoEncriptado + "1");
            string values;
            if (data.TextoEncriptado != null & data.TextoDesencriptado != null)
            {
                values = Convert.ToBase64String(data.TextoEncriptado).ToString() + "," + data.TextoDesencriptado;
                return values.Split(",");
            }
            else
                return new string[] { "sin valor", "sin valor" };
        }

        [HttpPost]
        public void Post([FromBody] Data text)
        {
            string value;
            if (text.TextoIngresado == null)
                value = "sin valor";
            else value = text.TextoIngresado;
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
