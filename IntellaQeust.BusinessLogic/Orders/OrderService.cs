using System.Collections.Generic;
using System;
using IntellaQuest.Repository.Repositories;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using System.Linq;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;
using IntellaQeust.BusinessLogic.Requests;
using IntellaQeust.BusinessLogic.Responses;

namespace IntellaQeust.BusinessLogic.Orders
{
    public interface IOrderService
    {
        ResponseModel<OrderViewModel> GetAll(RequestModel request);
        OrderViewModel Get(Guid Id);
        Guid Create(OrderViewModel model);
        void Update(OrderViewModel model);
        void Delete(Guid Id);
        bool CheckCustomerExists(Customer customer);
        bool CheckProductExists(Product product);
    }
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ICustomerRepository _customerRepository;
        private readonly IProductRepository _productRepository;
        private readonly IUnitOfWork _unitOfWork;

        public OrderService(IOrderRepository orderRepository, 
                            ICustomerRepository customerRepository, 
                            IProductRepository productRepository, 
                            IUnitOfWork unitOfWork)
        {
            _orderRepository = orderRepository;
            _customerRepository = customerRepository;
            _productRepository = productRepository;
            _unitOfWork = unitOfWork;
        }

        public bool CheckCustomerExists(Customer customer)
        {
            return _orderRepository.CheckExist(x => x.Customer == customer);
        }

        public bool CheckProductExists(Product product)
        {
            return _orderRepository.CheckExist(x=> x.Product == product);
        }

        public Guid Create(OrderViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var customer = _customerRepository.FindBy(model.Customer.Id);
                if(customer == null)
                {
                    throw new BllException(ShopExceptionMassages.CustomerExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var product = _productRepository.FindBy(model.Product.Id);
                if(product == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var order = new Order
                {
                    Customer=customer,
                    Product =product,
                    Quantity=model.Quantity,
                };
                _orderRepository.Add(order);
                _unitOfWork.Commit();
                return order.Id;
            }
        }

        public void Delete(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                _orderRepository.Delete(Id);
                _unitOfWork.Commit();
            }
        }

        public OrderViewModel Get(Guid Id)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var orderEntity=_orderRepository.FindBy(Id);
                if (orderEntity == null)
                {
                    throw new BllException(ShopExceptionMassages.OrderExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                _unitOfWork.Commit();
                return orderEntity.MapToViewModel();
            }
        }

        public ResponseModel<OrderViewModel> GetAll(RequestModel request)
        {
            return FilterAndPage(request);
        }
        private ResponseModel<OrderViewModel> FilterAndPage(RequestModel request)
        {
            using (_unitOfWork.BeginTransaction())
            {
                ResponseModel<OrderViewModel> response = new ResponseModel<OrderViewModel>();
                IQueryable<Order> ordersListForFiltering = _orderRepository.All();

                if (!string.IsNullOrEmpty(request.SearchString))
                {
                    ordersListForFiltering = ordersListForFiltering
                                        .Where(x => x.Customer.Name.Contains(request.SearchString) || 
                                            x.Product.Name.Contains(request.SearchString));
                }


                switch (request.SortName)
                {
                    case "ProductName":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.Product.Name);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.Product.Name);
                        }
                        break;
                    case "CustomerName":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.Customer.Name);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.Customer.Name);
                        }
                        break;
                    case "Quantity":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.Quantity);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.Quantity);
                        }
                        break;
                    default:
                        break;
                }
                if (request.Size == 0 && request.PageNeeded == 0)
                {
                    request.PageNeeded = 1;
                    request.Size = ordersListForFiltering.Count();
                }

                response.Size = request.Size;
                response.CurrentPage = request.PageNeeded;
                response.Items = ordersListForFiltering
                                    .Skip((response.CurrentPage - 1) * response.Size)
                                    .Take(response.Size).Select(x => x.MapToViewModel()).ToList();
                response.TotalItems = ordersListForFiltering.Count();

                _unitOfWork.Commit();
                return response;
            }
        }
        public void Update(OrderViewModel model)
        {
            using(_unitOfWork.BeginTransaction())
            {
                var entityOrder = _orderRepository.FindBy(model.Id);
                if (entityOrder == null)
                {
                    throw new BllException(ShopExceptionMassages.OrderExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var customer = _customerRepository.FindBy(model.Customer.Id);
                if(customer == null)
                {
                    throw new BllException(ShopExceptionMassages.CustomerExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var product= _productRepository.FindBy(model.Product.Id);
                if(product == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                
                entityOrder.Product = product;
                entityOrder.Customer = customer;
                entityOrder.Quantity= model.Quantity;
                
                _orderRepository.Update(entityOrder);
                _unitOfWork.Commit();
            }
        }
    }
}
