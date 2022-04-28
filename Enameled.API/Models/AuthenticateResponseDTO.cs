using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Enameled.API.Models
{
    // NOT USED, JWT SENT AS PART OF RESPONSE BODY
    public class AuthenticateResponseDTO
    {
        public int Id { get; set; }
        public string Username { get; set; }


        public AuthenticateResponseDTO(int id, string username)
        {
            Id = id;
            Username = username;
        }
    }
}
