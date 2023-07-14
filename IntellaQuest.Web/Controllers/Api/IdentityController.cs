using IntellaQuest.BusinessLogic.Services;
using IntellaQuest.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using IntellaQuest.Web.Controllers.Api;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace IntellaQuest.Web.Controllers
{
    public class IdentityController : BaseController
    {
        private readonly IUserService _userService;
        public IdentityController(IUserService userService)
        {
            _userService = userService;
        }
        #region USER AUTHENTIFICATION
        
        [HttpPost]
        public ActionResult Registration(UserRegistrationViewModel model)
        {
            if (ModelState.IsValid)
            {
                _userService.Registration(model);
                return Json( true );
            }
            return Json(new { success = false });
        }
        [HttpPost]
        public ActionResult Login(UserLoginViewModel model)
        {
            if(!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            var UserToken = _userService.Login(model);
            return Json(UserToken);
        }
        
        #endregion

        #region USER ACTION

        [HttpPost]
        public ActionResult ChangePassword(ChangePasswordUserViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return Json(ModelState.Values);
            }
            _userService.UpdatePassword(model);
            return Json(new { success = true });
        }
        [HttpPost]
        //[MyJwtTokenCustomAuthorize]
        public ActionResult UserDetails(Guid id)
        {
            return Json(_userService.Get(id));
        }
        
        #endregion
    }
    public class MyJwtTokenCustomAuthorize : AuthorizeAttribute
    {
        User context = new User(); // my entity  
        private readonly string[] allowedroles;
        public MyJwtTokenCustomAuthorize(params string[] roles)
        {
            this.allowedroles = roles;
        }
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            bool authorize = true;
            var tokenValue = httpContext.Request.Headers["Authorization"].Substring(7);
            var tokenHandler = new JwtSecurityTokenHandler();
            var jwtSecurityToken = tokenHandler.ReadJwtToken(tokenValue);
            var claims = jwtSecurityToken.Claims;

            var tokenClaims = new Dictionary<string, string>();

            foreach (var claim in claims)
            {
                tokenClaims.Add(claim.Type, claim.Value);
            }


            return authorize;
        }
        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new HttpUnauthorizedResult();
        }
    }
}