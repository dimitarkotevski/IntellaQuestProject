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
        [HttpPost]
        //[MyJwtTokenCustomAuthorize]
        public ActionResult UserAddFavouriteProduct(Guid userId ,Guid productId)
        {
            _userService.AddFavouriteProduct(userId,productId);
            return Json(true);
        }
        [HttpPost]
        public ActionResult GetUserFavouriteProducts(Guid userId)
        {
            return Json(_userService.GetUserFavouriteProducts(userId));
        }

        [HttpPost]
        //[MyJwtTokenCustomAuthorize]
        public ActionResult UserAddProductToCart(Guid userId, Guid productId,float quality)
        {
            _userService.AddProductToCart(userId, productId,quality);
            return Json(true);
        }
        public ActionResult GetUserCartProducts(Guid userId)
        {
            return Json(_userService.GetUserCartProducts(userId));
        }

        [HttpPost]
        public ActionResult GetUserOrders(Guid userId)
        {
            var result = _userService.GetUserOrders(userId);
            return Json(result);
        }
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