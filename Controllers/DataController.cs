using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Cryptography;
using ClassLibraryCryptoBD2;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CryptBD2App.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        Aes myAes = Aes.Create();
        Data data = new();

        // GET: <DataController>
        [HttpGet]
        public string[] Get()
        {
            string values = data.TextoEncriptado.ToString() + "," + data.TextoDesencriptado;
            return values.Split(",");
        }

        // GET <DataController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST <DataController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
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
