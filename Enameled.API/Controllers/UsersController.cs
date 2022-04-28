using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Enameled.API.Helpers;
using Enameled.API.Models;
using Enameled.API.Services;
using System;

namespace Enameled.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateRequest model)
        {
            var response = _userService.Authenticate(model);

            if(response == null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            /* //NOT STORING JWT IN COOKIE, SEE https://blog.angular-university.io/angular-jwt-authentication/
            CookieOptions cookieOptions = new CookieOptions();
            cookieOptions.Expires = new DateTimeOffset(DateTime.Now.AddMinutes(5));
            HttpContext.Response.Cookies.Append("token", response.Token, cookieOptions);
            */

            return Ok(response);
        }

        // Custom attribute from Helper
        [Authorize]
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }


    }

}
