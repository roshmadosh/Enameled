using Enameled.API.Entities;
using System;

namespace Enameled.API.Models
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }

        public DateTime Expires { get; set; }

        public AuthenticateResponse(User user, string token, DateTime expires)
        {
            Id = user.Id;
            Username = user.Username;
            Token = token;
            Expires = expires;
        }
    }
}
