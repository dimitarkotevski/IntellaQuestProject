﻿using IntellaQeust.BusinessLogic.ViewModels;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Mappers
{
    public static class OrderMappers
    {
        public static OrderViewModel MapToViewModel(this Order model)
        {
            var sumProducts = model.ShoppingCart.ShoppingCartDetails.Select(x => x.Product.Price).Sum();
            return new OrderViewModel
            {
                Id=model.Id,
                ShoppingCart = new LookupViewModel
                {
                    Id = model.ShoppingCart.Id,
                    Name = model.ShoppingCart.Name,
                },
                OrderStatus = model.OrderStatus,
                TotalAmount = sumProducts == model.TotalAmount ? model.TotalAmount : sumProducts,
                //DateCreated = model.DateCreated
            };
        }
        public static OrderGridViewModel MapToGridViewModel(this Order model)
        {
            var sumProducts = model.ShoppingCart.ShoppingCartDetails.Select(x => x.Product.Price).Sum();
            return new OrderGridViewModel
            {
                Id = model.Id,
                NumberOfProducts = model.ShoppingCart.ShoppingCartDetails.Select(x=>x.Product).Count(),
                OrderStatus = model.OrderStatus,
                TotalAmount = sumProducts == model.TotalAmount ? model.TotalAmount : sumProducts,
                DateCreated = model.DateCreated
            };
        }
    }
}
