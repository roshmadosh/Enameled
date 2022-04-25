﻿using System.Text.Json.Serialization;

namespace Enameled.API.Entities
{
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set; }

        [JsonIgnore]
        public string Password { get; set; }
    }
}
