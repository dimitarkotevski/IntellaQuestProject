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
using IntellaQeust.BusinessLogic.ViewModels;

namespace IntellaQuest.BusinessLogic.Services
{
    public interface IOrderService
    {
        ResponseModel<OrderViewModel> GetAll(RequestModel request);
        OrderViewModel Get(Guid Id);
        Guid Create(OrderViewModel model);
        void Update(OrderViewModel model);
        void Delete(Guid Id);
        bool CheckCustomerExists(Customer customer);
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


        public Guid Create(OrderViewModel model)
        {
            using (_unitOfWork.BeginTransaction())
            {
                var customer = _customerRepository.FindBy(model.Customer.Id);
                if(customer == null)
                {
                    throw new BllException(ShopExceptionMassages.CustomerExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var shoppingCart = _productRepository.FindBy(model.ShoppingCart.Id);
                if(shoppingCart == null)
                {
                    throw new BllException(ShopExceptionMassages.ProductsExceptionMassages.NOT_FOUND_EXCEPTION);
                }
                var order = new Order
                {
                    Customer=customer,
                    ShoppingCart =customer.ShoppingCart,
                    OrderStatus =model.OrderStatus,
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
                                        .Where(x => x.Customer.FirstName.Contains(request.SearchString));
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
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.ShoppingCart.TotalCost);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.ShoppingCart.TotalCost);
                        }
                        break;
                    case "CustomerName":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.Customer.FirstName);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.Customer.FirstName);
                        }
                        break;
                    case "Quantity":
                        if (string.IsNullOrEmpty(request.isAscending))
                        {
                            break;
                        }
                        else if (request.isAscending.Equals("asc"))
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderBy(x => x.OrderStatus);
                        }
                        else
                        {
                            ordersListForFiltering = ordersListForFiltering.OrderByDescending(x => x.OrderStatus);
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
                
                entityOrder.ShoppingCart = customer.ShoppingCart;
                entityOrder.Customer = customer;
                entityOrder.OrderStatus = model.OrderStatus;
                
                _orderRepository.Update(entityOrder);
                _unitOfWork.Commit();
            }
        }
    }
}
