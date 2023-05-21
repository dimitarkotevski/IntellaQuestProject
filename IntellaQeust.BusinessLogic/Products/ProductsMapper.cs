﻿using IntellaQeust.BusinessLogic.Models;
using IntellaQuest.Domain;
using System.Linq;

namespace IntellaQeust.BusinessLogic.Mappers
{
    public static class ProductsMappers
    {
        public static ProductViewModel MapToViewModel(this Product product)
        {
            return new ProductViewModel
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Category = new LookupViewModel
                {
                    Id= product.Category.Id,
                    Name = product.Category.Name,
                    Status = product.Category.Status,
                },
                Orders = product.Orders.Select(order => new LookupViewModel
                {
                    Id= order.Id,
                    Name=order.Customer.FirstName + " " + order.Customer.LastName,
                }).ToList(),
            };
        }
    }
}
