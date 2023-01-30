using System.Collections.Generic;
using System;
using IntellaQuest.Repository.Repositories;
using IntellaQuest.Data.NHibernate.ConfigurationRepository;
using System.Linq;
using IntellaQeust.BusinessLogic.Exceptions;
using IntellaQeust.BusinessLogic.Exceptions.ExceptionMassages;
using IntellaQuest.Data.NHibernate.Repositories;
using IntellaQuest.Domain;

namespace IntellaQeust.BusinessLogic.Orders
{
    public interface IOrderService
    {
        List<OrderViewModel> GetAll();
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

        public List<OrderViewModel> GetAll()
        {
            using (_unitOfWork.BeginTransaction())
            {
                var result=_orderRepository.All().Select(order=>order.MapToViewModel()).ToList();
                _unitOfWork.Commit();
                return result;
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
